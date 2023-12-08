// Write your code here

import {Bar, BarChart, XAxis, YAxis, Legend} from 'recharts'

const CoverageBy = props => {
  const {CoverSending} = props

  return (
    <div>
      <div>
        <h1>Vaccination Coverage</h1>
      </div>

      <BarChart data={CoverSending} height={500} width="100%" margin={{top: 5}}>
        <XAxis
          dataKey="name"
          tick={{
            stroke: 'gray',
            strokeWidth: 1,
          }}
        />
        <YAxis tick={{stroke: 'gray', strokeWidth: 0}} />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />

        <Bar dataKey="doseOne" name="Dose 1" fill="#a3df9f" barSize="20%" />
        <Bar dataKey="doseTwo" name="Dose 2" fill="#2cc6c6" barSize="20%" />
      </BarChart>
    </div>
  )
}

export default CoverageBy
