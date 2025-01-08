import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Analytics from './components/Analytics';
import './styles.css';

function App() {
  const [expenses, setExpenses] = useState([]);

  // Fetch expenses from MongoDB backend
  useEffect(() => {
    fetch('http://localhost:5000/expenses')
      .then((res) => res.json())
      .then((data) => setExpenses(data))
      .catch((err) => console.error('Error fetching expenses:', err));
  }, []);

  // Add a new expense to MongoDB
  const addExpense = async (expense) => {
    try {
      const response = await fetch('http://localhost:5000/expenses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(expense),
      });
      const newExpense = await response.json();
      setExpenses([...expenses, newExpense]);
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        💼 Expense Tracker
      </h1>
      
      {/* Expense Form */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
        <ExpenseForm onAddExpense={addExpense} />
      </div>
      
      {/* Expense List */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <ExpenseList expenses={expenses} />
      </div>
      
      {/* Analytics */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-md">
        <Analytics expenses={expenses} />
      </div>
    </div>
  );
}

export default App;