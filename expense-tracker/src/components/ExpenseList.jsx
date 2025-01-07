import React from 'react';

const ExpenseList = ({ expenses }) => (
    <ul>
    {expenses.map((expense, index) => (
        <li key={index}>
        {expense.title} - ${expense.amount.toFixed(2)} ({expense.date.toLocaleDateString()})
        </li>
    ))}
    </ul>
);

export default ExpenseList;