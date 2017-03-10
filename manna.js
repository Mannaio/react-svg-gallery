import React from 'react';

export default class Manna extends React.Component {

  constructor(likes, code, size, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, rad1, rad2, ratioHeight, ratioWidth, teeth, teethSix, splay, viewBoxParametersWidth, viewBoxParametersHeight, initialHeight, initialWidth, left, top, caption, translate, rotate) {
    super(likes, code, size, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, rad1, rad2, ratioHeight, ratioWidth, teeth, teethSix, splay, viewBoxParametersWidth, viewBoxParametersHeight, initialHeight, initialWidth, left, top, caption, translate, rotate);
    this.likes = likes;
    this.code  = code;
    this.size  = size;
    this.d1 = d1;
    this.d2 = d2;
    this.d3 = d3;
    this.d4 = d4;
    this.d5 = d5;
    this.d6 = d6;
    this.d7 = d7;
    this.d8 = d8;
    this.d9 = d9;
    this.d10 = d10;
    this.rad1 = rad1;
    this.rad2 = rad2;
    this.ratioHeight = ratioHeight;
    this.ratioWidth = ratioWidth;
    this.teeth = teeth;
    this.teethSix = teethSix;
    this.splay = splay;
    this.viewBoxParametersWidth  = viewBoxParametersWidth;
    this.viewBoxParametersHeight = viewBoxParametersHeight;
    this.initialHeight = initialHeight;
    this.initialWidth = initialWidth;
    this.left = left;
    this.top = top;
    this.caption = caption;
    this.rotate = rotate;
  }

  render() {

    const myclass = new Manna(10, "2", 350, 1, .6875, .375, 1.5217, 3.5, 1.94, 2.12, 2.25, 2.91, 1.75, 45, 50, 3.90, 1.72, 5, 6, 0.375, 720, 600, 205, 295, 239, 370, 'Third SVG', 'translate', 'rotate');
    // Global Variables
    const viewBoxParametersWidth = myclass.viewBoxParametersWidth;
    const viewBoxParametersHeight = myclass.viewBoxParametersHeight;
    const initialHeight = myclass.initialHeight;
    const initialWidth = myclass.initialWidth;
    const rad1 = myclass.rad1;
    const rad2 = myclass.rad2;
    const caption = myclass.caption;
    const likes = myclass.likes;
    const code = myclass.code;
    const size = myclass.size;
    const fill = myclass.fill;
    const teeth = myclass.teeth;
    const teethSix = myclass.teethSix;
    const translate = myclass.translate;
    const cleft = myclass.left;
    const ctop = myclass.top;
    const cleftSecond = cleft - 134;
    const ctopSecond = ctop + 25;
    const ctranFirstElement = 'translate('+cleft+', '+ctop+')';
    const ctranSeondElement = 'translate('+cleftSecond+', '+ctopSecond+')';
    const rotate = myclass.rotate;
    const styles = {
      circle: {
        stroke: 'rgb(158, 157, 158)',
        strokeWidth: '1',
        fill: 'none',
      },
      path: {
        opacity: '0.4',
        fill: 'black'
      },
    }

    // Center
    const c = size / 2

    // Ratio
    const r1 = myclass.d1 * size / 2
    const r2 = myclass.d2 * size / 2
    const r3 = myclass.d3 * size / 2
    const r4 = myclass.d4
    const r5 = myclass.d5
    const r6 = myclass.d6
    const r7 = myclass.d7
    const r8 = myclass.d8
    const r9 = myclass.d9
    const r10 = myclass.d10
    const rheight = myclass.ratioHeight
    const rwidth = myclass.ratioWidth

    // Circle x coordinates
    const cx1 = size / r4
    const cx2 = size / r5
    const cx3 = size / r6
    const cx4 = size / r7

    // Circle y coordinates
    const cy1 = size / r8
    const cy2 = size / r9
    const cy3 = size / r10

    // Width and height hexagon elements

    const hexagonHeight = initialHeight * rheight
    const hexagonWidth  = initialWidth * rwidth

    // Angle
    // const angle = 360 / myclass.teethSix
    const offset = 90

    const viewBox = [0, 0, viewBoxParametersHeight, viewBoxParametersWidth].join(' ')

    const angle = (n) => { return 360 / n}

    const rad = (a) => { return Math.PI * a / 180}

    const rx = (r, a) => { return c + r * Math.cos(rad(a))}

    const ry = (r, a) => { return c + r * Math.sin(rad(a))}

    const num = (n) => { return (n < 0.0000001) ? 0 : n}

    const drawTeeth = (n) => {
      const d = []
      for (let i = 0; i < n; i++) {
        const a = angle(n) * i - offset
        const line = [
          (i === 0) ? 'M' : 'L',
          num(rx(r1, a)),
          num(ry(r1, a)),
        ].join(' ')
        d.push(line)
      }
      return d.join(' ')
    }

    const pathDataHexagon = [
      drawTeeth(teethSix)
    ].join(' ')

    return {
      viewBox: viewBox,
      caption: caption,
      likes: likes,
      code: code,
      w: size,
      h: size,
      fill: fill,
      d2: pathDataHexagon,
      cx1: cx1,
      cx2: cx2,
      cx3: cx3,
      cx4: cx4,
      cy1: cy1,
      cy2: cy2,
      cy3: cy3,
      rad1: rad1,
      rad2: rad2,
      initialHeight: initialHeight,
      initialWidth: initialWidth,
      hexagonHeight: hexagonHeight,
      hexagonWidth: hexagonWidth,
      circle: styles.circle,
      styleLine: styles.path,
      transformFirstElement: ctranFirstElement,
      transformSecondElement: ctranSeondElement,
      rotate: rotate
    }

  }

};
