'use strict';
let rgbCol = 255;

let button = document.querySelector('button');

function randomCol(num){
   let color;
   return color = Math.floor(Math.random() * (num + 1));
   
}

button.onclick = function(){
   let color = 'rgb(' + randomCol(rgbCol) + ',' + randomCol(rgbCol) + ','  + randomCol(rgbCol) + ')';
   document.body.style.backgroundColor = color;

   let p = document.querySelector('p');
   p.innerText = color;
}
