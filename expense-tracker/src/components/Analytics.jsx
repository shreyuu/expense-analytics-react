import React from 'react';

const Analytics = ({ expenses }) => {
    const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);
    return (
        <div>
        <h3>Total Expense: ${totalExpense.toFixed(2)}</h3>
        </div>
    );
};

export default Analytics;