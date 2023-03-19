import React from 'react';
import './ExpenseItem.css';



const ExpenseItem = (props) => {

    const deleteHandler = async () => {
        try {
            const res = await fetch(`https://data-edd3c-default-rtdb.firebaseio.com/user-expenses/${props.item.id}.json`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
            const data = await res.json();

            if (res.ok) {

                alert("Expense Deleted Successfully")
                props.deleteItem(props.item)

            } else {
                throw data.error
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    const editHandler = async () => {
        try {
            const res = await fetch(`https://data-edd3c-default-rtdb.firebaseio.com/user-expenses/${props.item.id}.json`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
            const data = await res.json();

            if (res.ok) {
                props.editItem(props.item)

            } else {
                throw data.error
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    return (<>
        <li className='expenselist'> <b>Category</b> :-{props.item.category} <b>Amount</b>:-${props.item.amount} <b>Description</b>:-{props.item.description} <button className='bg-blue' onClick={editHandler}>Edit</button> <button className='bg-red' onClick={deleteHandler}>Delete</button> </li>
        {/* <li><span>{props.item.amount}</span>  <span>{props.item.description}</span>  <span> {props.item.category}</span> `
        <button onClick={editHandler}>Edit</button>   <button onClick={deleteHandler}>Delete</button> </li> */}
    </>
    )
}

export default ExpenseItem