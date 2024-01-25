const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 600, 600 ],
  pixelsPerInch: 300,
  orientation: 'landscape'
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.012;

    const w = 60;
    const h = 60;
    const gap = 20;
    let x, y;

 for (let i=0; i<5; i++){
  for (let j = 0; j < 5; j++){
    
    y = 100 + (w + gap) * j;
    x = 100 + (w + gap) * i;
    context.beginPath();
    context.rect(x, y, w, h);
    context.stroke();

    if(Math.random() > 0.5){
      context.beginPath();
      context.rect(x+8, y+8, w-16, h-16);
      context.stroke();
    }
    
  }
  
 }
  };
};

canvasSketch(sketch, settings);
