import React from 'react';

export default class Cog extends React.Component {

  constructor(likes, code, size, d1, d2, d3, teeth, splay, animation, fill, caption) {
    super(likes, code, size, d1, d2, d3, teeth, splay, animation, fill, caption);
    this.likes = likes;
    this.code = code;
    this.size = size;
    this.d1 = d1;
    this.d2 = d2;
    this.d3 = d3;
    this.teeth = teeth;
    this.splay = splay;
    this.animation = animation;
    this.fill = fill;
    this.caption = caption;
  }

  render() {

    const myclass = new Cog(10, "1", 350, 1, .6875, .375, 6, .375, 'wheel', 'currentcolor', 'First SVG');

    // const size = myclass.size
    const animation = myclass.animation
    const caption = myclass.caption
    const likes = myclass.likes
    const code = myclass.code
    const size = myclass.size
    const fill = myclass.fill
    const teeth = myclass.teeth
    // Center
    const c = size / 2

    // Radii
    const r1 = myclass.d1 * size / 2
    const r2 = myclass.d2 * size / 2
    const r3 = myclass.d3 * size / 2

    // Angle
    const angle = (n) => {
      return 360 / n;
    }

    const offset = 90

    const viewBox = [0, 0, size, size].join(' ')

    const styles = {
      line : {
        stroke: '#9e9d9e',
        fill: 'none',
        strokeWidth: '1'
      }
    }

    const rx = (r, a) => {
      return c + r * Math.cos(rad(a))
    }

    const ry = (r, a) => {
      return c + r * Math.sin(rad(a))
    }

    const num = (n) => {
      return (n < 0.0000001) ? 0 : n
    }

    const rad = (a) => {
      return Math.PI * a / 180
    }

    const drawTeeth = (n) => {
      const d = []
      for (let i = 0; i < n; i++) {
        const a = angle(n) * i - offset
        const line = [
          (i === 0) ? 'M' : 'L',
          num(rx(r1, a)),
          num(ry(r1, a)),
          (i === 5) ? 'L 175 0' : '',
        ].join(' ')
        d.push(line)
      }
      return d.join(' ')
    }

    const pathData = [
      drawTeeth(teeth)
    ].join(' ')

    return {
      likes: likes,
      caption: caption,
      animation: animation,
      code: code,
      viewBox: viewBox,
      w: size,
      h: size,
      fill: fill,
      d: pathData,
      styleLine: styles.line
    }

  }

};
