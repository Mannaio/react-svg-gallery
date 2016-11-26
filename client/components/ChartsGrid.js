import React from 'react';
import Chart from './Chart';

export default class ChartsGrid extends React.Component{

  render() {

    return (
      <div className="grid">
          <Chart {...this.props} key={0} i={0} />
      </div>
    )
  }
};
