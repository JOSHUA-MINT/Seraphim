/**
 * Seraphim — crypto.js
 * Core cryptographic wrapper around OpenPGP.js v5
 * 
 * All functions are async. Requires openpgp.min.js to be loaded first
 * via <script src="lib/openpgp.min.js"></script>
 * 
 * Exposes: SeraphimCrypto global object
 */

const SeraphimCrypto = (() => {

  // ── Key Generation ─────────────────────────────────────────────
  /**
   * Generate an ECC keypair (curve25519)
   * @param {string} name     - User display name
   * @param {string} email    - User email
   * @param {string} passphrase - Passphrase to protect private key
   * @returns {Promise<{publicKey: string, privateKey: string}>} Armored PGP keys
   */
  async function generateKeyPair(name, email, passphrase) {
    const { privateKey, publicKey } = await openpgp.generateKey({
      type: 'ecc',
      curve: 'curve25519',
      userIDs: [{ name, email }],
      passphrase,
      format: 'armored'
    });
    return { publicKey, privateKey };
  }

  // ── Encryption ─────────────────────────────────────────────────
  /**
   * Encrypt a plaintext message with one or more public keys
   * @param {string} plaintext           - Message to encrypt
   * @param {string|string[]} armoredPublicKeys - Recipient public key(s), armored
   * @returns {Promise<string>} Armored encrypted PGP message
   */
  async function encryptMessage(plaintext, armoredPublicKeys) {
    const keys = Array.isArray(armoredPublicKeys)
      ? armoredPublicKeys
      : [armoredPublicKeys];

    const publicKeys = await Promise.all(
      keys.map(k => openpgp.readKey({ armoredKey: k }))
    );

    const message = await openpgp.createMessage({ text: plaintext });

    const encrypted = await openpgp.encrypt({
      message,
      encryptionKeys: publicKeys,
      format: 'armored'
    });

    return encrypted;
  }

  // ── Decryption ─────────────────────────────────────────────────
  /**
   * Decrypt an armored PGP message with a private key
   * @param {string} armoredMessage    - The encrypted PGP message
   * @param {string} armoredPrivateKey - Recipient's private key (armored)
   * @param {string} passphrase        - Passphrase for the private key
   * @returns {Promise<string>} Decrypted plaintext
   */
  async function decryptMessage(armoredMessage, armoredPrivateKey, passphrase) {
    const privateKey = await openpgp.decryptKey({
      privateKey: await openpgp.readPrivateKey({ armoredKey: armoredPrivateKey }),
      passphrase
    });

    const message = await openpgp.readMessage({
      armoredMessage
    });

    const { data: decrypted } = await openpgp.decrypt({
      message,
      decryptionKeys: privateKey
    });

    return decrypted;
  }

  // ── Signing ────────────────────────────────────────────────────
  /**
   * Sign a plaintext message with a private key
   * @param {string} plaintext         - Message to sign
   * @param {string} armoredPrivateKey - Signer's private key (armored)
   * @param {string} passphrase        - Passphrase for the private key
   * @returns {Promise<string>} Armored signed message (cleartext signature)
   */
  async function signMessage(plaintext, armoredPrivateKey, passphrase) {
    const privateKey = await openpgp.decryptKey({
      privateKey: await openpgp.readPrivateKey({ armoredKey: armoredPrivateKey }),
      passphrase
    });

    const message = await openpgp.createCleartextMessage({ text: plaintext });

    const signed = await openpgp.sign({
      message,
      signingKeys: privateKey
    });

    return signed;
  }

  // ── Verification ───────────────────────────────────────────────
  /**
   * Verify a signed cleartext message
   * @param {string} armoredSignedMessage - The signed cleartext PGP message
   * @param {string} armoredPublicKey     - Signer's public key (armored)
   * @returns {Promise<{verified: boolean, data: string}>}
   */
  async function verifySignature(armoredSignedMessage, armoredPublicKey) {
    const publicKey = await openpgp.readKey({ armoredKey: armoredPublicKey });

    const signedMessage = await openpgp.readCleartextMessage({
      cleartextMessage: armoredSignedMessage
    });

    const { data, signatures } = await openpgp.verify({
      message: signedMessage,
      verificationKeys: publicKey
    });

    let verified = false;
    try {
      await signatures[0].verified;
      verified = true;
    } catch (e) {
      verified = false;
    }

    return { verified, data };
  }

  // ── Utility ────────────────────────────────────────────────────
  /**
   * Extract fingerprint from an armored public key
   * @param {string} armoredPublicKey 
   * @returns {Promise<string>} Hex fingerprint
   */
  async function getFingerprint(armoredPublicKey) {
    const key = await openpgp.readKey({ armoredKey: armoredPublicKey });
    return key.getFingerprint().toUpperCase();
  }

  /**
   * Generate a random room code
   * @param {number} length - Code length (default 6)
   * @returns {string}
   */
  function generateRoomCode(length = 6) {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // no ambiguous chars
    const arr = new Uint8Array(length);
    crypto.getRandomValues(arr);
    return Array.from(arr, b => chars[b % chars.length]).join('');
  }

  // ── Public API ─────────────────────────────────────────────────
  return {
    generateKeyPair,
    encryptMessage,
    decryptMessage,
    signMessage,
    verifySignature,
    getFingerprint,
    generateRoomCode
  };

})();
