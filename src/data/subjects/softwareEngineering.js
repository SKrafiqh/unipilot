/**
 * Software Engineering - Complete Subject Notes
 * Covers SDLC, Agile, Testing, Design Patterns, and Project Management
 */

const softwareEngineering = {
    id: "se",
    title: "Software Engineering",
    description: "Master the art of building software: SDLC models, Agile methodologies, testing strategies, and design patterns.",
    color: "#e1f5fe",
    lastUpdated: "2025-01-20",
    units: [
        {
            title: "Unit 1: Introduction & SDLC Models",
            topics: [
                {
                    title: "1.1 Software Engineering Fundamentals",
                    content: `# Software Engineering Fundamentals

## 1. What is Software Engineering?
The systematic application of engineering principles to the development, operation, and maintenance of software.

## 2. Software Characteristics
- **Complexity**: Large-scale, interconnected systems
- **Conformity**: Must adapt to standards/interfaces
- **Changeability**: Constantly evolving requirements
- **Invisibility**: Abstract, hard to visualize

## 3. Software Crisis (Why SE exists)
Problems in 1960s-70s:
- Projects over budget
- Late delivery
- Poor quality
- Unmaintainable code

**Solution**: Apply engineering discipline to software development.

## 4. Software Process
A set of activities for developing software:
1. **Specification**: What should the system do?
2. **Development**: How to build it?
3. **Validation**: Does it meet requirements?
4. **Evolution**: How to change it over time?

## Exam Points
- Define Software Engineering
- What is the software crisis?
- List 4 software characteristics`
                },
                {
                    title: "1.2 SDLC Models",
                    content: `# Software Development Life Cycle (SDLC) Models

## 1. Waterfall Model
Sequential, phase-by-phase approach.

\`\`\`
Requirements → Design → Implementation → Testing → Deployment → Maintenance
\`\`\`

**Pros**: Simple, well-documented
**Cons**: Inflexible, late testing
**Best For**: Well-understood requirements, small projects

## 2. V-Model (Verification & Validation)
Each development phase has a corresponding testing phase.

\`\`\`
Requirements  ←→  Acceptance Testing
    ↓                    ↑
System Design ←→  System Testing
    ↓                    ↑
Module Design ←→  Integration Testing
    ↓                    ↑
  Coding     ←→   Unit Testing
\`\`\`

## 3. Iterative Model
Develop in repeated cycles (iterations).
Each iteration adds features.

## 4. Spiral Model
Risk-driven, combines iterative with Waterfall.
Four quadrants:
1. Determine objectives
2. Identify risks
3. Develop & test
4. Plan next iteration

## 5. Prototyping Model
Build quick prototype → Get feedback → Refine
Good when requirements are unclear.

## 6. RAD (Rapid Application Development)
Fast development using:
- Component reuse
- Visual development tools
- Short iterations (60-90 days)

## Comparison Table

| Model | Flexibility | Risk | Best For |
|-------|-------------|------|----------|
| Waterfall | Low | High | Fixed requirements |
| V-Model | Low | Medium | Critical systems |
| Iterative | Medium | Medium | Evolving needs |
| Spiral | High | Low | Large, risky projects |
| Prototyping | High | Medium | Unclear requirements |

## Exam Points
- Compare Waterfall vs Spiral Model
- Draw and explain V-Model
- When to use Prototyping Model?`
                }
            ]
        },
        {
            title: "Unit 2: Agile Methodologies",
            topics: [
                {
                    title: "2.1 Agile Principles & Scrum",
                    content: `# Agile Methodologies

## 1. Agile Manifesto (2001)
**Values:**
- Individuals & interactions > Processes & tools
- Working software > Comprehensive documentation
- Customer collaboration > Contract negotiation
- Responding to change > Following a plan

## 2. Agile Principles (Key Ones)
- Deliver working software frequently (weeks)
- Welcome changing requirements
- Business + developers work together daily
- Face-to-face conversation preferred
- Working software is the primary measure

## 3. Scrum Framework

### Roles
| Role | Responsibility |
|------|----------------|
| **Product Owner** | Defines features, prioritizes backlog |
| **Scrum Master** | Removes obstacles, facilitates |
| **Dev Team** | Self-organizing, builds product |

### Artifacts
- **Product Backlog**: Prioritized list of features
- **Sprint Backlog**: Tasks for current sprint
- **Increment**: Potentially shippable product

### Events
1. **Sprint Planning**: What to do this sprint?
2. **Daily Standup**: 15 min sync (What did I do? What will I do? Blockers?)
3. **Sprint Review**: Demo to stakeholders
4. **Sprint Retrospective**: What went well? What to improve?

### Sprint
- Time-boxed iteration (1-4 weeks)
- Goal: Deliver working increment

\`\`\`
Product Backlog → Sprint Planning → Sprint Backlog
                                          ↓
   Sprint (2-4 weeks) with Daily Standups
                                          ↓
   Sprint Review → Sprint Retrospective → Next Sprint
\`\`\`

## 4. Kanban
Visual workflow management.
- **Board**: To Do → In Progress → Done
- **WIP Limits**: Limit work in progress
- **Continuous flow** (no sprints)

## Exam Points
- List 4 values of Agile Manifesto
- Explain Scrum roles and events
- Difference between Scrum and Kanban`
                },
                {
                    title: "2.2 Extreme Programming (XP)",
                    content: `# Extreme Programming (XP)

## 1. Core Values
- **Communication**: Continuous team interaction
- **Simplicity**: Do what's needed, nothing more
- **Feedback**: Frequent releases, tests, reviews
- **Courage**: Make changes when needed
- **Respect**: Every team member matters

## 2. XP Practices

### Development Practices
- **Pair Programming**: Two developers, one computer
- **TDD (Test-Driven Development)**: Write test first, then code
- **Refactoring**: Continuously improve code structure
- **Continuous Integration**: Integrate code multiple times/day

### Planning Practices
- **User Stories**: Requirements as user perspective
- **Planning Poker**: Team estimates effort
- **Small Releases**: Frequent, incremental releases

### Team Practices
- **Collective Code Ownership**: Anyone can modify any code
- **Sustainable Pace**: 40-hour weeks (no burnout)
- **On-site Customer**: Customer always available

## 3. TDD Cycle
\`\`\`
1. Write failing test (RED)
2. Write minimal code to pass (GREEN)
3. Refactor (REFACTOR)
4. Repeat
\`\`\`

## 4. User Story Format
\`\`\`
As a [user type],
I want to [action],
So that [benefit].

Example:
As a customer,
I want to view my order history,
So that I can track my purchases.
\`\`\`

## Exam Points
- Explain TDD cycle
- What is pair programming?
- Write a user story for login feature`
                }
            ]
        },
        {
            title: "Unit 3: Requirements Engineering",
            topics: [
                {
                    title: "3.1 Requirements Elicitation & Analysis",
                    content: `# Requirements Engineering

## 1. Types of Requirements

### Functional Requirements
What the system should do.
- "System shall allow users to login"
- "System shall generate monthly reports"

### Non-Functional Requirements
Qualities/constraints.
- **Performance**: Response time < 2 seconds
- **Security**: Data encryption required
- **Usability**: 90% of users complete task in 5 mins
- **Reliability**: 99.9% uptime

## 2. Requirements Elicitation Techniques

| Technique | Description | Best For |
|-----------|-------------|----------|
| **Interviews** | One-on-one discussions | Detailed insights |
| **Questionnaires** | Written surveys | Large user base |
| **Observation** | Watch users work | Understanding workflows |
| **Workshops** | Group sessions | Consensus building |
| **Prototyping** | Build mockups | UI requirements |
| **Document Analysis** | Review existing docs | Migration projects |

## 3. Requirements Documentation (SRS)

**Software Requirements Specification** contains:
1. Introduction (purpose, scope)
2. Overall Description (product perspective)
3. Functional Requirements
4. Non-Functional Requirements
5. External Interfaces
6. Constraints

## 4. Requirements Validation
Ensure requirements are:
- **Complete**: Nothing missing
- **Consistent**: No contradictions
- **Unambiguous**: Single interpretation
- **Verifiable**: Can be tested
- **Traceable**: Linked to source

## Exam Points
- Differentiate functional vs non-functional
- List 5 elicitation techniques
- What is an SRS document?`
                }
            ]
        },
        {
            title: "Unit 4: Software Design",
            topics: [
                {
                    title: "4.1 Design Principles",
                    content: `# Software Design Principles

## 1. Cohesion & Coupling

### Cohesion (HIGH is good)
How closely related elements within a module are.
- **High Cohesion**: Module does one thing well
- **Low Cohesion**: Module does many unrelated things

### Coupling (LOW is good)
Degree of interdependence between modules.
- **Tight Coupling**: Changes ripple across modules
- **Loose Coupling**: Modules are independent

## 2. SOLID Principles

### S - Single Responsibility
A class should have only one reason to change.

### O - Open/Closed
Open for extension, closed for modification.

### L - Liskov Substitution
Subtypes must be substitutable for base types.

### I - Interface Segregation
Many specific interfaces better than one general.

### D - Dependency Inversion
Depend on abstractions, not concretions.

## 3. DRY & KISS

### DRY (Don't Repeat Yourself)
Avoid code duplication.

### KISS (Keep It Simple, Stupid)
Simplest solution is often best.

## 4. Separation of Concerns
Divide software into distinct sections, each handling a specific aspect.

Example: MVC Pattern
- **Model**: Data/Logic
- **View**: Presentation
- **Controller**: User input handling

## Exam Points
- Explain cohesion vs coupling
- List and explain SOLID principles
- What is MVC pattern?`
                },
                {
                    title: "4.2 Design Patterns",
                    content: `# Design Patterns

## 1. Creational Patterns

### Singleton
Ensure class has only one instance.
\`\`\`python
class Singleton:
    _instance = None
    
    @classmethod
    def get_instance(cls):
        if cls._instance is None:
            cls._instance = cls()
        return cls._instance
\`\`\`

### Factory Method
Create objects without specifying exact class.

### Builder
Construct complex objects step by step.

## 2. Structural Patterns

### Adapter
Convert interface of one class to another.
\`\`\`
Client → Adapter → Adaptee
\`\`\`

### Facade
Simplified interface to complex subsystem.

### Decorator
Add behavior to objects dynamically.

## 3. Behavioral Patterns

### Observer
One-to-many dependency (publish-subscribe).
\`\`\`
Subject (Publisher) → notifies → Observers (Subscribers)
\`\`\`

### Strategy
Define family of algorithms, make interchangeable.

### Template Method
Define algorithm skeleton, let subclasses fill in steps.

## 4. Pattern Categories Summary

| Category | Purpose | Examples |
|----------|---------|----------|
| Creational | Object creation | Singleton, Factory, Builder |
| Structural | Composition | Adapter, Facade, Decorator |
| Behavioral | Communication | Observer, Strategy, Template |

## Exam Points
- Implement Singleton pattern
- When to use Factory pattern?
- Explain Observer pattern with example`
                }
            ]
        },
        {
            title: "Unit 5: Software Testing",
            topics: [
                {
                    title: "5.1 Testing Levels & Techniques",
                    content: `# Software Testing

## 1. Testing Levels

### Unit Testing
Test individual components/functions.
\`\`\`python
def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0
\`\`\`

### Integration Testing
Test interactions between modules.
- **Big Bang**: All at once
- **Top-Down**: Start from top modules
- **Bottom-Up**: Start from bottom modules

### System Testing
Test complete integrated system.

### Acceptance Testing
Customer validates against requirements.
- **Alpha**: At developer's site
- **Beta**: At customer's site

## 2. Testing Types

| Type | What it tests |
|------|---------------|
| Functional | Features work correctly |
| Performance | Speed, load handling |
| Security | Vulnerabilities |
| Usability | User experience |
| Regression | Old features still work |

## 3. Black Box vs White Box

### Black Box (Functional)
Test without knowing internal code.
Techniques:
- Equivalence Partitioning
- Boundary Value Analysis
- Decision Tables

### White Box (Structural)
Test with knowledge of code.
Techniques:
- Statement Coverage
- Branch Coverage
- Path Coverage

## 4. Code Coverage

\`\`\`python
def grade(score):
    if score >= 90:
        return 'A'
    elif score >= 80:
        return 'B'
    else:
        return 'C'
\`\`\`

- **Statement Coverage**: Execute every statement
- **Branch Coverage**: Execute every branch (if/else)
- **Path Coverage**: Execute every possible path

## Exam Points
- Compare unit vs integration testing
- Explain black box techniques
- What is code coverage?`
                },
                {
                    title: "5.2 Test Case Design",
                    content: `# Test Case Design

## 1. Test Case Template

| Field | Description |
|-------|-------------|
| ID | Unique identifier |
| Title | Short description |
| Preconditions | Initial state |
| Steps | Actions to perform |
| Expected Result | What should happen |
| Actual Result | What happened |
| Status | Pass/Fail |

## 2. Equivalence Partitioning
Divide inputs into equivalent classes.

Example: Age validation (18-65)
- Invalid: < 18
- Valid: 18-65
- Invalid: > 65

Test one value from each partition.

## 3. Boundary Value Analysis
Test at boundaries of partitions.

Example: Age (18-65)
Test: 17, 18, 19, 64, 65, 66

## 4. Decision Table
For complex logic with multiple conditions.

| Condition | Rule 1 | Rule 2 | Rule 3 |
|-----------|--------|--------|--------|
| Age >= 18 | Y | Y | N |
| Has License | Y | N | - |
| **Action: Can Drive** | ✓ | ✗ | ✗ |

## 5. Test Automation

### Benefits
- Faster execution
- Repeatable
- Better coverage
- Early bug detection

### Tools
- Unit: JUnit, pytest
- UI: Selenium, Cypress
- API: Postman, REST Assured

## Exam Points
- Design test cases for login form
- Apply boundary value analysis
- When to automate tests?`
                }
            ]
        },
        {
            title: "Unit 6: Project Management",
            topics: [
                {
                    title: "6.1 Estimation & Planning",
                    content: `# Software Project Management

## 1. Project Planning Activities
1. Scope definition
2. Effort estimation
3. Scheduling
4. Risk management
5. Resource allocation

## 2. Estimation Techniques

### Lines of Code (LOC)
Estimate based on code lines.
- Simple but inaccurate
- Language dependent

### Function Point Analysis (FPA)
Count functional components:
- External Inputs (EI)
- External Outputs (EO)
- External Queries (EQ)
- Internal Logical Files (ILF)
- External Interface Files (EIF)

### COCOMO Model
\`\`\`
Effort = a × (KLOC)^b × EAF

KLOC = Thousands of Lines of Code
EAF = Effort Adjustment Factor
\`\`\`

Types:
- **Basic**: Quick estimate
- **Intermediate**: Considers cost drivers
- **Detailed**: Per-phase estimates

### Expert Judgment
Ask experienced developers.
Methods: Delphi, Planning Poker

## 3. Scheduling

### Gantt Chart
Bar chart showing task timelines.

### PERT/CPM
Network diagram showing dependencies.

**Critical Path**: Longest path (minimum project time).

## 4. Risk Management

### Steps
1. **Identify**: What could go wrong?
2. **Analyze**: Probability × Impact
3. **Plan**: Mitigation strategies
4. **Monitor**: Track throughout project

### Common Risks
- Requirements changes
- Technology challenges
- Resource unavailability
- Scope creep

## Exam Points
- Calculate effort using COCOMO
- What is critical path?
- List 4 project risks and mitigations`
                }
            ]
        }
    ]
};

export default softwareEngineering;
