import React from 'react'

const ExpenseItem = (props) => {
    return (
        <div>
            <li>
                {`${props.item.amount}  
            ${props.item.description}   
            ${props.item.category}`}

            </li>
        </div>
    )
}
export default ExpenseItem;