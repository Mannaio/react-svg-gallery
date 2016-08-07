const React = require('react')

const Line = React.createClass({

  initVal: {
    likes: 10,
    code: "5",
    size: "64",
    height: "150",
    width: "200",
    d1: 1,
    d2: .5,
    d3: .3,
    d4: .05,
    splay: 0.375,
    fill: 'none',
    caption: 'Animate SVG',
    animation: 'animated',
  },

  render: function() {

    const animation = this.initVal.animation
    const caption = this.initVal.caption
    const likes = this.initVal.likes
    const code = this.initVal.code
    const height = this.initVal.height
    const width = this.initVal.width
    const fill = this.initVal.fill
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
    const r1 = this.initVal.d2 * height  // 75
    const r2 = this.initVal.d2 * width   // 100
    const r3 = this.initVal.d4 * width   // 10
    const r4 = width - this.initVal.d4 * width // 190
    const r5 = this.initVal.d2 * height // 50


    const curve = function() {
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
      d: pathData,
      c: pathDataCircle,
      style: styles.circle,
      styleLine: styles.line
    }

  }

});

module.exports = Line
