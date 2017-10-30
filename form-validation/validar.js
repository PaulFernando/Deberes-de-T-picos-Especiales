
function validar(formulario) {

    var expresion;

    expresion = /\w+@\w+\.[a-z]/;

    if ((formulario.nombre.value.length == 0) || (formulario.apellido.value.length == 0) || (formulario.correo.value.length == 0) || (formulario.usuario.value.length == 0) || (formulario.clave.value.length == 0) || (formulario.telefono.value.length == 0) ){

        alert("flata Informacion")
        return false;

    }

    else if ((formulario.nombre.value.length > 20)){

        alert('Nombre muy largo');
        return false;
    }

    else if ((formulario.apellido.value.length > 20)){

        alert(('Apellido muy Largo'));
        return false;
    }

    else if ((formulario.usuario.value.length > 20 || formulario.clave.value.length > 20)){

        alert("El usuario y la clave deben de tener maximo 20 caracteres");
        return false;
    }

    else if(isNaN(formulario.telefono.value)){

        alert("En el telefono No se aceptan letras");
        return false;
    }

    else if((!expresion.test(formulario.correo.value))){

        alert("No es correo valido");
        return false;

    }

}