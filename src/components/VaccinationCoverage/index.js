// Write your code here

import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const CoverageBy = props => {
  const {CoverSending} = props

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }
  return (
    <div>
      <div>
        <h1>Vaccination Coverage</h1>
      </div>
      <ResponsiveContainer height={440} width="100%">
        <BarChart data={CoverSending} margin={{top: 5}}>
          <XAxis
            dataKey="name"
            tick={{
              stroke: 'gray',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tick={{stroke: 'gray', strokeWidth: 0}}
            tickFormatter={DataFormatter}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />

          <Bar dataKey="doseOne" name="Dose 1" fill="#a3df9f" barSize="20%" />
          <Bar dataKey="doseTwo" name="Dose 2" fill="#2cc6c6" barSize="20%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CoverageBy
