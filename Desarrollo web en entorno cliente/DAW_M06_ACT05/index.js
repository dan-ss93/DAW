function guardarDatos(){
    event.preventDefault();
    var nombre, password1, password2, mail, dni, aficion;
    nombre = document.getElementById("inputNick").value;
    password1 = document.getElementById("inputPassword1").value;
    password2 = document.getElementById("inputPassword2").value;
    email = document.getElementById("inputEmail").value;
    dni = document.getElementById("inputDNI").value;

    if (nombre ===""){
        alert("El campo nombre está vacío");
        return false;
    }


}