const React = require('react')

const Line = React.createClass({

  initVal: {
    likes: 10,
    code: "5",
    size: "64",
    height: "150",
    width: "200",
    d1: 1,
    d2: .6875,
    d3: .375,
    splay: 0.375,
    fill: 'none',
    caption: 'Animate SVG'
  },

  styles: {
    strokeblack: 'black',
    strokered: 'red',
    strokelinecap: 'round',
    strokedasharray: '5',
    strokewidth: '1'
  },

  render: function() {

    // const size = this.initVal.size
    const size = this.initVal.size
    const caption = this.initVal.caption
    const likes = this.initVal.likes
    const code = this.initVal.code
    const height = this.initVal.height
    const width = this.initVal.width
    const fill = this.initVal.fill
    const strokeRed = this.styles.strokered
    const strokeBlack = this.styles.strokeblack
    const linecap = this.styles.linecap
    const dasharray = this.styles.dasharray
    const strokewidth = this.styles.strokewidth
    // Center
    const c = size / 2

    // Radii
    const r1 = this.initVal.d1 * size / 2
    const r2 = this.initVal.d2 * size / 2
    const r3 = this.initVal.d3 * size / 2

    // Angle
    const angle = 360 / this.initVal.teeth
    const offset = 90

    const pathDataCircle = [
      'M', 10, 75, // Move to 10,5
      'Q', 50, 10, 100, 75,
      'T', 190, 75, // Draw a line to 190,75
    ].join(' ')

    const pathData = [
      'M', 10, 75, // Move to 2,2
      'L', 190, 75, // Draw a line to 190,75
    ].join(' ')

    return {
      likes: likes,
      caption: caption,
      code: code,
      w: width,
      h: height,
      fill: fill,
      d: pathData,
      c: pathDataCircle,
      strokeRed: strokeRed,
      strokeBlack: strokeBlack,
      linecap: linecap,
      dasharray: dasharray,
      strokewidth: strokewidth,
    }

  }

});

module.exports = Line
