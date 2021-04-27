import { select, scaleLinear } from 'd3';
import { vizData } from './vizData'; // ES6 named import
import { makeData } from './makeData'; // ES6 named import

console.log('pooofff');


const width = window.innerWidth; // get and set the page width
const height = window.innerHeight; // get and set the page height

// method chaining
const svg = select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

const colors = scaleLinear()
  .domain([0, 50])
  .range(['white', 'green']);


let t = 0;
setInterval(() => {
  const n = 10 + Math.sin(t) * 5;
  const data = makeData(n, t);
  svg.call(vizData, data, colors); // D3 pattern equivalent to --> vizData(svg, data, colors); useful for chaining on a selction
  t += 0.01;
}, 1000 / 60); // close to 16 fps
