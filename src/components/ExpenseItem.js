import '../css/ExpenseItem.css'
import Expensedate from './ExpenseDate'
import Card from './Card'
const ExpenseItem=(props)=>{
    return(
        <li>
        <Card className='expense-item'>
            <Expensedate date={props.date} />
            <div className="expense-title">{props.title}</div>
            <div className="expense-price">${props.amount}</div>
        </Card>
        </li>
    )
}

export default ExpenseItem