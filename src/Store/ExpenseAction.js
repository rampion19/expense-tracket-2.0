import { expenseAction } from "./Expenses";

export const addingExpense = (expenseItem) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://expense-tracker-364f5-default-rtdb.firebaseio.com/Expense.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(expenseItem),
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert("Expense added Successfully");
        //   inputAmountRef.current.value = "";
        //   inputDescRef.current.value = "";
        //   inputCategoryRef.current.value = "";
        //   await fetchExpenses();
        const newData = {
          id: data.name,
          ...expenseItem,
        };
        dispatch(
          expenseAction.addExpense({
            expenses: newData,
            totalAmount: newData.amount,
          })
        );
      } else {
        throw data.error;
      }
    } catch (error) {
      console.log(error);
    }
  };
};