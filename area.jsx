import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import './area.css';

function Area() {
  const [expenses, setExpenses] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  // Fetch expenses from the backend on component mount
  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get('http://localhost:3000/expenses');
        setExpenses(response.data);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };

    fetchExpenses();
  }, []);

  // Add expense to backend and update local state
  const addExpense = async (e) => {
    e.preventDefault();
    if (!description || !amount || !date) {
      setError('Please fill in all fields');
      return;
    }
    setError('');
    const newExpense = { description, amount: parseFloat(amount), date };

    try {
      const response = await axios.post('http://localhost:3000/expenses', newExpense);
      setExpenses([...expenses, response.data]);
      setDescription('');
      setAmount('');
      setDate('');
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  const deleteExpense = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/expenses/${id}`);
      setExpenses(expenses.filter((expense) => expense.id !== id));
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  // Calculate total expenses for a selected month
  const calculateTotal = (month) => {
    return expenses
      .filter((expense) => new Date(expense.date).getMonth() + 1 === month)
      .reduce((total, expense) => total + expense.amount, 0);
  };

  // Generate a summary of total expenses per month
  const monthlySummary = () => {
    const summary = {};
    expenses.forEach((expense) => {
      const month = new Date(expense.date).getMonth() + 1;
      summary[month] = (summary[month] || 0) + expense.amount;
    });
    return summary;
  };

  // Handler to change selected month
  const handleMonthChange = (e) => {
    setSelectedMonth(Number(e.target.value));
  };

  return (
    <div className="app">
      <h1>Customer Expense Tracker</h1>

      {/* Expense Form */}
      <form onSubmit={addExpense} className="expense-form">
        <h2>Add New Expense</h2>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit" className="add-btn">Add Expense</button>
      </form>

      {/* Month Selector */}
      <div className="month-selector">
        <label>Select Month: </label>
        <select value={selectedMonth} onChange={handleMonthChange}>
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i} value={i + 1}>
              {new Date(0, i).toLocaleString('default', { month: 'long' })}
            </option>
          ))}
        </select>
      </div>

      {/* Expense List */}
      <div className="expense-list">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.filter(expense => new Date(expense.date).getMonth() + 1 === selectedMonth).length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center' }}>No expenses found for this month</td>
              </tr>
            ) : (
              expenses.filter(expense => new Date(expense.date).getMonth() + 1 === selectedMonth).map((expense, index) => (
                <tr key={expense.id}>
                  <td>{index + 1}</td>
                  <td>{expense.description}</td>
                  <td>₹{expense.amount.toFixed(2)}</td>
                  <td>{new Date(expense.date).toLocaleDateString()}</td>
                  <td>
                    <button onClick={() => deleteExpense(expense.id)} className="delete-btn">Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Total and Monthly Summary */}
      <div className="total">
        <h3>Total Expenses for {new Date(0, selectedMonth - 1).toLocaleString('default', { month: 'long' })}: ₹{calculateTotal(selectedMonth)}</h3>
      </div>
      <div className="summary">
        <h3>Monthly Summary</h3>
        <ul>
          {Object.entries(monthlySummary()).map(([month, total]) => (
            <li key={month}>
              {new Date(0, month - 1).toLocaleString('default', { month: 'long' })}: ₹{total}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Area;
