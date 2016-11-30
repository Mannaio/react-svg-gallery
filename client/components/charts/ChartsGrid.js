import React from 'react';
import Chart from './Chart';

export default class ChartsGrid extends React.Component{

  render() {

    return (
      <div className="grid">
          {this.props.charts.map((chart, i) => <Chart key={i} chart={chart} />)}
      </div>
    )
  }
};
