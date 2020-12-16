(function(){
	var formulario=document.getElementsByName("formulario")[0], 
	elementos=formulario.elements, 
	boton=document.getElementById("btn");

	var validarNombre=function(e){
		if(formulario.nombre.value==0){
			alert("Ingrese su nombre");
			e.preventDefault();
		}
	};

	var validarCorreo=function(e){
		if(formulario.email.value==0){
			alert("Ingrese su correo");
			e.preventDefault();
		}
	};


	var validarAsunto=function(e){
		if(formulario.asunto.value==0){
			alert("Especifique un asunto");
			e.preventDefault();
		}
	};


	var validarMensaje=function(e){
		if(formulario.mensaje.value==0){
			alert("Escriba un mensaje");
			e.preventDefault();
		}
	};


	var validar=function(e){
		validarNombre(e);
		validarCorreo(e);
		validarAsunto(e);
		validarMensaje(e);
	};

	formulario.addEventListener("submit",validar);
}())

