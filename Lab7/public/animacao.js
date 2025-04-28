let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let circulo = {
    x: 200,
    y: 200,
    raio: 50,
    cor: "blue",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.arc(this.x,this.y,this.raio,0,2*Math.PI);
        ctx.fill()
        ctx.closePath();
    }
}

// function animacao(){
//     ctx.clearRect(0,0,400,400)
//     circulo.desenha();
//     requestAnimationFrame(animacao)
// }

// animacao();
// document.addEventListener('keydown',function(evento){
//     tecla = evento.key;
//     console.log(tecla);
//     if(tecla == 'ArrowUp')   {circulo.y = circulo.y-3}  
//     if(tecla == 'ArrowDown') {circulo.y = circulo.y+3}  
//     if(tecla == 'ArrowLeft') {circulo.x = circulo.x-3}  
//     if(tecla == 'ArrowRight'){circulo.x = circulo.x+3}  
// })


function animacao(){
    ctx.clearRect(0,0,300,300)
    circulo.desenha();
    requestAnimationFrame(animacao)
}
animacao();
document.addEventListener('mousemove',function(evento){
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse,y_mouse);
    circulo.x = x_mouse;
    circulo.y = y_mouse;
    
    if (x_mouse > 250)
        circulo.x=250;
    if (x_mouse < 50)
        circulo.x=50;
    if (y_mouse > 250)
        circulo.y=250;
    if (y_mouse < 50)
        circulo.y=50;
    
})








