import React from 'react';
import HorizontalAxis from './HorizontalAxis';
import VerticalAxis from './VerticalAxis';
import LinePlot from './LinePlot';

class LineChart extends React.Component {
  static propTypes = {
    data: React.PropTypes.array.isRequired,
    horizontalAxisHeight: React.PropTypes.number.isRequired,
    trbl: React.PropTypes.array.isRequired,
    verticalAxisWidth: React.PropTypes.number.isRequired,
    view: React.PropTypes.array.isRequired
  };

  buildLinePlot (data, containerView, containerTrbl, horizontalAxisHeight, verticalAxisWidth, xScale, yScale) {
    const trbl = [
      horizontalAxisHeight,
      verticalAxisWidth,
      horizontalAxisHeight,
      verticalAxisWidth
    ];
    const view = [
      containerView[0] - verticalAxisWidth * 2,
      containerView[1] - horizontalAxisHeight * 2
    ];
    return (
      <LinePlot {...{data, trbl, view, xScale, yScale}} />
    );
  }

  buildVerticalAxis (containerView, containerTrbl, horizontalAxisHeight, verticalAxisWidth, scale) {
    const view = [verticalAxisWidth, containerView[1] - horizontalAxisHeight * 2];
    const trbl = [horizontalAxisHeight, 0, 0, 0];
    const orientation = VerticalAxis.orientation.LEFT;
    const tickValues = scale.ticks();
    const labelFn = value => value;
    return (
      <VerticalAxis {...{scale, trbl, view, tickValues, orientation, labelFn}} />
    );
  }

  buildScale ([domainMin, domainMax], range) {
    return d3.scaleLinear().domain([domainMin, domainMax]).range(range);
  }

  buildHorizontalAxis (containerView, containerTrbl, horizontalAxisHeight, verticalAxisWidth, scale) {
    const view = [containerView[0] - verticalAxisWidth * 2, horizontalAxisHeight];
    const trbl = [containerView[1] - horizontalAxisHeight, verticalAxisWidth, 0, verticalAxisWidth];
    const orientation = HorizontalAxis.orientation.BOTTOM;
    const tickValues = scale.ticks();
    const labelFn = value => value;
    return (
      <HorizontalAxis {...{scale, trbl, view, tickValues, orientation, labelFn}} />
    );
  }

  render () {
    const {view, trbl, data, horizontalAxisHeight, verticalAxisWidth} = this.props;
    const [domainXMin, domainXMax] = d3.extent(data, (value, index) => index);
    const xScale = this.buildScale([domainXMin, domainXMax], [0, view[0] - verticalAxisWidth * 2]);
    const yScale = this.buildScale(d3.extent(data), [view[1] - horizontalAxisHeight * 2, 0]);
    const viewBox = `0 0 ${view[0]} ${view[1]}`;
    const transform = `translate(${trbl[0]}, ${trbl[3]})`;
    return (
      <svg {...{viewBox}}>
        <g {...{transform}}>
          {this.buildHorizontalAxis(view, trbl, horizontalAxisHeight, verticalAxisWidth, xScale)}
          {this.buildVerticalAxis(view, trbl, horizontalAxisHeight, verticalAxisWidth, yScale)}
          {this.buildLinePlot(data, view, trbl, horizontalAxisHeight, verticalAxisWidth, xScale, yScale)}
        </g>
      </svg>
    );
  }
}
