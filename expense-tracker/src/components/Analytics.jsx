import React from 'react';

function Analytics({ expenses }) {
  const totalExpense = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  
  return (
    <div className="mt-4 p-4 border border-gray-300 rounded">
      <h2 className="text-xl font-bold mb-2">Analytics</h2>
      <p>Total Expenses: ₹{totalExpense.toFixed(2)}</p>
    </div>
  );
}

export default Analytics;