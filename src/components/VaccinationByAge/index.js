// Write your code here
import {PieChart, Pie, Cell, Legend, ResponsiveContainer} from 'recharts'

const ByAge = props => {
  const {ElementSending} = props
  return (
    <div>
      <h1>Vaccination by age</h1>
      <ResponsiveContainer height={400} width="100%">
        <PieChart>
          <Pie
            cx="70%"
            cy="30%"
            data={ElementSending}
            startAngel={0}
            endAngle={360}
            innerRadius="40%"
            outerRadius="60%"
            dataKey="count"
          >
            <Cell name="18-44" fill=" #2d87bb" />
            <Cell name="45-60" fill="#a3df9f" />
            <Cell name="Above 60" fill=" #64c2a6" />
          </Pie>

          <Legend iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ByAge
