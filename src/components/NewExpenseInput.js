import '../css/newExpenseItem.css'
import React,{useState} from 'react'
const NewExpense=(props)=>{
    const [formActive,setFormActive]=useState(0)
    const[purchase,setPurchase]=useState('')
    const[purchaseAmount,setPurchaseAmount]=useState('')
    const[purchaseDate,setPurchaseDate]=useState('')
    const addNewExpense=(event)=>{
        event.preventDefault()
        const expenseData={
            title:purchase,
            amount:purchaseAmount,
            date:new Date(purchaseDate)
        }
        props.onNewExpenseSave(expenseData);
        setPurchase("")
        setPurchaseAmount("")
        setPurchaseDate("")
        setFormActive(0)
    }
    const purchaseChangeHandler=(e)=>{
        setPurchase(e.target.value)
    }
    const purchaseAmountChangeHandler=(e)=>{
        setPurchaseAmount(e.target.value)
    }
    const purchaseDateChangeHandler=(e)=>{
        setPurchaseDate(e.target.value)
    }
    const enableForm=()=>{
        setFormActive(1)
    }
    const disableForm=()=>{
        setFormActive(0)
    }
    let formContent=<button onClick={enableForm}>Add New Expense</button>
    if(formActive===1){
        formContent=<form onSubmit={addNewExpense}>
        <div className='inputHolder'>
            <label for='purchase' className='inputLabel'>Purchased Item</label>
            <input value={purchase} onChange={purchaseChangeHandler} className='inputField' type='text' placeholder='Purchase'></input>
        </div>
        <div className='inputHolder'>
        <label  for='amount' className='inputLabel'>Amount</label>
            <input  value={purchaseAmount} onChange={purchaseAmountChangeHandler} className='inputField' type='number' placeholder='Amount'></input>
        </div>
        <div className="inputHolder">
            <label for='date' className='inputLabel'>Date of Purchase</label>
            <input value={purchaseDate} id='date' onChange={purchaseDateChangeHandler} className='inputField' type='date' placeholder='Date'  min='2022-04-01' max='2023-04-01'></input>
        </div>
        <div className='inputHolder'>
            <button type='submit'>Add Expense</button>
            <button onClick={disableForm}>Cancel</button>
        </div>
    </form>
    }
    return <div className='formHolder'>
        <h3 className='myTitle'>Expenses Manager</h3>
        {formContent}
    </div>
}

export default NewExpense