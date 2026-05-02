/**
 * Seraphim — Relay Server
 * 
 * A zero-knowledge message relay. The server NEVER sees plaintext.
 * All messages are E2EE PGP ciphertext relayed between clients.
 * 
 * Features:
 *   - Room-based chat via Socket.IO
 *   - Public key exchange within rooms
 *   - Kill switch: wipe all messages on connected clients
 *   - No message storage — pure relay
 */

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const path = require('path');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

app.use(cors());

// Serve static files from the parent directory (the client HTML files)
app.use(express.static(path.join(__dirname, '..')));

// ── In-memory room state (no persistence) ──────────────────────
const rooms = new Map(); // roomCode -> { users: Map<socketId, {name, publicKey}> }

// ── Socket.IO Events ───────────────────────────────────────────
io.on('connection', (socket) => {
  console.log(`[+] Connected: ${socket.id}`);

  let currentRoom = null;

  // ── Join Room ──────────────────────────────────────────────
  socket.on('join-room', ({ roomCode, name, publicKey }) => {
    if (!roomCode || !name) return;

    // Leave previous room if any
    if (currentRoom) {
      leaveRoom(socket, currentRoom);
    }

    currentRoom = roomCode;
    socket.join(roomCode);

    // Create room if it doesn't exist
    if (!rooms.has(roomCode)) {
      rooms.set(roomCode, { users: new Map() });
    }

    const room = rooms.get(roomCode);
    room.users.set(socket.id, { name, publicKey });

    // Send room state to the joining user
    const userList = [];
    room.users.forEach((user, id) => {
      userList.push({ id, name: user.name, publicKey: user.publicKey });
    });
    socket.emit('room-joined', { roomCode, users: userList });

    // Notify others
    socket.to(roomCode).emit('user-joined', {
      id: socket.id,
      name,
      publicKey
    });

    console.log(`[room] ${name} joined ${roomCode} (${room.users.size} users)`);
  });

  // ── Send Message (relay encrypted PGP message) ────────────
  socket.on('message', ({ roomCode, encryptedMessages }) => {
    if (!roomCode || !encryptedMessages) return;

    const room = rooms.get(roomCode);
    if (!room) return;

    const sender = room.users.get(socket.id);
    if (!sender) return;

    // encryptedMessages is an array of { recipientId, ciphertext }
    // We relay each encrypted message to its intended recipient
    encryptedMessages.forEach(({ recipientId, ciphertext }) => {
      io.to(recipientId).emit('message', {
        senderId: socket.id,
        senderName: sender.name,
        ciphertext,
        timestamp: Date.now()
      });
    });
  });

  // ── Broadcast message (same ciphertext to all, for group key encryption)
  socket.on('broadcast-message', ({ roomCode, ciphertext }) => {
    if (!roomCode || !ciphertext) return;

    const room = rooms.get(roomCode);
    if (!room) return;

    const sender = room.users.get(socket.id);
    if (!sender) return;

    socket.to(roomCode).emit('message', {
      senderId: socket.id,
      senderName: sender.name,
      ciphertext,
      timestamp: Date.now()
    });
  });

  // ── Kill Switch ────────────────────────────────────────────
  socket.on('kill-switch', ({ roomCode }) => {
    if (!roomCode) return;

    const room = rooms.get(roomCode);
    if (!room) return;

    const sender = room.users.get(socket.id);
    const senderName = sender ? sender.name : 'Unknown';

    console.log(`[KILL] ${senderName} triggered kill switch in ${roomCode}`);

    // Send wipe signal to ALL users in the room (including sender)
    io.in(roomCode).emit('kill-switch', {
      triggeredBy: senderName,
      timestamp: Date.now()
    });
  });

  // ── Typing indicator ──────────────────────────────────────
  socket.on('typing', ({ roomCode }) => {
    if (!roomCode) return;
    const room = rooms.get(roomCode);
    if (!room) return;
    const user = room.users.get(socket.id);
    if (!user) return;
    socket.to(roomCode).emit('typing', { name: user.name });
  });

  // ── Disconnect ─────────────────────────────────────────────
  socket.on('disconnect', () => {
    if (currentRoom) {
      leaveRoom(socket, currentRoom);
    }
    console.log(`[-] Disconnected: ${socket.id}`);
  });
});

function leaveRoom(socket, roomCode) {
  const room = rooms.get(roomCode);
  if (!room) return;

  const user = room.users.get(socket.id);
  const userName = user ? user.name : 'Unknown';

  room.users.delete(socket.id);
  socket.leave(roomCode);

  // Notify remaining users
  socket.to(roomCode).emit('user-left', {
    id: socket.id,
    name: userName
  });

  // Clean up empty rooms
  if (room.users.size === 0) {
    rooms.delete(roomCode);
    console.log(`[room] ${roomCode} deleted (empty)`);
  }
}

// ── Start Server ───────────────────────────────────────────────
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log('');
  console.log('  ╔══════════════════════════════════════════╗');
  console.log('  ║     🔐 Seraphim Relay Server Running     ║');
  console.log(`  ║     http://localhost:${PORT}                ║`);
  console.log('  ║     Zero-knowledge · E2EE · No logs      ║');
  console.log('  ╚══════════════════════════════════════════╝');
  console.log('');
});
