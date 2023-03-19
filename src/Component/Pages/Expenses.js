import React, { useState } from "react";
import "./Expenses.css";

const Expenses = () => {
    const [expenseAmount, setExpenseAmount] = useState(0);
    const [expenseDesciption, setExpenseDesciption] = useState('');
    const [expenseCatagory, setExpenseCatagory] = useState('');

    const [expenses, setExpense] = useState([])

    const addExpenseHandler = (event) => {
        event.preventDefault();
        setExpense((prev) => {
            return [...prev, {
                eAmount: expenseAmount,
                eDescription: expenseDesciption,
                eCatagory: expenseCatagory
            }]
        })
    };
    return (
        <div>
            <div>
                <form onSubmit={addExpenseHandler} className="form-expenses">
                    <label htmlFor="amount">Amount</label>
                    <input
                        value={expenseAmount}
                        type="number"
                        id="amount"
                        onChange={(e) => setExpenseAmount(e.target.value)} />

                    <label htmlFor="desc">Description</label>
                    <textarea
                        type="text"
                        id="desc"
                        rows="3"
                        value={expenseDesciption}
                        onChange={(e) => setExpenseDesciption(e.target.value)}
                    ></textarea>
                    <label htmlFor="category">Choose a car:</label>
                    <select
                        value={expenseCatagory}
                        id="category"
                        onChange={(e) => setExpenseCatagory(e.target.value)}>
                        <option value="Food">Food</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Rent">Rent</option>
                        <option value="Others">Others</option>
                    </select>
                    <button type="submit">Add Expense</button>
                </form>
            </div>
            <div>All Expenses</div>
            <table className="expense-table">
                {/* <thead>
                    <tr>
                        <th>Amount</th>
                        <th>Description</th>
                        <th>Category</th>
                    </tr>
                </thead> */}
                <tbody>
                    {expenses.map((expense, index) => (
                        <tr key={index}>
                            <td>{expense.eAmount}</td>
                            <td>{expense.eDescription}</td>
                            <td>{expense.eCatagory}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Expenses;