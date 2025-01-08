const Expense = require('../models/Expense');

// Get all expenses
exports.getExpenses = async (req, res) => {
    const expenses = await Expense.find();
    res.json(expenses);
};

// Add new expense
exports.addExpense = async (req, res) => {
    const { title, amount } = req.body;
    const expense = await Expense.create({ title, amount });
    res.json(expense);
};

// Delete expense
exports.deleteExpense = async (req, res) => {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: 'Expense deleted' });
};