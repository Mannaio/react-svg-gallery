const React = require('react')

const Cog = React.createClass({

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
    code: "1",
    size: 350,
    d1: 1,
    d2: .6875,
    d3: .375,
    teeth: 6,
    splay: 0.375,
    animation: 'animated',
    fill: 'currentcolor',
    caption: 'First SVG'
  },

  render: function() {

    // const size = this.initVal.size
    const animation = this.initVal.animation
    const caption = this.initVal.caption
    const likes = this.initVal.likes
    const code = this.initVal.code
    const size = this.initVal.size
    const fill = this.initVal.fill
    const teeth = this.initVal.teeth
    // Center
    const c = size / 2

    // Radii
    const r1 = this.initVal.d1 * size / 2
    const r2 = this.initVal.d2 * size / 2
    const r3 = this.initVal.d3 * size / 2

    // Angle
    const angle = function(n) {
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

    const rx = function(r, a) {
      return c + r * Math.cos(rad(a))
    }

    const ry = function(r, a) {
      return c + r * Math.sin(rad(a))
    }

    const num = function(n) {
      return (n < 0.0000001) ? 0 : n
    }

    const rad = function(a) {
      return Math.PI * a / 180
    }

    const drawTeeth = function(n) {
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

});

module.exports = Cog
