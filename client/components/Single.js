import React from 'react';
import Svg from './Svg';
import Comments from './Comments';

export default class Single extends React.Component {
  render() {
    const { svgId } = this.props.params;

    const i = this.props.svgs.findIndex((svg) => svg.code === svgId);
    const svg = this.props.svgs[i];

    const svgComments = this.props.comments[svgId] || [];

    return (
      <div className="single">
        <Svg i={i} svg={svg} {...this.props} />
        <Comments svgComments={svgComments} {...this.props} />
      </div>
    )
  }
};
