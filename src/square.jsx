var React = require('react')

var Square = React.createClass({

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

    // var size = this.initVal.size
    var caption = this.initVal.caption
    var likes = this.initVal.likes
    var code = this.initVal.code
    var size = Math.random()*100
    var fill = this.initVal.fill

    // Center
    var c = size / 2

    // Radii
    var r1 = this.initVal.d1 * size / 2
    var r2 = this.initVal.d2 * size / 2
    var r3 = this.initVal.d3 * size / 2

    // Angle
    var angle = 360 / this.initVal.teeth
    var offset = 90

    var viewBox = [0, 0, size, size].join(' ')


    var pathData = [
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