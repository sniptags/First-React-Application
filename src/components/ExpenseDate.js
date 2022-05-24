import '../css/ExpenseDate.css'
import Card from './Card'

const Expensedate=(props)=>{
    const date= new Date(props.date)
    const month= date.toLocaleString('en-US',{month:'long'})
    const day= date.getDate()
    const year=date.getFullYear()
    return(
        <Card className='date-container'>
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
        </Card>
    )
}
export default Expensedate