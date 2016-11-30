import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

export default class Svg extends React.Component {

  render() {
    const { svg, i, comments } = this.props;
    return (
      <figure className="grid-figure">
        <div className="grid-element-wrap">
          <Link to={`/view/${svg.code}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className={svg.animation} viewBox={svg.viewBox} width={svg.w} height={svg.h}>
              <svg viewBox={svg.viewBox} className={svg.animation} width={svg.w} height={svg.h} fill={svg.fill}>
              <circle style={svg.circle} cx={svg.cx1} cy={svg.cy1} r={svg.rad1}></circle>
              <circle style={svg.circle} cx={svg.cx2} cy={svg.cy1} r={svg.rad1}></circle>
              <circle style={svg.circle} cx={svg.cx3} cy={svg.cy1} r={svg.rad2}></circle>
              <circle style={svg.circle} cx={svg.cx4} cy={svg.cy2} r={svg.rad1}></circle>
              <circle style={svg.circle} cx={svg.cx4} cy={svg.cy3} r={svg.rad1}></circle>
              <svg viewBox={svg.viewBoxSmall}  width={svg.initialWidth} height={svg.initialHeight}>
                <g transform={svg.transformFirstElement}>
                  <path d={svg.c} className={svg.animation} style={svg.style}></path>
                  <path d={svg.d2} className={svg.rotate} style={svg.styleLine}></path>
                </g>
                <svg viewBox={svg.viewBoxSmall}  width={svg.hexagonWidth} height={svg.hexagonHeight}>
                  <g transform={svg.transformSecondElement}>
                    <path d={svg.d} style={svg.styleLine}></path>
                  </g>
                </svg>
              </svg>
            </svg>
          </svg>
          </Link>
          <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            <span key={svg.likes} className="likes-heart">{svg.likes}</span>
          </CSSTransitionGroup>
        </div>
        <figcaption>
          <p>{svg.caption}</p>
          <div className="control-buttons">
            <button onClick={this.props.increment.bind(null, i)} className="likes">&hearts; {svg.likes}</button>
            <Link className="button" to={`/view/${svg.code}`}>
              <span className="comment-count">
                <span className="speech-bubble"></span>
                {comments[svg.code] ? comments[svg.code].length : 0 }
              </span>
            </Link>
          </div>
        </figcaption>
      </figure>
    )
  }
};
