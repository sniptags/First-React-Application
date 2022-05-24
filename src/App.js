import ExpenseItems from "./components/ExpenseItems";
import Card from './components/Card'
import './css/expense-container.css'
import NewExpenseItem from './components/NewExpenseInput'
import { useState } from "react";
const DummyExpenseItems=[{
  key:'1',
  title:'Insurance',
  date: Date.now(),
  amount: 279
},
{
  key:'2',
  title:'Grocery',
  date: Date.now(),
  amount: 90
},
{
  key:'3',
  title:'Gas',
  date: Date.now(),
  amount: 50
}]

function App() {
const[expenses,setExpenses]=  useState(DummyExpenseItems)
  // const [filterYear,setFilterYear]=useState('2022')
  const saveNewExpense=(item)=>{
    const newAddedItem={
      ...item,
      id:Math.random().toString()
    }
    setExpenses((prevState)=>{
      return [newAddedItem,...prevState]
    })
  }
  return (
    <Card className='container'>
      <NewExpenseItem className="new-expense-form" onNewExpenseSave={saveNewExpense}></NewExpenseItem>
      <ExpenseItems expenses={expenses}/>
    </Card>
  );
}

export default App;
