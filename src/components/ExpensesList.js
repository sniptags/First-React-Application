import ExpenseItem from "./ExpenseItem"
import '../css/list.css'
const ExpensesList=props=>{
    if(props.items.length===0){
        return <p> No Expenses found in selected year</p>
    }
    else{
        return ( <ul className="ul-expenses">
                {props.items.map((item) => (
                <ExpenseItem key={item.key} 
                date={item.date} 
                title={item.title} 
                amount={item.amount}/>))
                }
            </ul>
        )
    }
}

export default ExpensesList