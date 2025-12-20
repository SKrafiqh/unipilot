/**
 * Operating Systems - Complete Subject Notes
 * Master Course covering Process, Memory, File Systems, and Security
 */

const operatingSystems = {
    id: "os",
    title: "Operating Systems (Complete)",
    description: "Master OS concepts from Process Management to Security. Covers scheduling, memory management, file systems, and deadlocks.",
    color: "#fce4ec",
    lastUpdated: "2025-01-20",
    units: [
        {
            title: "Unit 1: Introduction & Process Management",
            topics: [
                {
                    title: "1.1 Operating System Fundamentals",
                    content: `# Operating System Fundamentals

## 1. What is an Operating System?
An **Operating System (OS)** is system software that manages computer hardware, software resources, and provides common services for computer programs.

## 2. Functions of an OS
- **Process Management**: Creating, scheduling, and terminating processes
- **Memory Management**: Allocating and deallocating memory
- **File System Management**: Managing files and directories
- **I/O Management**: Controlling input/output devices
- **Security & Protection**: User authentication and access control

## 3. Types of Operating Systems

| Type | Description | Example |
|------|-------------|---------|
| **Batch OS** | Jobs processed in batches | Early IBM systems |
| **Time-Sharing** | CPU time shared among users | Unix |
| **Real-Time OS** | Guaranteed response time | VxWorks, QNX |
| **Distributed OS** | Multiple computers work together | LOCUS |
| **Embedded OS** | For specific devices | FreeRTOS |

## 4. System Calls
Interface between user programs and OS kernel.

\`\`\`c
// Example: fork() system call
pid_t pid = fork();
if (pid == 0) {
    // Child process
} else {
    // Parent process
}
\`\`\`

### Categories of System Calls
1. **Process Control**: fork(), exec(), exit(), wait()
2. **File Management**: open(), read(), write(), close()
3. **Device Management**: ioctl(), read(), write()
4. **Information Maintenance**: getpid(), alarm(), sleep()
5. **Communication**: pipe(), shmget(), mmap()

## 5. Kernel vs User Mode
- **Kernel Mode**: Full hardware access, privileged instructions
- **User Mode**: Restricted access, uses system calls for services

## Exam Points
- Define OS and list its 5 main functions
- Differentiate between Monolithic and Microkernel architecture
- Explain the role of system calls with examples`
                },
                {
                    title: "1.2 Process Concept & States",
                    content: `# Process Concept & States

## 1. What is a Process?
A **process** is a program in execution. It includes:
- Program code (text section)
- Current activity (program counter, registers)
- Stack (temporary data)
- Data section (global variables)
- Heap (dynamically allocated memory)

## 2. Process vs Program

| Program | Process |
|---------|---------|
| Passive entity (file on disk) | Active entity |
| Static | Dynamic |
| No resources | Has CPU, memory, I/O |

## 3. Process States

\`\`\`
      admit          interrupt
NEW ---------> READY <---------> RUNNING -----> TERMINATED
                 ^                  |     exit
                 |                  v
                 +--- WAITING <-----+
                      I/O complete   I/O wait
\`\`\`

### State Descriptions
- **New**: Process being created
- **Ready**: Waiting for CPU allocation
- **Running**: Instructions being executed
- **Waiting/Blocked**: Waiting for I/O or event
- **Terminated**: Finished execution

## 4. Process Control Block (PCB)
Data structure containing process information:
- Process ID (PID)
- Process State
- Program Counter
- CPU Registers
- Memory Management Info
- I/O Status
- Accounting Information

## 5. Context Switch
Saving state of current process and loading state of next process.
**Overhead**: Context switching is pure overhead (no useful work done).

## Exam Points
- Draw and explain the 5-state process diagram
- What information is stored in PCB?
- Why is context switching considered overhead?`
                },
                {
                    title: "1.3 CPU Scheduling Algorithms",
                    content: `# CPU Scheduling Algorithms

## 1. Scheduling Criteria
- **CPU Utilization**: Keep CPU busy (40-90%)
- **Throughput**: Processes completed per time unit
- **Turnaround Time**: Total time from submission to completion
- **Waiting Time**: Time spent in ready queue
- **Response Time**: Time from submission to first response

## 2. Scheduling Algorithms

### A. First-Come, First-Served (FCFS)
- **Non-preemptive**
- Simple but suffers from **Convoy Effect**
- Example: P1(24ms), P2(3ms), P3(3ms)
  - Waiting: P1=0, P2=24, P3=27
  - Average Waiting Time = (0+24+27)/3 = 17ms

### B. Shortest Job First (SJF)
- **Optimal** for minimizing average waiting time
- Requires knowing burst time in advance
- Can be preemptive (SRTF) or non-preemptive

### C. Priority Scheduling
- Each process has a priority
- **Problem**: Starvation of low-priority processes
- **Solution**: Aging (increase priority over time)

### D. Round Robin (RR)
- **Preemptive** with time quantum (q)
- Fair distribution of CPU
- If q too large → FCFS
- If q too small → Too much context switching

\`\`\`
Example: Time Quantum = 4ms
P1(24), P2(3), P3(3)

Gantt Chart:
|P1|P2|P3|P1|P1|P1|P1|P1|
0  4  7 10 14 18 22 26 30
\`\`\`

### E. Multilevel Queue Scheduling
- Multiple queues with different priorities
- Each queue can have its own algorithm

### F. Multilevel Feedback Queue
- Processes can move between queues
- Prevents starvation

## 3. Comparison Table

| Algorithm | Preemptive | Starvation | Optimal |
|-----------|------------|------------|---------|
| FCFS | No | No | No |
| SJF | Optional | Yes | Yes (waiting) |
| Priority | Optional | Yes | No |
| Round Robin | Yes | No | No |

## Exam Points
- Calculate average waiting time for FCFS, SJF, RR
- Explain convoy effect in FCFS
- What is the effect of time quantum in Round Robin?`
                }
            ]
        },
        {
            title: "Unit 2: Process Synchronization",
            topics: [
                {
                    title: "2.1 Critical Section Problem",
                    content: `# Critical Section Problem

## 1. The Problem
When multiple processes access shared data concurrently, the outcome depends on the order of execution (**race condition**).

## 2. Critical Section
A segment of code where shared variables are accessed.

\`\`\`
do {
    [ENTRY SECTION]
    
    CRITICAL SECTION
    
    [EXIT SECTION]
    
    REMAINDER SECTION
} while (true);
\`\`\`

## 3. Requirements for Solution
1. **Mutual Exclusion**: Only one process in CS at a time
2. **Progress**: If no process in CS, selection can't be postponed indefinitely
3. **Bounded Waiting**: Limit on number of times others can enter before a requesting process

## 4. Peterson's Solution (Software)
For 2 processes:
\`\`\`c
int turn;
bool flag[2];

// Process i
flag[i] = true;
turn = j;
while (flag[j] && turn == j);
// CRITICAL SECTION
flag[i] = false;
\`\`\`

## 5. Hardware Solutions
- **Test-and-Set**: Atomic instruction
- **Compare-and-Swap**: Atomic comparison and swap

## Exam Points
- State the 3 requirements for CS solution
- Prove Peterson's solution satisfies all requirements
- What is a race condition? Give an example.`
                },
                {
                    title: "2.2 Semaphores",
                    content: `# Semaphores

## 1. Definition
A **semaphore** is a synchronization tool with an integer variable accessed only through atomic operations: **wait()** and **signal()**.

## 2. Types

### Binary Semaphore (Mutex)
Value: 0 or 1
\`\`\`c
wait(S) {
    while (S <= 0); // busy wait
    S--;
}

signal(S) {
    S++;
}
\`\`\`

### Counting Semaphore
Value: Any non-negative integer
Used for resource allocation with multiple instances.

## 3. Usage Pattern
\`\`\`c
// Process
wait(mutex);
// CRITICAL SECTION
signal(mutex);
\`\`\`

## 4. Problems with Semaphores
- **Deadlock**: Two or more processes waiting forever
- **Starvation**: A process never gets to execute
- **Priority Inversion**: Low-priority holds lock needed by high-priority

## 5. Classic Problems

### Producer-Consumer
\`\`\`c
semaphore mutex = 1;
semaphore empty = N;  // empty buffer slots
semaphore full = 0;   // filled slots

// Producer
wait(empty);
wait(mutex);
// add item
signal(mutex);
signal(full);

// Consumer
wait(full);
wait(mutex);
// remove item
signal(mutex);
signal(empty);
\`\`\`

## Exam Points
- Difference between binary and counting semaphore
- Solve Producer-Consumer using semaphores
- What is busy waiting and how to avoid it?`
                },
                {
                    title: "2.3 Deadlock",
                    content: `# Deadlock

## 1. Definition
A set of processes is deadlocked when every process is waiting for a resource held by another process in the set.

## 2. Necessary Conditions (Coffman)
All FOUR must hold simultaneously:
1. **Mutual Exclusion**: Resource held exclusively
2. **Hold and Wait**: Holding one, waiting for another
3. **No Preemption**: Resources can't be forcibly taken
4. **Circular Wait**: P1→P2→P3→P1

## 3. Resource Allocation Graph (RAG)
- Process: Circle, Resource: Square
- Request Edge: Pi → Rj
- Assignment Edge: Rj → Pi
- **Cycle = Possible Deadlock** (definitely if single instance)

## 4. Deadlock Handling

### A. Prevention
Break one of the 4 conditions:
- No Hold & Wait: Request all resources at once
- No Circular Wait: Order resources numerically

### B. Avoidance (Banker's Algorithm)
System checks if allocation leads to safe state.
\`\`\`
Safe State: Exists a sequence <P1, P2, ...>
where each Pi can finish with available + released resources.
\`\`\`

### C. Detection
Periodically run detection algorithm.
If detected: Terminate processes or preempt resources.

### D. Ignorance (Ostrich Algorithm)
Pretend deadlocks don't occur (used by most OS).

## 5. Banker's Algorithm Example
Available: [3,3,2]
Max: P0[7,5,3], P1[3,2,2], P2[9,0,2]
Allocation: P0[0,1,0], P1[2,0,0], P2[3,0,2]

Need = Max - Allocation
Safe sequence: <P1, P0, P2>

## Exam Points
- State and explain 4 necessary conditions
- Draw Resource Allocation Graph for given scenario
- Apply Banker's algorithm to find safe sequence`
                }
            ]
        },
        {
            title: "Unit 3: Memory Management",
            topics: [
                {
                    title: "3.1 Memory Allocation Strategies",
                    content: `# Memory Allocation Strategies

## 1. Contiguous Allocation
Each process gets a single contiguous block of memory.

### Fixed Partitioning
- Memory divided into fixed-size partitions
- **Internal Fragmentation**: Wasted space within partition

### Variable Partitioning
- Partitions created dynamically
- **External Fragmentation**: Scattered free memory

### Allocation Algorithms
- **First Fit**: First hole big enough (Fast)
- **Best Fit**: Smallest hole big enough (Least waste)
- **Worst Fit**: Largest hole (Creates largest leftover)

\`\`\`
Memory: [  20KB  ][  10KB  ][  40KB  ][  25KB  ]
Request: 15KB

First Fit: Uses 20KB hole → 5KB left
Best Fit: Uses 20KB hole → 5KB left
Worst Fit: Uses 40KB hole → 25KB left
\`\`\`

## 2. Non-Contiguous Allocation

### Paging
- Physical memory: Frames (fixed size)
- Logical memory: Pages (same size as frames)
- **Page Table**: Maps pages to frames
- **No external fragmentation**
- May have internal fragmentation (last page)

### Page Table Entry
| Frame Number | Valid Bit | Protection Bits | Dirty Bit |

### Address Translation
Logical Address = Page Number + Offset
Physical Address = Frame Number + Offset

\`\`\`
Page Size = 4KB = 2^12
Logical Address: 8192 (decimal)

Page Number = 8192 / 4096 = 2
Offset = 8192 % 4096 = 0

If Page 2 maps to Frame 5:
Physical Address = 5 * 4096 + 0 = 20480
\`\`\`

## Exam Points
- Compare First Fit, Best Fit, Worst Fit
- Calculate physical address from logical address
- Difference between internal and external fragmentation`
                },
                {
                    title: "3.2 Virtual Memory & Paging",
                    content: `# Virtual Memory & Demand Paging

## 1. Virtual Memory
Allows execution of processes not completely in memory.
- Larger logical address space than physical
- Only needed pages loaded into memory
- Uses disk as extension of RAM

## 2. Demand Paging
Pages loaded only when needed (lazy loading).

### Page Fault
When referenced page is not in memory:
1. Check page table (valid bit = 0)
2. Trap to OS
3. Find free frame
4. Load page from disk
5. Update page table
6. Restart instruction

## 3. Page Replacement Algorithms

### A. FIFO (First-In, First-Out)
Replace oldest page.
**Problem**: Belady's Anomaly (more frames → more faults)

### B. Optimal (OPT)
Replace page not used for longest time.
**Theoretical best** (requires future knowledge)

### C. LRU (Least Recently Used)
Replace page unused for longest time.
Approximations: Clock algorithm, Second-chance

### Example
Reference String: 7,0,1,2,0,3,0,4,2,3
Frames = 3

\`\`\`
FIFO: 
7 0 1 2 0 3 0 4 2 3
[7][ ][ ] → [7][0][ ] → [7][0][1] → [2][0][1] ...
Page Faults: 6

LRU:
[7][ ][ ] → [7][0][ ] → [7][0][1] → [2][0][1] → [2][0][3]...
Page Faults: 5
\`\`\`

## 4. Thrashing
When a process spends more time paging than executing.
- **Cause**: Too many processes, too little memory
- **Solution**: Working set model, page fault frequency

## Exam Points
- Compare FIFO, OPT, LRU with example
- What is Belady's Anomaly?
- Explain thrashing and its solution`
                }
            ]
        },
        {
            title: "Unit 4: File Systems",
            topics: [
                {
                    title: "4.1 File System Structure",
                    content: `# File System Structure

## 1. File Concept
A **file** is a named collection of related information recorded on secondary storage.

### File Attributes
- Name, Type, Location, Size
- Protection, Time/Date/User ID

### File Operations
- Create, Delete, Open, Close
- Read, Write, Reposition (Seek)

## 2. Directory Structure

### Single-Level
All files in one directory.
**Problem**: Naming conflicts

### Two-Level
Separate directory for each user.
User File Directory (UFD)

### Tree Structure
Hierarchical directories.
Absolute path: /home/user/docs/file.txt
Relative path: ./docs/file.txt

### Acyclic Graph
Allows sharing via links.
- Hard link: Multiple directory entries
- Soft link: Pointer to another file

## 3. File Allocation Methods

### Contiguous Allocation
Files stored in consecutive blocks.
| File | Start | Length |
|------|-------|--------|
| A | 0 | 3 |
| B | 4 | 2 |

**Pros**: Fast sequential/random access
**Cons**: External fragmentation, file growth problem

### Linked Allocation
Each block points to next.
\`\`\`
Directory: File A → Block 9
Block 9 → Block 16 → Block 1 → Block 10 → null
\`\`\`
**Pros**: No fragmentation
**Cons**: Slow random access, pointer overhead

### Indexed Allocation
Index block contains all pointers.
\`\`\`
Index Block [100]:
[0] → 9
[1] → 16
[2] → 1
[3] → 10
\`\`\`
**Pros**: Direct access
**Cons**: Index block overhead

## 4. Unix i-node
- 12 direct block pointers
- 1 single indirect
- 1 double indirect
- 1 triple indirect

## Exam Points
- Compare 3 allocation methods
- Draw i-node structure
- Explain hard vs soft links`
                }
            ]
        },
        {
            title: "Unit 5: I/O Systems",
            topics: [
                {
                    title: "5.1 Disk Scheduling",
                    content: `# Disk Scheduling Algorithms

## 1. Disk Structure
- **Platters**: Multiple circular plates
- **Tracks**: Concentric circles on platter
- **Sectors**: Segments of tracks
- **Cylinder**: Same track on all platters

## 2. Access Time Components
**Access Time = Seek Time + Rotational Latency + Transfer Time**

- Seek Time: Moving head to correct track (dominant factor)
- Rotational Latency: Waiting for sector rotation
- Transfer Time: Actually reading data

## 3. Disk Scheduling Algorithms

### A. FCFS (First-Come, First-Served)
Process requests in arrival order.
\`\`\`
Queue: 98, 183, 37, 122, 14, 124, 65, 67
Head at 53

Movement: 53→98→183→37→122→14→124→65→67
Total = 45+85+146+85+108+110+59+2 = 640 cylinders
\`\`\`

### B. SSTF (Shortest Seek Time First)
Service closest request first.
\`\`\`
53→65→67→37→14→98→122→124→183
Total = 12+2+30+23+84+24+2+59 = 236 cylinders
\`\`\`
**Problem**: Starvation of far requests

### C. SCAN (Elevator)
Move in one direction servicing all, then reverse.
\`\`\`
53→37→14→0→65→67→98→122→124→183
\`\`\`

### D. C-SCAN (Circular SCAN)
Move in one direction, jump back to start.
More uniform wait time.

### E. LOOK / C-LOOK
Like SCAN but only go as far as last request (don't go to end).

## 4. Comparison

| Algorithm | Seek Distance | Starvation | Fair |
|-----------|--------------|------------|------|
| FCFS | High | No | Yes |
| SSTF | Low | Yes | No |
| SCAN | Medium | No | Yes |
| C-SCAN | Medium | No | More |

## Exam Points
- Calculate total head movement for given queue
- Why is C-SCAN more fair than SCAN?
- Compare SSTF and LOOK algorithms`
                }
            ]
        },
        {
            title: "Unit 6: Security & Protection",
            topics: [
                {
                    title: "6.1 Security Mechanisms",
                    content: `# Security & Protection

## 1. Security vs Protection
- **Protection**: Internal mechanisms (who can do what)
- **Security**: Defense against external attacks

## 2. Authentication
Verifying identity.

### Password-Based
- Hashed passwords (not plain text)
- Salt to prevent rainbow table attacks

### Multi-Factor (MFA)
- Something you know (password)
- Something you have (phone)
- Something you are (fingerprint)

## 3. Access Control

### Access Matrix
|       | File1 | File2 | Printer |
|-------|-------|-------|---------|
| User1 | R,W   | R     | Print   |
| User2 | R     | R,W   | -       |

### Access Control List (ACL)
Per-object list of (user, permissions).

### Capability List
Per-user list of (object, permissions).

## 4. Common Attacks
- **Buffer Overflow**: Writing beyond buffer bounds
- **SQL Injection**: Malicious SQL in input
- **DDoS**: Overwhelming with traffic
- **Phishing**: Social engineering

## 5. Encryption
- **Symmetric**: Same key (AES, DES)
- **Asymmetric**: Public/Private keys (RSA)

## Exam Points
- Differentiate protection vs security
- Explain access matrix with example
- What is buffer overflow and how to prevent it?`
                }
            ]
        }
    ]
};

export default operatingSystems;
