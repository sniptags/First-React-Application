import ChartBar from './ChartBar'
import '../css/chart.css'
const Chart= props=>{
    const dataValues= props.dataStacks.map(data=>data.value)
    const maxValue=Math.max(...dataValues)
    return <div className="chart">
        {props.dataStacks.map(data=>(
                <ChartBar label={data.label}
                value={data.value}
                id={data.id}
                maxValue={maxValue}
                />
            ))
        }
    </div>
}

export default Chart