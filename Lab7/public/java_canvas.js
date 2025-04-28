let canvas1 = document.getElementById('canvas1');
let ctx = canvas1.getContext('2d');

let canvas2 = document.getElementById('canvas2');
let ctx1 = canvas2.getContext('2d');

//-------CANVAS 1-------//
//-------TEXTO INÍCIO------------//
ctx.beginPath(); // Abre Texto
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.strokeStyle = 'black'; //cor borda
ctx.font ="20px Verdana";
ctx.textAlign="center";
ctx.fillText("Canvas",150,50);
ctx.strokeText("Canvas",150,50);
ctx.closePath(); // Fecha Texto
//------TEXTO FINAL-------//

//-------QUADRADO INÍCIO------------//
ctx.beginPath(); // Abre o desenho atual - Quadrado 1
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
//ctx.strokeSttle = 'blue';
ctx.fillRect(0,0,50,50);
//ctx.strokeRect(0,0,50,50); borda
ctx.closePath(); // Fecha o desenho atual - Quadrado 1

ctx.beginPath(); // Abre o desenho atual - Quadrado 2
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
//ctx.strokeSttle = 'red';
ctx.fillRect(250,0,50,50);
//ctx.strokeRect(100,0,50,50); borda
ctx.closePath();// Fecha o desenho atual - Quadrado 2

ctx.beginPath(); // Abre o desenho atual - Quadrado 3
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
//ctx.strokeSttle = 'red';
ctx.fillRect(110,150,40,40);
//ctx.strokeRect(10,10,50,50); borda
ctx.closePath(); // Fecha o desenho atual - Quadrado 3

ctx.beginPath(); // Abre o desenho atual - Quadrado 4
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua'; //cor:turquesa
//ctx.strokeSttle = 'aqua';
ctx.fillRect(0,120,30,60);
//ctx.strokeRect(10,10,50,50); borda
ctx.closePath(); // Fecha o desenho atual - Quadrado 4

ctx.beginPath(); // Abre o desenho atual - Quadrado 4
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua'; //cor:turquesa
//ctx.strokeSttle = 'aqua';
ctx.fillRect(270,135,30,30);
//ctx.strokeRect(10,10,50,50); borda
ctx.closePath(); // Fecha o desenho atual - Quadrado 4

//------QUADRADO FINAL------//

//-----FIGURA INFERIOR INÍCIO-----//
ctx.beginPath(); //Abre desenho atual - figura inferior esquerda
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
//ctx.strokeSttle = 'yelow';
ctx.moveTo(0,250);
ctx.lineTo(0,300);
ctx.lineTo(50,300)
ctx.lineTo(50,275);
ctx.lineTo(25,275);
ctx.lineTo(25,250);
ctx.lineTo(0,250);
ctx.fill();
//ctx.stroke(); cor da borda
ctx.closePath(); // Fecha o desenho atual - fuigura inferior esquerda

ctx.beginPath(); //Abre desenho atual - figura inferior direita
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
//ctx.strokeSttle = 'blue';
ctx.moveTo(300,250);
ctx.lineTo(300,300);
ctx.lineTo(250,300)
ctx.lineTo(250,275);
ctx.lineTo(275,275);
ctx.lineTo(275,250);
ctx.lineTo(300,250);
ctx.fill()
//ctx.stroke(); cor da borda
ctx.closePath(); // Fecha o desenho atual - fuigura inferior direita
//-----FIGURA IFERIOR FINAL------//

//--------LINHAS INÍCIO---------------//
ctx.beginPath(); //Abre desenho atual - Linha
ctx.lineWidth = 2;
//ctx.fillStyle = 'red';
ctx.strokeStyle = 'blue';
ctx.moveTo(50,50);
ctx.lineTo(150,150);
ctx.stroke();
//ctx.fill();
ctx.closePath(); // Fecha o desenho atual - Linha

ctx.beginPath(); //Abre desenho atual - Linha
ctx.lineWidth = 2;
//ctx.fillStyle = 'red';
ctx.strokeStyle = 'red';
ctx.moveTo(150,150);
ctx.lineTo(250,50);
ctx.stroke();
ctx.closePath(); // Fecha o desenho atual - Linha

ctx.beginPath(); //Abre desenho atual - Linha
ctx.lineWidth = 2;
//ctx.fillStyle = 'green';
ctx.strokeStyle = 'green';
ctx.moveTo(0,150);
ctx.lineTo(300,150);
ctx.stroke();
ctx.closePath(); // Fecha o desenho atual - Linha

ctx.beginPath(); //Abre desenho atual - Linha
ctx.lineWidth = 2;
//ctx.fillStyle = 'green';
ctx.strokeStyle = 'green';
ctx.moveTo(150,150);
ctx.lineTo(150,300);
ctx.stroke();
ctx.closePath(); // Fecha o desenho atual - Linha
//-----LINHA FINAL -------//

//----CIRCULO INÍCIO-----//
ctx.beginPath(); // Abre o desenho atual - circulo 1
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'blue';
ctx.arc(150,110,15,0,2.5*Math.PI);
//ctx.arc(125,125,20,1.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath(); // Fecha o desenho atual - circulo 1

ctx.beginPath(); // Abre o desenho atual - circulo 2
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(60,220,15,0,2.5*Math.PI);
//ctx.arc(125,125,20,1.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath(); // Fecha o desenho atual - circulo 2

ctx.beginPath(); // Abre o desenho atual - circulo 3
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(230,220,15,0,2.5*Math.PI);
//ctx.arc(125,125,20,1.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath(); // Fecha o desenho atual - circulo 3

//-------CIRCULO FINAL-----//


//-----SEMI CIRCULO INÍCIO----//
ctx.beginPath(); // Abre o desenho atual - semi circulo
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'green';
ctx.arc(150,300,50,1*Math.PI,0);
//ctx.arc(125,125,20,1.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath(); // Fecha o desenho atual - semi circulo
//-----SEMI CIRCULO FINAL----//


//-----SEMI ARCO INÍCIO----//
ctx.beginPath(); // Abre o desenho atual - semi arco 1
ctx.lineWidth = 2;
//ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'green';
ctx.arc(150,150,65,1*Math.PI,0);
//ctx.arc(125,125,20,1.5*Math.PI,2.5*Math.PI);
//ctx.fill();
ctx.stroke();
ctx.closePath(); // Fecha o desenho atual - semi arco 1

ctx.beginPath(); // Abre o desenho atual - semi arco 2
ctx.lineWidth = 2;
//ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'green';
ctx.arc(150,150,90,1*Math.PI,1.25*Math.PI);
//ctx.arc(125,125,20,1.5*Math.PI,2.5*Math.PI);
//ctx.fill();
ctx.stroke();
ctx.closePath(); // Fecha o desenho atual - semi arco 2

ctx.beginPath(); // Abre o desenho atual - semi arco 3
ctx.lineWidth = 2;
//ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'green';
ctx.arc(150,150,90,1.75*Math.PI,0);
//ctx.arc(125,125,20,1.5*Math.PI,2.5*Math.PI);
//ctx.fill();
ctx.stroke();
ctx.closePath(); // Fecha o desenho atual - semi arco 3

ctx.beginPath(); // Abre o desenho atual - semi arco 4
ctx.lineWidth = 2;
//ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'green';
ctx.arc(150,300,70,1.5*Math.PI,0);
//ctx.arc(125,125,20,1.5*Math.PI,2.5*Math.PI);
//ctx.fill();
ctx.stroke();
ctx.closePath(); // Fecha o desenho atual - semi arco 4

ctx.beginPath(); // Abre o desenho atual - semi arco 5
ctx.lineWidth = 2;
//ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'green';
ctx.arc(150,300,90,1*Math.PI,1.5*Math.PI);
//ctx.arc(125,125,20,1.5*Math.PI,2.5*Math.PI);
//ctx.fill();
ctx.stroke();
ctx.closePath(); // Fecha o desenho atual - semi arco 5

//-----SEMI ARCO FINAL----//
//-------CANVAS 1 FINAL -------//

// ctx.lineWidth - Define a espessura do pincel 
// ctx.strokeStyle - defiine a cor do pincel
// ctx.fillStyle - dedine a cor do preenchimento

// ctx.fillRect(A,B,C,D);
//A desloca eixo X
//B desloca eixo Y
//C Prenchimento eixo X
//D preenchimento eixo Y

//-----------CANVAS 2 INÍCIO---------//

document.getElementById('canvas2').style.backgroundColor="aqua";

//-----------SOLO INÍCIO------//
ctx1.beginPath(); //Abre desenho atual - figura inferior direita
ctx1.lineWidth = 2;
ctx1.fillStyle = 'darkgrey';
//ctx1.strokeSttle = 'blue';
ctx1.moveTo(50,210);
ctx1.lineTo(300,210);
ctx1.lineTo(300,300);
ctx1.lineTo(150,300);
ctx1.bezierCurveTo(150, 300, 160, 250, 50, 260);
ctx1.fill()
//ctx1.stroke(); cor da borda
ctx1.closePath(); // Fecha o desenho atual - fuigura inferior direita

ctx1.beginPath(); //Abre desenho atual - figura inferior esquerda
ctx1.lineWidth = 2;
ctx1.fillStyle = 'DodgerBlue';
//ctx1.strokeSttle = 'blue';
ctx1.moveTo(150,300);
ctx1.bezierCurveTo(150, 300, 160, 250, 50, 260);
ctx1.lineTo(50,210);
ctx1.bezierCurveTo(50, 210, 50, 175, 0, 175);
ctx1.lineTo(0,300);
// ctx1.lineTo(150,300);
ctx1.fill()
//ctx1.stroke(); cor da borda
ctx1.closePath(); // Fecha o desenho atual - fuigura inferior esquerda
//-----SOLO FINAL------//

//-------------QUADRADO INÍCIO---------//
ctx1.beginPath(); // Abre o desenho atual - Quadrado 1
ctx1.lineWidth = 2;
ctx1.fillStyle = 'brown';
//ctx1.strokeSttle = 'blue';
ctx1.fillRect(110,140,65,75);
//ctx1.strokeRect(0,0,50,50); borda
ctx1.closePath(); // Fecha o desenho atual - Quadrado 1

ctx1.beginPath(); // Abre o desenho atual - Quadrado 2
ctx1.lineWidth = 2;
ctx1.fillStyle = 'brown';
//ctx1.strokeSttle = 'blue';
ctx1.fillRect(250,220,20,40);
//ctx1.strokeRect(0,0,50,50); borda
ctx1.closePath(); // Fecha o desenho atual - Quadrado 2

ctx1.beginPath(); // Abre o desenho atual - Quadrado 3
ctx1.lineWidth = 2;
ctx1.fillStyle = 'brown';
//ctx1.strokeSttle = 'blue';
ctx1.fillRect(50,170,20,40);
//ctx1.strokeRect(0,0,50,50); borda
ctx1.closePath(); // Fecha o desenho atual - Quadrado 3

ctx1.beginPath(); // Abre o desenho atual - Quadrado 4
ctx1.lineWidth = 2;
ctx1.fillStyle = 'DeepSkyBlue ';
//ctx1.strokeSttle = 'blue';
ctx1.fillRect(150,155,20,20);
//ctx1.strokeRect(0,0,50,50); borda
ctx1.closePath(); // Fecha o desenho atual - Quadrado 4

ctx1.beginPath(); // Abre o desenho atual - Quadrado 5
ctx1.lineWidth = 2;
ctx1.fillStyle = 'DeepSkyBlue ';
//ctx1.strokeSttle = 'blue';
ctx1.fillRect(115,155,20,20);
//ctx1.strokeRect(0,0,50,50); borda
ctx1.closePath(); // Fecha o desenho atual - Quadrado 5

ctx1.beginPath(); // Abre o desenho atual - Quadrado 6
ctx1.lineWidth = 2;
ctx1.fillStyle = 'DarkSlateGray ';
//ctx1.strokeSttle = 'blue';
ctx1.fillRect(135,175,15,40);
//ctx1.strokeRect(0,0,50,50); borda
ctx1.closePath(); // Fecha o desenho atual - Quadrado 6

//-------------QUANDRADO FINAL-----------//

//----CIRCULO INÍCIO-----//
ctx1.beginPath(); // Abre o desenho atual - circulo 1
ctx1.lineWidth = 2;
ctx1.fillStyle = 'yellow';
//ctx1.strokeSttle = 'aqua';
ctx1.arc(230,70,35,0,2.5*Math.PI);
//ctx1.arc(125,125,20,1.5*Math.PI,2.5*Math.PI);
ctx1.fill();
//ctx1.stroke();
ctx1.closePath(); // Fecha o desenho atual - circulo 1

ctx1.beginPath(); // Abre o desenho atual - circulo 2
ctx1.lineWidth = 2;
ctx1.fillStyle = 'green';
//ctx1.strokeSttle = 'aqua';
ctx1.arc(60,155,20,0,2.5*Math.PI);
//ctx1.arc(125,125,20,1.5*Math.PI,2.5*Math.PI);
ctx1.fill();
//ctx1.stroke();
ctx1.closePath(); // Fecha o desenho atual - circulo 2

ctx1.beginPath(); // Abre o desenho atual - circulo 3
ctx1.lineWidth = 2;
ctx1.fillStyle = 'green';
//ctx1.strokeSttle = 'aqua';
ctx1.arc(260,205,20,0,2.5*Math.PI);
//ctx1.arc(125,125,20,1.5*Math.PI,2.5*Math.PI);
ctx1.fill();
//ctx1.stroke();
ctx1.closePath(); // Fecha o desenho atual - circulo 3
//--------------CIRCULO FINAL -------------//


//-----------TRIANGULO INÍCIO------//
ctx1.beginPath(); //Abre desenho atual - figura inferior direita
ctx1.lineWidth = 2;
ctx1.fillStyle = 'tomato';
//ctx1.strokeSttle = 'blue';
ctx1.moveTo(110,140);
ctx1.lineTo(175,140);
ctx1.lineTo(145,110)

ctx1.fill()
//ctx1.stroke(); cor da borda
ctx1.closePath(); // Fecha o desenho atual - fuigura inferior direita
//-----TRIANGULO FINAL------//
//-----------CANVAS 2 FINAL----------//