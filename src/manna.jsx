const React = require('react')

const Manna = React.createClass({displayName: "Cog",

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
    code: "2",
    size: 350,
    d1: 1,
    d2: .6875,
    d3: .375,
    d4: 1.5217,
    d5: 3.5,
    d6: 1.94,
    d7: 2.12,
    teeth: 6,
    splay: 0.375,
    fill: 'c60000',
    caption: 'Third SVG'
  },

  render: function() {

    const caption = this.initVal.caption
    const likes = this.initVal.likes
    const code = this.initVal.code
    const size = this.initVal.size
    const fill = this.initVal.fill

    // Center
    const c = size / 2

    // Radii
    const r1 = this.initVal.d1 * size / 2
    const r2 = this.initVal.d2 * size / 2
    const r3 = this.initVal.d3 * size / 2
    const r4 = this.initVal.d4
    const r5 = this.initVal.d5
    const r6 = this.initVal.d6
    const r7 = this.initVal.d7

    // Circle x coordinates
    const cx1 = size / r4
    const cx2 = size / r5
    const cx3 = size / r6
    const cx4 = size / r7

    // Circle y coordinates


    // Angle
    const angle = 360 / this.initVal.teeth
    const offset = 90

    const viewBox = [0, 0, size, size].join(' ')

    const rad = function(a) {
      return Math.PI * a / 180
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

    const drawTeeth = function(n) {
      const d = []
      for (var i = 0; i < n; i++) {
        const a = angle * i - offset
        const line = [
          (i === 0) ? 'M' : 'L',
          num(rx(r1, a)),
          num(ry(r1, a)),
        ].join(' ')
        d.push(line)
      }
      return d.join(' ')
    }

    const pathData = [
      drawTeeth(this.initVal.teeth)
    ].join(' ')

    return {
      caption: caption,
      likes: likes,
      code: code,
      viewBox: viewBox,
      w: size,
      h: size,
      fill: fill,
      d: pathData,
      cx: cx1
    }

  }

});

module.exports = Manna
