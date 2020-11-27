document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("form").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
	evento.preventDefault();
	var usuario = document.getElementById('usuario').value;
	if(usuario.length == 0) {
	  alert('No has escrito nada en el usuario');
	  return;
	}
	if(usuario.length <2 || usuario.length >25){
		alert('El usuario debe tener entre 2 y 25 caracteres')
		return;
	}
		
	var password1 = document.getElementById('password').value;
	var password2 = document.getElementById('password2').value;
	if (password1.length < 4 || password1.length > 9 ) {
	  alert('La contraseña no es válida');
	  return;
	}
	if (password1 !== password2){
		alert('Las contraseñas no coinciden');
		return;
	}
	this.submit();
  }


  let listaHijos;
	function añadirAficion(){
  	
	  let nuevAficion = document.getElementById("nuevAficion").value;
	  let listaAficiones = document.getElementById("aficiones").value;

	  listaHijos = document.createElement("nuevaOption");
	  listaHijos.innerHTML = nuevAficion;
	  listaAficiones.appenChild(listaHijos);
	}