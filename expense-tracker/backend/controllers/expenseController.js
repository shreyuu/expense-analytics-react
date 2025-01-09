const Expense = require('../models/Expense');

// Fetch all expenses
const getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.json(expenses);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch expenses' });
    }
};

// Add a new expense
const addExpense = async (req, res) => {
    const { title, amount, date } = req.body;
    
    try {
        const expense = new Expense({ title, amount, date });
        const savedExpense = await expense.save();
        res.status(201).json(savedExpense);
    } catch (err) {
        res.status(400).json({ message: 'Failed to add expense' });
    }
};

// Delete an expense
const deleteExpense = async (req, res) => {
    try {
        const expense = await Expense.findById(req.params.id);
        
        if (!expense) {
            return res.status(404).json({ message: 'Expense not found' });
        }
        
        await expense.deleteOne();
        res.json({ message: 'Expense deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to delete expense' });
    }
};

module.exports = {
    getExpenses,
    addExpense,
    deleteExpense,
};