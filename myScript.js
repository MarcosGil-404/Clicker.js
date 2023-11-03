var clicks = 0;  //variable global con valor 0

function cuentaClicks() {
     clicks = clicks + 1;  //suma 1 por cada click
     document.getElementById("clicks").innerHTML = clicks; //muestra en la web el valor de clickscon la variable clicks
        }

setTimeout(function(){
   alert('Has hecho '+ clicks + " clicks en 10 segundos."); 
   document.getElementById("boton").disabled;
},10000 );