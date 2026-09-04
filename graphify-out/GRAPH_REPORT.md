# Graph Report - Seraphim  (2026-09-04)

## Corpus Check
- 19 files · ~254,586 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2118 nodes · 5931 edges · 114 communities (68 shown, 46 thin omitted)
- Extraction: 90% EXTRACTED · 10% INFERRED · 0% AMBIGUOUS · INFERRED: 582 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `63054843`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- lib/openpgp.min.js
- assets/openpgp.min.js
- t
- gd
- gd
- r
- Wh
- write
- hu
- .acquire_asm
- e
- Ophanim — Product Requirements Document & Technical Report
- Ophanim — Product Requirements Document & Technical Report
- Wh
- Nc
- .verify
- lib/socket.io.min.js
- t
- hf
- dh
- R
- Ro
- zh
- sp
- bu
- assets/socket.io.min.js
- The Manual
- R
- G
- fe
- .push
- Ro
- Ophanim — Project Report
- dependencies
- .update
- fp
- dh
- pe
- .constructor
- .push
- test.html Crypto Test Page
- o
- un
- G
- .write
- .update
- sp
- zu
- index.js
- fp
- .clone
- ou
- animations.js
- zu
- ye
- write
- handleDecrypt
- Local Key Store (ophanim_keys)
- graphify Knowledge Graph Consultation Rule
- hu
- Uu
- Uu
- sendMessage
- dn
- jd
- Ni
- Red Pill / Blue Pill Comparison
- fe
- Vs
- oh
- ou
- Out-of-Band Fingerprint Verification
- joinRoom
- sidebar.js
- ye
- .constructor
- mu
- showContactPicker
- mu
- Morpheus Red/Blue Pill Illustration
- ba
- Hi
- pa
- ya
- lu
- GEMINI.md
- Di
- rules/graphify.md
- workflows/graphify.md
- renderUsers
- wi
- OpenPGP.js v5
- Ophanim Logo
- Tu
- bu
- Cu
- Eu
- Iu
- Cu
- Iu
- xu
- fh
- ba
- .sub
- pa
- ya
- test-runner.js
- mn
- lu
- mn
- crypto.js

## God Nodes (most connected - your core abstractions)
1. `R()` - 77 edges
2. `R()` - 77 edges
3. `o()` - 70 edges
4. `o()` - 70 edges
5. `t()` - 67 edges
6. `t()` - 67 edges
7. `r()` - 56 edges
8. `r()` - 56 edges
9. `e` - 53 edges
10. `e` - 53 edges

## Surprising Connections (you probably didn't know these)
- `handleDecrypt` --semantically_similar_to--> `addMessage`  [INFERRED] [semantically similar]
  decrypt.html → chat.html
- `Ophanim CSS Token Theme (ophanim.css / fonts.css)` --semantically_similar_to--> `Ophanim Dark Cyberpunk Design System`  [INFERRED] [semantically similar]
  test.html → lib/ophanim_prd_report.md
- `Ophanim PRD (public/assets copy)` --semantically_similar_to--> `Ophanim E2EE Messaging Platform`  [INFERRED] [semantically similar]
  public/assets/ophanim_prd_report.md → lib/ophanim_prd_report.md
- `Kill Switch (room-wide wipe)` --semantically_similar_to--> `Ephemeral Plaintext Auto-Wipe`  [INFERRED] [semantically similar]
  chat.html → decrypt.html
- `GEMINI.md graphify Project Rules` --semantically_similar_to--> `graphify Knowledge Graph Consultation Rule`  [INFERRED] [semantically similar]
  GEMINI.md → .agents/rules/graphify.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Secure chat session flow** — chat_joinroom, chat_loadkeys, chat_showfingerprintoverlay, chat_confirmfingerprint, chat_sendmessage [EXTRACTED 1.00]
- **Everything that reads the local key store** — keys_generatekey, decrypt_selectkey, chat_loadkeys, encrypt_showcontactpicker, keys_local_key_store [EXTRACTED 1.00]
- **Ophanim Zero-Knowledge E2EE Stack** — lib_ophanim_prd_report_zero_knowledge_architecture, lib_ophanim_prd_report_ophanimcrypto, lib_ophanim_prd_report_openpgp_js_v5, lib_ophanim_prd_report_curve25519_ecc, lib_ophanim_prd_report_relay_server, lib_ophanim_prd_report_socketio_event_protocol [EXTRACTED 1.00]
- **Data destruction mechanisms** — chat_executekillwipe, decrypt_clearoutput, decrypt_clearloadedkey, keys_deletekey [INFERRED 0.85]
- **Graph-First Codebase Navigation Policy** — _agents_rules_graphify_graphify_rule, gemini_graphify_project_rules, _agents_workflows_graphify_graphify_workflow, _agents_rules_graphify_graphify_cli, _agents_rules_graphify_graph_json [INFERRED 0.85]
- **Ophanim Security Posture Controls** — lib_ophanim_prd_report_threat_model, lib_ophanim_prd_report_kill_switch, lib_ophanim_prd_report_curve25519_ecc, test_content_security_policy [INFERRED 0.85]
- **Landing page pill narrative** — public_assets_matrix_morpheus_pill_illustration, public_assets_matrix_red_pill_branch, public_assets_matrix_blue_pill_branch, index_red_blue_pill_choice [INFERRED 0.95]

## Communities (114 total, 46 thin omitted)

### Community 0 - "lib/openpgp.min.js"
Cohesion: 0.02
Nodes (34): Ae, ar(), Br(), Bs(), ci(), cr(), de(), fn() (+26 more)

### Community 1 - "assets/openpgp.min.js"
Cohesion: 0.02
Nodes (31): Ae, ar(), Br(), Bs(), cr(), de(), Ei(), Gh() (+23 more)

### Community 2 - "t"
Cohesion: 0.08
Nodes (28): B(), bh(), ci(), n(), r(), I(), i(), j() (+20 more)

### Community 3 - "gd"
Cohesion: 0.08
Nodes (25): af(), cf(), df(), ed(), ef(), ff(), gd(), jf() (+17 more)

### Community 4 - "gd"
Cohesion: 0.09
Nodes (33): af(), cf(), cl(), dl(), ef(), ff(), fl(), gd() (+25 more)

### Community 5 - "r"
Cohesion: 0.09
Nodes (20): B(), Ei(), n(), r(), i(), Ki(), s(), me() (+12 more)

### Community 6 - "Wh"
Cohesion: 0.11
Nodes (20): ad(), al(), bf, cd(), Dd(), gf(), If(), il() (+12 more)

### Community 7 - "write"
Cohesion: 0.39
Nodes (3): pe(), rh(), write()

### Community 9 - ".acquire_asm"
Cohesion: 0.12
Nodes (22): bn(), c(), B(), C(), F(), L(), O(), R() (+14 more)

### Community 10 - "e"
Cohesion: 0.21
Nodes (40): e, gl(), b(), g(), l(), p(), y(), c() (+32 more)

### Community 11 - "Ophanim — Product Requirements Document & Technical Report"
Cohesion: 0.05
Nodes (37): 10. API Reference — OphanimCrypto, 11. Server Events (Socket.IO), 12. Performance Metrics (Estimated), 13. Future Roadmap, 1. Executive Summary, 2. Product Vision & Goals, 3. System Architecture, 4.1 Feature Matrix (+29 more)

### Community 12 - "Ophanim — Product Requirements Document & Technical Report"
Cohesion: 0.05
Nodes (37): 10. API Reference — OphanimCrypto, 11. Server Events (Socket.IO), 12. Performance Metrics (Estimated), 13. Future Roadmap, 1. Executive Summary, 2. Product Vision & Goals, 3. System Architecture, 4.1 Feature Matrix (+29 more)

### Community 13 - "Wh"
Cohesion: 0.11
Nodes (19): ad(), al(), bf, cd(), Dd(), gf(), il(), jh() (+11 more)

### Community 14 - "Nc"
Cohesion: 0.15
Nodes (12): Bc(), Bo(), jc(), Lc(), Nc(), Oc(), Oo(), Rc() (+4 more)

### Community 15 - ".verify"
Cohesion: 0.13
Nodes (19): bn(), et, B(), C(), D(), L(), O(), R() (+11 more)

### Community 16 - "lib/socket.io.min.js"
Cohesion: 0.14
Nodes (26): a(), c(), Ct(), d(), e(), Et(), f(), G() (+18 more)

### Community 17 - "t"
Cohesion: 0.15
Nodes (35): A(), d(), e, P(), gl(), g(), l(), y() (+27 more)

### Community 18 - "hf"
Cohesion: 0.11
Nodes (21): bd(), Bl(), cl(), dl(), fl(), hf(), Hh(), hl() (+13 more)

### Community 19 - "dh"
Cohesion: 0.15
Nodes (5): dh, eh(), Gu(), ih(), nh()

### Community 20 - "R"
Cohesion: 0.26
Nodes (36): D(), b(), p(), H(), hr(), c(), d(), h() (+28 more)

### Community 21 - "Ro"
Cohesion: 0.08
Nodes (26): Ao(), Bc(), Bo(), Do, Eo(), go(), jc(), ko() (+18 more)

### Community 22 - "zh"
Cohesion: 0.07
Nodes (15): df(), el(), kl(), Ld(), ml, Pd(), rl(), tf() (+7 more)

### Community 23 - "sp"
Cohesion: 0.15
Nodes (16): ap(), cp, dp(), hp(), ip, kp(), lp(), mp() (+8 more)

### Community 25 - "assets/socket.io.min.js"
Cohesion: 0.14
Nodes (26): a(), c(), Ct(), d(), e(), Et(), f(), G() (+18 more)

### Community 26 - "The Manual"
Cohesion: 0.06
Nodes (30): 01. What Ophanim is, 02. Why this is different from WhatsApp, Instagram and the rest, 03. What PGP actually is, 04. Public key, private key, passphrase, fingerprint, 05. Using Ophanim, step by step, 06. The maths behind it — why this cannot be cracked, 07. Why no shortcut exists, 08. What can actually go wrong (+22 more)

### Community 27 - "R"
Cohesion: 0.12
Nodes (14): ce(), Di, R(), a(), be(), ee(), ge(), me() (+6 more)

### Community 29 - "fe"
Cohesion: 0.14
Nodes (25): A(), Be(), a(), c(), d(), fe(), a(), c() (+17 more)

### Community 30 - ".push"
Cohesion: 0.11
Nodes (5): du(), pu, qy(), te(), vh

### Community 31 - "Ro"
Cohesion: 0.12
Nodes (25): Ao(), Cs(), Do, Ds(), Eo(), Fs(), go(), Gs() (+17 more)

### Community 32 - "Ophanim — Project Report"
Cohesion: 0.07
Nodes (26): 10. Knowledge graph analysis, 11. Frontend architecture, 12. Recommendations, 13. Appendix — file reference, 1. Executive summary, 2. How it works — the whole system in one picture, 3. The trust boundary — what the server can and cannot see, 4. Message lifecycle — encrypt → relay → decrypt (+18 more)

### Community 33 - "dependencies"
Cohesion: 0.10
Nodes (20): cors, dotenv, express, i, dependencies, cors, dotenv, express (+12 more)

### Community 34 - ".update"
Cohesion: 0.09
Nodes (7): jr(), lh, oa(), oh, sh, Yu(), zi()

### Community 35 - "fp"
Cohesion: 0.13
Nodes (3): eb(), fp(), wi()

### Community 36 - "dh"
Cohesion: 0.19
Nodes (4): dh, Gu(), ih(), nh()

### Community 37 - "pe"
Cohesion: 0.12
Nodes (10): ce(), et, pe(), be(), ge(), me(), te(), we() (+2 more)

### Community 38 - ".constructor"
Cohesion: 0.14
Nodes (14): bd(), Bl(), ed(), ep(), hf(), Hh(), md(), pull() (+6 more)

### Community 39 - ".push"
Cohesion: 0.07
Nodes (11): bh(), du(), jl(), ju, kh(), l(), pu, read() (+3 more)

### Community 40 - "test.html Crypto Test Page"
Cohesion: 0.15
Nodes (18): Crypto Test Suite (test.html), ECC Curve25519 Key Generation, Ophanim Dark Cyberpunk Design System, Ophanim Future Roadmap, Google Stitch Layout Prompts, Kill Switch, OpenPGP.js v5, Ophanim E2EE Messaging Platform (+10 more)

### Community 41 - "o"
Cohesion: 0.14
Nodes (13): F(), Eu, f(), hr(), o(), N(), o(), fe() (+5 more)

### Community 42 - "un"
Cohesion: 0.15
Nodes (15): cn(), En, ga(), Kn(), Li(), ln(), Ni(), on() (+7 more)

### Community 44 - ".write"
Cohesion: 0.14
Nodes (16): cn(), dn(), En, fn(), ga(), Kn(), Li(), ln() (+8 more)

### Community 45 - ".update"
Cohesion: 0.11
Nodes (6): jr(), lh, oa(), sh, Yu(), zi()

### Community 46 - "sp"
Cohesion: 0.15
Nodes (16): ap(), cp, dp(), hp(), ip, kp(), lp(), mp() (+8 more)

### Community 48 - "index.js"
Cohesion: 0.15
Nodes (10): app, cors, express, fs, http, io, path, PERSISTENT_ROOMS_FILE (+2 more)

### Community 54 - "zu"
Cohesion: 0.15
Nodes (4): ah(), qu(), th(), zu

### Community 56 - "write"
Cohesion: 0.14
Nodes (5): fh, ju, pe(), rh(), write()

### Community 57 - "handleDecrypt"
Cohesion: 0.20
Nodes (10): executeKillWipe, Kill Switch (room-wide wipe), triggerKillSwitch, clearLoadedKey, clearOutput (wipe plaintext), Ephemeral Plaintext Auto-Wipe, handleDecrypt, loadPastedKey (+2 more)

### Community 58 - "Local Key Store (ophanim_keys)"
Cohesion: 0.22
Nodes (10): selectKey, calculateEntropy (passphrase meter), copyPrivateKey, copyPublicKey, deleteKey, Device-Bound Identity (no account, no sync), generateKey, Local Key Store (ophanim_keys) (+2 more)

### Community 59 - "graphify Knowledge Graph Consultation Rule"
Cohesion: 0.28
Nodes (9): graphify-out/graph.json, graphify-out/GRAPH_REPORT.md, graphify CLI (query / path / explain / update), graphify Knowledge Graph Consultation Rule, graphify-out/wiki/index.md, graphify SKILL.md (Gemini skills install), graphify Workflow, God Nodes and Community Structure (+1 more)

### Community 61 - "Uu"
Cohesion: 0.16
Nodes (3): ah(), th(), Uu

### Community 63 - "sendMessage"
Cohesion: 0.25
Nodes (8): addMessage, Per-Recipient Fan-Out Encryption, sendMessage, Armored PGP Ciphertext Output, downloadOutput, esc (HTML escaping), handleEncrypt, Encrypt Page

### Community 64 - "dn"
Cohesion: 0.22
Nodes (4): dn(), hn(), Tu, Wn()

### Community 66 - "jd"
Cohesion: 0.11
Nodes (11): el(), jd(), kl(), Ld(), ml, Pd(), rl(), tf() (+3 more)

### Community 68 - "Red Pill / Blue Pill Comparison"
Cohesion: 0.33
Nodes (7): Landing Page (index.html), Particle Canvas Backdrop, Red Pill / Blue Pill Comparison, togglePill, Blue Pill Branch (the story ends, believe what you want), Pill Choice Metaphor (comfortable illusion vs uncomfortable truth), Red Pill Branch (stay in wonderland, see how deep it goes)

### Community 69 - "fe"
Cohesion: 0.29
Nodes (9): Be(), a(), fe(), a(), c(), K(), o(), s() (+1 more)

### Community 70 - "Vs"
Cohesion: 0.36
Nodes (11): Cs(), Ds(), Fs(), Gs(), Ks(), Ls(), Ns(), Ts() (+3 more)

### Community 71 - "oh"
Cohesion: 0.22
Nodes (3): eh(), oh, vu()

### Community 73 - "Out-of-Band Fingerprint Verification"
Cohesion: 0.40
Nodes (5): confirmFingerprint, Out-of-Band Fingerprint Verification, formatFingerprint, showFingerprintOverlay, updateStats (key validation)

### Community 74 - "joinRoom"
Cohesion: 0.40
Nodes (5): joinRoom, loadKeys, Chat Page, Room Code as Shared Secret, startExpirationTimer

### Community 75 - "sidebar.js"
Cohesion: 0.80
Nodes (4): initSidebar(), railIsMobile(), syncRailToggle(), toggleSidebar()

### Community 77 - ".constructor"
Cohesion: 0.24
Nodes (4): ep(), jh(), op(), v()

### Community 79 - "showContactPicker"
Cohesion: 0.50
Nodes (4): selectContact, showContactPicker, Contact Store (ophanim_contacts), importContact

### Community 81 - "Morpheus Red/Blue Pill Illustration"
Cohesion: 0.50
Nodes (4): Duplicated Asset Between lib/ and public/assets/, Morpheus Pill Illustration (duplicate copy in lib/), Morpheus Red/Blue Pill Illustration, Third-Party Film Artwork Used As Hero Asset

### Community 96 - "Tu"
Cohesion: 0.25
Nodes (3): hn(), Tu, Wn()

### Community 109 - "test-runner.js"
Cohesion: 0.67
Nodes (3): log(), out, runTests()

## Ambiguous Edges - Review These
- `ECC Curve25519 Key Generation` → `runTests (invoked from test.html)`  [AMBIGUOUS]
  test.html · relation: references

## Knowledge Gaps
- **155 isolated node(s):** `express`, `http`, `{ Server }`, `cors`, `path` (+150 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **46 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `ECC Curve25519 Key Generation` and `runTests (invoked from test.html)`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **Why does `j()` connect `R` to `Eu`, `r`, `pe`, `.push`, `hu`, `.acquire_asm`, `lib/socket.io.min.js`, `t`, `dh`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **Why does `Z()` connect `lib/socket.io.min.js` to `R`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **Why does `R()` connect `R` to `lib/openpgp.min.js`, `r`, `fe`, `pe`, `write`, `.acquire_asm`, `.push`, `.constructor`, `t`, `hf`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **Are the 12 inferred relationships involving `R()` (e.g. with `A()` and `L()`) actually correct?**
  _`R()` has 12 INFERRED edges - model-reasoned connections that need verification._
- **Are the 12 inferred relationships involving `R()` (e.g. with `A()` and `L()`) actually correct?**
  _`R()` has 12 INFERRED edges - model-reasoned connections that need verification._
- **Are the 5 inferred relationships involving `o()` (e.g. with `B()` and `g()`) actually correct?**
  _`o()` has 5 INFERRED edges - model-reasoned connections that need verification._