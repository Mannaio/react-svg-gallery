import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Svg = React.createClass({
  render() {
    const { svg } = this.props;
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${svg.code}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox={svg.viewBox} width={svg.w} height={svg.h}><svg viewBox={svg.viewBox} width={svg.w} height={svg.h} fill={svg.fill} stroke-width={svg.strokewidth} stroke={svg.stroke}><path d={svg.d}></path></svg></svg>
          </Link>
        </div>

      </figure>
    )
  }
});

export default Svg;
