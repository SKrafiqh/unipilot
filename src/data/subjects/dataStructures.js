/**
 * Data Structures & Algorithms - Complete Subject Notes
 * Master Course covering Arrays to Graphs, Sorting to Dynamic Programming
 */

const dataStructures = {
    id: "dsa",
    title: "Data Structures & Algorithms",
    description: "Complete DSA course from Arrays to Graphs. Includes time complexity, sorting, searching, trees, graphs, and dynamic programming.",
    color: "#e8eaf6",
    lastUpdated: "2025-01-20",
    units: [
        {
            title: "Unit 1: Complexity Analysis & Arrays",
            topics: [
                {
                    title: "1.1 Time & Space Complexity",
                    content: `# Time & Space Complexity

## 1. Why Complexity Analysis?
To compare algorithms independent of hardware/software.

## 2. Big-O Notation
Describes the **upper bound** (worst case) of an algorithm.

### Common Complexities (Best to Worst)
| Notation | Name | Example |
|----------|------|---------|
| O(1) | Constant | Array access |
| O(log n) | Logarithmic | Binary Search |
| O(n) | Linear | Linear Search |
| O(n log n) | Linearithmic | Merge Sort |
| O(n²) | Quadratic | Bubble Sort |
| O(2ⁿ) | Exponential | Fibonacci (naive) |
| O(n!) | Factorial | Permutations |

## 3. Calculating Time Complexity

\`\`\`python
# O(n) - Single loop
for i in range(n):
    print(i)

# O(n²) - Nested loops
for i in range(n):
    for j in range(n):
        print(i, j)

# O(log n) - Halving each time
while n > 0:
    n = n // 2
\`\`\`

## 4. Space Complexity
Memory used by algorithm.
- **O(1)**: Fixed variables
- **O(n)**: Array of size n
- **Recursion**: O(depth of call stack)

## 5. Best, Average, Worst Case
- **Best Case (Ω)**: Minimum time
- **Average Case (Θ)**: Expected time
- **Worst Case (O)**: Maximum time

## Exam Points
- Calculate complexity of given code
- Compare O(n log n) vs O(n²)
- Space complexity of recursive functions`
                },
                {
                    title: "1.2 Arrays & Two Pointer Technique",
                    content: `# Arrays & Two Pointer Technique

## 1. Array Basics
- **Contiguous memory** allocation
- **O(1)** access by index
- **O(n)** insertion/deletion (shifting required)

## 2. Common Operations
\`\`\`python
# Traversal - O(n)
for element in arr:
    process(element)

# Search - O(n) linear, O(log n) binary
def linear_search(arr, target):
    for i, val in enumerate(arr):
        if val == target:
            return i
    return -1
\`\`\`

## 3. Two Pointer Technique
Use two pointers to solve problems efficiently.

### Pattern 1: Opposite Ends
\`\`\`python
# Two Sum (sorted array)
def two_sum(arr, target):
    left, right = 0, len(arr) - 1
    while left < right:
        current_sum = arr[left] + arr[right]
        if current_sum == target:
            return [left, right]
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    return []
\`\`\`

### Pattern 2: Same Direction (Fast/Slow)
\`\`\`python
# Remove duplicates from sorted array
def remove_duplicates(arr):
    if not arr:
        return 0
    slow = 0
    for fast in range(1, len(arr)):
        if arr[fast] != arr[slow]:
            slow += 1
            arr[slow] = arr[fast]
    return slow + 1
\`\`\`

## 4. Sliding Window
Fixed or variable size window moving across array.

\`\`\`python
# Maximum sum of subarray of size k
def max_sum_subarray(arr, k):
    window_sum = sum(arr[:k])
    max_sum = window_sum
    for i in range(k, len(arr)):
        window_sum += arr[i] - arr[i-k]
        max_sum = max(max_sum, window_sum)
    return max_sum
\`\`\`

## Exam Points
- Implement Two Sum using two pointers
- Explain sliding window with example
- Time complexity of each operation`
                }
            ]
        },
        {
            title: "Unit 2: Linked Lists",
            topics: [
                {
                    title: "2.1 Singly & Doubly Linked Lists",
                    content: `# Linked Lists

## 1. Structure
\`\`\`python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None  # Singly

class DNode:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None  # Doubly
\`\`\`

## 2. Array vs Linked List

| Operation | Array | Linked List |
|-----------|-------|-------------|
| Access | O(1) | O(n) |
| Insert at beginning | O(n) | O(1) |
| Insert at end | O(1)* | O(n) or O(1)** |
| Delete | O(n) | O(1)*** |

*Amortized, **With tail pointer, ***Given node reference

## 3. Basic Operations
\`\`\`python
class LinkedList:
    def __init__(self):
        self.head = None
    
    def insert_at_beginning(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node
    
    def delete_node(self, key):
        curr = self.head
        if curr and curr.data == key:
            self.head = curr.next
            return
        while curr and curr.next:
            if curr.next.data == key:
                curr.next = curr.next.next
                return
            curr = curr.next
\`\`\`

## 4. Reverse a Linked List
\`\`\`python
def reverse(head):
    prev = None
    curr = head
    while curr:
        next_temp = curr.next
        curr.next = prev
        prev = curr
        curr = next_temp
    return prev
\`\`\`

## 5. Detect Cycle (Floyd's Algorithm)
\`\`\`python
def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False
\`\`\`

## Exam Points
- Implement insertion and deletion
- Reverse a linked list (iterative + recursive)
- Detect and find the start of cycle`
                }
            ]
        },
        {
            title: "Unit 3: Stacks & Queues",
            topics: [
                {
                    title: "3.1 Stack Implementation & Applications",
                    content: `# Stacks

## 1. Concept
**LIFO** - Last In, First Out

## 2. Operations
| Operation | Description | Time |
|-----------|-------------|------|
| push(x) | Add to top | O(1) |
| pop() | Remove from top | O(1) |
| peek()/top() | View top | O(1) |
| isEmpty() | Check if empty | O(1) |

## 3. Implementation
\`\`\`python
class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, item):
        self.items.append(item)
    
    def pop(self):
        if not self.is_empty():
            return self.items.pop()
    
    def peek(self):
        if not self.is_empty():
            return self.items[-1]
    
    def is_empty(self):
        return len(self.items) == 0
\`\`\`

## 4. Applications

### A. Balanced Parentheses
\`\`\`python
def is_balanced(s):
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    for char in s:
        if char in '({[':
            stack.append(char)
        elif char in ')}]':
            if not stack or stack[-1] != mapping[char]:
                return False
            stack.pop()
    return len(stack) == 0
\`\`\`

### B. Infix to Postfix
Infix: A + B * C
Postfix: A B C * +

### C. Function Call Stack
Recursion uses system call stack.

## Exam Points
- Implement stack using array
- Convert infix to postfix
- Evaluate postfix expression`
                },
                {
                    title: "3.2 Queue & Circular Queue",
                    content: `# Queues

## 1. Concept
**FIFO** - First In, First Out

## 2. Types
- **Simple Queue**: FIFO
- **Circular Queue**: Connects end to front
- **Priority Queue**: Highest priority first
- **Deque**: Insert/delete from both ends

## 3. Implementation
\`\`\`python
from collections import deque

class Queue:
    def __init__(self):
        self.items = deque()
    
    def enqueue(self, item):
        self.items.append(item)
    
    def dequeue(self):
        if not self.is_empty():
            return self.items.popleft()
    
    def front(self):
        if not self.is_empty():
            return self.items[0]
\`\`\`

## 4. Circular Queue
\`\`\`python
class CircularQueue:
    def __init__(self, k):
        self.queue = [None] * k
        self.size = k
        self.front = self.rear = -1
    
    def enqueue(self, val):
        if self.is_full():
            return False
        if self.front == -1:
            self.front = 0
        self.rear = (self.rear + 1) % self.size
        self.queue[self.rear] = val
        return True
    
    def is_full(self):
        return (self.rear + 1) % self.size == self.front
\`\`\`

## 5. Applications
- BFS traversal
- CPU scheduling
- Print queue
- Buffer for streaming

## Exam Points
- Circular queue implementation
- Queue using two stacks
- Applications of different queue types`
                }
            ]
        },
        {
            title: "Unit 4: Trees",
            topics: [
                {
                    title: "4.1 Binary Trees & Traversals",
                    content: `# Binary Trees

## 1. Definition
Each node has at most 2 children (left, right).

\`\`\`python
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
\`\`\`

## 2. Types
- **Full**: Every node has 0 or 2 children
- **Complete**: All levels filled except last (left-aligned)
- **Perfect**: All levels completely filled
- **Balanced**: Height difference ≤ 1

## 3. Tree Traversals

### Depth-First (DFS)
\`\`\`python
# Inorder (Left, Root, Right) - Sorted for BST
def inorder(root):
    if root:
        inorder(root.left)
        print(root.val)
        inorder(root.right)

# Preorder (Root, Left, Right)
def preorder(root):
    if root:
        print(root.val)
        preorder(root.left)
        preorder(root.right)

# Postorder (Left, Right, Root)
def postorder(root):
    if root:
        postorder(root.left)
        postorder(root.right)
        print(root.val)
\`\`\`

### Breadth-First (BFS) - Level Order
\`\`\`python
from collections import deque

def level_order(root):
    if not root:
        return []
    result = []
    queue = deque([root])
    while queue:
        level = []
        for _ in range(len(queue)):
            node = queue.popleft()
            level.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        result.append(level)
    return result
\`\`\`

## 4. Properties
- Nodes at level L: 2^L
- Maximum nodes in tree: 2^(h+1) - 1
- Height of complete tree: log₂(n)

## Exam Points
- Construct tree from inorder + preorder
- Find height of binary tree
- Count leaf nodes`
                },
                {
                    title: "4.2 Binary Search Tree (BST)",
                    content: `# Binary Search Tree

## 1. Property
- Left subtree: All values < root
- Right subtree: All values > root
- Both subtrees are also BSTs

## 2. Operations

### Search - O(h)
\`\`\`python
def search(root, key):
    if not root or root.val == key:
        return root
    if key < root.val:
        return search(root.left, key)
    return search(root.right, key)
\`\`\`

### Insert - O(h)
\`\`\`python
def insert(root, key):
    if not root:
        return TreeNode(key)
    if key < root.val:
        root.left = insert(root.left, key)
    else:
        root.right = insert(root.right, key)
    return root
\`\`\`

### Delete - O(h)
3 cases:
1. Leaf node: Simply remove
2. One child: Replace with child
3. Two children: Replace with inorder successor

\`\`\`python
def delete(root, key):
    if not root:
        return root
    if key < root.val:
        root.left = delete(root.left, key)
    elif key > root.val:
        root.right = delete(root.right, key)
    else:
        # Node found
        if not root.left:
            return root.right
        elif not root.right:
            return root.left
        # Two children: get inorder successor
        successor = find_min(root.right)
        root.val = successor.val
        root.right = delete(root.right, successor.val)
    return root

def find_min(node):
    while node.left:
        node = node.left
    return node
\`\`\`

## 3. Time Complexities

| Operation | Average | Worst (Skewed) |
|-----------|---------|----------------|
| Search | O(log n) | O(n) |
| Insert | O(log n) | O(n) |
| Delete | O(log n) | O(n) |

## 4. Balanced BSTs
- **AVL Tree**: Self-balancing, height balance ≤ 1
- **Red-Black Tree**: Used in TreeMap, TreeSet

## Exam Points
- Insert sequence into BST
- Delete node with two children
- Compare BST with AVL Tree`
                }
            ]
        },
        {
            title: "Unit 5: Graphs",
            topics: [
                {
                    title: "5.1 Graph Representations & Traversals",
                    content: `# Graphs

## 1. Terminology
- **Vertex (Node)**: Entity
- **Edge**: Connection between vertices
- **Directed vs Undirected**
- **Weighted vs Unweighted**
- **Degree**: Number of edges (in-degree, out-degree)

## 2. Representations

### Adjacency Matrix
\`\`\`
    0 1 2 3
0 [ 0 1 1 0 ]
1 [ 1 0 0 1 ]
2 [ 1 0 0 1 ]
3 [ 0 1 1 0 ]
\`\`\`
- Space: O(V²)
- Check edge: O(1)
- Find neighbors: O(V)

### Adjacency List
\`\`\`python
graph = {
    0: [1, 2],
    1: [0, 3],
    2: [0, 3],
    3: [1, 2]
}
\`\`\`
- Space: O(V + E)
- Check edge: O(degree)
- Find neighbors: O(1)

## 3. Graph Traversals

### BFS (Breadth-First Search)
\`\`\`python
from collections import deque

def bfs(graph, start):
    visited = set([start])
    queue = deque([start])
    result = []
    
    while queue:
        vertex = queue.popleft()
        result.append(vertex)
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
    return result
\`\`\`
**Use Cases**: Shortest path (unweighted), level order

### DFS (Depth-First Search)
\`\`\`python
def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)
    print(start)
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
\`\`\`
**Use Cases**: Cycle detection, topological sort, connected components

## 4. Time Complexity
Both BFS and DFS: O(V + E)

## Exam Points
- When to use BFS vs DFS?
- Convert matrix to adjacency list
- Find connected components`
                },
                {
                    title: "5.2 Shortest Path Algorithms",
                    content: `# Shortest Path Algorithms

## 1. Dijkstra's Algorithm
For **non-negative** weighted graphs.

\`\`\`python
import heapq

def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    pq = [(0, start)]
    
    while pq:
        curr_dist, curr = heapq.heappop(pq)
        if curr_dist > distances[curr]:
            continue
        for neighbor, weight in graph[curr]:
            distance = curr_dist + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))
    return distances
\`\`\`

**Time**: O((V + E) log V) with min-heap

## 2. Bellman-Ford
Handles **negative weights** (but not negative cycles).

\`\`\`python
def bellman_ford(graph, V, start):
    dist = [float('inf')] * V
    dist[start] = 0
    
    for _ in range(V - 1):
        for u, v, w in graph:
            if dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
    
    # Check for negative cycles
    for u, v, w in graph:
        if dist[u] + w < dist[v]:
            return None  # Negative cycle
    return dist
\`\`\`

**Time**: O(V × E)

## 3. Floyd-Warshall
**All-pairs** shortest path.

\`\`\`python
def floyd_warshall(graph, V):
    dist = [[float('inf')] * V for _ in range(V)]
    
    for i in range(V):
        dist[i][i] = 0
    
    for u, v, w in graph:
        dist[u][v] = w
    
    for k in range(V):
        for i in range(V):
            for j in range(V):
                dist[i][j] = min(dist[i][j], 
                                 dist[i][k] + dist[k][j])
    return dist
\`\`\`

**Time**: O(V³)

## 4. Comparison

| Algorithm | Weights | Negative | Time |
|-----------|---------|----------|------|
| Dijkstra | Positive | No | O((V+E)log V) |
| Bellman-Ford | Any | Yes | O(VE) |
| Floyd-Warshall | Any | Yes | O(V³) |

## Exam Points
- Trace Dijkstra's algorithm
- When does Bellman-Ford fail?
- Compare all three algorithms`
                }
            ]
        },
        {
            title: "Unit 6: Sorting Algorithms",
            topics: [
                {
                    title: "6.1 Comparison-Based Sorting",
                    content: `# Sorting Algorithms

## 1. Bubble Sort
\`\`\`python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
\`\`\`
**Time**: O(n²) | **Space**: O(1) | **Stable**: Yes

## 2. Selection Sort
\`\`\`python
def selection_sort(arr):
    for i in range(len(arr)):
        min_idx = i
        for j in range(i+1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
\`\`\`
**Time**: O(n²) | **Space**: O(1) | **Stable**: No

## 3. Insertion Sort
\`\`\`python
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j+1] = arr[j]
            j -= 1
        arr[j+1] = key
\`\`\`
**Time**: O(n²), O(n) if nearly sorted | **Stable**: Yes

## 4. Merge Sort (Divide & Conquer)
\`\`\`python
def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        L, R = arr[:mid], arr[mid:]
        merge_sort(L)
        merge_sort(R)
        merge(arr, L, R)

def merge(arr, L, R):
    i = j = k = 0
    while i < len(L) and j < len(R):
        if L[i] <= R[j]:
            arr[k] = L[i]
            i += 1
        else:
            arr[k] = R[j]
            j += 1
        k += 1
    while i < len(L):
        arr[k] = L[i]
        i += 1
        k += 1
    while j < len(R):
        arr[k] = R[j]
        j += 1
        k += 1
\`\`\`
**Time**: O(n log n) | **Space**: O(n) | **Stable**: Yes

## 5. Quick Sort
\`\`\`python
def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] < pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i+1], arr[high] = arr[high], arr[i+1]
    return i + 1
\`\`\`
**Time**: O(n log n) avg, O(n²) worst | **Space**: O(log n) | **Stable**: No

## 6. Comparison Table

| Algorithm | Best | Average | Worst | Stable |
|-----------|------|---------|-------|--------|
| Bubble | O(n) | O(n²) | O(n²) | Yes |
| Selection | O(n²) | O(n²) | O(n²) | No |
| Insertion | O(n) | O(n²) | O(n²) | Yes |
| Merge | O(n log n) | O(n log n) | O(n log n) | Yes |
| Quick | O(n log n) | O(n log n) | O(n²) | No |
| Heap | O(n log n) | O(n log n) | O(n log n) | No |

## Exam Points
- Trace Quick Sort partition step
- Why is Merge Sort stable?
- When to use which algorithm?`
                }
            ]
        },
        {
            title: "Unit 7: Dynamic Programming",
            topics: [
                {
                    title: "7.1 DP Fundamentals & Classic Problems",
                    content: `# Dynamic Programming

## 1. What is DP?
Solving problems by breaking into overlapping subproblems and storing results.

### Requirements
1. **Optimal Substructure**: Solution can be built from subproblem solutions
2. **Overlapping Subproblems**: Same subproblems solved multiple times

## 2. Approaches

### Top-Down (Memoization)
\`\`\`python
def fib_memo(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fib_memo(n-1, memo) + fib_memo(n-2, memo)
    return memo[n]
\`\`\`

### Bottom-Up (Tabulation)
\`\`\`python
def fib_tab(n):
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]
\`\`\`

## 3. Classic Problems

### A. 0/1 Knapsack
\`\`\`python
def knapsack(W, wt, val, n):
    dp = [[0] * (W + 1) for _ in range(n + 1)]
    for i in range(1, n + 1):
        for w in range(1, W + 1):
            if wt[i-1] <= w:
                dp[i][w] = max(val[i-1] + dp[i-1][w-wt[i-1]], 
                               dp[i-1][w])
            else:
                dp[i][w] = dp[i-1][w]
    return dp[n][W]
\`\`\`

### B. Longest Common Subsequence (LCS)
\`\`\`python
def lcs(X, Y):
    m, n = len(X), len(Y)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if X[i-1] == Y[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return dp[m][n]
\`\`\`

### C. Coin Change
\`\`\`python
def coin_change(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for coin in coins:
        for x in range(coin, amount + 1):
            dp[x] = min(dp[x], dp[x - coin] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1
\`\`\`

## 4. Tips for DP Problems
1. Identify if DP is applicable
2. Define state (what are we tracking?)
3. Define transition (how do states relate?)
4. Define base case
5. Decide memoization vs tabulation

## Exam Points
- Solve Knapsack with given weights/values
- Find LCS of two strings
- Explain overlapping subproblems`
                }
            ]
        },
        {
            title: "Unit 8: Hashing & Heaps",
            topics: [
                {
                    title: "8.1 Hash Tables",
                    content: `# Hash Tables

## 1. Concept
Map keys to values using a hash function.
- **Hash Function**: Converts key to index
- **Collision**: Multiple keys map to same index

## 2. Hash Functions
\`\`\`python
def hash_func(key, size):
    return key % size
\`\`\`

## 3. Collision Resolution

### Chaining (Open Hashing)
Each bucket stores a linked list.
\`\`\`
[0] -> [10] -> [20] -> None
[1] -> [11] -> None
[2] -> [12] -> [22] -> None
\`\`\`

### Open Addressing (Closed Hashing)
- **Linear Probing**: h(k) + 1, h(k) + 2, ...
- **Quadratic Probing**: h(k) + 1², h(k) + 2², ...
- **Double Hashing**: h1(k) + i * h2(k)

## 4. Time Complexity

| Operation | Average | Worst |
|-----------|---------|-------|
| Insert | O(1) | O(n) |
| Search | O(1) | O(n) |
| Delete | O(1) | O(n) |

## 5. Load Factor
α = n / m (items / buckets)
- If α > 0.7, rehash (double size)

## Exam Points
- Explain chaining vs open addressing
- Calculate hash for given keys
- What is rehashing?`
                },
                {
                    title: "8.2 Heaps & Priority Queues",
                    content: `# Heaps

## 1. Definition
Complete binary tree with heap property.
- **Max Heap**: Parent ≥ children
- **Min Heap**: Parent ≤ children

## 2. Array Representation
For node at index i:
- Parent: (i-1) // 2
- Left child: 2*i + 1
- Right child: 2*i + 2

## 3. Operations

### Insert - O(log n)
Add at end, bubble up.

### Extract Max/Min - O(log n)
Remove root, replace with last, heapify down.

### Heapify - O(log n)
\`\`\`python
def heapify(arr, n, i):
    largest = i
    left, right = 2*i + 1, 2*i + 2
    
    if left < n and arr[left] > arr[largest]:
        largest = left
    if right < n and arr[right] > arr[largest]:
        largest = right
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)
\`\`\`

## 4. Heap Sort
\`\`\`python
def heap_sort(arr):
    n = len(arr)
    # Build max heap
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)
    # Extract elements
    for i in range(n - 1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]
        heapify(arr, i, 0)
\`\`\`

## 5. Priority Queue
\`\`\`python
import heapq

pq = []
heapq.heappush(pq, (priority, item))
highest = heapq.heappop(pq)
\`\`\`

## 6. Applications
- Dijkstra's algorithm
- Huffman coding
- K largest/smallest elements
- Median finding

## Exam Points
- Build heap from array
- Heap sort step by step
- Find kth largest in O(n log k)`
                }
            ]
        }
    ]
};

export default dataStructures;
