

function validar() {

    var expEmail;

    expEmail = /\w+@\w+\.[a-z]/;

    if (document.myForm.nombre.value == ""){
        alert("Ingrese su Nombre");
        document.myForm.focus();
        return false;
    } else if(parseInt(document.myForm.nombre.value)){

        alert('no se admiten numeros en el nombre');
        document.myForm.focus();
        return false;

    }else if(document.myForm.nombre.value.length > 20 || document.myForm.nombre.value.length < 3){

        alert('Ingrese sus nombres correctamente !!');
        document.myForm.focus();
        return false;
    }

//Apellido
    if (document.myForm.apellido.value == ""){
        alert("Ingrese su Apellido");
        document.myForm.focus();
        return false;
    } else if(parseInt(document.myForm.apellido.value)){

        alert('no se admiten numeros en el apellido');
        document.myForm.focus();
        return false;

    }else if(document.myForm.apellido.value.length > 20 || document.myForm.apellido.value.length < 3){

        alert('Ingrese sus apellido correctamente !!');
        document.myForm.focus();
        return false;
    }

    //Telefono

    if (document.myForm.telefono.value == ""){
        alert('Ingrese Telefono !!');
        document.myForm.focus();
        return false;

    } else if (isNaN(document.myForm.telefono.value)){
        alert("No se permiten letras !!");
        document.myForm.telefono.focus();
        return false;
    }

    //Direccion

    if(document.myForm.direccion.value ==""){
        alert("Ingrese su Direccion !!");
        document.myForm.direccion.focus();
        return false;

    }

    //Email

    if (document.myForm.email.value==""){
        alert(" Ingrese email !!!");
        document.myForm.email.focus();
        return false;

    }else if (!expEmail.test(document.myForm.email.value)){
        alert("Email incorrecto Ejemplo: localhost@epn.ec");
        document.myForm.email.focus();
        return false;
    }

    //Area

    if (document.myForm.mensaje.value==""){
        alert(" Ingrese mensaje !!!");
        document.myForm.mensaje.focus();
        return false;
    }

}

