// Write your code here

import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const GenderBy = props => {
  const {GenderData} = props
  return (
    <div>
      <h1>Vaccination by gender</h1>

      <ResponsiveContainer height={600} width="100%">
        <PieChart>
          <Pie
            cx="70%"
            cy="30%"
            data={GenderData}
            startAngle={0}
            endAngle={180}
            innerRadius="40%"
            outerRadius="60%"
            dataKey="count"
          >
            <Cell name="male" fill=" #94a3b8" />
            <Cell name="female" fill=" #5a8dee" />
            <Cell name="others" fill="#cbd5e1" />
          </Pie>
          <Legend iconType="circle" verticalAlign="middle" align="center" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
export default GenderBy
