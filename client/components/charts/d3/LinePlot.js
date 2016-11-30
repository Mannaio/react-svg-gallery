import React from 'react';

export default class LinePlot extends React.Component {
  static propTypes = {
     data: React.PropTypes.array.isRequired,
     trbl: React.PropTypes.array.isRequired,
     view: React.PropTypes.array.isRequired,
     xScale: React.PropTypes.func.isRequired,
     yScale: React.PropTypes.func.isRequired
   };

   buildLinePlot (data, view, trbl, xScale, yScale) {
     const line = d3.line();
     line.x((value, index) => xScale(index));
     line.y(yScale);
     line.curve(d3.curveLinear);
     const d = line(data);
     const className = 'line-chart__area-plot';
     return (
       <path {...{className, d, fill: 'none'}} />
     );
   }

   render () {
     const {trbl, view, data, xScale, yScale, year} = this.props;
     const [width, height] = view;
     const transform = `translate(${trbl[3]}, ${trbl[0]})`;
     return (
       <g {...{transform}}>
         {this.buildLinePlot(data, view, trbl, xScale, yScale)}
       </g>
     );
   }
 }
 
