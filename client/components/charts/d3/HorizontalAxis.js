import React from 'react';

export default class HorizontalAxis extends React.Component {
  static propTypes = {
    labelFn: React.PropTypes.func.isRequired,
    orientation: React.PropTypes.string.isRequired,
    scale: React.PropTypes.func.isRequired,
    tickValues: React.PropTypes.array.isRequired,
    trbl: React.PropTypes.array.isRequired,
    view: React.PropTypes.array.isRequired
  };

  static orientation = {
    BOTTOM: 'horizontal-axis-bottom',
    TOP: 'horizontal-axis-top'
  };

  buildTicks (tickValues, scale, labelFn, trbl, view, orientation) {
    return tickValues.map((tickValue, key) => {
      const tickLength = view[1] / 6;
      const xPos = scale(tickValue);
      let y2 = view[1];
      let y1 = y2 - tickLength;
      if (orientation === HorizontalAxis.orientation.BOTTOM) {
        y1 = 0;
        y2 = tickLength;
      }
      const transform = `translate(${xPos}, 0)`;
      return (
        <g {...{transform, key}}>
          <line
              {...{y1, y2}}
              className="line-chart__axis-tick line-chart__axis-tick--horizontal"
              x1={0}
              x2={0}
          />
          <text
              dy={'1.4em'}
              className="line-chart__axis-text line-chart__axis-text--horizontal"
              textAnchor={'middle'}
              x={0}
              y={0}
          >{labelFn(tickValue)}</text>
        </g>
      );
    });
  }

  render () {
    const {scale, view, trbl, labelFn, tickValues, orientation} = this.props;
    const [width, height] = view;
    let y1 = 0;
    if (orientation === HorizontalAxis.orientation.TOP) {
      y1 = view[1];
    }
    const y2 = y1;
    const transform = `translate(${trbl[3]}, ${trbl[0]})`;
    return (
      <g {...{transform}}>
        <line
            className="line-chart__axis-line line-chart__axis-line--horizontal"
            x1={0}
            y1={0}
            x2={view[0]}
            y2={0}
        />
        {this.buildTicks(tickValues, scale, labelFn, trbl, view, orientation)}
      </g>
    );
  }
}
