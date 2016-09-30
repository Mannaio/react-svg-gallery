import React from 'react';

export default class Polygon extends React.Component {

  constructor(likes, code, size, d1, d2, d3, teeth, splay, animation, min, max) {
    super(likes, code, size, d1, d2, d3, teeth, splay, animation, min, max);
    this.likes = likes;
    this.code = code;
    this.size = size;
    this.d1 = d1;
    this.d2 = d2;
    this.d3 = d3;
    this.teeth = teeth;
    this.splay = splay;
    this.animation = animation;
    this.min = min;
    this.max = max;
  }

  random(min, max) {
    return Math.random() * (max - min) + min;
  }

  render() {

    const myclass = new Polygon(10, '4', 64, 1, .6875, .375, 4, .375, 4, .375, 'Fourth SVG', 'wheel', 128, 256);
    const animation = myclass.animation
    const caption = myclass.caption
    const likes = myclass.likes
    const code = myclass.code
    // const size = myclass.size
    const size = myclass.random(128, 256)
    const styles = {
      line : {
        stroke: '#9e9d9e',
        fill: 'none',
        strokeWidth: '1'
      }
    }

    // Center
    const c = size / 2

    // Radii
    const r1 = myclass.d1 * size / 2
    const r2 = myclass.d2 * size / 2
    const r3 = myclass.d3 * size / 2

    // Angle
    const angle = 360 / myclass.teeth
    const offset = 90

    const viewBox = [0, 0, size, size].join(' ')


    const pathData = [
      'M', 64, 0, // Move to 2,2
      'L', 109.25483399593904, 18.745166004060962, // Draw a line to 62,2
      'L', 128, 64, // Draw a line to 62,62
      'L', 109.25483399593904, 109.25483399593904, // Draw a line to 2,62
      'L', 64, 128, // Draw a line to 2,2
      'L', 18.745166004060962, 109.25483399593904,
      'L', 0, 64.00000000000001,
      'L', 18.74516600406095, 18.745166004060962,
      'L', 64.00000000000001, 0,
    ].join(' ')

    return {
      caption: caption,
      animation: animation,
      likes: likes,
      code: code,
      viewBox: viewBox,
      w: size,
      h: size,
      d2: pathData,
      styleLine: styles.line
    }

  }

};
