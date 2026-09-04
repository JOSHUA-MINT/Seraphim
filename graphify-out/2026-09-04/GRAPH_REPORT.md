# Graph Report - Seraphim  (2026-09-04)

## Corpus Check
- 20 files · ~247,526 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1878 nodes · 4599 edges · 96 communities (65 shown, 31 thin omitted)
- Extraction: 94% EXTRACTED · 6% INFERRED · 0% AMBIGUOUS · INFERRED: 267 edges (avg confidence: 0.81)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- OpenPGP Packet Parsing (lib)
- BigInteger Arithmetic (assets)
- OpenPGP Packet Parsing (assets)
- OpenPGP Message Encoding (lib)
- AES-GCM Cipher (assets)
- AES-GCM Cipher (lib)
- Web Streams Plumbing (lib)
- Key Packet Assembly (lib)
- Secret Key Packets (lib)
- Armor & Radix-64 Codec (lib)
- Curve25519 / ECC Math (assets)
- Ophanim PRD Report (assets copy)
- Ophanim PRD Report (lib copy)
- Async Stream Readers (assets)
- Curve25519 / ECC Math (lib)
- Socket.IO Client (assets)
- Socket.IO Client (lib)
- Key Object API (assets)
- Async Stream Readers (lib)
- Key Object API (lib)
- Armor & Radix-64 Codec (assets)
- Symmetric Encryption Packets (assets)
- Web Streams Plumbing (assets)
- Stream Controllers (lib)
- Compression Packets (lib)
- Key Packet Assembly (assets)
- Secret Key Packets (assets)
- OpenPGP Message Encoding (assets)
- OpenPGP Internals (lib)
- Stream Iteration (assets)
- Signature Verification (assets)
- Packet Readers (assets)
- Literal & Marker Packets (assets)
- Server Dependencies
- Signature Verification (lib)
- BigInteger Arithmetic (lib)
- Stream Controllers (assets)
- Hash Functions (assets)
- OpenPGP Internals (assets)
- OpenPGP Internals II (lib)
- Product Concepts & Roadmap
- Cleartext Signatures (assets)
- Hash Functions (lib)
- Session Key Handling (assets)
- OpenPGP Internals III (assets)
- S2K Key Derivation (assets)
- Random & Entropy (assets)
- Random & Entropy (lib)
- Relay Server
- OpenPGP Internals IV (assets)
- Elliptic Curve Params (lib)
- Curve Constants (lib)
- OpenPGP Internals V (lib)
- Landing Page Animations
- OpenPGP Internals VI (lib)
- OpenPGP Internals VII (lib)
- Packet Tag Dispatch (assets)
- Data Destruction & Wipe
- Key Management UI
- graphify Integration Rules
- OpenPGP Internals VIII (assets)
- Message Unwrapping (assets)
- Padding & Encoding (assets)
- Message Encryption Flow
- Cipher Mode Helpers (lib)
- Key Expiry Checks (lib)
- OpenPGP Internals X (assets)
- Landing Page
- OpenPGP Internals XI (lib)
- Type Coercion Helpers (assets)
- Cipher Mode Helpers (assets)
- Block Cipher Wrappers (assets)
- Fingerprint Verification
- Chat Room Session
- Navigation Sidebar
- OpenPGP Internals XII (assets)
- OpenPGP Internals XIII (assets)
- OpenPGP Internals XIV (assets)
- Contact Management
- Crypto Test Runner
- Matrix Pill Artwork (lib)
- OpenPGP Internals XV (lib)
- OpenPGP Internals XVII (lib)
- OpenPGP Internals XVIII (lib)
- Packet Readers (lib)
- Gemini Agent Config
- OphanimCrypto Module
- graphify Rules Doc
- graphify Workflow Doc
- Chat Peer List
- Matrix Pills Artwork (lib)
- OpenPGP.js Library Root
- Matrix Pills Artwork (assets)
- Ophanim Logo

## God Nodes (most connected - your core abstractions)
1. `_()` - 349 edges
2. `_()` - 348 edges
3. `write()` - 44 edges
4. `write()` - 44 edges
5. `G` - 41 edges
6. `G` - 40 edges
7. `fp()` - 39 edges
8. `fp()` - 38 edges
9. `read()` - 32 edges
10. `read()` - 32 edges

## Surprising Connections (you probably didn't know these)
- `handleDecrypt` --semantically_similar_to--> `addMessage`  [INFERRED] [semantically similar]
  decrypt.html → chat.html
- `GEMINI.md graphify Project Rules` --semantically_similar_to--> `graphify Knowledge Graph Consultation Rule`  [INFERRED] [semantically similar]
  GEMINI.md → .agents/rules/graphify.md
- `Ophanim PRD (public/assets copy)` --semantically_similar_to--> `Ophanim E2EE Messaging Platform`  [INFERRED] [semantically similar]
  public/assets/ophanim_prd_report.md → lib/ophanim_prd_report.md
- `Ophanim CSS Token Theme (ophanim.css / fonts.css)` --semantically_similar_to--> `Ophanim Dark Cyberpunk Design System`  [INFERRED] [semantically similar]
  test.html → lib/ophanim_prd_report.md
- `Blue Pill Branch (the story ends, believe what you want)` --conceptually_related_to--> `Red Pill / Blue Pill Comparison`  [INFERRED]
  public/assets/matrix.png → index.html

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Graph-First Codebase Navigation Policy** — _agents_rules_graphify_graphify_rule, gemini_graphify_project_rules, _agents_workflows_graphify_graphify_workflow, _agents_rules_graphify_graphify_cli, _agents_rules_graphify_graph_json [INFERRED 0.85]
- **Ophanim Zero-Knowledge E2EE Stack** — lib_ophanim_prd_report_zero_knowledge_architecture, lib_ophanim_prd_report_ophanimcrypto, lib_ophanim_prd_report_openpgp_js_v5, lib_ophanim_prd_report_curve25519_ecc, lib_ophanim_prd_report_relay_server, lib_ophanim_prd_report_socketio_event_protocol [EXTRACTED 1.00]
- **Ophanim Security Posture Controls** — lib_ophanim_prd_report_threat_model, lib_ophanim_prd_report_kill_switch, lib_ophanim_prd_report_curve25519_ecc, test_content_security_policy [INFERRED 0.85]
- **Everything that reads the local key store** — keys_generatekey, decrypt_selectkey, chat_loadkeys, encrypt_showcontactpicker, keys_local_key_store [EXTRACTED 1.00]
- **Secure chat session flow** — chat_joinroom, chat_loadkeys, chat_showfingerprintoverlay, chat_confirmfingerprint, chat_sendmessage [EXTRACTED 1.00]
- **Data destruction mechanisms** — chat_executekillwipe, decrypt_clearoutput, decrypt_clearloadedkey, keys_deletekey [INFERRED 0.85]
- **Landing page pill narrative** — public_assets_matrix_morpheus_pill_illustration, public_assets_matrix_red_pill_branch, public_assets_matrix_blue_pill_branch, index_red_blue_pill_choice [INFERRED 0.95]

## Communities (96 total, 31 thin omitted)

### Community 0 - "OpenPGP Packet Parsing (lib)"
Cohesion: 0.02
Nodes (48): _(), Ae, Br(), Bs(), ce(), ci(), cr(), Cs() (+40 more)

### Community 1 - "BigInteger Arithmetic (assets)"
Cohesion: 0.05
Nodes (7): fp(), G, Hi(), Ni(), oy(), ty(), wi()

### Community 2 - "OpenPGP Packet Parsing (assets)"
Cohesion: 0.03
Nodes (33): _(), Ae, Be(), ci(), Cy(), eb(), Ei(), ga() (+25 more)

### Community 3 - "OpenPGP Message Encoding (lib)"
Cohesion: 0.05
Nodes (42): af(), cf(), df(), ef(), el(), ep(), ff(), gd() (+34 more)

### Community 4 - "AES-GCM Cipher (assets)"
Cohesion: 0.06
Nodes (11): Di, et, ge(), me(), ri, ti, Ue(), ve() (+3 more)

### Community 5 - "AES-GCM Cipher (lib)"
Cohesion: 0.07
Nodes (12): Di, et, ge(), Iu, me(), ri, ti, Ue() (+4 more)

### Community 6 - "Web Streams Plumbing (lib)"
Cohesion: 0.10
Nodes (22): ad(), al(), bf, bn(), cd(), Dd(), gf(), Hd() (+14 more)

### Community 7 - "Key Packet Assembly (lib)"
Cohesion: 0.07
Nodes (11): ah(), du(), En, fh, ju, oe(), pe(), rh() (+3 more)

### Community 8 - "Secret Key Packets (lib)"
Cohesion: 0.06
Nodes (5): fu, hu, Ku(), mu(), Uu

### Community 9 - "Armor & Radix-64 Codec (lib)"
Cohesion: 0.11
Nodes (33): A(), B(), Be(), c(), d(), Eu, f(), fe() (+25 more)

### Community 10 - "Curve25519 / ECC Math (assets)"
Cohesion: 0.08
Nodes (29): Ao(), Bc(), Bo(), Do, Eo(), go(), jc(), ko() (+21 more)

### Community 11 - "Ophanim PRD Report (assets copy)"
Cohesion: 0.05
Nodes (37): 10. API Reference — OphanimCrypto, 11. Server Events (Socket.IO), 12. Performance Metrics (Estimated), 13. Future Roadmap, 1. Executive Summary, 2. Product Vision & Goals, 3. System Architecture, 4.1 Feature Matrix (+29 more)

### Community 12 - "Ophanim PRD Report (lib copy)"
Cohesion: 0.05
Nodes (37): 10. API Reference — OphanimCrypto, 11. Server Events (Socket.IO), 12. Performance Metrics (Estimated), 13. Future Roadmap, 1. Executive Summary, 2. Product Vision & Goals, 3. System Architecture, 4.1 Feature Matrix (+29 more)

### Community 13 - "Async Stream Readers (assets)"
Cohesion: 0.14
Nodes (22): bd(), Bl(), cl(), dl(), ed(), fl(), Gh(), gl() (+14 more)

### Community 14 - "Curve25519 / ECC Math (lib)"
Cohesion: 0.08
Nodes (26): Ao(), Bc(), Bo(), Do, Eo(), go(), jc(), ko() (+18 more)

### Community 15 - "Socket.IO Client (assets)"
Cohesion: 0.12
Nodes (26): bt(), a(), at(), c(), Ct(), d(), e(), Et() (+18 more)

### Community 16 - "Socket.IO Client (lib)"
Cohesion: 0.12
Nodes (25): a(), c(), Ct(), d(), e(), Et(), f(), G() (+17 more)

### Community 17 - "Key Object API (assets)"
Cohesion: 0.16
Nodes (5): dh, eh(), Gu(), kh(), vu()

### Community 18 - "Async Stream Readers (lib)"
Cohesion: 0.11
Nodes (20): bd(), Bl(), cl(), dl(), ed(), fl(), gl(), hf() (+12 more)

### Community 19 - "Key Object API (lib)"
Cohesion: 0.15
Nodes (4): dh, eh(), Gu(), kh()

### Community 20 - "Armor & Radix-64 Codec (assets)"
Cohesion: 0.23
Nodes (26): A(), B(), c(), d(), e, f(), fe(), hr() (+18 more)

### Community 21 - "Symmetric Encryption Packets (assets)"
Cohesion: 0.13
Nodes (4): H(), Iu, vh, zi()

### Community 22 - "Web Streams Plumbing (assets)"
Cohesion: 0.14
Nodes (13): ad(), cd(), Dd(), jl(), nd(), od(), ql(), rd() (+5 more)

### Community 23 - "Stream Controllers (lib)"
Cohesion: 0.13
Nodes (17): ap(), cp, dp(), e, hp(), ip, kp(), lp() (+9 more)

### Community 24 - "Compression Packets (lib)"
Cohesion: 0.09
Nodes (9): bu, Cu, Ki(), le(), oa(), read(), s, yn() (+1 more)

### Community 25 - "Key Packet Assembly (assets)"
Cohesion: 0.11
Nodes (7): ah(), fh, pe(), rh(), sn, th(), write()

### Community 26 - "Secret Key Packets (assets)"
Cohesion: 0.10
Nodes (3): Ku(), mu(), Uu

### Community 27 - "OpenPGP Message Encoding (assets)"
Cohesion: 0.17
Nodes (16): af(), cf(), ef(), ep(), ff(), gd(), jd(), of() (+8 more)

### Community 29 - "Stream Iteration (assets)"
Cohesion: 0.16
Nodes (13): bf, gf(), kd(), md(), next(), qd(), return(), rl() (+5 more)

### Community 30 - "Signature Verification (assets)"
Cohesion: 0.13
Nodes (6): bh(), bn(), Cu, du(), pu, yn()

### Community 31 - "Packet Readers (assets)"
Cohesion: 0.10
Nodes (5): bu, fu, le(), lu(), read()

### Community 32 - "Literal & Marker Packets (assets)"
Cohesion: 0.18
Nodes (10): dp(), el(), kl(), ml, Pd(), sl(), vl(), wl() (+2 more)

### Community 33 - "Server Dependencies"
Cohesion: 0.10
Nodes (20): cors, dotenv, express, i, dependencies, cors, dotenv, express (+12 more)

### Community 34 - "Signature Verification (lib)"
Cohesion: 0.14
Nodes (4): bh(), lh, oh, Yu()

### Community 35 - "BigInteger Arithmetic (lib)"
Cohesion: 0.14
Nodes (4): eb(), fp(), oy(), wi()

### Community 36 - "Stream Controllers (assets)"
Cohesion: 0.18
Nodes (13): ap(), cp, hp(), ip, kp(), lp(), mp(), np() (+5 more)

### Community 37 - "Hash Functions (assets)"
Cohesion: 0.19
Nodes (16): cn(), En, ie(), Kn(), Li(), ln(), mn, ne() (+8 more)

### Community 39 - "OpenPGP Internals II (lib)"
Cohesion: 0.22
Nodes (3): H(), pu, vh

### Community 40 - "Product Concepts & Roadmap"
Cohesion: 0.15
Nodes (18): Crypto Test Suite (test.html), ECC Curve25519 Key Generation, Ophanim Dark Cyberpunk Design System, Ophanim Future Roadmap, Google Stitch Layout Prompts, Kill Switch, OpenPGP.js v5, Ophanim E2EE Messaging Platform (+10 more)

### Community 41 - "Cleartext Signatures (assets)"
Cohesion: 0.18
Nodes (3): lh, oh, Yu()

### Community 42 - "Hash Functions (lib)"
Cohesion: 0.25
Nodes (13): cn(), ie(), Kn(), Li(), ln(), on(), pn(), ra() (+5 more)

### Community 43 - "Session Key Handling (assets)"
Cohesion: 0.36
Nodes (8): al(), lf(), nf(), nh(), nl(), qf(), vf(), Wh()

### Community 45 - "S2K Key Derivation (assets)"
Cohesion: 0.26
Nodes (14): Bs(), Cs(), Ds(), Fs(), Gs(), Hs(), Is(), Ls() (+6 more)

### Community 46 - "Random & Entropy (assets)"
Cohesion: 0.15
Nodes (3): ju, qu(), sh

### Community 48 - "Relay Server"
Cohesion: 0.15
Nodes (10): app, cors, express, fs, http, io, path, PERSISTENT_ROOMS_FILE (+2 more)

### Community 56 - "Packet Tag Dispatch (assets)"
Cohesion: 0.31
Nodes (10): ar(), Br(), cr(), dr(), fr(), ir(), or(), rr() (+2 more)

### Community 57 - "Data Destruction & Wipe"
Cohesion: 0.20
Nodes (10): executeKillWipe, Kill Switch (room-wide wipe), triggerKillSwitch, clearLoadedKey, clearOutput (wipe plaintext), Ephemeral Plaintext Auto-Wipe, handleDecrypt, loadPastedKey (+2 more)

### Community 58 - "Key Management UI"
Cohesion: 0.22
Nodes (10): selectKey, calculateEntropy (passphrase meter), copyPrivateKey, copyPublicKey, deleteKey, Device-Bound Identity (no account, no sync), generateKey, Local Key Store (ophanim_keys) (+2 more)

### Community 59 - "graphify Integration Rules"
Cohesion: 0.28
Nodes (9): graphify-out/graph.json, graphify-out/GRAPH_REPORT.md, graphify CLI (query / path / explain / update), graphify Knowledge Graph Consultation Rule, graphify-out/wiki/index.md, graphify SKILL.md (Gemini skills install), graphify Workflow, God Nodes and Community Structure (+1 more)

### Community 61 - "Message Unwrapping (assets)"
Cohesion: 0.44
Nodes (5): df(), il(), kf(), mf(), uf()

### Community 62 - "Padding & Encoding (assets)"
Cohesion: 0.25
Nodes (6): If(), jf(), Ld(), pl(), td, xd()

### Community 63 - "Message Encryption Flow"
Cohesion: 0.25
Nodes (8): addMessage, Per-Recipient Fan-Out Encryption, sendMessage, Armored PGP Ciphertext Output, downloadOutput, esc (HTML escaping), handleEncrypt, Encrypt Page

### Community 64 - "Cipher Mode Helpers (lib)"
Cohesion: 0.25
Nodes (3): dn(), hn(), Tu

### Community 66 - "Key Expiry Checks (lib)"
Cohesion: 0.39
Nodes (3): ml, wl(), xl()

### Community 68 - "Landing Page"
Cohesion: 0.33
Nodes (7): Landing Page (index.html), Particle Canvas Backdrop, Red Pill / Blue Pill Comparison, togglePill, Blue Pill Branch (the story ends, believe what you want), Pill Choice Metaphor (comfortable illusion vs uncomfortable truth), Red Pill Branch (stay in wonderland, see how deep it goes)

### Community 70 - "Type Coercion Helpers (assets)"
Cohesion: 0.47
Nodes (4): ce(), de(), ke, te()

### Community 72 - "Block Cipher Wrappers (assets)"
Cohesion: 0.40
Nodes (4): gn, hn(), jn(), Wn()

### Community 73 - "Fingerprint Verification"
Cohesion: 0.40
Nodes (5): confirmFingerprint, Out-of-Band Fingerprint Verification, formatFingerprint, showFingerprintOverlay, updateStats (key validation)

### Community 74 - "Chat Room Session"
Cohesion: 0.40
Nodes (5): joinRoom, loadKeys, Chat Page, Room Code as Shared Secret, startExpirationTimer

### Community 75 - "Navigation Sidebar"
Cohesion: 0.80
Nodes (4): initSidebar(), railIsMobile(), syncRailToggle(), toggleSidebar()

### Community 79 - "Contact Management"
Cohesion: 0.50
Nodes (4): selectContact, showContactPicker, Contact Store (ophanim_contacts), importContact

### Community 80 - "Crypto Test Runner"
Cohesion: 0.67
Nodes (3): log(), out, runTests()

### Community 81 - "Matrix Pill Artwork (lib)"
Cohesion: 0.50
Nodes (4): Duplicated Asset Between lib/ and public/assets/, Morpheus Pill Illustration (duplicate copy in lib/), Morpheus Red/Blue Pill Illustration, Third-Party Film Artwork Used As Hero Asset

## Ambiguous Edges - Review These
- `ECC Curve25519 Key Generation` → `runTests (invoked from test.html)`  [AMBIGUOUS]
  test.html · relation: references

## Knowledge Gaps
- **115 isolated node(s):** `OphanimCrypto`, `out`, `graphify`, `Workflow: graphify`, `graphify` (+110 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **31 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `ECC Curve25519 Key Generation` and `runTests (invoked from test.html)`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **Why does `_()` connect `OpenPGP Packet Parsing (lib)` to `OpenPGP Message Encoding (lib)`, `AES-GCM Cipher (lib)`, `Web Streams Plumbing (lib)`, `Key Packet Assembly (lib)`, `Secret Key Packets (lib)`, `Armor & Radix-64 Codec (lib)`, `Curve25519 / ECC Math (lib)`, `Async Stream Readers (lib)`, `Key Object API (lib)`, `Stream Controllers (lib)`, `Compression Packets (lib)`, `OpenPGP Internals (lib)`, `Signature Verification (lib)`, `BigInteger Arithmetic (lib)`, `OpenPGP Internals II (lib)`, `Hash Functions (lib)`, `Random & Entropy (lib)`, `Elliptic Curve Params (lib)`, `Curve Constants (lib)`, `OpenPGP Internals V (lib)`, `OpenPGP Internals VI (lib)`, `OpenPGP Internals VII (lib)`, `Cipher Mode Helpers (lib)`, `Key Expiry Checks (lib)`, `OpenPGP Internals XI (lib)`, `OpenPGP Internals XV (lib)`, `OpenPGP Internals XVII (lib)`, `OpenPGP Internals XVIII (lib)`, `Packet Readers (lib)`?**
  _High betweenness centrality (0.184) - this node is a cross-community bridge._
- **Why does `_()` connect `OpenPGP Packet Parsing (assets)` to `BigInteger Arithmetic (assets)`, `AES-GCM Cipher (assets)`, `Curve25519 / ECC Math (assets)`, `Async Stream Readers (assets)`, `Socket.IO Client (assets)`, `Key Object API (assets)`, `Armor & Radix-64 Codec (assets)`, `Symmetric Encryption Packets (assets)`, `Web Streams Plumbing (assets)`, `Key Packet Assembly (assets)`, `Secret Key Packets (assets)`, `OpenPGP Message Encoding (assets)`, `Stream Iteration (assets)`, `Signature Verification (assets)`, `Packet Readers (assets)`, `Literal & Marker Packets (assets)`, `Stream Controllers (assets)`, `Hash Functions (assets)`, `OpenPGP Internals (assets)`, `Cleartext Signatures (assets)`, `Session Key Handling (assets)`, `OpenPGP Internals III (assets)`, `S2K Key Derivation (assets)`, `Random & Entropy (assets)`, `OpenPGP Internals IV (assets)`, `Packet Tag Dispatch (assets)`, `OpenPGP Internals VIII (assets)`, `Message Unwrapping (assets)`, `Padding & Encoding (assets)`, `OpenPGP Internals X (assets)`, `Type Coercion Helpers (assets)`, `Cipher Mode Helpers (assets)`, `Block Cipher Wrappers (assets)`, `OpenPGP Internals XII (assets)`, `OpenPGP Internals XIII (assets)`, `OpenPGP Internals XIV (assets)`?**
  _High betweenness centrality (0.153) - this node is a cross-community bridge._
- **Why does `G` connect `OpenPGP Internals (lib)` to `OpenPGP Packet Parsing (lib)`, `OpenPGP Internals IX (lib)`, `BigInteger Arithmetic (lib)`, `Armor & Radix-64 Codec (lib)`, `Elliptic Curve Params (lib)`, `Curve Constants (lib)`, `OpenPGP Internals XVI (lib)`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **What connects `OphanimCrypto`, `out`, `graphify` to the rest of the system?**
  _115 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `OpenPGP Packet Parsing (lib)` be split into smaller, more focused modules?**
  _Cohesion score 0.02445302445302445 - nodes in this community are weakly interconnected._
- **Should `BigInteger Arithmetic (assets)` be split into smaller, more focused modules?**
  _Cohesion score 0.05 - nodes in this community are weakly interconnected._