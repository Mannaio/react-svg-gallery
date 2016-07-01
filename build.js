import fs from 'fs';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Manna from './Manna';
import Cog from './Cog';

const build = (name="defaultName", props)=> {
    let size = props.size || 64;

    let svgProps={
        xmlns:"http://www.w3.org/2000/svg",
        viewBox:`0 0 ${size} ${size}`,
        width:size,
        height:size
    };

    const svgs = [];
    var n = 1;

    for (var i = 0; i < n; i++) {
      svgs.push(Cog.prototype.render());
      svgs.push(Manna.prototype.render());
    }

    fs.writeFileSync(`client/data/${name}.js`, "const svgs =" + JSON.stringify(svgs).toString() + "; export default svgs" + ";");
};

build('svgs', {});
