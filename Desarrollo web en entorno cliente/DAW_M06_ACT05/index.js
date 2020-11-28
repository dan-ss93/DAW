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

	let user = document.getElementById("verifiTrue");
	
	if (dato.checked == true){

		user.innerHTML = "Aceptaste las condiciones";
		user.style.color = "green";
	}
	else{

		user.innerHTML ="No aceptaste las condiciones de uso";
		user.style.color ="red";
		valido = false;
	}
	return valido;
}

function validaNick(valido = true){

	if (usuario.length >2 || usuario.length <25){

		userCorrecto = window.document.getElementById("usuario").innerHTML="El usuario es correcto".
		userCorrecto.style.color="green";
	}

	else{ 

		(usuario.length <2 || usuario.length >25)
		window.document.getElementById("usuario").innerHTML="El usuario debe tener entre 2 y 25 letras";
		valido = false;
	}

function validarPassword(valido = true){

	if (password1.length < 4 || password1.length > 9 ) {

		window.document.getElementById("password1").innerHTML="La contraseña debe tener entre 4 y 9 letras o numeros";
	  	return;
	}
	if (password1 !== password2){

		window.document.getElementById("password2").innerHTML="Las contraseñas no coinciden";
		valido = false;
	}
	return valido;
}
function validarEmail(valido = true) {

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valido)){

   alert("La dirección de email " + valor + " es correcta.");
  } else {

   alert("La dirección de email es incorrecta.");
  }
}

function validarDNI(valido = true){

  var numero

  var letr

  var letra

  var expresion_regular_dni
 
  expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
 
  if(expresion_regular_dni.test (dni) == true){

	 numero = dni.substr(0,dni.length-1);
	 
	 letr = dni.substr(dni.length-1,1);
	 
	 numero = numero % 23;
	 
	 letra='TRWAGMYFPDXBNJZSQVHLCKET';
	 
	 letra=letra.substring(numero,numero+1);
	 
    if (letra!=letr.toUpperCase()) {

       alert('Dni erroneo, la letra del NIF no se corresponde');
     }else{

       alert('Dni correcto');
     }
  }else{

     alert('Dni erroneo, formato no válido');
   }
}
}

function validarFormulario(){

	let correcto = true;

	correcto = comprobarCheck(correcto);

	correcto = validaNick(correcto);

	correcto = validarPassword(correcto);

	correcto = validarEmail(correcto);

	correcto = validarDNI(correcto);

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

	document.cookie = form["inputNick"].id + "=" + form ["inputNick"].value;

	document.cookie = form["inputPass1"].id + "=" + form ["inputPass1"].value;

	document.cookie = form["inputPass2"].id + "=" + form ["inputPass2"].value;

	document.cookie = form["inputEmail"].id + "=" + form ["inputEmail"].value;

	document.cookie = form["inputDNI"].id + "=" + form ["inputDNI"].value;

	document.cookie = form["aceptar_condiciones"].id + "=" + form ["aceptar_condiciones"].value;

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

	event.preventDefault();

}
