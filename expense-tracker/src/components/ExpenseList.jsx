import React from 'react';

const ExpenseList = ({ expenses }) => {
    return (
        <div>
        <h2 className="text-xl font-semibold mb-2">📄 Expense List</h2>
        <ul className="space-y-2">
        {expenses.map((expense) => (
            <li key={expense._id} className="p-2 bg-gray-100 rounded-md shadow-sm flex justify-between items-center">
            <span className="font-medium">{expense.title}</span>
            <span className="text-green-600 font-semibold">${expense.amount}</span>
            </li>
        ))}
        </ul>
        </div>
    );
};

export default ExpenseList;