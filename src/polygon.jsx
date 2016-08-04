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
    fill: 'currentcolor',
    caption: 'Fourth SVG',
    animation: 'animated',
    random: function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    },
  },

  render: function() {

    const animation = this.initVal.animation
    const caption = this.initVal.caption
    const likes = this.initVal.likes
    const code = this.initVal.code
    // const size = this.initVal.size
    const size = this.initVal.random(64, 128)
    const fill = this.initVal.fill

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
      'L', 18.74516600406095, 18.745166004060962
    ].join(' ')

    return {
      caption: caption,
      animation: animation,
      likes: likes,
      code: code,
      viewBox: viewBox,
      w: size,
      h: size,
      fill: fill,
      d: pathData,
    }
  }
});

module.exports = Polygon

// var num = function(n) {
//   return (n < 0.0000001) ? 0 : n
// }
//
// var drawTeeth = function(n) {
//   var d = []
//   for (var i = 0; i < n; i++) {
//     var a = angle * i - offset
//     var line = [
//       (i === 0) ? 'M' : 'L',
//       num(rx(r1, a)),
//       num(ry(r1, a)),
//     ].join(' ')
//     d.push(line)
//   }
//   return d.join(' ')
// }
//
// var pathData = [
//   drawTeeth(this.props.teeth)
// ].join(' ')
