const React = require('react');

const Polygon = React.createClass({displayName: "Polygon",

  initVal: {
    likes: 10,
    code: "4",
    size: "64",
    d1: 1,
    d2: .6875,
    d3: .375,
    teeth: 4,
    splay: 0.375,
    caption: 'Fourth SVG',
    animation: 'wheel',
    random: function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    },
  },

  render() {

    const animation = this.initVal.animation
    const caption = this.initVal.caption
    const likes = this.initVal.likes
    const code = this.initVal.code
    // const size = this.initVal.size
    const size = this.initVal.random(128, 256)
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
    const r1 = this.initVal.d1 * size / 2
    const r2 = this.initVal.d2 * size / 2
    const r3 = this.initVal.d3 * size / 2

    // Angle
    const angle = 360 / this.initVal.teeth
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
});

module.exports = Polygon
