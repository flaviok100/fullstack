
var bot= document.getElementById("btn");
var dia = document.getElementById("box1");

var num_aleatorio = Math.floor(Math.random()*6);
  
bot.addEventListener("click", imprimi);

function imprimi(){
  var diab = parseInt(dia.value);
  
  if( diab < num_aleatorio){
    document.getElementById("altera").innerHTML= "Valor de entrada é menor ao valor gerado";
    document.getElementById("altera").style.background = "red";
    

  } else if (diab>num_aleatorio){
    
      document.getElementById("altera").innerHTML= "Valor de entrada é maior ao valor gerado";
      document.getElementById("altera").style.background = "red";
      } else if(diab == num_aleatorio){
      
          document.getElementById("altera").innerHTML= "Valor de entrada é igual ao valor gerado";
          document.getElementById("altera").style.background = "green";
        }   
  
}

