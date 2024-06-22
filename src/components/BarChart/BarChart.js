import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CustomLineChart = ({ data,filter }) => (
  <>
 
  <ResponsiveContainer width="100%" height="100%">
  <LineChart
    width={500}
    height={300}
    data={data}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="date" />
    <YAxis />
    <Tooltip />
    <Legend />
    {(filter==="all" ||filter==="open") && <Line type="monotone" dataKey="open" stroke="#8884d8" activeDot={{ r: 8 }} />}
    {(filter==="all" ||filter==="high") && <Line type="monotone" dataKey="high" stroke="#82ca9d" />}
 {(filter==="all" ||filter==="low") && <Line type="monotone" dataKey="low" stroke="#ff6347" />}
 {(filter==="all" ||filter==="close") && <Line type="monotone" dataKey="close" stroke="#ffc658" />}

  </LineChart>
</ResponsiveContainer></>
  
);

export default CustomLineChart;

