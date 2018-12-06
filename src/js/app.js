import Perlin from './Perlin.js';

console.log(Perlin(0.04,0.09,0.07));

let size = 600;
let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');


canvas.width = size;
canvas.height = size;

document.body.appendChild(canvas);


function draw() {
  // console.log(time);
  
}



let time = 0;
function render() {
  draw();
  time++;
  window.requestAnimationFrame(render);
}



render();
