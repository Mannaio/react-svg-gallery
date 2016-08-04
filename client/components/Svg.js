import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Svg = React.createClass({
  render() {
    const { svg, i, comments } = this.props;
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${svg.code}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className={svg.animation} viewBox={svg.viewBox} width={svg.w} height={svg.h}>
              <svg viewBox={svg.viewBox} className={svg.animation} width={svg.w} height={svg.h} fill={svg.fill}>
              <path d={svg.d} stroke={svg.strokeBlack} strokeLinecap={svg.linecap} strokeDash={svg.dasharray} fill={svg.fill}></path>
              <path d={svg.c} stroke={svg.strokeRed} strokeLinecap={svg.linecap} strokeDash={svg.dasharray} fill={svg.fill}></path>
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
});

export default Svg;
