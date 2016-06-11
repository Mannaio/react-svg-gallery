import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Photo = React.createClass({
  render() {
    const { post } = this.props;
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox={post.viewBox} width={post.w} height={post.h}><svg viewBox={post.viewBox} width={post.w} height={post.h} fill={post.fill} stroke-width={post.strokewidth} stroke={post.stroke}><path d={post.d}></path></svg></svg>
          </Link>
        </div>

      </figure>
    )
  }
});

export default Photo;
