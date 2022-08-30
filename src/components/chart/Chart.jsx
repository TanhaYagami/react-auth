import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import "./chart.css"

export default function Chart({title, data,dataKey,grid}) {


  return (
    <div className="chart">
         <span className="chartTitle">{title}</span>
        <div className="chartItem">
            <ResponsiveContainer width="100%" aspect={4/ 1}>
                <LineChart data={data} >
                    <XAxis dataKey="name"/>
                    <Line type="monotone" dataKey= {dataKey} />
                    <Tooltip />
                    <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5" />
                </LineChart>
            </ResponsiveContainer>
           
        </div>
    </div>
  )
}
