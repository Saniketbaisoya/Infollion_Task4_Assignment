# 🌳 Interactive Tree Visualization (Assignment Project)

An interactive tree visualization built using **React + Vite** and **React Flow**.  
This project dynamically renders hierarchical data in a tree structure with smooth edges, custom nodes, and expand/collapse functionality.

---

## ✨ Features

- 📌 Dynamic tree rendering from hierarchical JSON data
- 🔗 Automatic parent → child edge generation
- 🔄 Expand / collapse individual nodes
- 📂 Expand All / Collapse All controls
- 🎨 Custom node UI with handles
- 🧭 Auto layout calculation (no manual positioning)
- ⚡ Built with Vite for fast development
- 🎥 Demo video included

---

## 🛠 Tech Stack

- **React (Vite)**
- **React Flow**
- **JavaScript+SWC (ES6+)**
- **CSS / Tailwind (for styling)**

---

## 📂 Project Structure

```text
src/
├── Components/
│   ├── TreeCanvas.jsx   # Main canvas with React Flow
│   ├── TreeNode.jsx     # Custom node component
│   └── Controls.jsx     # Expand / Collapse buttons
│
├── Data/
│   └── treeData.js      # Hierarchical tree data
│
├── utils/
│   └── layoutTree.js    # Recursive tree layout algorithm
│
├── App.jsx
├── main.jsx
└── index.css
```
---

## 🧠 How It Works

1. Tree data is defined as a nested JSON structure.
2. A custom recursive layout algorithm calculates:
   - Node positions
   - Parent → child edges
3. React Flow renders nodes and edges using a custom node type.
4. Clicking a node toggles its expanded/collapsed state.
5. Controls allow expanding or collapsing the entire tree.

---

## 🎥 Demo Images (Every thing is perfect but some error failed to upload the video, so i upload the images)

👉 **Watch the demo Image here:**
<img width="1428" height="727" alt="Screenshot 2025-12-17 at 21 44 51" src="https://github.com/user-attachments/assets/518e333d-b92d-4815-980d-dcefc1f6a257" />



---

## 🚀 Getting Started (Run Locally)

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

## Install dependencies ##
npm install

## Start the development server ##
npm run dev
http://localhost:5173

