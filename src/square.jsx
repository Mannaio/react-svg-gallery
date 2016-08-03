const React = require('react')

const Square = React.createClass({

  // getInitialState: function() {
  //   return {
  //     size: 64,
  //     d1: 1,
  //     d2: .6875,
  //     d3: .375,
  //     teeth: 4,
  //     splay: 0.375,
  //     fill: 'currentcolor'
  //   }
  // },

  initVal: {
    likes: 10,
    code: "3",
    size: "64",
    d1: 1,
    d2: .6875,
    d3: .375,
    teeth: 4,
    splay: 0.375,
    fill: 'currentcolor',
    caption: 'Second SVG'
  },

  render: function() {

    // const size = this.initVal.size
    const caption = this.initVal.caption
    const likes = this.initVal.likes
    const code = this.initVal.code
    const size = Math.random()*100
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
      'M', 2, 2, // Move to 2,2
      'L', 62, 2, // Draw a line to 62,2
      'L', 62, 62, // Draw a line to 62,62
      'L', 2, 62, // Draw a line to 2,62
      'L', 2, 2, // Draw a line to 2,2
    ].join(' ')

    return {
      likes: likes,
      caption: caption,
      code: code,
      viewBox: viewBox,
      w: size,
      h: size,
      fill: fill,
      d: pathData,
    }

  }

});

module.exports = Square
