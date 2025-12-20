/**
 * Machine Learning - Complete Subject Notes
 * Covers Supervised, Unsupervised, Deep Learning, and Model Deployment
 */

const machineLearning = {
    id: "ml",
    title: "Machine Learning",
    description: "Complete ML course: Regression, Classification, Clustering, Neural Networks, and model deployment.",
    color: "#fff8e1",
    lastUpdated: "2025-01-20",
    units: [
        {
            title: "Unit 1: ML Fundamentals",
            topics: [
                {
                    title: "1.1 Introduction to Machine Learning",
                    content: `# Introduction to Machine Learning

## 1. What is Machine Learning?
A subset of AI that enables systems to learn and improve from experience without being explicitly programmed.

## 2. Types of Machine Learning

### Supervised Learning
Learn from labeled data.
\`\`\`
Input (Features) → Model → Output (Label)
Training: X → Y (known)
Prediction: X_new → Y_predicted
\`\`\`
**Examples**: Spam detection, House price prediction

### Unsupervised Learning
Find patterns in unlabeled data.
\`\`\`
Input (Features) → Model → Patterns/Groups
No labels provided
\`\`\`
**Examples**: Customer segmentation, Anomaly detection

### Reinforcement Learning
Learn through trial and error.
\`\`\`
Agent → Action → Environment → Reward → Learn
\`\`\`
**Examples**: Game AI, Robotics

## 3. ML Workflow

\`\`\`
1. Problem Definition
2. Data Collection
3. Data Preprocessing
4. Feature Engineering
5. Model Selection
6. Training
7. Evaluation
8. Tuning
9. Deployment
\`\`\`

## 4. Key Terminology

| Term | Definition |
|------|------------|
| **Features (X)** | Input variables |
| **Labels (y)** | Output to predict |
| **Training Set** | Data to train model |
| **Test Set** | Data to evaluate model |
| **Model** | Mathematical function |
| **Hyperparameters** | Settings we tune |

## 5. Python ML Ecosystem
\`\`\`python
import numpy as np          # Numerical computing
import pandas as pd         # Data manipulation
import matplotlib.pyplot as plt  # Visualization
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
\`\`\`

## Exam Points
- Compare supervised vs unsupervised
- List 5 steps in ML workflow
- What is the difference between parameters and hyperparameters?`
                },
                {
                    title: "1.2 Data Preprocessing",
                    content: `# Data Preprocessing

## 1. Why Preprocessing?
- Handle missing values
- Convert categorical data
- Scale features
- Remove outliers

## 2. Handling Missing Values

\`\`\`python
import pandas as pd
from sklearn.impute import SimpleImputer

# Check missing values
df.isnull().sum()

# Drop rows with missing values
df.dropna()

# Fill with mean/median/mode
imputer = SimpleImputer(strategy='mean')
df['column'] = imputer.fit_transform(df[['column']])
\`\`\`

## 3. Encoding Categorical Variables

### Label Encoding
\`\`\`python
from sklearn.preprocessing import LabelEncoder

le = LabelEncoder()
df['color'] = le.fit_transform(df['color'])
# red=2, blue=0, green=1
\`\`\`

### One-Hot Encoding
\`\`\`python
df = pd.get_dummies(df, columns=['color'])
# Creates: color_red, color_blue, color_green
\`\`\`

## 4. Feature Scaling

### Standardization (Z-score)
\`\`\`python
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
# Mean = 0, Std = 1
\`\`\`

### Normalization (Min-Max)
\`\`\`python
from sklearn.preprocessing import MinMaxScaler

scaler = MinMaxScaler()
X_scaled = scaler.fit_transform(X)
# Range: [0, 1]
\`\`\`

## 5. Train-Test Split
\`\`\`python
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X, y, 
    test_size=0.2,    # 20% for testing
    random_state=42   # Reproducibility
)
\`\`\`

## 6. Feature Selection
\`\`\`python
from sklearn.feature_selection import SelectKBest, f_classif

selector = SelectKBest(f_classif, k=10)
X_selected = selector.fit_transform(X, y)
\`\`\`

## Exam Points
- When to use StandardScaler vs MinMaxScaler?
- Difference between Label and One-Hot encoding
- Why split data into train and test?`
                }
            ]
        },
        {
            title: "Unit 2: Supervised Learning - Regression",
            topics: [
                {
                    title: "2.1 Linear Regression",
                    content: `# Linear Regression

## 1. Concept
Find the best-fit line through data points.

\`\`\`
y = mx + b
y = β₀ + β₁x₁ + β₂x₂ + ... + βₙxₙ
\`\`\`

## 2. Simple Linear Regression
\`\`\`python
from sklearn.linear_model import LinearRegression

# Create and train model
model = LinearRegression()
model.fit(X_train, y_train)

# Predict
y_pred = model.predict(X_test)

# Coefficients
print(f"Slope: {model.coef_}")
print(f"Intercept: {model.intercept_}")
\`\`\`

## 3. Cost Function (MSE)
\`\`\`
MSE = (1/n) Σ(y_actual - y_predicted)²
\`\`\`

Goal: Minimize MSE using Gradient Descent.

## 4. Gradient Descent
\`\`\`
Repeat until convergence:
    θ = θ - α * ∂/∂θ (Cost Function)
    
α = learning rate
\`\`\`

## 5. Assumptions of Linear Regression
1. **Linearity**: Linear relationship between X and y
2. **Independence**: Observations are independent
3. **Homoscedasticity**: Constant variance of errors
4. **Normality**: Errors are normally distributed

## 6. Polynomial Regression
For non-linear relationships:
\`\`\`python
from sklearn.preprocessing import PolynomialFeatures

poly = PolynomialFeatures(degree=2)
X_poly = poly.fit_transform(X)

model = LinearRegression()
model.fit(X_poly, y)
\`\`\`

## 7. Regularization

### Ridge (L2)
\`\`\`python
from sklearn.linear_model import Ridge
model = Ridge(alpha=1.0)
\`\`\`
Adds penalty: λΣβ²

### Lasso (L1)
\`\`\`python
from sklearn.linear_model import Lasso
model = Lasso(alpha=1.0)
\`\`\`
Adds penalty: λΣ|β|
Can zero out coefficients (feature selection)

## Exam Points
- Derive gradient descent for linear regression
- Compare Ridge vs Lasso
- What is multicollinearity?`
                },
                {
                    title: "2.2 Evaluation Metrics for Regression",
                    content: `# Regression Evaluation Metrics

## 1. Mean Squared Error (MSE)
\`\`\`python
from sklearn.metrics import mean_squared_error

mse = mean_squared_error(y_true, y_pred)
\`\`\`
- Penalizes large errors heavily
- Same units as y²

## 2. Root Mean Squared Error (RMSE)
\`\`\`python
rmse = np.sqrt(mean_squared_error(y_true, y_pred))
\`\`\`
- Same units as y
- More interpretable

## 3. Mean Absolute Error (MAE)
\`\`\`python
from sklearn.metrics import mean_absolute_error

mae = mean_absolute_error(y_true, y_pred)
\`\`\`
- Less sensitive to outliers
- Same units as y

## 4. R² Score (Coefficient of Determination)
\`\`\`python
from sklearn.metrics import r2_score

r2 = r2_score(y_true, y_pred)
\`\`\`
- Range: 0 to 1 (can be negative for bad models)
- 1 = Perfect prediction
- % of variance explained

\`\`\`
R² = 1 - (SS_res / SS_tot)
SS_res = Σ(y - ŷ)²
SS_tot = Σ(y - ȳ)²
\`\`\`

## 5. Adjusted R²
Accounts for number of features:
\`\`\`
Adj R² = 1 - (1-R²)(n-1)/(n-p-1)

n = number of samples
p = number of features
\`\`\`

## 6. Comparison Table

| Metric | Range | Best Value | Interpretation |
|--------|-------|------------|----------------|
| MSE | 0 to ∞ | 0 | Average squared error |
| RMSE | 0 to ∞ | 0 | SD of residuals |
| MAE | 0 to ∞ | 0 | Average absolute error |
| R² | -∞ to 1 | 1 | Variance explained |

## 7. Cross-Validation
\`\`\`python
from sklearn.model_selection import cross_val_score

scores = cross_val_score(model, X, y, cv=5, scoring='r2')
print(f"Mean R²: {scores.mean():.3f} ± {scores.std():.3f}")
\`\`\`

## Exam Points
- When to use MSE vs MAE?
- Interpret R² = 0.85
- What is k-fold cross-validation?`
                }
            ]
        },
        {
            title: "Unit 3: Supervised Learning - Classification",
            topics: [
                {
                    title: "3.1 Logistic Regression & Classification",
                    content: `# Classification Algorithms

## 1. Logistic Regression
Binary classification using sigmoid function.

\`\`\`
σ(z) = 1 / (1 + e^(-z))
P(y=1|X) = σ(β₀ + β₁x₁ + ... + βₙxₙ)
\`\`\`

\`\`\`python
from sklearn.linear_model import LogisticRegression

model = LogisticRegression()
model.fit(X_train, y_train)
y_pred = model.predict(X_test)
y_prob = model.predict_proba(X_test)
\`\`\`

## 2. K-Nearest Neighbors (KNN)
Classify based on k nearest neighbors.

\`\`\`python
from sklearn.neighbors import KNeighborsClassifier

knn = KNeighborsClassifier(n_neighbors=5)
knn.fit(X_train, y_train)
\`\`\`

- **Pros**: Simple, no training time
- **Cons**: Slow prediction, sensitive to k

## 3. Decision Trees
\`\`\`python
from sklearn.tree import DecisionTreeClassifier

tree = DecisionTreeClassifier(max_depth=5)
tree.fit(X_train, y_train)
\`\`\`

### Splitting Criteria
- **Gini Impurity**: Probability of misclassification
- **Entropy**: Information gain

## 4. Random Forest (Ensemble)
Multiple decision trees voting together.

\`\`\`python
from sklearn.ensemble import RandomForestClassifier

rf = RandomForestClassifier(n_estimators=100)
rf.fit(X_train, y_train)
\`\`\`

- Reduces overfitting
- Feature importance

## 5. Support Vector Machine (SVM)
Find optimal hyperplane to separate classes.

\`\`\`python
from sklearn.svm import SVC

svm = SVC(kernel='rbf', C=1.0)
svm.fit(X_train, y_train)
\`\`\`

### Kernels
- Linear: Linearly separable
- RBF: Non-linear boundaries
- Polynomial: Curved boundaries

## 6. Naive Bayes
Based on Bayes' theorem:
\`\`\`
P(A|B) = P(B|A) * P(A) / P(B)
\`\`\`

\`\`\`python
from sklearn.naive_bayes import GaussianNB

nb = GaussianNB()
nb.fit(X_train, y_train)
\`\`\`

- Fast, works well with text
- Assumes feature independence

## Exam Points
- Explain sigmoid function
- Compare Random Forest vs Decision Tree
- When to use SVM?`
                },
                {
                    title: "3.2 Classification Evaluation Metrics",
                    content: `# Classification Evaluation

## 1. Confusion Matrix
\`\`\`
                Predicted
              Pos    Neg
Actual  Pos [ TP    FN ]
        Neg [ FP    TN ]

TP = True Positive
TN = True Negative
FP = False Positive (Type I Error)
FN = False Negative (Type II Error)
\`\`\`

\`\`\`python
from sklearn.metrics import confusion_matrix

cm = confusion_matrix(y_true, y_pred)
\`\`\`

## 2. Accuracy
\`\`\`
Accuracy = (TP + TN) / (TP + TN + FP + FN)
\`\`\`
- Misleading for imbalanced classes

## 3. Precision
\`\`\`
Precision = TP / (TP + FP)
\`\`\`
- Of all predicted positive, how many are correct?
- Important when FP is costly (spam detection)

## 4. Recall (Sensitivity)
\`\`\`
Recall = TP / (TP + FN)
\`\`\`
- Of all actual positive, how many did we find?
- Important when FN is costly (disease detection)

## 5. F1 Score
\`\`\`
F1 = 2 * (Precision * Recall) / (Precision + Recall)
\`\`\`
- Harmonic mean of precision and recall
- Balanced metric

\`\`\`python
from sklearn.metrics import classification_report

print(classification_report(y_true, y_pred))
\`\`\`

## 6. ROC Curve & AUC
\`\`\`python
from sklearn.metrics import roc_curve, roc_auc_score

fpr, tpr, thresholds = roc_curve(y_true, y_scores)
auc = roc_auc_score(y_true, y_scores)
\`\`\`

- **AUC = 0.5**: Random classifier
- **AUC = 1.0**: Perfect classifier

## 7. Handling Imbalanced Data

### Techniques
- **Oversampling**: SMOTE
- **Undersampling**: Random removal
- **Class weights**: Penalize minority class errors

\`\`\`python
from imblearn.over_sampling import SMOTE

smote = SMOTE()
X_resampled, y_resampled = smote.fit_resample(X, y)
\`\`\`

## Exam Points
- Draw and explain confusion matrix
- When to prioritize precision vs recall?
- What is AUC-ROC?`
                }
            ]
        },
        {
            title: "Unit 4: Unsupervised Learning",
            topics: [
                {
                    title: "4.1 Clustering Algorithms",
                    content: `# Clustering

## 1. K-Means Clustering
Partition data into k clusters.

### Algorithm
\`\`\`
1. Initialize k centroids randomly
2. Assign each point to nearest centroid
3. Update centroids (mean of cluster)
4. Repeat until convergence
\`\`\`

\`\`\`python
from sklearn.cluster import KMeans

kmeans = KMeans(n_clusters=3, random_state=42)
clusters = kmeans.fit_predict(X)
centroids = kmeans.cluster_centers_
\`\`\`

### Choosing k (Elbow Method)
\`\`\`python
inertias = []
for k in range(1, 11):
    kmeans = KMeans(n_clusters=k)
    kmeans.fit(X)
    inertias.append(kmeans.inertia_)

# Plot and find "elbow" point
\`\`\`

## 2. Hierarchical Clustering
Build tree of clusters.

\`\`\`python
from sklearn.cluster import AgglomerativeClustering

hc = AgglomerativeClustering(n_clusters=3, linkage='ward')
clusters = hc.fit_predict(X)
\`\`\`

### Linkage Methods
- **Single**: Min distance between clusters
- **Complete**: Max distance
- **Average**: Mean distance
- **Ward**: Minimize variance

### Dendrogram
\`\`\`python
from scipy.cluster.hierarchy import dendrogram, linkage

Z = linkage(X, method='ward')
dendrogram(Z)
\`\`\`

## 3. DBSCAN
Density-based clustering.

\`\`\`python
from sklearn.cluster import DBSCAN

dbscan = DBSCAN(eps=0.5, min_samples=5)
clusters = dbscan.fit_predict(X)
\`\`\`

- Finds arbitrary shapes
- Identifies outliers (label = -1)
- No need to specify k

## 4. Clustering Evaluation

### Silhouette Score
\`\`\`python
from sklearn.metrics import silhouette_score

score = silhouette_score(X, clusters)
# -1 to 1, higher is better
\`\`\`

## 5. Comparison

| Algorithm | Pros | Cons |
|-----------|------|------|
| K-Means | Fast, simple | Need to choose k |
| Hierarchical | Dendrogram | Slow for large data |
| DBSCAN | No k needed | Sensitive to parameters |

## Exam Points
- Explain K-Means algorithm steps
- Compare K-Means vs DBSCAN
- What is silhouette score?`
                },
                {
                    title: "4.2 Dimensionality Reduction",
                    content: `# Dimensionality Reduction

## 1. Why Reduce Dimensions?
- Visualization (>3D → 2D/3D)
- Reduce computation
- Remove noise
- Handle curse of dimensionality

## 2. Principal Component Analysis (PCA)
Find directions of maximum variance.

\`\`\`python
from sklearn.decomposition import PCA

pca = PCA(n_components=2)
X_reduced = pca.fit_transform(X)

# Explained variance
print(pca.explained_variance_ratio_)
\`\`\`

### Steps
1. Standardize data
2. Compute covariance matrix
3. Calculate eigenvectors/eigenvalues
4. Select top k components
5. Project data

### Choosing Components
\`\`\`python
pca = PCA(n_components=0.95)  # Keep 95% variance
X_reduced = pca.fit_transform(X)
print(f"Components needed: {pca.n_components_}")
\`\`\`

## 3. t-SNE (t-Distributed Stochastic Neighbor Embedding)
Non-linear dimensionality reduction for visualization.

\`\`\`python
from sklearn.manifold import TSNE

tsne = TSNE(n_components=2, perplexity=30)
X_embedded = tsne.fit_transform(X)
\`\`\`

- Great for visualization
- Not for preprocessing (non-deterministic)

## 4. PCA vs t-SNE

| Aspect | PCA | t-SNE |
|--------|-----|-------|
| Type | Linear | Non-linear |
| Speed | Fast | Slow |
| Use | Preprocessing | Visualization |
| Reversible | Yes | No |

## 5. Feature Selection vs Extraction

### Selection
Keep subset of original features.
\`\`\`python
from sklearn.feature_selection import SelectKBest

selector = SelectKBest(k=10)
X_selected = selector.fit_transform(X, y)
\`\`\`

### Extraction (PCA, etc.)
Create new features from combinations.

## Exam Points
- Explain PCA steps
- When to use t-SNE vs PCA?
- What is explained variance ratio?`
                }
            ]
        },
        {
            title: "Unit 5: Deep Learning Basics",
            topics: [
                {
                    title: "5.1 Neural Networks",
                    content: `# Neural Networks

## 1. Perceptron (Single Neuron)
\`\`\`
z = Σ(wᵢxᵢ) + b
output = activation(z)
\`\`\`

## 2. Multi-Layer Perceptron (MLP)
\`\`\`
Input Layer → Hidden Layer(s) → Output Layer
\`\`\`

\`\`\`python
from sklearn.neural_network import MLPClassifier

mlp = MLPClassifier(hidden_layer_sizes=(100, 50), max_iter=500)
mlp.fit(X_train, y_train)
\`\`\`

## 3. Activation Functions

| Function | Formula | Use Case |
|----------|---------|----------|
| Sigmoid | 1/(1+e^-x) | Binary output |
| Tanh | (e^x - e^-x)/(e^x + e^-x) | Hidden layers |
| ReLU | max(0, x) | Most common |
| Softmax | e^xᵢ/Σe^xⱼ | Multi-class output |

## 4. Forward Propagation
\`\`\`python
# Simple forward pass
z1 = np.dot(X, W1) + b1
a1 = relu(z1)
z2 = np.dot(a1, W2) + b2
output = softmax(z2)
\`\`\`

## 5. Backpropagation
Calculate gradients using chain rule.
\`\`\`
∂Loss/∂W = ∂Loss/∂output × ∂output/∂z × ∂z/∂W
\`\`\`

## 6. TensorFlow/Keras
\`\`\`python
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

model = Sequential([
    Dense(128, activation='relu', input_shape=(X.shape[1],)),
    Dense(64, activation='relu'),
    Dense(10, activation='softmax')  # 10 classes
])

model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

model.fit(X_train, y_train, epochs=10, validation_split=0.2)
\`\`\`

## 7. Preventing Overfitting

### Dropout
\`\`\`python
from tensorflow.keras.layers import Dropout

model.add(Dropout(0.5))  # Drop 50% of neurons
\`\`\`

### Early Stopping
\`\`\`python
from tensorflow.keras.callbacks import EarlyStopping

early_stop = EarlyStopping(patience=5, restore_best_weights=True)
model.fit(X, y, callbacks=[early_stop])
\`\`\`

## Exam Points
- Draw MLP architecture
- Compare ReLU vs Sigmoid
- What is backpropagation?`
                },
                {
                    title: "5.2 CNNs and Model Deployment",
                    content: `# CNNs & Deployment

## 1. Convolutional Neural Networks
For image data.

### Architecture
\`\`\`
Input → [Conv → ReLU → Pool]* → Flatten → Dense → Output
\`\`\`

### Layers
- **Convolution**: Extract features with filters
- **Pooling**: Reduce spatial size (MaxPool)
- **Flatten**: Convert 2D to 1D
- **Dense**: Classification

\`\`\`python
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten

model = Sequential([
    Conv2D(32, (3,3), activation='relu', input_shape=(28,28,1)),
    MaxPooling2D((2,2)),
    Conv2D(64, (3,3), activation='relu'),
    MaxPooling2D((2,2)),
    Flatten(),
    Dense(64, activation='relu'),
    Dense(10, activation='softmax')
])
\`\`\`

## 2. Transfer Learning
Use pre-trained models.

\`\`\`python
from tensorflow.keras.applications import VGG16

base_model = VGG16(weights='imagenet', include_top=False)
base_model.trainable = False  # Freeze layers

model = Sequential([
    base_model,
    Flatten(),
    Dense(256, activation='relu'),
    Dense(10, activation='softmax')
])
\`\`\`

## 3. Model Saving & Loading
\`\`\`python
# Save
model.save('my_model.h5')

# Load
from tensorflow.keras.models import load_model
model = load_model('my_model.h5')
\`\`\`

## 4. Deployment Options

### Flask API
\`\`\`python
from flask import Flask, request
import numpy as np

app = Flask(__name__)
model = load_model('model.h5')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json['data']
    prediction = model.predict(np.array([data]))
    return {'prediction': prediction.tolist()}
\`\`\`

### FastAPI
\`\`\`python
from fastapi import FastAPI

app = FastAPI()

@app.post("/predict")
async def predict(data: dict):
    prediction = model.predict(np.array([data['input']]))
    return {"prediction": prediction.tolist()}
\`\`\`

## 5. ML Pipeline
\`\`\`python
from sklearn.pipeline import Pipeline

pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('pca', PCA(n_components=10)),
    ('classifier', RandomForestClassifier())
])

pipeline.fit(X_train, y_train)
\`\`\`

## 6. MLOps Tools
- **MLflow**: Experiment tracking
- **DVC**: Data version control
- **Weights & Biases**: Visualization
- **BentoML**: Model serving

## Exam Points
- Explain CNN architecture
- What is transfer learning?
- How to deploy ML model as API?`
                }
            ]
        }
    ]
};

export default machineLearning;
