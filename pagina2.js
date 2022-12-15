const result = document.getElementById("resultado");

function suma_y_muestra(numero1=0, numero2=0){
// Variables
let resultado = 0;
// Proceso
if(isNaN(numero1) || isNaN(numero2)){
alert("Error");
}else{
resultado = numero1 + numero2;
// Salida
result.innerText = "El resultado es: " + resultado;
}
}

const boton = document.getElementById("btnEnviar");
boton.onclick = () => suma_y_muestra(125, 12);

function suma_y_muestra2(numero1=0, numero2=0){
// Variables
// Proceso
if(isNaN(numero1) || isNaN(numero2)){
return 0;
}else{
return numero1 + numero2;
}
}

let re = suma_y_muestra2(125, 200);
const result2 = document.getElementById("resultado2");
result2.innerText = "El resultado es: " + re;
