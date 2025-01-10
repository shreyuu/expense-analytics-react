import React from 'react';

function ExpenseList({ expenses }) {
    return (
        <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Expense List</h2>
        <ul className="list-disc list-inside">
        {expenses.map((expense) => (
            <li key={expense._id}>
            <strong>{expense.title}</strong>: ₹{expense.amount} on{' '}
            {new Date(expense.date).toLocaleDateString()}
            </li>
        ))}
        </ul>
        </div>
    );
}

export default ExpenseList;