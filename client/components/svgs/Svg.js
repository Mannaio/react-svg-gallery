import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

export default class Svg extends React.Component {

  render() {
    const { svg, i, a, comments } = this.props;
    return (
      <figure className="grid-figure">
        <div className="grid-element-wrap">
          <Link to={`/view/${svg.code}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className={svg.animation} width={svg.w} height={svg.h}>
              <svg className={svg.animation} width={svg.w} height={svg.h} fill={svg.fill}>
              <circle style={svg.circle} cx={svg.cx1} cy={svg.cy1} r={svg.rad1}></circle>
              <circle style={svg.circle} cx={svg.cx2} cy={svg.cy1} r={svg.rad1}></circle>
              <circle style={svg.circle} cx={svg.cx3} cy={svg.cy1} r={svg.rad2}></circle>
              <circle style={svg.circle} cx={svg.cx4} cy={svg.cy2} r={svg.rad1}></circle>
              <circle style={svg.circle} cx={svg.cx4} cy={svg.cy3} r={svg.rad1}></circle>
              <circle style={svg.circlex5} cx={svg.cx5} cy={svg.cy5} r={svg.rad5}></circle>
              <svg viewBox={svg.viewBox}  width={svg.initialWidth} height={svg.initialHeight}>
                <g transform={svg.transformFirstElement}>
                  <path d={svg.d2} className={svg.rotate} style={svg.styleLine}></path>
                </g>
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
          <div className="control-buttons">
            <button onClick={this.props.increase.bind(null, i)}>Shape</button>
            <button onClick={this.props.morewidth.bind(null, i)}>+</button>
            <button onClick={this.props.lesswidth.bind(null, i)}>-</button>
          </div>
        </figcaption>
      </figure>
    )
  }
};
