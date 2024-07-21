/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del Número Secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10.';
*/
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numneroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}!!`); //${(intentos === 1) ? 'vez' : 'veces'}!!`) actua como un if y else
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    }else{
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número que buscas es menor');
            limpiarCaja();
            intentos+=1;
        }else {
            asignarTextoElemento('p', 'El número que buscas es mayor');
            limpiarCaja();
            intentos+=1;
        }
    }
    return;
}


function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*10)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los números del 1 al 10
    if (listaNumerosSorteados.length == numneroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos lo snúmero posibles!!');

    }else {
        //Si el numero generado se encuentra en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        }else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }
    
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
  

}


function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto.');
    asignarTextoElemento('p', 'Indica un número del 1 al 10!!');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
           
}


condicionesIniciales();