document.forms["form"];

var usuario = document.getElementById("inputNick");

var password1 = document.getElementById("InputPass1");

var password2 = document.getElementById("InputPass2");

var correo = document.getElementById("InputEmail");

var aficion = document.getElementById("inputAficion");

var dni = document.getElementById("inputDNI");



function comprobarCheck(valido = true){
	event.preventDefault();

	let dato = document.forms["form"]["aceptar_condiciones"];

	let check = document.getElementById("resultado");
	
	if (dato.checked == true){

		check.innerHTML = "Aceptaste las condiciones";
		check.style.background = "green";
	}
	if(dato.checked==false){

		check.innerHTML ="No aceptaste las condiciones de uso";
		check.style.background ="red";
		valido = false;
	}
	return valido;
}

function validarNick(valido = true){
	let correcto = true;
	let formulario = document.forms["form"];
	let dato = formulario["inputNick"].value;
	let user = document.getElementById("usuario");
	
	if (dato.length > 2 || dato.length < 25){
		user.innerHTML="Nick válido";
		user.style.background="green";
	}
	if (dato.length <2 || dato.length > 25){
		user.innerHTML="El nick debe tener entre 2 y 25 carácteres. Por ejemplo: Juan";
		user.style.background="red";
		correcto = false;
	}
	return valido;
}

function validarPassword(){

	let correcto = true;
	let formulario = document.forms["form"];
	let dato = formulario["inputPass1"].value;
	let user = document.getElementById("password1");
	let expresion = new RegExp ("[0-9][A-z]{1,5}");

	if (expresion.test(dato)){
		user.innerHTML="Password aceptada";
		user.style.background ="green"
	}
	else{
		user.innerHTML="Ha de tener de 4 a 9 carácteres, números o letras. Por ejemplo: G00gl3";
		user.style.background ="red";
		correcto = false;
	}
	return correcto;
}

function compararPasswords(password1){
	let correcto = true;
	let formulario = document.forms["form"];
	let password2 = formulario["inputPass2"].value;
	let user = document.getElementById("password2");

	if (password1.value==password2.value){
		user.innerHTML="Las contraseñas coinciden.";
		user.style.background="green";
	}
	else{
		user.innerHTML="Las contraseñas no coinciden."
		user.style.background="red";
		correcto = false;
	}
	return correcto;
}
function validarEmail(valido = true) {

	let correcto = true;
	let formulario = document.forms["form"];
	let dato = formulario["inputEmail"].value;
	let user = document.getElementById("email");
	let expresion = new RegExp ("^[A-z0-9]+@[A-z0-9]+.[A-za-z0-9]{2,3}$");

	if (expresion.test(dato)){
		user.innerHTML="Mail correcto.";
		user.style.background="green";
	}
	else{
		user.innerHTML="Formato de mail incorrecto. Por ejemplo: info@google.com"
		user.style.background="red";
		correcto = false;
	}
	return correcto;
}
function validarDNI(valido = true){

	var formulario = document.forms["form"];
	var dato = formulario["inputDNI"].value;
	let user = document.getElementById("dni");
	var patt1 = new RegExp("^[0-9]{8,8}[A-z]{1,1}$");
	let correcto = patt1.test(dato);


	if(correcto){
	user.innerHTML="Formato correcto.";
	user.style.background="green";
	}
	else{
		user.innerHTML="Formato incorrecto. Por ejemplo: 58521928S";
		user.style.background="red";
		validado = false;
	}

	return correcto;

}


function validarAficiones(){

	let correcto = true;
	let formulario = document.forms["form"];
	aficiones = document.getElementById("aficiones").selectedIndex;
	var user = document.getElementById("idAficiones");
	if (aficiones >=2){
		user.textContent= "Aficiones aceptadas.";
		user.style.background="green";
		
	}
	else{
		user.textContent= "No has escogido aficiones. Por favor, escoge como mínimo dos." ;
		user.style.background="red";
		correcto = false;
	}
	
	return correcto;
}

function validarFormulario(){

	let correcto = true;

	correcto = comprobarCheck(correcto);

	correcto = validarNick(correcto);

	correcto = validarPassword(correcto);

	correcto = compararPasswords(correcto);

	correcto = validarEmail(correcto);

	correcto = validarDNI(correcto);

	correcto = validarAficiones(correcto)

	return correcto;
}



function añadirAficion(){
	event.preventDefault();
    var aficiones = document.getElementById("aficiones");
    var inputAficion = document.getElementById("inputAficion").value;
    var option = document.createElement("option");
    option.text = inputAficion;
    aficiones.add(option);
    }



function guardarDatos(){


	document.cookie = form["inputNick"].id + "=" + form["inputNick"].value;

	document.cookie = form["inputPass1"].id + "=" + form["inputPass1"].value;

	document.cookie = form["inputPass2"].id + "=" + form["inputPass2"].value;

	document.cookie = form["inputEmail"].id + "=" + form["inputEmail"].value;

	document.cookie = form["inputDNI"].id + "=" + form["inputDNI"].value;

	document.cookie = form["aceptar_condiciones"].id + "=" + form["aceptar_condiciones"].value;

	event.preventDefault();


}

function recuperarDatos(){

	form["inputNick"].value = getCookie(form["inputNick"].id);

	form["inputPass1"].value = getCookie(form["inputPass1"].id);

	form["inputPass2"].value = getCookie(form["inputPass2"].id);

	form["inputEmail"].value = getCookie(form["inputEmail"].id);

	form["inputDNI"].value = getCookie(form["inputDNI"].id);

	form["aceptar_condiciones"].checked = JSON.parse(getCookie(form["aceptar_condiciones"].id));

	comprobarCheck();

	validaNick();

	validarPassword();

	validarEmail();

	validarDNI();

	validarFormulario()

	event.preventDefault();

}
