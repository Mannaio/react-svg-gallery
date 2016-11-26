import React from 'react';
import { Link } from 'react-router';
import ChartsGrid from './ChartsGrid';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, ReferenceLine,
  ReferenceDot, Tooltip, CartesianGrid, Legend, Brush } from 'recharts';

export default class Chart extends React.Component {
  render () {
    const { chart } = this.props;
  	return (
      <div>
        <h1>{chart.name}</h1>
      	<LineChart width={600} height={300} data={chart.data}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
         <XAxis dataKey="name"/>
         <YAxis tickCount={5}/>
         <CartesianGrid strokeDasharray="3 3"/>
         <Tooltip/>
         <Legend />
         <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
         <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
        </LineChart>
      </div>
    );
  }
};
