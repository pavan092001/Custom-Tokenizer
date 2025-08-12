# 📝 Custom Tokenizer Web App

A simple and interactive **Custom Tokenizer Web App** built with **React** and **Vite**.  
This app converts **text → tokens** and **tokens → text (decode)**, giving you a peek into how Large Language Models (LLMs) like GPT handle text under the hood.

By using this project, you’ll understand the basics of **tokenization** — a core step in **Natural Language Processing (NLP)** and AI pipelines.

---

## 🚀 Tech Stack
- **Frontend Framework:** [React](https://reactjs.org/) with [Vite](https://vitejs.dev/)
- **Language:** JavaScript (ES6+)
- **Styling:** CSS Modules
- **State Management:** React Hooks
- **Tokenizer Logic:** Custom JavaScript implementation

---

## 📂 Folder Structure
```plaintext
project-root/
│
├── public/
│   ├── vite.svg         # Vite logo
│   ├── vocab.json       # Vocabulary file for tokenizer
│
├── src/
│   ├── assets/
│   │   ├── App.css      # Styles for main component
│   ├── App.jsx          # Main React component
│   ├── index.css        # Global CSS
│   ├── main.jsx         # React entry point
│   ├── tokenizer.js     # Custom tokenizer logic
│
├── .eslintrc.cjs        # ESLint configuration
├── .gitignore           # Ignored files
├── index.html           # HTML entry point
├── package.json         # Project metadata & dependencies
├── package-lock.json    # Dependency lock file
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation
```

---

## 🛠️ Getting Started

Follow these steps to set up and run the project locally:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/pavan092001/Custom-Tokenize.git
cd Custom-Tokenize
```

### 2️⃣ Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3️⃣ Start the App
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The app will be running at:
```
http://localhost:5173
```

---

## ✨ Features
- 🔄 Convert **text → tokens**
- 🔄 Convert **tokens → text**
- 🎨 Clean, simple UI
- 📚 Educational — understand how LLM tokenization works

---

## 📦 Build for Production
```bash
npm run build
```
The optimized output will be in the `dist/` folder.

---

## 🔍 How It Works
```plaintext
[ Text Input ]
       ↓
[ Custom Tokenizer Logic ]
       ↓
[ Tokenized Output ]
       ↓
[ Decoder ]
       ↓
[ Original Text ]
```

---

## 🤝 Contributing
Contributions are welcome!  
Follow these steps to contribute:

1. **Fork** the repository  
2. **Create** your feature branch:  
   ```bash
   git checkout -b feature-name
   ```
3. **Commit** your changes:  
   ```bash
   git commit -m "Add feature"
   ```
4. **Push** to the branch:  
   ```bash
   git push origin feature-name
   ```
5. **Open a Pull Request**

---

