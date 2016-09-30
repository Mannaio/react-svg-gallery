import React from 'react';

export default class Line extends React.Component {

  constructor(likes, code, size, height, width, d1, d2, d3, d4, splay, fill, caption, animation) {
    super(likes, code, size, height, width, d1, d2, d3, d4, splay, fill, caption, animation);
    this.likes = likes;
    this.code = code;
    this.size = size;
    this.height = height;
    this.width = width;
    this.d1 = d1;
    this.d2 = d2;
    this.d3 = d3;
    this.d4 = d4;
    this.splay = splay;
    this.fill = fill;
    this.caption = caption;
    this.animation = animation;
  }

  render() {

    const myclass = new Line(10, '5', 64, 150, 200, 1, .5, .3, .05, .375, 'none', 'Animate SVG', 'animated');

    const animation = myclass.animation
    const caption = myclass.caption
    const likes = myclass.likes
    const code = myclass.code
    const height = myclass.height
    const width = myclass.width
    const fill = myclass.fill
    const styles = {
      circle: {
        stroke: '#c60000',
        strokeLinecap: 'round',
        strokeDasharray: '5',
        strokeWidth: '1',
        fill: 'none'
      },
      line: {
        stroke: '#000000',
        strokeLinecap: 'round',
        strokeDasharray: '5',
        strokeWidth: '1',
        fill: 'none'
      }
    }

    // Radii
    const r1 = myclass.d2 * height  // 75
    const r2 = myclass.d2 * width   // 100
    const r3 = myclass.d4 * width   // 10
    const r4 = width - myclass.d4 * width // 190
    const r5 = myclass.d2 * height // 50


    const curve = () => {
      return [
        'M', r3, r1,
        'Q', r5, r3, r2, r1,
        'T', r4, r1,
      ].join(' ')
    }

    const pathDataCircle = [
      curve()
    ].join(' ')

    const pathData = [
      'M', 10, 75, // Move to 2,2
      'L', 190, 75, // Draw a line to 190,75
    ].join(' ')

    return {
      likes: likes,
      caption: caption,
      animation: animation,
      code: code,
      w: width,
      h: height,
      fill: fill,
      d2: pathData,
      c: pathDataCircle,
      style: styles.circle,
      styleLine: styles.line
    }

  }

};
