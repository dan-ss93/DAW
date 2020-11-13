/*1	Programa que al clicar en "AÑADE PARTICIPANTE" se añada el nombre introducido en el input "Nombre" como un nuevo participante 
con el color de texto igual al escrito en el segundo input "Color".
*/
var listaHijos ;
var lis = document.body.getElementsByTagName("li");

function addCompetidor(){
    event.preventDefault();
    let nombreCompetidor = document.getElementById("nombre").value;
    let colorCompetidor = document.getElementById("color").value;
    let listaParticipantes = document.getElementById("listaParticipantes");

    listaHijos = document.createElement("li");

    listaHijos.innerHTML = nombreCompetidor;
    listaHijos.style.color = colorCompetidor;
    
    listaParticipantes.appendChild(listaHijos);

}

/*2	Programa que al clicar en "FINALIZA COMPETICION" el color de fondo del 
primer participante se cambie a verde, el segundo a azul, el 
tercero a naranja y el último a rojo. 
Si solo hay un participante se ha de mostrar verde. Captura los errores.
*/
function finalizaCompeticion(){
    lis= document.body.getElementsByTagName("li");
    let tamañoLis = (lis.length) - 1;

    console.log(tamañoLis)

    try{
        lis[0].style.backgroundColor = "green";
        lis[1].style.backgroundColor = "blue";
        lis[2].style.backgroundColor = "orange";
        lis[tamañoLis].style.backgroundColor = "red";
    }catch(error){
        console.log(error);
    }
}
/*3	Programa que al clicaren "BORRA PARTICIPANTE" se borre el LI de la lista de 
participantes que sea al número de hijo igual al escrito en el 3r input "Posición".
*/
function borraParticipante(){
    let lista = document.getElementById("listaParticipantes");

    const posicio = document.getElementById("posicion").value - 1;

    lista.removeChild(lista.children[posicio])
}  
/*4	Programa que al clicar en "MUEVE PARTICIPANTE" se mueva el LI de la lista de participantes que sea al número de
 hijo igual al escrito en el  3r input "Posición" y se sitúe en la posición escrita en el 4o input "Posición Final".
*/
function mueveParticipante(){
    let primeraPosicion = document.getElementById("posicion").value - 1;
    let ultimaPosicion = document.getElementById("posicionfinal").value;
    
    let lista = document.getElementById("listaParticipantes");
    let primePos = lista.children[primeraPosicion];
    let ultimaPos = lista.children[ultimaPosicion];
    
    lista.insertBefore( primePos, ultimaPos);
}
/*5	Programa que al clicar en "MODIFICA PARTICIPANTE" se cambie el texto del LI de la lista que sea al número de hijo 
igual al escrito en el 3r input “Posición” y se sustituya por el texto escrito en el 1r input "Nombre".
*/
function modificaParticipante(){
    let lista = document.getElementById("listaParticipantes");

    const posicio = document.getElementById("posicion").value - 1;

    const nombre = document.getElementById("nombre").value

    lista.children[posicio].innerHTML= nombre
    
}

