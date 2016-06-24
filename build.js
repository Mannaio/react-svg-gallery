import fs from 'fs';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Manna from './Manna';
import Cog from './Manna';

const build = (name="defaultName", props)=> {
    let size = props.size || 64;

    let svgProps={
        xmlns:"http://www.w3.org/2000/svg",
        viewBox:`0 0 ${size} ${size}`,
        width:size,
        height:size
    };

    let svg = renderToStaticMarkup(
    <svg {...svgProps}>
       <Cog {...props}/>
       <Manna {...props}/>
    </svg>);

    fs.writeFileSync(`client/data/${name}.svg`, svg);
};

build('manna-icon', {});
