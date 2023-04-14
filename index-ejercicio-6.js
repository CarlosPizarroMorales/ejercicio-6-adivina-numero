/**********************************************
**           VARIABLES Y EVENTOS             **
**********************************************/
//* VARIABLES
const intentosInputElem = document.querySelector('#intentosInput'); //range input
const intentosLabel = document.querySelector('#intentosLabel')  	  //intentos label
const comenzarBtnElem = document.querySelector('#comenzar');        //btn Jugar
const userInputFormElem = document.querySelector('form');           //user <form>
const intentoInputElem = document.querySelector('#intento');        //user input intento
const pistaElem = document.querySelector('#pista');                 //mensaje con pista 
const numeroSecreto = Math.floor((Math.random()*100) + 1);          //mi numero secreto
const intentosDefault = 5;                                          //intentos por defecto
let intentos = intentosDefault;                                     //intentos iniciales

//* EVENTOS
intentosInputElem.addEventListener('change', recuperaIntentos);
comenzarBtnElem.addEventListener('click', jugar);
userInputFormElem.addEventListener('submit', evaluaIntento);

/**********************************************
**                 FUNCIONES                 **
**********************************************/
function recuperaIntentos(e){
  const valor = Number(e.target.value);
  intentos = valor;
  intentosLabel.textContent = valor;
}

function jugar(e){
  console.log(numeroSecreto);
  intentosInputElem.classList.toggle('disabled');
  comenzarBtnElem.classList.toggle('disabled');
  intentoInputElem.removeAttribute("disabled");
}

function evaluaIntento(e){
  e.preventDefault();
  const usuarioNum = Number(e.target.elements.intento.value);
  if (usuarioNum === numeroSecreto) {
    muestraGanar();
    return;
  } else if (intentos === 1){
    muestraPerder(numeroSecreto);
    return;
  }
  intentos--;
  muestraPista(usuarioNum);
  actualizaIntentos(usuarioNum);
}

function actualizaIntentos(val){
  intentosLabel.textContent = intentos;
  intentosInputElem.value = intentos;
  intentoInputElem.value = '';
  // intentoInputElem.setAttribute('placeholder', val);
}

function muestraPista(val) {
  if (val > numeroSecreto) {
    pistaMayor(val);
  } else {
    pistaMenor(val);
  }
}

function pistaMayor(val) {
  pistaElem.textContent = `Mi número es menor que ${val}`;
}

function pistaMenor(val) {
  pistaElem.textContent = `Mi número es mayor que ${val}`;
}

function muestraPerder(val) {
  pistaElem.textContent = `Perdiste 😝🤣 la próxima será. (Era el ${val} 😜) `;
  recargarVista();
}

function muestraGanar() {
  pistaElem.textContent = `¡Ganaaastee! Carita feliz para tí: 😄`
  recargarVista();
}

function recargarVista(){
  setTimeout(function(){
    location.reload();
  }, 3000);
}