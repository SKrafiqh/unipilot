import operatingSystems from './subjects/operatingSystems';
import dataStructures from './subjects/dataStructures';
import softwareEngineering from './subjects/softwareEngineering';
import cloudComputing from './subjects/cloudComputing';
import cyberSecurity from './subjects/cyberSecurity';
import generativeAI from './subjects/generativeAI';
import machineLearning from './subjects/machineLearning';
import discreteMath from './subjects/discreteMath';

const notesData = [
    {
        "id": "dbms",
        "title": "Database Management Systems (DBMS)",
        "description": "The Bible of Databases: From SQL Basics to Advanced Normalization, Transactions, and NoSQL.",
        "color": "#e3f2fd",
        "lastUpdated": "2024-10-15",
        "units": [
            {
                "title": "Unit 1: Introduction & Architecture",
                "topics": [
                    {
                        "title": "1.1 Database Systems Overview",
                        "content": "# Introduction to DBMS\n\n## 1. What is a DBMS?\nA **Database Management System (DBMS)** is software that manages data (storing, retrieving, updating). \n- **Examples:** MySQL, PostgreSQL, Oracle, MongoDB.\n\n## 2. File System vs DBMS\n| Feature | File System | DBMS |\n|---|---|---|\n| **Redundancy** | High (Data Duplication) | Low (Normalization) |\n| **Consistency** | Poor | High |\n| **Security** | Low (OS Access) | High (User Roles) |\n| **Querying** | Manual Coding needed | SQL (Easy) |\n\n## 3. Data Abstraction Levels\n1. **Physical Level:** How data is stored (Blocks, B-Trees).\n2. **Logical Level:** What data is stored (Tables, Relations).\n3. **View Level:** What user sees (Views, Reports)."
                    },
                    {
                        "title": "1.2 Data Models & Schemas",
                        "content": "# Data Models\n\n## 1. Relational Model (Most Popular)\n- Data organized in **Tables (Relations)**.\n- Rows = Tuples, Columns = Attributes.\n\n## 2. ER Model (Entity-Relationship)\n- Graphical representation.\n- **Entity:** Concept (Student).\n- **Attribute:** Feature (Name).\n- **Relationship:** Link (Enrolled In).\n\n## 3. Schema vs Instance\n- **Schema:** The Skeleton/Design (changes rarely).\n- **Instance:** The Data at a specific moment (changes often)."
                    }
                ]
            },
            {
                "title": "Unit 2: The Relational Model",
                "topics": [
                    {
                        "title": "2.1 Keys & Constraints",
                        "content": "# Keys in DBMS\n\n## 1. Primary Key (PK)\nUnique identifier. **Cannot be NULL**.\n\n## 2. Candidate Key\nA minimal set of attributes that can uniquely identify a tuple.\n\n## 3. Super Key\nAny set of attributes that acts as a unique ID (Candidate Key + Extra columns).\n\n## 4. Foreign Key (FK)\nLinks two tables. Enforces **Referential Integrity**.\n\n## 5. Composite Key\nA PK made of 2+ columns."
                    },
                    {
                        "title": "2.2 Relational Algebra",
                        "content": "# Relational Algebra\nProcedural query language (How to get data).\n\n- **Select ($\u03c3$):** Filter rows.\n- **Project ($\u03c0$):** Filter columns.\n- **Union ($\u222a$):** Combine sets.\n- **Cartesian Product ($\u00d7$):** Cross join.\n- **Join ($\u22c8$):** Combinations based on common field."
                    }
                ]
            },
            {
                "title": "Unit 3: SQL Masterclass",
                "topics": [
                    {
                        "title": "3.1 DDL, DML, DCL, TCL",
                        "content": "# SQL Commands Categories\n\n## 1. DDL (Data Definition Language)\nStructure changes.\n- `CREATE`, `ALTER`, `DROP`, `TRUNCATE`.\n\n## 2. DML (Data Manipulation Language)\nData changes.\n- `INSERT`, `UPDATE`, `DELETE`.\n\n## 3. DCL (Data Control Language)\nPermissions.\n- `GRANT`, `REVOKE`.\n\n## 4. TCL (Transaction Control Language)\n- `COMMIT`, `ROLLBACK`, `SAVEPOINT`."
                    },
                    {
                        "title": "3.2 Advanced Joins & Subqueries",
                        "content": "# Joins\n\n1. **INNER JOIN:** Matches in both tables.\n2. **LEFT JOIN:** All from Left + Matches from Right.\n3. **RIGHT JOIN:** All from Right + Matches from Left.\n4. **FULL JOIN:** Everything.\n\n```sql\nSELECT e.name, d.dept_name \nFROM Employees e \nJOIN Departments d ON e.dept_id = d.id;\n```\n\n# Subqueries\nQuery inside a query.\n```sql\nSELECT * FROM Students \nWHERE marks > (SELECT AVG(marks) FROM Students);\n```"
                    }
                ]
            },
            {
                "title": "Unit 4: Normalization",
                "topics": [
                    {
                        "title": "4.1 1NF, 2NF, 3NF",
                        "content": "# Normalization\nGoal: Reduce Redundancy & Anomaly.\n\n## 1NF (First Normal Form)\n- Atomic values (No comma separated lists).\n- Unique column names.\n\n## 2NF (Second Normal Form)\n- Must be in 1NF.\n- **No Partial Dependency** (All non-key attributes depend on the WHOLE primary key).\n\n## 3NF (Third Normal Form)\n- Must be in 2NF.\n- **No Transitive Dependency** (Non-key attribute A -> Non-key B is NOT allowed)."
                    },
                    {
                        "title": "4.2 BCNF (Boyce-Codd)",
                        "content": "# BCNF\nStricter than 3NF.\n- For every functional dependency $X \\to Y$, $X$ must be a **Super Key**.\n- Handling anomalies that 3NF misses."
                    }
                ]
            },
            {
                "title": "Unit 5: Transaction Management",
                "topics": [
                    {
                        "title": "5.1 ACID Properties",
                        "content": "# ACID Properties\nEssential for reliable transactions.\n\n1. **Atomicity:** All or Nothing. If one part fails, rollback everything.\n2. **Consistency:** DB must remain valid after transaction.\n3. **Isolation:** Transactions shouldn't interfere with each other.\n4. **Durability:** Committed data is saved permanently, even if power fails."
                    },
                    {
                        "title": "5.2 Schedules & Serializability",
                        "content": "# Serializability\nCan we run transactions in parallel without messing up data?\n\n- **Serial Schedule:** T1 finishes -> T2 starts. (Safe, Slow).\n- **Concurrent Schedule:** T1 and T2 interleave.\n- **Conflict Serializability:** If a concurrent schedule yields same result as a serial one, it's valid."
                    }
                ]
            },
            {
                "title": "Unit 6: Concurrency Control",
                "topics": [
                    {
                        "title": "6.1 Locks & Deadlocks",
                        "content": "# Locking Protocols\n\n## 1. Shared Lock (S)\nFor Reading. Multiple transactions can hold S lock.\n\n## 2. Exclusive Lock (X)\nFor Writing. Only one transaction can hold X lock.\n\n## 3. Two-Phase Locking (2PL)\n- **Growing Phase:** Acquire locks.\n- **Shrinking Phase:** Release locks.\n- *Guarantees Serializability.*\n\n## 4. Deadlock\nT1 waits for T2. T2 waits for T1. Cycle!\n- **Prevention:** Wait-Die / Wound-Wait schemes.\n- **Detection:** Wait-for graph."
                    }
                ]
            },
            {
                "title": "Unit 7: Indexing & Hashing",
                "topics": [
                    {
                        "title": "7.1 B-Trees & B+ Trees",
                        "content": "# Indexing\nLike a book index. Speeds up `SELECT`.\n\n## B+ Tree (Standard)\n- Balanced Tree.\n- All data is in leaf nodes.\n- Leaf nodes are linked (Linked List) for fast range queries.\n- Height is $\\log n$ - FAST.\n\n## Clustered vs Non-Clustered\n- **Clustered:** Physically sorts data (Only 1 per table - PK).\n- **Non-Clustered:** Logical pointer to data."
                    }
                ]
            },
            {
                "title": "Unit 8: NoSQL Databases",
                "topics": [
                    {
                        "title": "8.1 SQL vs NoSQL",
                        "content": "# NoSQL (Not Only SQL)\nFor Big Data, Real-time apps, Unstructured data.\n\n## CAP Theorem\nDistributed systems can only pick 2:\n1. **Consistency** (Read returns latest write)\n2. **Availability** (Every request gets response)\n3. **Partition Tolerance** (System works despite network fail)\n*(NoSQL usually picks AP or CP)*.\n\n## Types\n1. **Document:** MongoDB (JSON-like).\n2. **Key-Value:** Redis.\n3. **Column:** Cassandra.\n4. **Graph:** Neo4j."
                    }
                ]
            }
        ]
    },
    {
        "id": "aiml",
        "title": "Artificial Intelligence & ML",
        "description": "Explore neural networks, supervised learning, and AI algorithms.",
        "color": "#f3e5f5",
        "lastUpdated": "2024-11-02",
        "units": [
            {
                "title": "Unit 1: Search Algorithms",
                "topics": [
                    {
                        "title": "BFS vs DFS",
                        "content": "**Breadth-First Search (BFS)** uses a Queue data structure and finds the shortest path in unweighted graphs.\n\n**Depth-First Search (DFS)** uses a Stack (or recursion) and explores as deep as possible along each branch before backtracking.\n\n```python\n# Python BFS implementation snippet\nqueue = [start_node]\nvisited.add(start_node)\nwhile queue:\n    node = queue.pop(0)\n    process(node)\n```"
                    }
                ]
            }
        ]
    },
    {
        "id": "math",
        "title": "Engineering Mathematics",
        "description": "Probability, Statistics, Linear Algebra, and Calculus.",
        "color": "#e8f5e9",
        "lastUpdated": "2024-09-20",
        "units": [
            {
                "title": "Unit 1: Linear Algebra",
                "topics": [
                    {
                        "title": "Eigenvalues",
                        "content": "An **eigenvector** of a square matrix $A$ is a non-zero vector $v$ such that multiplication by $A$ alters only its scale:\n\n$Av = \\lambda v$\n\nWhere $\\lambda$ is the **eigenvalue**."
                    }
                ]
            }
        ]
    },
    {
        "id": "cn",
        "title": "Computer Networks (Master Course)",
        "description": "The ultimate resource for Computer Networks. Covers Physical, Data Link, Network, Transport, and Application layers in extreme detail.",
        "color": "#e0f7fa",
        "lastUpdated": "2025-01-20",
        "units": [
            {
                "title": "Unit 1: Fundamentals & Physical Layer",
                "topics": [
                    {
                        "title": "1.1 The OSI Reference Model (Deep Dive)",
                        "content": "# The OSI Reference Model: A Definitive Guide\n\n## 1. Formal Definition\nThe **Open Systems Interconnection (OSI)** model is a theoretical framework developed by ISO (International Organization for Standardization) in 1984. It describes how information from a software application in one computer moves through a physical medium to the software application in another computer.\n\n## 2. Why do we need Layers?\n- **Decomposition:** Breaks complex communication tasks into smaller manageble parts.\n- **Standardization:** Allows different hardware/software vendors to interoperate.\n- **Abstraction:** Lower layers hide complexity from upper layers (e.g., your browser doesn't need to know if you are on WiFi or Ethernet).\n\n## 3. The 7 Layers (Detailed Breakdown)\n\n### Diagram: The OSI Stack\n```text\n+-----------------------+\n| 7. Application Layer  | -> End-User Interaction (HTTP, SMTP)\n+-----------------------+\n| 6. Presentation Layer | -> Syntax, Encryption, Compression\n+-----------------------+\n| 5. Session Layer      | -> Dialog Control, Synchronization\n+-----------------------+\n| 4. Transport Layer    | -> End-to-End Delivery, Reliability\n+-----------------------+\n| 3. Network Layer      | -> Routing, Logical Addressing (IP)\n+-----------------------+\n| 2. Data Link Layer    | -> Framing, Physical Addressing (MAC)\n+-----------------------+\n| 1. Physical Layer     | -> Bits, Voltages, Pins, Cables\n+-----------------------+\n```\n\n### Layer-by-Layer Responsibilities\n\n#### Layer 1: Physical Layer\n- **Role:** Transmit raw bits over a communication channel.\n- **Issues:** Mechanics (connector shape), Signaling (5V = 1?), Bitrate.\n- **Devices:** Hubs, Repeaters, Cables (Coax, Fiber, Twisted Pair).\n- **PDU:** Bit.\n\n#### Layer 2: Data Link Layer (DLL)\n- **Role:** Reliable node-to-node delivery.\n- **Sub-layers:** \n  - **LLC (Logical Link Control):** Flow & Error control.\n  - **MAC (Media Access Control):** Channel access (Who talks when?).\n- **Addressing:** Physical Address (MAC Address - 48 bit).\n- **Devices:** Switches, Bridges.\n- **PDU:** Frame.\n\n#### Layer 3: Network Layer\n- **Role:** delivery of packets from Source to Destination (across multiple networks).\n- **Key Functions:**\n  - **Routing:** Choosing the shortest path (OSPF, BGP).\n  - **Logical Addressing:** IPv4/IPv6.\n- **Devices:** Routers.\n- **PDU:** Packet.\n\n#### Layer 4: Transport Layer\n- **Role:** Service-point (Port) addressing, Segmentation & Reassembly, Connection Control.\n- **Protocols:** TCP (Reliable), UDP (Fast).\n- **PDU:** Segment (TCP) / Datagram (UDP).\n\n#### Layer 5: Session Layer\n- **Role:** Start, stop, and manage sessions. Token management.\n- **Example:** Keeping you logged in to a website.\n\n#### Layer 6: Presentation Layer\n- **Role:** Translation (EBCDIC to ASCII), Encryption (SSL/TLS), Compression (JPEG, MPEG).\n- **Nickname:** The Syntax Layer.\n\n#### Layer 7: Application Layer\n- **Role:** Interface for user interacting with the network.\n- **Protocols:** HTTP (Web), FTP (File), SMTP (Email), DNS (Names).\n\n## 4. Exam Corner\n- **Most Asked:** \"Explain the responsibility of the Data Link Layer in detail.\"\n- **Differentiation:** OSI (7 Layers, Conceptual) vs TCP/IP (4 Layers, Practical)."
                    },
                    {
                        "title": "1.2 Switching Techniques",
                        "content": "# Switching Techniques\n\n## 1. Definition\nSwitching is the mechanism to move data from input to output towards the destination in a large network.\n\n## 2. Circuit Switching\n- **Concept:** A dedicated physical path is established BEFORE communication starts.\n- **Phases:** Setup -> Data Transfer -> Teardown.\n- **Example:** Old Telephone Network (PSTN).\n- **Pros:** Guaranteed bandwidth, No delay during transfer.\n- **Cons:** Wasted resources during silence, Long setup time.\n\n### Diagram\n```text\n[User A] ---[Switch]---[Switch]---[Switch]--- [User B]\n         (Dedicated copper wire path reserved)\n```\n\n## 3. Packet Switching\n- **Concept:** Data is broken into packets. Each packet travels independently.\n- **Types:**\n  1. **Datagram:** Each packet routed independently (UDP/IP). Packets may arrive out of order.\n  2. **Virtual Circuit:** A logical path is set up, but physical resources are shared. Packets follow same path (X.25, Frame Relay).\n- **Example:** The Internet.\n- **Pros:** Efficient use of bandwidth.\n- **Cons:** Congestion possible, Variable delay (Jitter)."
                    }
                ]
            },
            {
                "title": "Unit 2: Data Link Layer",
                "topics": [
                    {
                        "title": "2.1 Flow Control Protocols",
                        "content": "# Flow Control Protocols\n\n## 1. Purpose\nTo prevent a fast sender from drowning a slow receiver.\n\n## 2. Stop-and-Wait ARQ\n- **Mechanism:** Send 1 frame. Wait for ACK. If timeout, resend.\n- **Efficiency:** Very low only 1 frame in flight.\n- **Formula:** Efficiency $\\eta = \\frac{1}{1 + 2a}$ where $a = \\frac{PropTime}{TransTime}$.\n\n## 3. Sliding Window Protocols\nAllows multiple frames in transit.\n\n### A. Go-Back-N ARQ\n- **Sender Window:** Size $N$.\n- **Receiver Window:** Size $1$.\n- **Logic:** If Frame $k$ is lost, discard all frames $>k$. Sender must resend $k$ and all subsequent frames.\n- **Problem:** Waste of bandwidth doing redundant retransmissions.\n\n### B. Selective Repeat ARQ\n- **Sender Window:** Size $N$.\n- **Receiver Window:** Size $N$.\n- **Logic:** Receiver accepts out-of-order frames (buffers them). Only the specific lost frame is retransmitted.\n- **Complexity:** High sorting logic needed at receiver.\n\n### Comparison Table\n\n| Protocol | Buffer Needs | Bandwidth Usage | Complexity |\n|---|---|---|---|\n| Stop-Wait | Low | Low | Low |\n| Go-Back-N | Medium/High | Medium (Resends) | Medium |\n| Sel. Repeat | High | Optimal | High |"
                    },
                    {
                        "title": "2.2 Ethernet (802.3)",
                        "content": "# Ethernet (IEEE 802.3)\n\n## 1. Frame Format\nThe structure of data on the wire.\n\n```text\n| Preamble | SFD | Dest MAC | Src MAC | Type/Len |  Data (Payload) | CRC |\n|  7 Bytes |  1  |    6     |    6    |    2     |    46 - 1500    |  4  |\n```\n- **Preamble:** 101010... pattern to wake up receiver.\n- **SFD:** Start Frame Delimiter (10101011) signals start of frame.\n- **MAC Addresses:** 48-bit unique hardware ID (e.g., `00:A0:C9:14:C8:29`).\n- **CRC:** For error checking.\n\n## 2. MAC Address Structure\n- First 24 bits: **OUI** (Organizationally Unique Identifier - Manufacturer).\n- Last 24 bits: **NIC Specific** (Serial Number).\n\n## 3. Inter-Frame Gap (IFG)\nMinimum silence period between frames (9.6 µs for 10Mbps) to allow receiver to process."
                    }
                ]
            },
            {
                "title": "Unit 3: Network Layer",
                "topics": [
                    {
                        "title": "3.1 IPv4 Detailed",
                        "content": "# IPv4 Protocol\n\n## 1. The IPv4 Header\nStandard length: 20 Bytes (up to 60 with Options).\n\n### Header Diagram\n```text\n 0                   1                   2                   3   \n 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 \n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|Ver(4)| IHL(4) |  TOS (8)      |      Total Length (16)        |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n| Identification (16)           |Flgs(3)| Fragment Offset (13)  |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|  TTL (8)      | Protocol (8)  |    Header Checksum (16)       |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                       Source IP Address                       |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                    Destination IP Address                     |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n```\n**Field deep dive:**\n- **Ver:** 4 for IPv4.\n- **IHL:** Header Length (min 5 words = 20 bytes).\n- **Total Length:** Max 65,535 bytes.\n- **TTL (Time To Live):** Decremented at each router. Prevents loops. If 0, packet dies.\n- **Protocol:** What's inside? (6=TCP, 17=UDP, 1=ICMP).\n\n## 2. Fragmentation\nIf a packet is too big for a network (MTU), it gets chopped.\n- **ID:** All fragments share original ID.\n- **More Fragments (MF) Flag:** 1 = more coming, 0 = last one.\n- **Offset:** Position of this fragment in original data."
                    },
                    {
                        "title": "3.2 Protocols: ARP, ICMP, NAT",
                        "content": "# Network Layer Protocols\n\n## 1. ARP (Address Resolution Protocol)\n- **Problem:** I know IP (Logical), but I need MAC (Physical) to send frame.\n- **Solution:** Broadcast \"Who has 192.168.1.5?\". Owner replies \"I do, my MAC is AA:BB:CC\".\n- **CMD:** `arp -a` shows cache.\n\n## 2. ICMP (Internet Control Message Protocol)\n- **Role:** Report errors, not carry data.\n- **Uses:** `Ping` (Echo Request/Reply), `Traceroute` (TTL Exceeded).\n- **Types:** Dest Unreachable, Time Exceeded, Redirect.\n\n## 3. NAT (Network Address Translation)\n- **Problem:** Running out of IPv4 addresses.\n- **Solution:** Private IPs inside (192.168.x.x), one Public IP outside.\n- **Router:** Swaps Private IP <-> Public IP in header on the fly.\n- **PAT (Port Address Translation):** Uses ports to map multiple private hosts to single public IP."
                    }
                ]
            },
            {
                "title": "Unit 4: Transport Layer",
                "topics": [
                    {
                        "title": "4.1 Sockets & Ports",
                        "content": "# Sockets & Ports\n\n## 1. What is a Port?\nA 16-bit number identifying a specific process/app on a computer.\n- **Well Known (0-1023):** HTTP(80), HTTPS(443), FTP(21), SSH(22).\n- **Registered (1024-49151):** SQL(1433), React Dev(3000).\n- **Dynamic:** Ephemeral ports for client-side.\n\n## 2. Socket Address\n`IP Address` + `Port Number` = Unique identifier for a connection end-point.\n\n## 3. UDP (User Datagram Protocol)\n- **Header:** Source Port, Dest Port, Len, Checksum (8 Bytes total).\n- **Features:** Connectionless, Unreliable, Fast.\n- **Use Cases:** streaming, DNS, VoIP."
                    },
                    {
                        "title": "4.2 Congestion Control in Depth",
                        "content": "# TCP Congestion Control\n\n## 1. The Concept\nIf the network is clogged, slowing down saves it. If we keep pushing, packets drop, leading to re-transmissions, leading to MORE clog (Collapse).\n\n## 2. Algorithms\n### A. Slow Start\n- Init `cwnd` (Congestion Window) = 1 MSS.\n- On ACK, double `cwnd` (Exponential Growth: 1, 2, 4, 8...).\n\n### B. Congestion Avoidance\n- When `ssthresh` (Threshold) is reached, increase linearly (Additive Increase).\n\n### C. Congestion Detection\n- **Timeout:** Drastic. Drop `cwnd` to 1. Start over.\n- **3 Duplicate ACKs:** Less drastic. Drop `cwnd` to half. (Fast Recovery).\n\n### Diagram: The Sawtooth Wave\n```text\n Window |\n Size   |           /\n        |          /  \\ (Packet Loss - Drop to half)\n        |         /    \\\n        |   /----/      \\----/\n        |  /  (Linear)\n        | /\n        |/\n        +------------------------ Time\n```"
                    }
                ]
            },
            {
                "title": "Unit 5: Application Layer (NEW)",
                "topics": [
                    {
                        "title": "5.1 DNS & HTTP",
                        "content": "# Application Protocols\n\n## 1. DNS (Domain Name System)\n- **Function:** Phonebook of Internet. Maps `google.com` -> `142.250.x.x`.\n- **Hierarchy:** Root (.) -> TLD (.com) -> Domain (google) -> Subdomain (mail).\n- **Records:** A (IPv4), AAAA (IPv6), CNAME (Alias), MX (Mail).\n\n## 2. HTTP (HyperText Transfer Protocol)\n- **Stateless:** Server forgets you after response.\n- **Methods:** GET (Read), POST (Create), PUT (Update), DELETE.\n- **Status Codes:** \n  - 200 OK\n  - 301 Moved\n  - 404 Not Found\n  - 500 Server Error\n\n## 3. HTTPS (Secure)\nHTTP over SSL/TLS. Encrypts data to prevent sniffing."
                    },
                    {
                        "title": "5.2 Email (SMTP, POP3, IMAP)",
                        "content": "# Email Protocols\n\n## 1. SMTP (Simple Mail Transfer Protocol)\n- **Role:** Sending email. (Client -> Server) and (Server -> Server).\n- **Port:** 25.\n\n## 2. POP3 (Post Office Protocol v3)\n- **Role:** Retrieving email.\n- **Behavior:** Downloads & Deletes from server. Good for 1 device.\n\n## 3. IMAP (Internet Message Access Protocol)\n- **Role:** Retrieving/Syncing email.\n- **Behavior:** Syncs with server. Good for multiple devices (Phone + Laptop).\n\n### Diagram: Mail Flow\n```text\n[User A] --(SMTP)--> [Server A] --(SMTP)--> [Server B]\n                                                |\n                                             (IMAP/POP)\n                                                |\n                                                V\n                                            [User B]\n```"
                    }
                ]
            },
            {
                "title": "Unit 6: Network Security (NEW)",
                "topics": [
                    {
                        "title": "6.1 Cryptography Basics",
                        "content": "# Cryptography\n\n## 1. Symmetric Key\n- Same key for Encryption and Decryption.\n- **Algo:** AES, DES.\n- **Problem:** Key Distribution (How to share key safely?).\n\n## 2. Asymmetric Key (Public Key)\n- Two keys: Public (Lock), Private (Unlock).\n- **Algo:** RSA.\n- **Usage:** Share Public key with world. Keep Private key safe.\n\n## 3. Digital Signatures\n- **Goal:** Prove Authenticity & Integrity.\n- **Process:** \n  1. Hash data.\n  2. Encrypt hash with Sender's Private Key (Signature).\n  3. Receiver decrypts with Sender's Public Key."
                    },
                    {
                        "title": "6.2 Firewalls",
                        "content": "# Firewalls\n\n## 1. Definition\nA security system that monitors and controls incoming/outgoing traffic based on rules.\n\n## 2. Types\n- **Packet Filter (Gen 1):** Checks IP/Port. Fast but dumb.\n  - *Rule:* \"Block all traffic from IP 1.2.3.4\".\n- **Stateful Inspection (Gen 2):** Remembers connections (Is this packet part of an existing login?).\n- **Application Gateway (Gen 3):** Understands data (Blocks \"bad\" URLs inside HTTP).\n\n### Diagram: Firewall Placement\n```text\n(Internet) --- [Firewall] --- (Router) --- [Internal Network]\n```"
                    }
                ]
            }
        ]
    },
    {
        "id": "python",
        "title": "Python: Zero to Job-Ready Masterclass",
        "description": "The only Python course you need. From 'Hello World' to Advanced Features, DSA, and Frameworks. 100% Interview Focused.",
        "color": "#fff3e0",
        "lastUpdated": "2025-02-10",
        "units": [
            {
                "title": "Unit 1: The Foundation (Core Concepts)",
                "topics": [
                    {
                        "title": "1.1 How Python Works",
                        "content": "# Internals of Python\n\n## 1. Memory Management\nPython uses a private heap to manage memory. \n- **Stack Memory:** Stores method calls and references.\n- **Heap Memory:** Stores the actual objects.\n\n## 2. Garbage Collection\nPython uses **Reference Counting**.\n```python\na = [1, 2, 3] # Ref count = 1\nb = a         # Ref count = 2\ndel a         # Ref count = 1\n```\nWhen ref count hits 0, memory is freed.\n\n## 3. The GIL (Global Interpreter Lock)\n**Interview Question:** \"Can Python run on multiple CPU cores?\"\n**Answer:** No. Standard CPython has a GIL that allows only one thread to execute Python bytecode at a time, making it single-threaded CPU-wise. For true parallelism, we use `multiprocessing`."
                    },
                    {
                        "title": "1.2 Mutable vs Immutable",
                        "content": "# Mutability (The #1 Bug Source)\n\n## Immutable Types\n`int`, `float`, `tuple`, `str`, `bool`.\n**Behavior:** changing the value changes the memory address reference.\n```python\nx = 10\nprint(id(x))\nx = x + 1\nprint(id(x)) # DIFFERENT Address!\n```\n\n## Mutable Types\n`list`, `dict`, `set`.\n**Behavior:** passed by reference. Modifying inside a function affects the original.\n```python\ndef bad_func(my_list=[]):  # DANGEROUS DEFAULT ARG\n    my_list.append(1)\n    return my_list\n\nprint(bad_func()) # [1]\nprint(bad_func()) # [1, 1] <- Surprise!\n```\n*Always use default args as None for mutables.*"
                    }
                ]
            },
            {
                "title": "Unit 2: Control Flow & Logic",
                "topics": [
                    {
                        "title": "2.1 Advanced Conditionals",
                        "content": "# Control Flow\n\n## The Match Case (Switch) - Python 3.10+\nSyntax similar to Switch-Case in Java/C++.\n\n```python\nstatus = 404\nmatch status:\n    case 200:\n        print(\"OK\")\n    case 404:\n        print(\"Not Found\")\n    case _:\n        print(\"Unknown\")\n```\n\n## The Walrus Operator `:=` (Python 3.8+)\nAssigns value inside an expression.\n\n```python\n# Old way\ndata = input()\nwhile data != \"quit\":\n    print(data)\n    data = input()\n\n# New way\nwhile (data := input()) != \"quit\":\n    print(data)\n```"
                    },
                    {
                        "title": "2.2 Looping Like a Pro",
                        "content": "# Loops\n\n## For Loops with `else`\nThe `else` block runs ONLY if the loop completed WITHOUT hitting `break`.\n\n```python\nfor n in range(2, 10):\n    for x in range(2, n):\n        if n % x == 0:\n            print(n, 'equals', x, '*', n//x)\n            break\n    else:\n        # loop fell through without finding a factor\n        print(n, 'is a prime number')\n```"
                    }
                ]
            },
            {
                "title": "Unit 3: Functional Programming",
                "topics": [
                    {
                        "title": "3.1 Lambda, Map, Filter",
                        "content": "# Functional Tools\n\n## 1. Lambda (Anonymous Functions)\n```python\nadd = lambda x, y: x + y\n```\n\n## 2. Map\nApply function to every item.\n```python\nnums = [1, 2, 3]\ndoubled = list(map(lambda x: x*2, nums))\n```\n\n## 3. Filter\nKeep items where specific condition is true.\n```python\nevens = list(filter(lambda x: x%2 == 0, nums))\n```"
                    },
                    {
                        "title": "3.2 Decorators (Interview Gold)",
                        "content": "# Decorators\n\n## Definition\nA function that takes another function and extends its behavior without modifying it.\n\n## Syntax (`@`)\n\n```python\ndef logger(func):\n    def wrapper():\n        print(\"Before running\")\n        func()\n        print(\"After running\")\n    return wrapper\n\n@logger\ndef say_hello():\n    print(\"Hello!\")\n\nsay_hello()\n```\n**Output:**\nBefore running\nHello!\nAfter running\n\n## Use Cases\n- Authorization (Login checks)\n- Logging\n- Timing execution speed"
                    }
                ]
            },
            {
                "title": "Unit 4: Advanced OOP Patterns",
                "topics": [
                    {
                        "title": "4.1 Dunder (Magic) Methods - Part 2",
                        "content": "# Magic Methods\nAllow your objects to behave like native Python types.\n\n## Common Ones\n- `__init__`: Constructor.\n- `__str__`: User friendly string representation.\n- `__repr__`: Developer friendly string.\n- `__add__`: Operator overloading (+).\n- `__len__`: support `len(obj)`.\n\n```python\nclass Vector:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n\nv1 = Vector(1, 2)\nv2 = Vector(3, 4)\nv3 = v1 + v2 # Works because of __add__\n```"
                    },
                    {
                        "title": "4.2 Inheritance & MRO",
                        "content": "# Inheritance\n\n## Method Resolution Order (MRO)\nPython supports Multiple Inheritance. MRO determines the order in which base classes are searched.\n\n```python\nclass A: pass\nclass B(A): pass\nclass C(A): pass\nclass D(B, C): pass\n\nprint(D.mro())\n# [D, B, C, A, object]\n```\nThis uses the C3 Linearization Algorithm."
                    }
                ]
            },
            {
                "title": "Unit 5: Error Handling & Context Managers",
                "topics": [
                    {
                        "title": "5.1 Advanced Exception Handling",
                        "content": "# Exception Handling\n\n## The `try-except-else-finally` Block\n\n```python\ntry:\n    result = 10 / x\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero\")\nelse:\n    print(\"Division successful:\", result)\nfinally:\n    print(\"Execution complete\") # Runs ALWAYS\n```\n\n## Custom Exceptions\n```python\nclass AgeError(Exception):\n    pass\n\nif age < 0: \n    raise AgeError(\"Age cannot be negative\")\n```"
                    },
                    {
                        "title": "5.2 Context Managers (with)",
                        "content": "# Context Managers\n\n## Why `with`?\nIt automatically handles resource cleanup (closing files, db connections) even if crashes occur.\n\n```python\n# The Pro way\nwith open('file.txt', 'r') as f:\n    content = f.read()\n# File is automatically closed here\n```\n\n## Under the hood\nAny class implementing `__enter__` and `__exit__` supports the `with` statement."
                    }
                ]
            },
            {
                "title": "Unit 6: Generators & Iterators",
                "topics": [
                    {
                        "title": "6.1 List Comprehensions",
                        "content": "# List Comprehensions\n\n## Pythonic Way to create lists.\n\n**Syntax:** `[expression for item in iterable if condition]`\n\n```python\n# Pro Way\nsquares = [x**2 for x in range(10) if x % 2 == 0]\n```\n\n## Dictionary Comprehension\n```python\nnames = ['Bruce', 'Clark']\nheros = ['Batman', 'Superman']\nmy_dict = {name: hero for name, hero in zip(names, heros)}\n```"
                    },
                    {
                        "title": "6.2 Generators (Yield)",
                        "content": "# Generators\n\n## 1. Why Generators?\nIf you need to process 1 Million records, loading a list consumes 100MB RAM. A generator consumes 1KB.\n\n## 2. Experience `yield`\n```python\ndef my_gen():\n    yield 1\n    yield 2\n    yield 3\n\ng = my_gen()\nprint(next(g)) # 1\nprint(next(g)) # 2\n```\n**Concept:** It \"pauses\" the function and saves state. `return` destroys state."
                    }
                ]
            },
            {
                "title": "Unit 7: Concurrency & AsyncIO",
                "topics": [
                    {
                        "title": "7.1 Threading vs Multiprocessing",
                        "content": "# Concurrency\n\n## 1. Threading (IO Bound)\nBest for: Network requests, File IO.\nLimited by GIL (Global Interpreter Lock).\n\n```python\nimport threading\nt = threading.Thread(target=print_nums)\nt.start()\n```\n\n## 2. Multiprocessing (CPU Bound)\nBest for: Heavy Math, Image Processing.\nCreates separate memory space. Bypasses GIL.\n\n```python\nfrom multiprocessing import Pool\nwith Pool(5) as p:\n    print(p.map(f, [1, 2, 3]))\n```"
                    },
                    {
                        "title": "7.2 AsyncIO",
                        "content": "# AsyncIO (Python 3.5+)\nSingle-threaded concurrency using `async` and `await`.\n\n```python\nimport asyncio\n\nasync def main():\n    print('Hello')\n    await asyncio.sleep(1)\n    print('World')\n\nasyncio.run(main())\n```\nThe modern standard for high-performance network apps (like FastAPI)."
                    }
                ]
            },
            {
                "title": "Unit 8: File Handling & JSON",
                "topics": [
                    {
                        "title": "8.1 Advanced File Operations",
                        "content": "# IO Operations\n\n## Reading Large Files\nDon't read all lines at once.\n\n```python\nwith open(\"huge_log.txt\") as f:\n    for line in f:\n        process(line)\n```\n\n## pathlib Module\nThe object-oriented way to handle paths (replaces `os.path`).\n```python\nfrom pathlib import Path\np = Path('.')\nprint(list(p.glob('**/*.py')))\n```"
                    },
                    {
                        "title": "8.2 JSON Handling",
                        "content": "# JSON Serialization\n\n```python\nimport json\n\ndata = {\"name\": \"Alice\", \"age\": 30}\n\n# Dict -> String\njson_str = json.dumps(data)\n\n# String -> Dict\nparsed = json.loads(json_str)\n```"
                    }
                ]
            },
            {
                "title": "Unit 9: Testing & Debugging",
                "topics": [
                    {
                        "title": "9.1 Unit Testing",
                        "content": "# Testing\n\n## unittest Module\nBuilt-in standard library.\n\n```python\nimport unittest\n\nclass TestMath(unittest.TestCase):\n    def test_add(self):\n        self.assertEqual(1 + 1, 2)\n\nif __name__ == '__main__':\n    unittest.main()\n```"
                    },
                    {
                        "title": "9.2 Debugging",
                        "content": "# Debugging Tips\n\n## 1. pdb (Python Debugger)\n`import pdb; pdb.set_trace()` pauses execution so you can inspect variables.\n\n## 2. Type Hinting\nUse `mypy` for static analysis.\n```python\ndef greeting(name: str) -> str:\n    return 'Hello ' + name\n```"
                    }
                ]
            },
            {
                "title": "Unit 10: Databases (SQL logic)",
                "topics": [
                    {
                        "title": "10.1 SQLite Integration",
                        "content": "# SQLite 3\nPython has `sqlite3` built-in.\n\n```python\nimport sqlite3\ncon = sqlite3.connect('example.db')\ncur = con.cursor()\ncur.execute('CREATE TABLE stocks (date, trans, symbol)')\ncon.commit()\n```"
                    },
                    {
                        "title": "10.2 ORM Concepts",
                        "content": "# ORM (Object Relational Mapping)\nMapping Python Classes to Database Tables.\n**Poplar Libraries:** SQLAlchemy, Django ORM.\n\nPrevents SQL Injection attacks automatically."
                    }
                ]
            },
            {
                "title": "Unit 11: Web Frameworks",
                "topics": [
                    {
                        "title": "11.1 Flask vs Django vs FastAPI",
                        "content": "# Framework Wars\n\n## 1. Django\n- **Philosophy:** \"Batteries Included\".\n- **Best For:** Enterprise apps, CMS, E-commerce.\n- **Pros:** Admin panel built-in, ORM built-in.\n\n## 2. Flask\n- **Philosophy:** \"Micro-framework\".\n- **Best For:** Small services, learning.\n\n## 3. FastAPI\n- **Philosophy:** Modern, Fast, Async.\n- **Best For:** Machine Learning APIs, High concurrency.\n- **Feature:** Auto-generates Swagger UI."
                    }
                ]
            },
            {
                "title": "Unit 12: Job Ready Skills",
                "topics": [
                    {
                        "title": "12.1 Virtual Environments",
                        "content": "# Virtual Environments\n\n**Problem:** Project A needs Lib version 1.0. Project B needs Lib version 2.0.\n**Solution:** Isolate dependencies.\n\n```bash\n# Create\npython -m venv venv\n\n# Activate (Windows)\nvenv\\Scripts\\activate\n\n# Install\npip install requests\n```"
                    },
                    {
                        "title": "12.2 Interview Q&A (Top 5)",
                        "content": "# Top 5 Questions\n\n1.  **Q: Difference between `is` and `==`?**\n    - A: `is` checks memory address identity. `==` checks value equality.\n\n2.  **Q: Explain the Global Interpreter Lock (GIL).**\n    - A: Mutex that protects access to Python objects, preventing multiple threads from executing Python bytecodes at once.\n\n3.  **Q: What is `*args` and `**kwargs`?**\n    - A: Variable length arguments. `*args` is tuple, `**kwargs` is dict.\n\n4.  **Q: How is memory managed?**\n    - A: Private heap space + Reference counting garbage collection.\n\n5.  **Q: What are Decorators?**\n    - A: Functions that modify the functionality of other functions."
                    }
                ]
            }
        ]
    }
];

// Combine base notes with modular subject files
const allNotes = [
    ...notesData,
    operatingSystems,
    dataStructures,
    softwareEngineering,
    cloudComputing,
    cyberSecurity,
    generativeAI,
    machineLearning,
    discreteMath
];

export default allNotes;