/**
 * Created by paul on 27/10/2017.
 */

function validar(formulario) {

    var expEmail;
    var expfecha;
    var expCedula;

    expEmail = /\w+@\w+\.[a-z]/;
    expfecha = /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/;
    expCedula = /(\d{10})$/;


    if ((formulario.nombre.value.length == 0) || (formulario.apellido.value.length == 0) || (formulario.date.value.length == 0) || (formulario.nacionalidad.value.length == 0) || (formulario.cedula.value.length == 0) || (formulario.estado.value.length == 0) || (formulario.direccion.value.length == 0) || (formulario.telefono.value.length == 0) || (formulario.email.value.length == 0 || (formulario.area.value.length == 0) || (formulario.exampleInputFile.value.length == 0))){

        alert("FALTA INFORMACION EN LOS CAMPOS !!!");
        return false;

    }

    else if ((formulario.nombre.value.length > 20)){

        alert('Nombre muy Largo!!!!');
        return false;
    }

    else if ((formulario.apellido.value.length > 20)){
        alert('Apellido muy Largo!!!!');
        return false;
    }


    else if ((!expfecha.test(formulario.date.value))){

        alert("fecha no es correcta");
        return false;

    }

    else if ((formulario.nacionalidad.value.length > 20)){
        alert('Nacionalidad muy Largo!!!!');
        return false;
    }

    else if ((!expCedula.test(formulario.cedula.value)) || (formulario.cedula.value.length > 10)){
        alert('Numero de cedula falso ingrese correctamente');
        return false;

    }

    else if (isNaN(formulario.telefono.value) || (formulario.telefono.value.length > 20)){
        alert("En el telefono no se aceptan letras o no es correcto");
        return false;

    }

    else if ((!expEmail.test(formulario.email.value))){

        alert("el correo no es valido");
        return false;

    }

}