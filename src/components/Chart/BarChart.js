import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CustomBarChart = ({ data,filter }) => (
  <>

  <ResponsiveContainer width="100%" height="100%">
  <BarChart
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
    {(filter==="all" ||filter==="open") &&  <Bar dataKey="open" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />}
    {(filter==="all" ||filter==="high") && <Bar dataKey="high" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />}
 {(filter==="all" ||filter==="low") && <Bar dataKey="low" fill="#ff6347" activeBar={<Rectangle fill="pink" stroke="blue" />} />}
 {(filter==="all" ||filter==="close") && <Bar dataKey="close" fill="#ffc658" activeBar={<Rectangle fill="gold" stroke="purple" />} />
}
          
          
          
  </BarChart>
</ResponsiveContainer></>
  
);

export default CustomBarChart;

