import React from 'react';

const Analytics = ({ expenses }) => {
  const totalExpenses = expenses.reduce((total, expense) => total + parseFloat(expense.amount || 0), 0);
  const expenseCount = expenses.length;

  return (
    <div className="p-4 bg-blue-50 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">📊 Analytics</h2>
      <p className="text-gray-600">Total Expenses: <span className="font-bold text-blue-600">${totalExpenses.toFixed(2)}</span></p>
      <p className="text-gray-600">Number of Transactions: <span className="font-bold text-blue-600">{expenseCount}</span></p>
    </div>
  );
};

export default Analytics;