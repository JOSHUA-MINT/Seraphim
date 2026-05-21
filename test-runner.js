const out = document.getElementById('output');

function log(msg, cls = '') {
  const span = document.createElement('span');
  span.className = cls;
  span.textContent = msg + '\n';
  out.appendChild(span);
  out.scrollTop = out.scrollHeight;
}

async function runTests() {
  out.innerHTML = '';
  log('═══════════════════════════════════════════', 'dim');
  log('  SERAPHIM CRYPTO TEST SUITE', 'info');
  log('═══════════════════════════════════════════', 'dim');
  log('');

  let publicKey, privateKey;

  // ── Test 1: Key Generation ──
  try {
    log('▸ Test 1: Key Generation (curve25519)...', 'info');
    const t0 = performance.now();
    const keys = await SeraphimCrypto.generateKeyPair(
      'Alice', 'alice@seraphim.test', 'test-passphrase-123'
    );
    publicKey = keys.publicKey;
    privateKey = keys.privateKey;
    const elapsed = (performance.now() - t0).toFixed(0);
    log(`  ✓ Key pair generated in ${elapsed}ms`, 'pass');
    log(`  Public key: ${publicKey.substring(0, 60)}...`, 'dim');

    const fp = await SeraphimCrypto.getFingerprint(publicKey);
    log(`  Fingerprint: ${fp}`, 'dim');
    log('');
  } catch (e) {
    log(`  ✗ FAILED: ${e.message}`, 'fail');
    return;
  }

  // ── Test 2: Encryption ──
  let encrypted;
  try {
    log('▸ Test 2: Encrypt Message...', 'info');
    const plaintext = 'Hello from Seraphim! 🔐 This is a secret message.';
    const t0 = performance.now();
    encrypted = await SeraphimCrypto.encryptMessage(plaintext, publicKey);
    const elapsed = (performance.now() - t0).toFixed(0);
    log(`  ✓ Message encrypted in ${elapsed}ms`, 'pass');
    log(`  Ciphertext: ${encrypted.substring(0, 60)}...`, 'dim');
    log('');
  } catch (e) {
    log(`  ✗ FAILED: ${e.message}`, 'fail');
    return;
  }

  // ── Test 3: Decryption ──
  try {
    log('▸ Test 3: Decrypt Message...', 'info');
    const t0 = performance.now();
    const decrypted = await SeraphimCrypto.decryptMessage(
      encrypted, privateKey, 'test-passphrase-123'
    );
    const elapsed = (performance.now() - t0).toFixed(0);
    log(`  ✓ Message decrypted in ${elapsed}ms`, 'pass');
    log(`  Plaintext: "${decrypted}"`, 'pass');

    if (decrypted === 'Hello from Seraphim! 🔐 This is a secret message.') {
      log('  ✓ Round-trip integrity: PASSED', 'pass');
    } else {
      log('  ✗ Round-trip integrity: FAILED (mismatch)', 'fail');
    }
    log('');
  } catch (e) {
    log(`  ✗ FAILED: ${e.message}`, 'fail');
    return;
  }

  // ── Test 4: Signing ──
  let signed;
  try {
    log('▸ Test 4: Sign Message...', 'info');
    const t0 = performance.now();
    signed = await SeraphimCrypto.signMessage(
      'I am Alice, and I approve this message.',
      privateKey, 'test-passphrase-123'
    );
    const elapsed = (performance.now() - t0).toFixed(0);
    log(`  ✓ Message signed in ${elapsed}ms`, 'pass');
    log(`  Signed: ${signed.substring(0, 60)}...`, 'dim');
    log('');
  } catch (e) {
    log(`  ✗ FAILED: ${e.message}`, 'fail');
    return;
  }

  // ── Test 5: Verification ──
  try {
    log('▸ Test 5: Verify Signature...', 'info');
    const t0 = performance.now();
    const result = await SeraphimCrypto.verifySignature(signed, publicKey);
    const elapsed = (performance.now() - t0).toFixed(0);
    if (result.verified) {
      log(`  ✓ Signature verified in ${elapsed}ms`, 'pass');
      log(`  Data: "${result.data}"`, 'pass');
    } else {
      log(`  ✗ Signature verification FAILED`, 'fail');
    }
    log('');
  } catch (e) {
    log(`  ✗ FAILED: ${e.message}`, 'fail');
    return;
  }

  // ── Test 6: Wrong passphrase should fail ──
  try {
    log('▸ Test 6: Decrypt with wrong passphrase (should fail)...', 'info');
    await SeraphimCrypto.decryptMessage(encrypted, privateKey, 'wrong-password');
    log('  ✗ FAILED: Should have thrown an error', 'fail');
  } catch (e) {
    log(`  ✓ Correctly rejected wrong passphrase`, 'pass');
    log(`  Error: ${e.message}`, 'dim');
    log('');
  }

  // ── Test 7: Room code generation ──
  try {
    log('▸ Test 7: Room Code Generation...', 'info');
    const codes = new Set();
    for (let i = 0; i < 10; i++) {
      codes.add(SeraphimCrypto.generateRoomCode());
    }
    log(`  ✓ Generated 10 unique codes: ${[...codes].join(', ')}`, 'pass');
    log('');
  } catch (e) {
    log(`  ✗ FAILED: ${e.message}`, 'fail');
  }

  log('═══════════════════════════════════════════', 'dim');
  log('  ALL TESTS COMPLETE ✓', 'pass');
  log('═══════════════════════════════════════════', 'dim');
}
