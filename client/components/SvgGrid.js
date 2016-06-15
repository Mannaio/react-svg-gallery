import React from 'react';
import Svg from './Svg';

const SvgGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        {this.props.svgs.map((svg, i) => <Svg {...this.props} key={i} i={i} svg={svg} />)}
      </div>
    )
  }
});

export default SvgGrid;
