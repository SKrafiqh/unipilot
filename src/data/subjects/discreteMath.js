/**
 * Discrete Mathematics - Complete Subject Notes
 * Covers Logic, Sets, Relations, Graph Theory, and Combinatorics
 */

const discreteMath = {
    id: "dm",
    title: "Discrete Mathematics",
    description: "Master discrete math: Logic, Sets, Relations, Functions, Graph Theory, and Combinatorics for CS foundations.",
    color: "#e8f5e9",
    lastUpdated: "2025-01-20",
    units: [
        {
            title: "Unit 1: Mathematical Logic",
            topics: [
                {
                    title: "1.1 Propositional Logic",
                    content: `# Propositional Logic

## 1. Propositions
A declarative sentence that is either TRUE or FALSE.

**Examples:**
- "2 + 2 = 4" → TRUE
- "The sky is green" → FALSE
- "What time is it?" → NOT a proposition (question)

## 2. Logical Connectives

| Connective | Symbol | Name | Truth Table |
|------------|--------|------|-------------|
| NOT | ¬ or ~ | Negation | Flips truth value |
| AND | ∧ | Conjunction | True if both true |
| OR | ∨ | Disjunction | True if at least one true |
| XOR | ⊕ | Exclusive OR | True if exactly one true |
| IMPLIES | → | Implication | False only when T → F |
| IFF | ↔ | Biconditional | True when both same |

## 3. Truth Tables

### Implication (p → q)
| p | q | p → q |
|---|---|-------|
| T | T | T |
| T | F | F |
| F | T | T |
| F | F | T |

**Note:** False implies anything is TRUE!

## 4. Logical Equivalences

| Name | Equivalence |
|------|-------------|
| Double Negation | ¬(¬p) ≡ p |
| De Morgan's | ¬(p ∧ q) ≡ ¬p ∨ ¬q |
| De Morgan's | ¬(p ∨ q) ≡ ¬p ∧ ¬q |
| Contrapositive | p → q ≡ ¬q → ¬p |
| Absorption | p ∨ (p ∧ q) ≡ p |

## 5. Tautology & Contradiction
- **Tautology**: Always TRUE (e.g., p ∨ ¬p)
- **Contradiction**: Always FALSE (e.g., p ∧ ¬p)
- **Contingency**: Sometimes T, sometimes F

## 6. Argument Forms

### Modus Ponens
\`\`\`
p → q
p
------
∴ q
\`\`\`

### Modus Tollens
\`\`\`
p → q
¬q
------
∴ ¬p
\`\`\`

## Exam Points
- Construct truth table for (p → q) ∧ (q → r)
- Prove De Morgan's law
- Apply Modus Ponens to given premises`
                },
                {
                    title: "1.2 Predicate Logic & Quantifiers",
                    content: `# Predicate Logic

## 1. Predicates
A proposition with variables.
P(x): "x is greater than 5"
- P(7) = TRUE
- P(3) = FALSE

## 2. Quantifiers

### Universal Quantifier (∀)
"For all" or "For every"
\`\`\`
∀x P(x) means P(x) is true for ALL x in domain
\`\`\`

### Existential Quantifier (∃)
"There exists" or "For some"
\`\`\`
∃x P(x) means P(x) is true for AT LEAST ONE x
\`\`\`

## 3. Negation of Quantifiers
\`\`\`
¬(∀x P(x)) ≡ ∃x ¬P(x)
"Not all are P" = "Some are not P"

¬(∃x P(x)) ≡ ∀x ¬P(x)
"None exists" = "All are not P"
\`\`\`

## 4. Nested Quantifiers
Order matters!
\`\`\`
∀x ∃y (x + y = 0)
"For every x, there exists a y such that x + y = 0"
(TRUE for integers: y = -x)

∃y ∀x (x + y = 0)
"There exists a y such that for every x, x + y = 0"
(FALSE - no single y works for all x)
\`\`\`

## 5. Proof Techniques

### Direct Proof
Assume p, show q.
\`\`\`
Prove: If n is even, then n² is even.
Assume n is even: n = 2k
n² = (2k)² = 4k² = 2(2k²)
Since 2k² is integer, n² is even. ∎
\`\`\`

### Proof by Contradiction
Assume ¬conclusion, derive contradiction.
\`\`\`
Prove: √2 is irrational.
Assume √2 = a/b (lowest terms)
2 = a²/b² → a² = 2b²
So a is even, a = 2k
4k² = 2b² → b² = 2k²
So b is even (contradiction: lowest terms)
∴ √2 is irrational ∎
\`\`\`

### Proof by Contrapositive
Prove ¬q → ¬p instead of p → q.

## Exam Points
- Negate: ∀x∃y P(x,y)
- Prove by contradiction: √3 is irrational
- Translate English to predicate logic`
                }
            ]
        },
        {
            title: "Unit 2: Sets & Relations",
            topics: [
                {
                    title: "2.1 Set Theory",
                    content: `# Set Theory

## 1. Set Notation
\`\`\`
A = {1, 2, 3, 4, 5}  (Roster)
B = {x | x is even and 0 < x < 10}  (Set-builder)
\`\`\`

## 2. Special Sets
- **∅ or {}**: Empty set
- **ℕ**: Natural numbers {0, 1, 2, ...}
- **ℤ**: Integers {..., -1, 0, 1, ...}
- **ℚ**: Rational numbers
- **ℝ**: Real numbers
- **U**: Universal set

## 3. Set Operations

### Union (A ∪ B)
Elements in A OR B (or both)
\`\`\`
A = {1, 2, 3}, B = {3, 4, 5}
A ∪ B = {1, 2, 3, 4, 5}
\`\`\`

### Intersection (A ∩ B)
Elements in A AND B
\`\`\`
A ∩ B = {3}
\`\`\`

### Difference (A - B or A \\ B)
Elements in A but NOT in B
\`\`\`
A - B = {1, 2}
\`\`\`

### Complement (A')
Elements NOT in A (in U)

### Symmetric Difference (A △ B)
Elements in exactly one set
\`\`\`
A △ B = (A - B) ∪ (B - A) = {1, 2, 4, 5}
\`\`\`

## 4. Set Laws

| Law | Formula |
|-----|---------|
| Commutative | A ∪ B = B ∪ A |
| Associative | (A ∪ B) ∪ C = A ∪ (B ∪ C) |
| Distributive | A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C) |
| De Morgan's | (A ∪ B)' = A' ∩ B' |
| Identity | A ∪ ∅ = A |
| Complement | A ∪ A' = U |

## 5. Power Set
Set of all subsets.
\`\`\`
A = {1, 2}
P(A) = {∅, {1}, {2}, {1, 2}}
|P(A)| = 2^n = 4
\`\`\`

## 6. Cartesian Product
\`\`\`
A × B = {(a, b) | a ∈ A, b ∈ B}
A = {1, 2}, B = {a, b}
A × B = {(1,a), (1,b), (2,a), (2,b)}
\`\`\`

## Exam Points
- Prove A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)
- Find power set of {a, b, c}
- Draw Venn diagram for 3 sets`
                },
                {
                    title: "2.2 Relations",
                    content: `# Relations

## 1. Definition
A relation R from A to B is a subset of A × B.
\`\`\`
A = {1, 2, 3}, B = {a, b}
R = {(1, a), (2, b), (3, a)}
\`\`\`

## 2. Properties of Relations (on set A)

### Reflexive
Every element is related to itself.
\`\`\`
∀x ∈ A: (x, x) ∈ R
Example: R = {(1,1), (2,2), (3,3), (1,2)}
\`\`\`

### Symmetric
If (a, b) ∈ R, then (b, a) ∈ R.
\`\`\`
Example: R = {(1,2), (2,1), (3,3)}
\`\`\`

### Transitive
If (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R.
\`\`\`
Example: (1,2), (2,3) → (1,3) must exist
\`\`\`

### Antisymmetric
If (a, b) ∈ R and (b, a) ∈ R, then a = b.
\`\`\`
Example: ≤ on integers
\`\`\`

## 3. Equivalence Relation
A relation that is:
- Reflexive
- Symmetric
- Transitive

### Equivalence Classes
\`\`\`
[a] = {x ∈ A | (x, a) ∈ R}
\`\`\`

Example: Modulo 3
- [0] = {..., -3, 0, 3, 6, ...}
- [1] = {..., -2, 1, 4, 7, ...}
- [2] = {..., -1, 2, 5, 8, ...}

## 4. Partial Order
A relation that is:
- Reflexive
- Antisymmetric
- Transitive

Example: Set inclusion (⊆)

## 5. Hasse Diagram
Visual representation of partial order.
\`\`\`
          {a,b,c}
         /   |   \\
      {a,b} {a,c} {b,c}
         \\   |   /
        {a} {b} {c}
           \\ | /
             ∅
\`\`\`

## 6. Matrix Representation
\`\`\`
A = {1, 2, 3}
R = {(1,1), (1,2), (2,3)}

    1 2 3
  -------
1 | 1 1 0
2 | 0 0 1
3 | 0 0 0
\`\`\`

## Exam Points
- Prove relation is equivalence
- Find equivalence classes
- Draw Hasse diagram for divisibility`
                }
            ]
        },
        {
            title: "Unit 3: Functions",
            topics: [
                {
                    title: "3.1 Functions & Types",
                    content: `# Functions

## 1. Definition
A function f: A → B assigns exactly one element of B to each element of A.
- **Domain**: Set A
- **Codomain**: Set B
- **Range**: {f(a) | a ∈ A}

## 2. Types of Functions

### Injective (One-to-One)
Different inputs → different outputs.
\`\`\`
∀a, b ∈ A: f(a) = f(b) → a = b
\`\`\`

### Surjective (Onto)
Every element in codomain is mapped.
\`\`\`
∀b ∈ B: ∃a ∈ A such that f(a) = b
Range = Codomain
\`\`\`

### Bijective (One-to-One Correspondence)
Both injective AND surjective.
- Inverse function exists
- |A| = |B|

## 3. Visual Test (Arrows)
\`\`\`
Injective: No two arrows point to same element
Surjective: Every element in B has at least one arrow
Bijective: Exactly one arrow to each element in B
\`\`\`

## 4. Composition
\`\`\`
(g ∘ f)(x) = g(f(x))
Apply f first, then g
\`\`\`

### Not Commutative
g ∘ f ≠ f ∘ g (in general)

## 5. Inverse Function
If f: A → B is bijective:
\`\`\`
f⁻¹: B → A
f⁻¹(f(a)) = a
f(f⁻¹(b)) = b
\`\`\`

## 6. Important Functions

### Floor and Ceiling
\`\`\`
⌊3.7⌋ = 3 (floor - round down)
⌈3.2⌉ = 4 (ceiling - round up)
\`\`\`

### Modulo
\`\`\`
7 mod 3 = 1 (remainder when 7 ÷ 3)
\`\`\`

## 7. Cardinality
Two sets have same cardinality if bijection exists.
- Finite sets: |A| = |B|
- Infinite: Countable (ℕ) vs Uncountable (ℝ)

## Exam Points
- Prove function is bijective
- Find inverse of f(x) = 2x + 3
- Is f: ℤ → ℤ, f(x) = x² injective? surjective?`
                }
            ]
        },
        {
            title: "Unit 4: Combinatorics",
            topics: [
                {
                    title: "4.1 Counting Principles",
                    content: `# Counting Principles

## 1. Product Rule
If task A can be done in m ways, and task B in n ways:
\`\`\`
Total ways = m × n
\`\`\`
Example: 3 shirts, 4 pants → 12 outfits

## 2. Sum Rule
If task can be done by method A OR method B (mutually exclusive):
\`\`\`
Total ways = m + n
\`\`\`

## 3. Permutations
Ordered arrangements.

### Without Repetition
\`\`\`
P(n, r) = n! / (n-r)!

Arrange 3 out of 5 people:
P(5, 3) = 5!/2! = 60
\`\`\`

### With Repetition
\`\`\`
n^r

3-digit PIN (0-9): 10³ = 1000
\`\`\`

### With Identical Objects
\`\`\`
n! / (n₁! × n₂! × ... × nₖ!)

Arrange MISSISSIPPI:
11! / (4! × 4! × 2! × 1!) = 34,650
\`\`\`

## 4. Combinations
Unordered selections.

\`\`\`
C(n, r) = n! / (r! × (n-r)!)

Choose 3 from 5: C(5,3) = 10
\`\`\`

### Pascal's Identity
\`\`\`
C(n, r) = C(n-1, r-1) + C(n-1, r)
\`\`\`

## 5. Binomial Theorem
\`\`\`
(x + y)ⁿ = Σ C(n, k) × xⁿ⁻ᵏ × yᵏ

(x + y)³ = x³ + 3x²y + 3xy² + y³
\`\`\`

## 6. Pigeonhole Principle
If n+1 items into n boxes, at least one box has ≥ 2.

Example: 13 people → at least 2 share birth month.

## 7. Inclusion-Exclusion
\`\`\`
|A ∪ B| = |A| + |B| - |A ∩ B|

|A ∪ B ∪ C| = |A| + |B| + |C|
              - |A ∩ B| - |A ∩ C| - |B ∩ C|
              + |A ∩ B ∩ C|
\`\`\`

## Exam Points
- Calculate arrangements of BANANA
- How many 5-card hands from 52 cards?
- Apply pigeonhole to prove theorem`
                }
            ]
        },
        {
            title: "Unit 5: Graph Theory",
            topics: [
                {
                    title: "5.1 Graph Fundamentals",
                    content: `# Graph Theory

## 1. Definition
G = (V, E) where V = vertices, E = edges.

## 2. Types of Graphs

| Type | Description |
|------|-------------|
| Undirected | Edges have no direction |
| Directed (Digraph) | Edges have direction |
| Weighted | Edges have weights |
| Simple | No loops or multi-edges |
| Complete (Kₙ) | Every pair connected |
| Bipartite | Vertices in 2 disjoint sets |

## 3. Terminology

### Degree
Number of edges incident to vertex.
\`\`\`
Sum of degrees = 2 × |E|
(Handshaking Lemma)
\`\`\`

In directed graph:
- In-degree: incoming edges
- Out-degree: outgoing edges

### Path & Cycle
- **Path**: Sequence of distinct vertices
- **Cycle**: Path that starts and ends at same vertex
- **Length**: Number of edges

### Connected
Path exists between every pair of vertices.

## 4. Special Graphs

### Complete Graph (Kₙ)
\`\`\`
Edges = n(n-1)/2
K₄ has 6 edges
\`\`\`

### Complete Bipartite (Kₘ,ₙ)
\`\`\`
Edges = m × n
K₃,₄ has 12 edges
\`\`\`

### Trees
Connected graph with no cycles.
\`\`\`
|E| = |V| - 1
\`\`\`

## 5. Graph Representations

### Adjacency Matrix
\`\`\`
    A B C
A [ 0 1 1 ]
B [ 1 0 1 ]
C [ 1 1 0 ]
\`\`\`

### Adjacency List
\`\`\`
A: B, C
B: A, C
C: A, B
\`\`\`

## 6. Graph Isomorphism
Two graphs are isomorphic if there's a bijection preserving edges.

Check:
- Same number of vertices/edges
- Same degree sequence
- Same number of cycles

## Exam Points
- Find degree sequence of graph
- Prove tree has n-1 edges
- Check if two graphs are isomorphic`
                },
                {
                    title: "5.2 Euler & Hamilton Paths",
                    content: `# Euler & Hamilton Paths

## 1. Euler Path
Visits every EDGE exactly once.

### Existence Conditions
- **Euler Path**: Exactly 0 or 2 vertices of odd degree
- **Euler Circuit**: All vertices have even degree

### Example
\`\`\`
Königsberg Bridge Problem:
4 regions, each with odd degree
→ No Euler path exists
\`\`\`

### Finding Euler Circuit (Fleury's Algorithm)
1. Start at any vertex
2. Follow edges, avoiding bridges
3. Remove traversed edges

## 2. Hamilton Path
Visits every VERTEX exactly once.

### Hamilton Cycle
Returns to start vertex.

### No Easy Condition!
NP-complete problem.

### Dirac's Theorem
If degree of every vertex ≥ n/2, Hamilton cycle exists.

### Ore's Theorem
If deg(u) + deg(v) ≥ n for non-adjacent u, v, Hamilton cycle exists.

## 3. Comparison

| Property | Euler | Hamilton |
|----------|-------|----------|
| Visits | Every edge once | Every vertex once |
| Condition | Degree-based | NP-complete |
| Algorithm | Polynomial | Exponential |

## 4. Planar Graphs
Can be drawn without edge crossings.

### Euler's Formula
\`\`\`
V - E + F = 2

V = vertices
E = edges
F = faces (including outer face)
\`\`\`

### Kuratowski's Theorem
Graph is planar iff it contains no subdivision of K₅ or K₃,₃.

## 5. Graph Coloring
Assign colors so adjacent vertices have different colors.

### Chromatic Number (χ)
Minimum colors needed.
\`\`\`
χ(Kₙ) = n
χ(Bipartite) = 2
χ(Odd cycle) = 3
\`\`\`

### Four Color Theorem
Every planar graph can be colored with 4 colors.

## Exam Points
- Check if graph has Euler path/circuit
- Apply Dirac's theorem
- Verify Euler's formula for given graph`
                }
            ]
        },
        {
            title: "Unit 6: Recurrence Relations",
            topics: [
                {
                    title: "6.1 Solving Recurrences",
                    content: `# Recurrence Relations

## 1. Definition
Equation defining sequence in terms of previous terms.

\`\`\`
Fibonacci: F(n) = F(n-1) + F(n-2)
           F(0) = 0, F(1) = 1
\`\`\`

## 2. Linear Homogeneous (Constant Coefficients)
\`\`\`
aₙ = c₁aₙ₋₁ + c₂aₙ₋₂ + ... + cₖaₙ₋ₖ
\`\`\`

### Solving Method
1. Write characteristic equation
\`\`\`
rᵏ = c₁rᵏ⁻¹ + c₂rᵏ⁻² + ... + cₖ
\`\`\`

2. Find roots r₁, r₂, ...

3. General solution:
\`\`\`
Distinct roots: aₙ = α₁r₁ⁿ + α₂r₂ⁿ
Repeated root r: aₙ = (α₁ + α₂n)rⁿ
\`\`\`

4. Use initial conditions to find α values

### Example: Fibonacci
\`\`\`
aₙ = aₙ₋₁ + aₙ₋₂

Characteristic: r² = r + 1 → r² - r - 1 = 0
Roots: r = (1 ± √5)/2

Solution: aₙ = α₁((1+√5)/2)ⁿ + α₂((1-√5)/2)ⁿ
\`\`\`

## 3. Non-Homogeneous
\`\`\`
aₙ = c₁aₙ₋₁ + c₂aₙ₋₂ + f(n)
\`\`\`

Solution = Homogeneous solution + Particular solution

### Finding Particular Solution
Guess based on f(n):
- f(n) = constant → try aₙ = A
- f(n) = n → try aₙ = An + B
- f(n) = 2ⁿ → try aₙ = A·2ⁿ

## 4. Master Theorem (for algorithms)
\`\`\`
T(n) = aT(n/b) + f(n)

Case 1: If f(n) = O(n^(log_b(a) - ε))
        T(n) = Θ(n^log_b(a))

Case 2: If f(n) = Θ(n^log_b(a))
        T(n) = Θ(n^log_b(a) × log n)

Case 3: If f(n) = Ω(n^(log_b(a) + ε))
        T(n) = Θ(f(n))
\`\`\`

### Example
\`\`\`
T(n) = 2T(n/2) + n

a = 2, b = 2, f(n) = n
log₂(2) = 1
f(n) = n = Θ(n¹)

Case 2 applies: T(n) = Θ(n log n)
(This is Merge Sort!)
\`\`\`

## Exam Points
- Solve aₙ = 3aₙ₋₁ - 2aₙ₋₂ with a₀=1, a₁=3
- Apply Master Theorem to T(n) = 4T(n/2) + n²
- Find closed form for Fibonacci`
                }
            ]
        }
    ]
};

export default discreteMath;
