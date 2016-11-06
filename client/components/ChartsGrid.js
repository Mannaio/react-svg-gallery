import React from 'react';
import Svg from './Chart';

export default class ChartsGrid extends React.Component{
  render() {
    return (
      <div className="grid">
        {this.props.charts.map((chart, i) => <Chart {...this.props} key={i} i={i} chart={chart} />)}
      </div>
    )
  }
};
