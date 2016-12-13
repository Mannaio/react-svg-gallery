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

// import React from 'react';
// import Chart from './Chart';
// import LineChart from './d3/LineChart';
//
// export default class ChartsGrid extends React.Component{
//
//   render() {
//
//     const view = [480, 320];
//     const trbl = [0, 0, 0, 0]
//     const horizontalAxisHeight = 30;
//     const verticalAxisWidth = 42;
//     const nums  = this.props.nums || [];
//     console.log(nums);
//     // const nums = [32, 19, 47, 38, 17, 62, 94, 21, 59, 62];
//
//     return (
//       <div className="grid">
//           <LineChart {...{view, trbl, nums, horizontalAxisHeight, verticalAxisWidth}} />
//       </div>
//     )
//   }
// };
