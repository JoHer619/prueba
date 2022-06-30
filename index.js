
const canvas = document.getElementById('canvas');
const lienzo = canvas.getContext('2d');

let x = 10;
let y = 490;

let movx = 1;
let movy = -5;

function dibujar(){
    lienzo.beginPath();
    lienzo.strokeStyle = 'fff000';
    lienzo.arc(x, y, 10, 0, Math.PI*2)
    lienzo.stroke();
    lienzo.closePath();

    x += movx;
    y += movy;

    console.log(y);
    if (y < 0) {
        console.log('!!!')
        y = 500;
    }

}

setInterval(dibujar, 100);
