import fs from 'fs';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Manna from './Manna';
import Cog from './Cog';
import Square from './Square';

const build = (name="defaultName", props)=> {
  
    const svgs = [];
    var n = 1;

    for (var i = 0; i < n; i++) {
      svgs.push(Cog.prototype.render());
      svgs.push(Manna.prototype.render());
      svgs.push(Square.prototype.render());
    }

    fs.writeFileSync(`client/data/${name}.js`, "const svgs =" + JSON.stringify(svgs).toString() + "; export default svgs" + ";");
};

build('svgs', {});
