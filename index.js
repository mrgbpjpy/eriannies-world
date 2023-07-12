const eri = document.getElementById('eri');
const wor = document.getElementById('wor');
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d');
const cw = canvas.style.width ;
const ch = canvas.style.height;
console.log(ctx);
let dotArray = [];



eri.addEventListener('mouseover', ()=>{
    eri.style.color = 'pink';
    eri.style.fontSize = '50px';
})

eri.addEventListener('mouseout', ()=>{
    eri.style.color = 'blueviolet';
    eri.style.fontSize = '20px';
})

wor.addEventListener('mouseover', ()=>{
    wor.style.color = 'red';
    wor.style.fontSize = '50px';
})

wor.addEventListener('mouseout', ()=>{
    wor.style.color = 'darkmagenta';
    wor.style.fontSize = '20px';
})


///////////////////////////////////////////

ctx.beginPath();
ctx.strokeStyle= 'pink';
ctx.lineWidth = 5;
ctx.arc(canvas.width * .5, canvas.height * .5, 50, 0, Math.PI *2);
ctx.stroke();

const coor = {
   x : 0,
   y : 0,
   radius: 0
}

class dots {
    constructor(x,y,radius) {
       this.x = x;
       this.y = x;
       this.radius = radius;
    }
    draw(context){
       
    }
}


let circles = new dots(coor.x, coor.y, coor.radius );
let x = coor.x;
let y = coor.y;
let radius = coor.radius;
for(i = 0; i < 100; i++)
{
    dotArray.push(
        
    {
         x : Math.random() * 500,
         y : Math.random() * 200,
         radius: Math.random() * 10
    }
    

    );
}

console.log(dotArray);

for(i=0; i<100;i++){
        ctx.beginPath();
        ctx.strokeStyle= `hsla(${Math.random()*255},${Math.random()*100}%,${Math.random()*255}%,${Math.random()*1})`;
        ctx.lineWidth = Math.random() * 5;
        ctx.arc(dotArray[i].x, dotArray[i].y, dotArray[i].radius, 0, Math.PI *2);
        ctx.stroke();
}



