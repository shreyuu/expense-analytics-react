
# 💼 **Expense Analytics React**  

A simple and user-friendly **Expense Tracker** built with **React.js**, **Tailwind CSS**, and **MongoDB** that helps you manage and analyze your expenses efficiently.

---

## 🚀 **Live Demo**  
Coming Soon...

---

## 📚 **Project Description**  
This project allows users to:  
✅ **Add, edit, and delete expenses**  
✅ **View a list of all expenses**  
✅ **See real-time total expense analytics**  
✅ **Store expenses persistently in MongoDB**  
✅ **Simple and intuitive user interface**

---

## 🛠️ **Tech Stack**  

### **Frontend:**  
- **Framework:** React.js  
- **Styling:** Tailwind CSS  

### **Backend:**  
- **Server:** Express.js  
- **Database:** MongoDB  

---

## 📂 **Project Structure**  

```plaintext
expense-tracker/
├── backend/
│   ├── config/
│   │   └── db.js            # Database connection configuration
│   ├── controllers/
│   │   └── expenseController.js  # Expense logic
│   ├── models/
│   │   └── Expense.js       # Expense schema
│   ├── routes/
│   │   └── expenseRoutes.js # API routes for expenses
│   ├── index.js             # Entry point for backend
│   ├── .env                 # Environment variables
│   ├── package.json         # Backend dependencies
│   └── README.md            # Backend-specific instructions
├── src/
│   ├── components/
│   │   ├── Analytics.jsx    # Display total expenses analytics
│   │   ├── ExpenseForm.jsx  # Form for adding expenses
│   │   └── ExpenseList.jsx  # Display expenses list
│   ├── App.jsx              # Main application component
│   ├── index.js             # Entry point for frontend
│   ├── App.css              # Global styles
│   ├── tailwind.config.js   # Tailwind configuration
│   └── styles.css           # Additional styling
├── public/
│   ├── index.html           # HTML template
├── package.json             # Frontend dependencies
└── README.md                # Project instructions
```

---

## 🧠 **Features**  
- **Add Expense:** Enter the expense title and amount.  
- **Expense List:** View all added expenses in a neat list.  
- **Analytics:** See total expenses calculated dynamically.  
- **Persistent Storage:** Data is stored in MongoDB.  

---

## 🖥️ **Getting Started**

### 1️⃣ Clone the Repository:
```bash
git clone https://github.com/shreyuu/expense-analytics-react.git
cd expense-analytics-react
```

### 2️⃣ Setup Backend:
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add your MongoDB connection string:
   ```
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/expense-tracker?retryWrites=true&w=majority
   PORT=5002
   ```
4. Start the backend server:
   ```bash
   npm run dev
   ```

### 3️⃣ Setup Frontend:
1. Navigate to the root folder:
   ```bash
   cd ..
   ```
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm start
   ```

---

## 🌟 **Usage**  
1. Open the app in your browser: [http://localhost:3000](http://localhost:3000).  
2. Add your expenses using the form.  
3. View analytics and manage your expenses seamlessly.

---

## 🎨 **Styling**  
The app uses **Tailwind CSS** for styling. You can customize the theme in `tailwind.config.js`.

---

## 🤝 **Contributing**  
Contributions are welcome! Please follow these steps:  
1. Fork the repository.  
2. Create a new branch:  
   ```bash
   git checkout -b feature-branch
   ```
3. Make your changes and commit them:  
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:  
   ```bash
   git push origin feature-branch
   ```
5. Submit a pull request.

---

## 🛡️ **License**  
This project is licensed under the **MIT License**.

---

## 📬 **Contact Me**  
- **GitHub:** [shreyuu](https://github.com/shreyuu/)  
- **LinkedIn:** [Shreyash Meshram](https://www.linkedin.com/in/shreyuu/)  
