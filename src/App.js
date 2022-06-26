import { ResponsiveContainer, LineChart, Line, XAxis,YAxis,CartesianGrid,Legend,Tooltip,AreaChart,Area,BarChart,Bar} from 'recharts'
const mydata = [
  {
    name: 'Python',
    students: 13,
    fees: 10
  },
  {
    name: 'Javascript',
    students: 15,
    fees: 12
  },
  {
    name: 'PHP',
    students: 5,
    fees: 10
  },
  {
    name: 'Java',
    students: 10,
    fees: 5
  },
  {
    name: 'C#',
    students: 9,
    fees: 4
  },
  {
    name: 'C++',
    students: 10,
    fees: 8
  },
]
function App() {
  return (
    <div>
      <h1 className="chart-heading">Line Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
      <LineChart data={mydata} width={500} height={300} margin={{
        top:5,right:300,left:20,bottom:5
      }}>
      <CartesianGrid strokeDasharray='3 3'/>
      <XAxis dataKey='name' interval={'preserveStart'} tickFormatter={(value) => value+" Programming"}/>
      <YAxis/>
      <Tooltip/>
      <Legend/>
      <Line type='monotone' dataKey='students' stroke='red' activeDot={{r:8}}/>
      <Line type='monotone' dataKey='fees' stroke='green'activeDot={{r:8}}/>
      </LineChart>
      </ResponsiveContainer>

      <h1 className='chart-heading'>Area Chart</h1>
      <ResponsiveContainer width='100%' aspect={3}>
      <AreaChart width={500} height={300} data={mydata} margin={{
        top:5,right:30,
        left:20,bottom:5
      }}>
      <CartesianGrid strokeDasharray='3 3'/>
      <XAxis dataKey='name'/>
      <YAxis/>
      <Tooltip/>
      <Legend/>
      <Area type='monotone' dataKey='students' stroke='#8884d8' fill='#8884d8'/>
      </AreaChart>
      </ResponsiveContainer>

      <h1 className='chart-heading'>Bar Chart</h1>
      <BarChart width={1800} height={500} data={mydata} margin={{
        top:5,right:30,
        left:20,bottom:5 }}>
        <CartesianGrid strokeDasharray='3 3'/>
        <XAxis dataKey='name'/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
        <Bar dataKey='students' fill='skyblue'/>
        <Bar dataKey='fees' fill='pink'/>
        </BarChart>
    </div>
  );
}

export default App;
