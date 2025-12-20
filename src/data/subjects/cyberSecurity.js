/**
 * Cyber Security - Complete Subject Notes
 * Covers Network Security, Cryptography, Ethical Hacking, and Security Practices
 */

const cyberSecurity = {
    id: "cybersec",
    title: "Cyber Security",
    description: "Master cybersecurity: Network security, cryptography, ethical hacking, and defense strategies.",
    color: "#ffebee",
    lastUpdated: "2025-01-20",
    units: [
        {
            title: "Unit 1: Security Fundamentals",
            topics: [
                {
                    title: "1.1 Introduction to Cyber Security",
                    content: `# Introduction to Cyber Security

## 1. What is Cyber Security?
The practice of protecting systems, networks, and programs from digital attacks.

## 2. CIA Triad
Core principles of information security:

### Confidentiality
Data accessible only to authorized users.
- Encryption
- Access controls
- Authentication

### Integrity
Data remains accurate and unaltered.
- Checksums
- Digital signatures
- Version control

### Availability
Systems and data accessible when needed.
- Redundancy
- Backups
- DDoS protection

## 3. Types of Security

| Type | Focus |
|------|-------|
| **Network Security** | Firewalls, IDS/IPS |
| **Application Security** | Secure coding, testing |
| **Information Security** | Data protection |
| **Operational Security** | Processes, training |
| **Cloud Security** | Cloud-specific measures |

## 4. Common Threats

### Malware Types
- **Virus**: Attaches to programs, spreads on execution
- **Worm**: Self-replicating, spreads without user action
- **Trojan**: Disguised as legitimate software
- **Ransomware**: Encrypts data, demands payment
- **Spyware**: Secretly monitors activity

### Attack Vectors
- Phishing emails
- Malicious websites
- Unpatched software
- Social engineering
- Insider threats

## Exam Points
- Explain CIA triad with examples
- List 5 types of malware
- What is defense in depth?`
                },
                {
                    title: "1.2 Network Security Basics",
                    content: `# Network Security

## 1. Firewalls
Filter network traffic based on rules.

### Types
| Type | Description |
|------|-------------|
| **Packet Filter** | Examines headers (IP, port) |
| **Stateful** | Tracks connection state |
| **Application** | Deep packet inspection |
| **Next-Gen (NGFW)** | Includes IPS, threat intelligence |

### Rule Example
\`\`\`
# Allow HTTP/HTTPS outbound
iptables -A OUTPUT -p tcp --dport 80 -j ACCEPT
iptables -A OUTPUT -p tcp --dport 443 -j ACCEPT

# Block all other outbound
iptables -A OUTPUT -j DROP
\`\`\`

## 2. IDS/IPS
**Intrusion Detection System**: Monitors and alerts
**Intrusion Prevention System**: Monitors and blocks

### Detection Methods
- **Signature-based**: Match known attack patterns
- **Anomaly-based**: Detect deviations from baseline
- **Heuristic**: Behavioral analysis

## 3. VPN (Virtual Private Network)
Encrypted tunnel over public network.

\`\`\`
[User] --encrypted-- [VPN Server] --regular-- [Internet]
\`\`\`

### Protocols
- **OpenVPN**: Open-source, secure
- **IPSec**: Native in many OS
- **WireGuard**: Modern, fast

## 4. Network Segmentation
Divide network into isolated zones.

\`\`\`
[Internet] → [DMZ] → [Firewall] → [Internal Network]
              ↓
          [Web Server]
\`\`\`

## Exam Points
- Compare IDS vs IPS
- How does VPN ensure security?
- Draw network segmentation diagram`
                }
            ]
        },
        {
            title: "Unit 2: Cryptography",
            topics: [
                {
                    title: "2.1 Symmetric & Asymmetric Encryption",
                    content: `# Cryptography

## 1. Symmetric Key Encryption
Same key for encryption and decryption.

### Algorithms
| Algorithm | Key Size | Status |
|-----------|----------|--------|
| DES | 56-bit | Broken |
| 3DES | 168-bit | Legacy |
| AES | 128/192/256-bit | Standard |
| ChaCha20 | 256-bit | Modern |

### AES (Advanced Encryption Standard)
- Block cipher (128-bit blocks)
- Key sizes: 128, 192, or 256 bits
- Used everywhere: HTTPS, disk encryption

\`\`\`python
from cryptography.fernet import Fernet
key = Fernet.generate_key()
cipher = Fernet(key)
encrypted = cipher.encrypt(b"Secret message")
\`\`\`

## 2. Asymmetric Key Encryption
Two keys: Public (encrypt) and Private (decrypt).

### RSA Algorithm
- Based on factoring large primes
- Key sizes: 2048 or 4096 bits
- Slower than symmetric

\`\`\`
Alice wants to send to Bob:
1. Bob generates public/private key pair
2. Bob shares public key
3. Alice encrypts with Bob's public key
4. Bob decrypts with his private key
\`\`\`

### Use Cases
- Key exchange
- Digital signatures
- SSL/TLS certificates

## 3. Hybrid Encryption
Combine both approaches:
1. Generate random symmetric key
2. Encrypt data with symmetric key (fast)
3. Encrypt symmetric key with public key
4. Send both encrypted parts

## 4. Comparison

| Aspect | Symmetric | Asymmetric |
|--------|-----------|------------|
| Speed | Fast | Slow |
| Key exchange | Difficult | Easy |
| Key count | 1 shared | 2 (pub/priv) |
| Use case | Bulk data | Key exchange |

## Exam Points
- Compare AES vs RSA
- Explain hybrid encryption
- Why is asymmetric slower?`
                },
                {
                    title: "2.2 Hashing & Digital Signatures",
                    content: `# Hashing & Digital Signatures

## 1. Hash Functions
One-way function producing fixed-size output.

### Properties
- **Deterministic**: Same input → same hash
- **Fast**: Quick computation
- **Avalanche effect**: Small change → completely different hash
- **Collision resistant**: Hard to find two inputs with same hash
- **Pre-image resistant**: Can't reverse to find input

### Common Hash Functions
| Algorithm | Output | Status |
|-----------|--------|--------|
| MD5 | 128-bit | Broken |
| SHA-1 | 160-bit | Deprecated |
| SHA-256 | 256-bit | Standard |
| SHA-3 | Variable | Latest |
| bcrypt | Variable | For passwords |

### Python Example
\`\`\`python
import hashlib
message = "Hello World"
hash_obj = hashlib.sha256(message.encode())
print(hash_obj.hexdigest())
# a591a6d40bf420404a011733cfb7b190...
\`\`\`

## 2. Password Storage
Never store plain passwords!

### Best Practice
\`\`\`python
import bcrypt
# Hash password
hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt())

# Verify
if bcrypt.checkpw(input_pw.encode(), hashed):
    print("Login successful")
\`\`\`

## 3. Digital Signatures
Prove authenticity and integrity.

### Process
\`\`\`
Signing:
1. Hash the message
2. Encrypt hash with sender's PRIVATE key
3. Attach signature to message

Verifying:
1. Decrypt signature with sender's PUBLIC key
2. Hash received message
3. Compare hashes
\`\`\`

### Applications
- Code signing
- Email signing (S/MIME)
- Document signing
- SSL certificates

## 4. Certificates (PKI)
Digital certificate = Public key + Identity + CA signature

\`\`\`
Certificate Authority (CA)
        ↓ (signs)
Server Certificate
        ↓ (contains)
Public Key + Domain Name
\`\`\`

## Exam Points
- Why use bcrypt for passwords?
- Explain digital signature process
- What is a Certificate Authority?`
                }
            ]
        },
        {
            title: "Unit 3: Web Application Security",
            topics: [
                {
                    title: "3.1 OWASP Top 10",
                    content: `# OWASP Top 10 Vulnerabilities

## 1. Injection (A03:2021)
Untrusted data sent to interpreter.

### SQL Injection
\`\`\`sql
-- Vulnerable query
SELECT * FROM users WHERE name = '$input'

-- Attack input: ' OR '1'='1
-- Becomes: SELECT * FROM users WHERE name = '' OR '1'='1'
\`\`\`

### Prevention
\`\`\`python
# Use parameterized queries
cursor.execute("SELECT * FROM users WHERE name = %s", (input,))
\`\`\`

## 2. Broken Authentication (A07:2021)
Weak session management, credential stuffing.

### Prevention
- Multi-factor authentication
- Rate limiting
- Secure session handling
- Password policies

## 3. Cross-Site Scripting (XSS)
Inject malicious scripts into web pages.

### Types
- **Reflected**: URL parameter echoed back
- **Stored**: Script saved in database
- **DOM-based**: Client-side manipulation

### Attack
\`\`\`html
<!-- Vulnerable -->
<div>Hello, <?php echo $_GET['name']; ?></div>

<!-- Attack URL -->
example.com?name=<script>steal(document.cookie)</script>
\`\`\`

### Prevention
- Output encoding
- Content Security Policy (CSP)
- HTTPOnly cookies

## 4. Insecure Direct Object References (A01:2021)
Access objects without authorization.

\`\`\`
# Attacker changes ID
/api/users/123  → GET own profile
/api/users/124  → GET someone else's profile!
\`\`\`

### Prevention
- Authorization checks on every request
- Indirect references (tokens instead of IDs)

## 5. Security Misconfiguration (A05:2021)
- Default credentials
- Unnecessary features enabled
- Missing security headers
- Verbose error messages

## 6. Cross-Site Request Forgery (CSRF)
Trick authenticated user into unwanted action.

### Attack
\`\`\`html
<!-- Malicious site -->
<img src="https://bank.com/transfer?to=attacker&amount=1000">
\`\`\`

### Prevention
- CSRF tokens
- SameSite cookies
- Re-authentication for sensitive actions

## Exam Points
- Explain SQL injection with example
- Difference between XSS types
- How do CSRF tokens work?`
                },
                {
                    title: "3.2 Secure Development Practices",
                    content: `# Secure Development Practices

## 1. SDLC Security Integration

\`\`\`
Requirements → Threat Modeling
Design → Security Architecture
Development → Secure Coding
Testing → Security Testing
Deployment → Security Configuration
\`\`\`

## 2. Input Validation
Never trust user input.

### Whitelist Approach
\`\`\`python
# Only allow alphanumeric
import re
if not re.match("^[a-zA-Z0-9]+$", user_input):
    raise ValidationError("Invalid input")
\`\`\`

### Sanitization
\`\`\`python
# HTML encode output
from html import escape
safe_output = escape(user_input)
\`\`\`

## 3. Authentication Best Practices
- Use established libraries (don't roll your own)
- Hash passwords with bcrypt/Argon2
- Implement account lockout
- Use MFA for sensitive operations
- Secure password reset flow

## 4. Authorization
### RBAC (Role-Based Access Control)
\`\`\`python
@require_role(["admin", "manager"])
def delete_user(user_id):
    # Only admins and managers can delete
    pass
\`\`\`

## 5. Security Headers
\`\`\`
Content-Security-Policy: default-src 'self'
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Strict-Transport-Security: max-age=31536000
\`\`\`

## 6. Dependency Management
- Keep dependencies updated
- Use vulnerability scanners (Snyk, npm audit)
- Verify package integrity
- Minimize dependencies

## 7. Logging & Monitoring
\`\`\`python
# Log security events
logger.warning(f"Failed login attempt for user: {username}")
logger.error(f"Unauthorized access attempt to: {resource}")
\`\`\`

### What to Log
- Authentication attempts
- Access to sensitive data
- Errors and exceptions
- Admin actions

## Exam Points
- List 5 security headers
- What is the principle of least privilege?
- Why use dependency scanning?`
                }
            ]
        },
        {
            title: "Unit 4: Ethical Hacking & Penetration Testing",
            topics: [
                {
                    title: "4.1 Penetration Testing Methodology",
                    content: `# Penetration Testing

## 1. What is Penetration Testing?
Authorized simulated attack to evaluate security.

## 2. Types of Testing

| Type | Knowledge Level |
|------|-----------------|
| **Black Box** | No prior knowledge |
| **White Box** | Full access/info |
| **Gray Box** | Partial info |

## 3. Methodology (PTES)

### 1. Pre-engagement
- Scope definition
- Rules of engagement
- Legal authorization

### 2. Reconnaissance (Info Gathering)

#### Passive
- OSINT (Open Source Intelligence)
- WHOIS lookup
- Google dorking
- Social media

#### Active
- Port scanning
- Service enumeration
- Vulnerability scanning

\`\`\`bash
# Nmap scan
nmap -sV -sC target.com
\`\`\`

### 3. Vulnerability Assessment
Identify weaknesses:
- Outdated software
- Misconfigurations
- Weak passwords
- Missing patches

### 4. Exploitation
Attempt to exploit vulnerabilities:
- Manual testing
- Metasploit framework
- Custom exploits

### 5. Post-Exploitation
After gaining access:
- Privilege escalation
- Lateral movement
- Data exfiltration (demo)
- Persistence

### 6. Reporting
- Executive summary
- Technical findings
- Risk ratings
- Remediation recommendations

## 4. Common Tools

| Tool | Purpose |
|------|---------|
| Nmap | Port scanning |
| Burp Suite | Web testing |
| Metasploit | Exploitation |
| Wireshark | Traffic analysis |
| John the Ripper | Password cracking |
| SQLMap | SQL injection |

## Exam Points
- Explain 6 phases of penetration testing
- Difference between black box and white box
- What is Metasploit?`
                }
            ]
        },
        {
            title: "Unit 5: Incident Response & Security Operations",
            topics: [
                {
                    title: "5.1 Incident Response Process",
                    content: `# Incident Response

## 1. What is an Incident?
Security event that threatens confidentiality, integrity, or availability.

## 2. IR Phases (NIST)

### 1. Preparation
- IR team formation
- Playbooks development
- Tool setup
- Training

### 2. Detection & Analysis
- Monitor alerts (SIEM)
- Investigate anomalies
- Determine scope
- Initial classification

### 3. Containment
- **Short-term**: Isolate affected systems
- **Long-term**: Apply patches, strengthen controls

### 4. Eradication
- Remove malware
- Close vulnerabilities
- Reset compromised credentials

### 5. Recovery
- Restore systems from backup
- Monitor closely
- Gradual return to production

### 6. Lessons Learned
- What happened?
- How did we detect it?
- What could be improved?
- Document everything

## 3. SIEM (Security Information & Event Management)
Centralized logging and analysis.

### Components
- Log collection
- Event correlation
- Alerting
- Dashboards

### Popular SIEMs
- Splunk
- Elastic SIEM (ELK)
- Azure Sentinel
- QRadar

## 4. SOC (Security Operations Center)
24/7 security monitoring team.

### SOC Tiers
| Tier | Role |
|------|------|
| Tier 1 | Alert monitoring, triage |
| Tier 2 | Incident investigation |
| Tier 3 | Advanced analysis, threat hunting |

## 5. Key Metrics
- **MTTD** (Mean Time to Detect)
- **MTTR** (Mean Time to Respond)
- **False positive rate**
- **Incidents per month**

## Exam Points
- List 6 IR phases
- What is a SIEM?
- Explain SOC tier structure`
                }
            ]
        }
    ]
};

export default cyberSecurity;
