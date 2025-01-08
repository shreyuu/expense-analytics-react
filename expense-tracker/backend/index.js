const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/expense-tracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
.catch(err => console.error(err));

// Expense Schema
const ExpenseSchema = new mongoose.Schema({
    title: String,
    amount: Number,
    date: Date
});

const Expense = mongoose.model('Expense', ExpenseSchema);

// Routes
app.get('/expenses', async (req, res) => {
    const expenses = await Expense.find();
    res.json(expenses);
});

app.post('/expenses', async (req, res) => {
    const { title, amount, date } = req.body;
    const expense = new Expense({ title, amount, date });
    await expense.save();
    res.json(expense);
});

// Delete Expense
app.delete('/expenses/:id', async (req, res) => {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: 'Expense deleted successfully' });
});

// Update Expense
app.put('/expenses/:id', async (req, res) => {
    const { title, amount, date } = req.body;
    const updatedExpense = await Expense.findByIdAndUpdate(req.params.id, { title, amount, date }, { new: true });
    res.json(updatedExpense);
});

app.listen(5000, () => console.log('Server running on port 5000'));