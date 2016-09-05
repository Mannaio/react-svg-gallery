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
    d8: 2.25,
    d9: 2.91,
    d10: 1.75,
    rad1: 45,
    rad2: 50,
    ratioHeight: 3.90,
    ratioWidth: 1.72,
    teeth: 5,
    teethSix: 6,
    splay: 0.375,
    viewBoxParametersWidth: 720,
    viewBoxParametersHeight: 600,
    initialHeight: 205,
    initialWidth: 295,
    left: 239,
    top: 370,
    fill: 'c60000',
    caption: 'Third SVG',
    translate: 'translate'
  },

  render: function() {

    // Global Variables
    const viewBoxParametersWidth = this.initVal.viewBoxParametersWidth
    const viewBoxParametersHeight = this.initVal.viewBoxParametersHeight
    const styleg1 = this.initVal.styleg1
    const styleg2 = this.initVal.styleg2
    const initialHeight = this.initVal.initialHeight
    const initialWidth = this.initVal.initialWidth
    const rad1 = this.initVal.rad1
    const rad2 = this.initVal.rad2
    const caption = this.initVal.caption
    const likes = this.initVal.likes
    const code = this.initVal.code
    const size = this.initVal.size
    const fill = this.initVal.fill
    const teeth = this.initVal.teeth
    const teethSix = this.initVal.teethSix
    const translate = this.initVal.translate
    const cleft = this.initVal.left
    const ctop = this.initVal.top
    const ctrans = 'translate('+cleft+', '+ctop+')';
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
    const r1 = this.initVal.d1 * size / 2
    const r2 = this.initVal.d2 * size / 2
    const r3 = this.initVal.d3 * size / 2
    const r4 = this.initVal.d4
    const r5 = this.initVal.d5
    const r6 = this.initVal.d6
    const r7 = this.initVal.d7
    const r8 = this.initVal.d8
    const r9 = this.initVal.d9
    const r10 = this.initVal.d10
    const rheight = this.initVal.ratioHeight
    const rwidth = this.initVal.ratioWidth

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
    // const angle = 360 / this.initVal.teethSix
    const offset = 90

    const viewBoxSmall = [0, 0, viewBoxParametersHeight, viewBoxParametersWidth].join(' ')

    const angle = function(n) {
      return 360 / n;
    }

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

    const pathData = [
      drawTeeth(teeth)
    ].join(' ')

    const pathDataHexagon = [
      drawTeeth(teethSix)
    ].join(' ')

    return {
      viewBoxSmall: viewBoxSmall,
      caption: caption,
      likes: likes,
      code: code,
      w: size,
      h: size,
      fill: fill,
      d: pathData,
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
      path: styles.path,
      transform: ctrans
    }

  }

});

module.exports = Manna
