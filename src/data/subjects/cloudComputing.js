/**
 * Cloud Computing - Complete Subject Notes
 * Covers Cloud Models, AWS/Azure, Virtualization, and DevOps
 */

const cloudComputing = {
    id: "cloud",
    title: "Cloud Computing",
    description: "Master cloud technologies: AWS, Azure, virtualization, containers, and serverless architecture.",
    color: "#e0f2f1",
    lastUpdated: "2025-01-20",
    units: [
        {
            title: "Unit 1: Cloud Fundamentals",
            topics: [
                {
                    title: "1.1 Introduction to Cloud Computing",
                    content: `# Introduction to Cloud Computing

## 1. Definition
Cloud computing is the delivery of computing services—servers, storage, databases, networking, software, analytics—over the Internet ("the cloud").

## 2. NIST Definition (5 Essential Characteristics)
1. **On-demand self-service**: Provision resources automatically
2. **Broad network access**: Access via standard mechanisms
3. **Resource pooling**: Multi-tenant model
4. **Rapid elasticity**: Scale up/down quickly
5. **Measured service**: Pay-as-you-go

## 3. Cloud Service Models

### IaaS (Infrastructure as a Service)
- Provides: Virtual machines, storage, networks
- You manage: OS, middleware, applications
- Examples: AWS EC2, Azure VMs, Google Compute

### PaaS (Platform as a Service)
- Provides: Runtime environment, databases, dev tools
- You manage: Applications and data only
- Examples: Heroku, Google App Engine, Azure App Service

### SaaS (Software as a Service)
- Provides: Complete applications
- You manage: Just use the software
- Examples: Gmail, Salesforce, Office 365

\`\`\`
                    [SaaS] - Applications
                    [PaaS] - Platform
                    [IaaS] - Infrastructure
                    [On-Premise] - Everything yourself
\`\`\`

## 4. Cloud Deployment Models

| Model | Description | Example |
|-------|-------------|---------|
| **Public** | Resources shared, owned by provider | AWS, Azure |
| **Private** | Dedicated to single organization | OpenStack on-prem |
| **Hybrid** | Mix of public and private | AWS Outposts |
| **Community** | Shared by organizations with common needs | Government cloud |

## Exam Points
- List 5 NIST characteristics
- Compare IaaS vs PaaS vs SaaS
- Difference between public and private cloud`
                },
                {
                    title: "1.2 Virtualization",
                    content: `# Virtualization

## 1. What is Virtualization?
Creating virtual (rather than physical) versions of computing resources.

## 2. Hypervisor (VMM)
Software that creates and manages VMs.

### Type 1 (Bare Metal)
Runs directly on hardware.
Examples: VMware ESXi, Microsoft Hyper-V, Xen

### Type 2 (Hosted)
Runs on host OS.
Examples: VirtualBox, VMware Workstation

\`\`\`
Type 1:                    Type 2:
+----------+               +----------+
|   VMs    |               |   VMs    |
+----------+               +----------+
|Hypervisor|               |Hypervisor|
+----------+               +----------+
| Hardware |               |  Host OS |
+----------+               +----------+
                           | Hardware |
                           +----------+
\`\`\`

## 3. Types of Virtualization

| Type | What's Virtualized |
|------|-------------------|
| Server | Physical servers |
| Storage | Disk storage (SAN, NAS) |
| Network | Virtual switches, SDN |
| Desktop | VDI (Virtual Desktop) |
| Application | App sandboxing |

## 4. Benefits
- **Resource efficiency**: Better utilization
- **Isolation**: VMs are independent
- **Portability**: Move VMs easily
- **Cost savings**: Less hardware
- **Quick provisioning**: Minutes vs weeks

## 5. Containers vs VMs

| Aspect | VMs | Containers |
|--------|-----|------------|
| Size | GBs | MBs |
| Boot time | Minutes | Seconds |
| Isolation | Strong (hardware level) | Process-level |
| Overhead | High (full OS) | Low (shared kernel) |
| Example | VMware | Docker |

## Exam Points
- Compare Type 1 vs Type 2 hypervisor
- List 5 benefits of virtualization
- Difference between VMs and containers`
                }
            ]
        },
        {
            title: "Unit 2: AWS Core Services",
            topics: [
                {
                    title: "2.1 Compute & Storage Services",
                    content: `# AWS Core Services

## 1. Compute Services

### EC2 (Elastic Compute Cloud)
Virtual servers in the cloud.

**Instance Types:**
- **General Purpose (t3, m5)**: Balanced compute/memory
- **Compute Optimized (c5)**: High CPU
- **Memory Optimized (r5)**: High RAM
- **Storage Optimized (i3)**: High IOPS
- **GPU (p3, g4)**: Machine learning, graphics

**Pricing:**
- On-Demand: Pay per hour/second
- Reserved: 1-3 year commitment (up to 75% off)
- Spot: Bid for unused capacity (up to 90% off)

### Lambda (Serverless)
Run code without managing servers.
- Pay only when code runs
- Auto-scales
- Supports Python, Node.js, Java, etc.

## 2. Storage Services

### S3 (Simple Storage Service)
Object storage for any data.

**Storage Classes:**
- Standard: Frequently accessed
- Standard-IA: Infrequent access
- Glacier: Archive (minutes to hours retrieval)
- Glacier Deep Archive: Long-term (12 hour retrieval)

### EBS (Elastic Block Store)
Block storage for EC2 instances.
- Persistent storage
- Attach to EC2
- Types: gp3 (SSD), io2 (high IOPS), st1 (HDD)

### EFS (Elastic File System)
Managed NFS file storage.
- Shared across multiple EC2
- Auto-scaling

## 3. Databases

| Service | Type | Use Case |
|---------|------|----------|
| RDS | Relational | MySQL, PostgreSQL |
| DynamoDB | NoSQL | Key-value, documents |
| ElastiCache | In-memory | Redis, Memcached |
| Redshift | Data Warehouse | Analytics |

## Exam Points
- Compare EC2 pricing models
- List S3 storage classes
- When to use RDS vs DynamoDB?`
                },
                {
                    title: "2.2 Networking & Security",
                    content: `# AWS Networking & Security

## 1. VPC (Virtual Private Cloud)
Your own isolated network in AWS.

**Components:**
- **Subnets**: Divide VPC (public/private)
- **Route Tables**: Direct traffic
- **Internet Gateway**: Connect to internet
- **NAT Gateway**: Private subnet → internet access
- **Security Groups**: Instance-level firewall
- **NACLs**: Subnet-level firewall

\`\`\`
               Internet
                  |
          Internet Gateway
                  |
    +-------------+-------------+
    |        VPC (10.0.0.0/16)   |
    |  +-------+   +--------+   |
    |  |Public |   |Private |   |
    |  |Subnet |   |Subnet  |   |
    |  |10.0.1.|   |10.0.2. |   |
    |  +-------+   +--------+   |
    +---------------------------+
\`\`\`

## 2. Security Groups vs NACLs

| Feature | Security Group | NACL |
|---------|---------------|------|
| Level | Instance | Subnet |
| State | Stateful | Stateless |
| Rules | Allow only | Allow & Deny |
| Default | Deny all inbound | Allow all |

## 3. IAM (Identity & Access Management)

### Components:
- **Users**: Individual accounts
- **Groups**: Collection of users
- **Roles**: Temporary permissions
- **Policies**: JSON permission documents

### Policy Example:
\`\`\`json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::my-bucket/*"
  }]
}
\`\`\`

## 4. Other Services

- **CloudFront**: CDN for content delivery
- **Route 53**: DNS service
- **AWS WAF**: Web Application Firewall
- **AWS Shield**: DDoS protection

## Exam Points
- Draw VPC architecture diagram
- Compare Security Group vs NACL
- Explain IAM policy structure`
                }
            ]
        },
        {
            title: "Unit 3: Containers & Kubernetes",
            topics: [
                {
                    title: "3.1 Docker Fundamentals",
                    content: `# Docker Fundamentals

## 1. What is Docker?
Platform for developing, shipping, and running applications in containers.

## 2. Docker Architecture

\`\`\`
Docker Client → Docker Daemon → Registry
    (CLI)        (dockerd)     (Docker Hub)
                      ↓
              Images & Containers
\`\`\`

## 3. Key Concepts

### Image
Read-only template with instructions for creating container.
\`\`\`bash
docker pull nginx:latest
docker images
\`\`\`

### Container
Running instance of an image.
\`\`\`bash
docker run -d -p 80:80 nginx
docker ps
\`\`\`

### Dockerfile
Blueprint for building images.
\`\`\`dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

## 4. Common Commands

| Command | Description |
|---------|-------------|
| docker build -t name . | Build image |
| docker run -d image | Run container |
| docker ps | List running containers |
| docker stop id | Stop container |
| docker logs id | View logs |
| docker exec -it id bash | Shell into container |

## 5. Docker Compose
Define multi-container applications.

\`\`\`yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
  db:
    image: postgres
    environment:
      POSTGRES_PASSWORD: secret
\`\`\`

Run: \`docker-compose up -d\`

## Exam Points
- Write a Dockerfile for Node.js app
- Difference between image and container
- Explain Docker Compose use case`
                },
                {
                    title: "3.2 Kubernetes Basics",
                    content: `# Kubernetes (K8s)

## 1. What is Kubernetes?
Open-source container orchestration platform for automating deployment, scaling, and management.

## 2. Architecture

### Control Plane (Master)
- **API Server**: Frontend for cluster
- **etcd**: Key-value store for cluster data
- **Scheduler**: Assigns pods to nodes
- **Controller Manager**: Maintains desired state

### Worker Nodes
- **kubelet**: Agent ensuring containers run
- **kube-proxy**: Network proxy
- **Container Runtime**: Docker/containerd

## 3. Core Objects

### Pod
Smallest deployable unit (one or more containers).
\`\`\`yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
spec:
  containers:
  - name: nginx
    image: nginx:latest
    ports:
    - containerPort: 80
\`\`\`

### Deployment
Manages replicas and updates.
\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.21
\`\`\`

### Service
Exposes pods to network.
- ClusterIP: Internal access
- NodePort: External via node port
- LoadBalancer: External via cloud LB

### ConfigMap & Secret
Store configuration and sensitive data.

## 4. Key Commands

| Command | Description |
|---------|-------------|
| kubectl get pods | List pods |
| kubectl apply -f file.yaml | Create/update resources |
| kubectl describe pod name | Pod details |
| kubectl logs pod-name | View logs |
| kubectl scale deployment name --replicas=5 | Scale |

## Exam Points
- Draw Kubernetes architecture
- Write deployment YAML for 3 replicas
- Explain Service types`
                }
            ]
        },
        {
            title: "Unit 4: Serverless & DevOps",
            topics: [
                {
                    title: "4.1 Serverless Architecture",
                    content: `# Serverless Computing

## 1. What is Serverless?
Cloud execution model where provider manages servers.
- No server management
- Auto-scaling
- Pay per execution
- Event-driven

## 2. AWS Lambda

### Creating a Function
\`\`\`python
import json

def lambda_handler(event, context):
    name = event.get('name', 'World')
    return {
        'statusCode': 200,
        'body': json.dumps(f'Hello, {name}!')
    }
\`\`\`

### Triggers
- API Gateway (HTTP)
- S3 (file uploads)
- DynamoDB (data changes)
- CloudWatch Events (scheduled)
- SQS/SNS (messaging)

### Limits
- Memory: 128MB to 10GB
- Timeout: Max 15 minutes
- Package size: 50MB zipped

## 3. Serverless Use Cases
- REST APIs
- Image processing
- Scheduled tasks (cron)
- Real-time file processing
- Webhooks

## 4. FaaS Providers

| Provider | Service |
|----------|---------|
| AWS | Lambda |
| Azure | Functions |
| Google | Cloud Functions |
| Cloudflare | Workers |
| Vercel | Edge Functions |

## 5. Pros & Cons

**Pros:**
- No infrastructure management
- Auto-scaling
- Cost-effective for variable load
- Quick deployment

**Cons:**
- Cold starts (latency)
- Vendor lock-in
- Limited execution time
- Debugging complexity

## Exam Points
- Write Lambda function for S3 trigger
- List 5 Lambda triggers
- Pros and cons of serverless`
                },
                {
                    title: "4.2 CI/CD Pipelines",
                    content: `# CI/CD Pipelines

## 1. Continuous Integration (CI)
Frequently merge code to shared repo with automated builds/tests.

**Benefits:**
- Early bug detection
- Reduced integration problems
- Faster feedback

## 2. Continuous Delivery (CD)
Automate release process so code is always deployable.

## 3. Continuous Deployment
Automatically deploy every change that passes tests.

\`\`\`
Code Push → Build → Test → Deploy to Staging → Deploy to Prod
            (CI)              (Continuous Delivery)
                              (Continuous Deployment = auto prod)
\`\`\`

## 4. GitHub Actions Example

\`\`\`yaml
name: CI/CD Pipeline
on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
\`\`\`

## 5. CI/CD Tools

| Tool | Type |
|------|------|
| GitHub Actions | Built-in CI/CD |
| Jenkins | Self-hosted |
| GitLab CI | Built-in |
| CircleCI | Cloud-based |
| AWS CodePipeline | AWS native |

## 6. Best Practices
- Keep builds fast (< 10 min)
- Fail fast (run quick tests first)
- Use caching
- Automate everything
- Version control pipelines
- Secure secrets

## Exam Points
- Difference between CI and CD
- Write GitHub Actions workflow
- List 5 CI/CD best practices`
                }
            ]
        },
        {
            title: "Unit 5: Cloud Security & Cost",
            topics: [
                {
                    title: "5.1 Cloud Security Best Practices",
                    content: `# Cloud Security

## 1. Shared Responsibility Model

**AWS Responsibility (Security OF the Cloud):**
- Physical security
- Network infrastructure
- Hypervisor

**Customer Responsibility (Security IN the Cloud):**
- Data encryption
- IAM configuration
- OS patches
- Application security

## 2. Security Best Practices

### Identity & Access
- Enable MFA for all users
- Follow least privilege principle
- Use roles instead of long-term credentials
- Rotate access keys regularly
- Use AWS Organizations for multi-account

### Data Protection
- Encrypt data at rest (S3, EBS, RDS)
- Encrypt data in transit (TLS/SSL)
- Use AWS KMS for key management
- Enable versioning for S3

### Network Security
- Use VPC with private subnets
- Minimize Security Group rules
- Use NACLs as second layer
- Enable VPC Flow Logs
- Use AWS WAF for web apps

### Monitoring & Logging
- Enable CloudTrail for API logging
- Use CloudWatch for metrics/alerts
- Configure GuardDuty for threat detection
- Regular security audits

## 3. Compliance

| Standard | Description |
|----------|-------------|
| SOC 1/2 | Service Organization Controls |
| ISO 27001 | Information Security |
| HIPAA | Healthcare data |
| PCI DSS | Payment card data |
| GDPR | EU data privacy |

## Exam Points
- Explain shared responsibility model
- List 5 security best practices
- What is AWS CloudTrail?`
                }
            ]
        }
    ]
};

export default cloudComputing;
