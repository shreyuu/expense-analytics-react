import React, { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!title || !amount || !date) {
            alert('Please fill out all fields.');
            return;
        }
        
        const newExpense = {
            title,
            amount: parseFloat(amount),
            date,
        };
        
        onAddExpense(newExpense);
        
        setTitle('');
        setAmount('');
        setDate('');
    };
    
    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="flex flex-col mb-2">
                <label className="mb-1">Title:</label>
                <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="flex flex-col mb-2">
            <label className="mb-1">Amount:</label>
            <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            />
            </div>
            <div className="flex flex-col mb-2">
            <label className="mb-1">Date:</label>
            <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            />
            </div>
            <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
            Add Expense
            </button>
        </form>
    );
}

export default ExpenseForm;