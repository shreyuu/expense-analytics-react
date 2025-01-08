const express = require('express');
const router = express.Router();
const { getExpenses, addExpense, deleteExpense } = require('../controllers/expenseController');

router.get('/expenses', getExpenses);
router.post('/expenses', addExpense);
router.delete('/expenses/:id', deleteExpense);

module.exports = router;