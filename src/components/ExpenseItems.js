import { useState } from "react"
import ExpensesFilter from "./ExpenseFilter"
import ExpensesList from './ExpensesList'
import ExpenseChart from "./ExpenseChart"
const ExpenseItems=(props)=>{
    const [filterYear,setFilterYear]=useState('2022')
    const getNewFilterYear=(year)=>{
        setFilterYear(year)
      }
      const filteredExpenses= props.expenses.filter(expense=>
        new Date(expense.date).getFullYear().toString()===filterYear)  
    return <div>
        <ExpensesFilter onGetFilterYear={getNewFilterYear}/>
        <ExpenseChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
    </div>
}
export default ExpenseItems