// separate data from viz!

export const vizData = (selection, data, colors) => {
  
  // get svg width and height
  const width = selection.attr('width')
  const height = selection.attr('height')
  
  // make circles
  selection
    .selectAll('circle')
    .data(data)
    .join('circle')
    .attr('r', (d) => d.r)
    .attr('cx', (d) => d.x)
    .attr('cy', (d) => d.y)
  	.attr('stroke-width', (d) => d.r)
    .attr('stroke', (d) => colors(d.r));
  
  // make lines
  selection
    .selectAll('line')
    .data(data)
    .join('line')
    .attr('x1', (d) => d.x)
    .attr('y1', (d) => d.y + d.r)
    .attr('x2', (d) => d.x)
    .attr('y2', (d) => height)
    .attr('stroke-width', (d) => d.r)
    .attr('stroke', (d) => colors(d.r));
  
  
  
  
};

//svg.append('line').attr('x1',0).attr('y1',0).attr('x2',100).attr('y2',100).attr('stroke-width',10).attr('stroke', 'navy')
