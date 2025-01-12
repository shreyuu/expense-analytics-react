const Expense = require('../models/Expense');

// Fetch all expenses
const getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.json(expenses);
    } catch (err) {
        console.error('Error fetching expenses:', err); // Debugging
        res.status(500).json({ message: 'Failed to fetch expenses' });
    }
};

// Add a new expense
const addExpense = async (req, res) => {
    const { title, amount, date } = req.body;

    // Validate input
    if (!title || !amount || !date) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        console.log('Request body:', req.body); // Debugging
        const expense = new Expense({ title, amount, date });
        console.log('Saving expense:', expense); // Debugging
        const savedExpense = await expense.save();
        console.log('Saved expense:', savedExpense); // Debugging
        res.status(201).json(savedExpense);
    } catch (err) {
        console.error('Error saving expense:', err); // Debugging
        res.status(500).json({ message: 'Failed to add expense' });
    }
};

// Delete an expense
const deleteExpense = async (req, res) => {
    try {
        console.log('Delete request for ID:', req.params.id); // Debugging
        const expense = await Expense.findById(req.params.id);

        if (!expense) {
            return res.status(404).json({ message: 'Expense not found' });
        }

        await expense.deleteOne();
        console.log('Deleted expense:', expense); // Debugging
        res.json({ message: 'Expense deleted successfully' });
    } catch (err) {
        console.error('Error deleting expense:', err); // Debugging
        res.status(500).json({ message: 'Failed to delete expense' });
    }
};

module.exports = {
    getExpenses,
    addExpense,
    deleteExpense,
};