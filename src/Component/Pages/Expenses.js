import React, { useEffect, useRef, useState } from "react";
import "./Expenses.css";
import ExpenseItem from "../ExpenseItem";
const Expenses = () => {
  const inputAmountRef = useRef();
  const inputDescRef = useRef();
  const inputCategoryRef = useRef();
  const dummy_expenses = [];
  const [expenses, setExpenses] = useState(dummy_expenses);
  async function fetchExpenses() {
    try {
      const res = await fetch(
        `https://expense-tracker-364f5-default-rtdb.firebaseio.com/user-expenses.json`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        const newdata = [];
        for (let key in data) {
          newdata.push({ id: key, ...data[key] });
        }
        setExpenses(newdata);
      } else {
        throw data.error;
      }
    } catch (error) {
      console.log(error.message);
    }
  }


  const addExpenseHandler =  async (event) => {
    event.preventDefault();
    const obj = {
      amount: inputAmountRef.current.value,
      description: inputDescRef.current.value,
      category: inputCategoryRef.current.value,
    };
    try {
      const res = await fetch(
        `https://expense-tracker-364f5-default-rtdb.firebaseio.com/user-expenses.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        }
      );
      const data = await res.json();
      if (res.ok) {
        alert("Expense added Successfully");
        inputAmountRef.current.value = "";
        inputDescRef.current.value = "";
        inputCategoryRef.current.value = "";
        await fetchExpenses();
      } else {
        throw data.error;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  },[]);
  return (
    <div>
      <div>
        <form onSubmit={addExpenseHandler} className="form-expenses">
          <label htmlFor="amount">Amount</label>
          <input ref={inputAmountRef} type="number" id="amount" />
          <label htmlFor="desc">Description</label>
          <textarea
            type="text"
            id="desc"
            rows="3"
            ref={inputDescRef}
          ></textarea>
          <label htmlFor="category">Choose a car:</label>
          <select ref={inputCategoryRef} id="category">
            <option value="Food">Food</option>
            <option value="Shopping">Shopping</option>
            <option value="Rent">Rent</option>
            <option value="Others">Others</option>
          </select>
          <button type="submit">Add Expense</button>
        </form>
      </div>
      <div className="expenses-list">
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} item={expense} />
        ))}
      </div>
    </div>
  );
};
export default Expenses;