import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Analytics from './components/Analytics';
// import './styles.css';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  
  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/expenses');
        const data = await response.json();
        setExpenses(data);
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    };
    
    fetchExpenses();
  }, []);
  
  const addExpense = async (expense) => {
    try {
      const response = await fetch('http://localhost:5001/api/expenses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(expense),
      });
      const newExpense = await response.json();
      setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };
  
  return (
    <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold text-center mb-4">Expense Tracker</h1>
    <ExpenseForm onAddExpense={addExpense} />
    <ExpenseList expenses={expenses} />
    <Analytics expenses={expenses} />
    </div>
  );
}

export default App;