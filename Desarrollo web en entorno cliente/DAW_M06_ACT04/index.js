const list = document.getElementById("list");

function addCompetidor(){
    nombreParticipante = document.getElementById("nombre");
    colorParticipante = document.getElementById("color");

    const li = document.createElement("li");
    li.innerHTML = nombreParticipante.value + colorParticipante.value;
    list.appendChild(li);

    nombreParticipante.value = "";
    colorParticipante.value="";
}