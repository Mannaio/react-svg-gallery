import fs from 'fs';
import React from 'react';
// import { renderToStaticMarkup } from 'react-dom/server';
import Manna from './Manna';
import Cog from './Cog';
// import Square from './Square';
import Polygon from './Polygon';
import Line from './Line';

const build = (name="defaultName", props)=> {

    const svgs = [];
    var n = 1;

    for (var i = 0; i < n; i++) {
      svgs.push(Cog.prototype.render());
      svgs.push(Manna.prototype.render());
      // svgs.push(Square.prototype.render());
      svgs.push(Polygon.prototype.render());
      svgs.push(Line.prototype.render());
    }

    fs.writeFileSync(`client/data/${name}.js`, "const svgs =" + JSON.stringify(svgs).toString() + "; export default svgs" + ";");
};

build('svgs', {});
