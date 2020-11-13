var listaHijos ;
var lis = document.body.getElementsByTagName("li");

function addCompetidor(){
    event.preventDefault();
    let nombreCompetidor = document.getElementById("nombre").value;
    let colorCompetidor = document.getElementById("color").value;

    listaHijos = document.createElement("li");

    listaHijos.innerHTML = nombreCompetidor;
    listaHijos.style.color = colorCompetidor;
    
    listaParticipantes = listaHijos.parentNode;

    document.body.appendChild(listaHijos);

}