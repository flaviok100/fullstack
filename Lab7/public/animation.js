
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let gato = {
    x: 100,
    y: 100,
    raio: 50,
    img: new Image(),
    desenha: function(){
        this.img.src = 'gato.png';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
}

function animacao(){
    ctx.clearRect(0,0,400,400)
    gato.desenha();
    requestAnimationFrame(animacao) 
}
animacao();
document.addEventListener('mousemove',function(evento){
    
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse,y_mouse);
    gato.x = x_mouse;
    gato.y = y_mouse;

    if (x_mouse > 225)
        gato.x=225;
    if (x_mouse < -25)
        gato.x=-25;
    if (y_mouse > 215)
        gato.y=215;
    if (y_mouse < -20)
         gato.y=-20;   
    })
    




