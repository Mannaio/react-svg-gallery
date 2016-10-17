import React from 'react';
import Svg from './Svg';

export default class SvgGrid extends React.Component {
  render() {
    return (
      <div className="photo-grid">
        {this.props.svgs.map((svg, i) => <Svg {...this.props} key={i} i={i} svg={svg} />)}
      </div>
    )
  }
};
