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

function finalizaCompeticion(){
    lis = document.body.getElementsByTagName("li");
    let tamañoLis = (lis.lenght)-1;

    try{
        lis[0].style.backgroundColor = "green";
        lis[1].style.backgroundColor = "blue";
        lis[2].style.backgroundColor = "orange";
        lis[tamañoLis].style.backgroundColor = "red";
    }catch(error){
        console.log(error);
    }
}