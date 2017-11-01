/**
 * Created by paul on 27/10/2017.
 */

function validar() {

    var expfecha;
    var expEmail;

    expEmail = /\w+@\w+\.[a-z]/;
    expfecha = /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/;

    //Nombre
    if (document.myForm.nombre.value == ""){
        alert("Ingrese sus nombres !!");
        document.myForm.nombre.focus();
        return false;
    }else if (parseInt(document.myForm.nombre.value)){
        alert("No se admiten numeros en su nombre!!");
        document.myForm.nombre.focus();
        return false;
    }else if (document.myForm.nombre.value.length > 20  || document.myForm.nombre.value.length < 3){
        alert("Ingrese sus nombres correctamente !!!");
        document.myForm.nombre.focus();
        return false;
    }

    //Apellido
    if (document.myForm.apellido.value == ""){
        alert("Ingrese sus apellidos !!");
        document.myForm.apellido.focus();
        return false;
    }else if (parseInt(document.myForm.apellido.value)){
        alert("No se admiten numeros en su apellido!!");
        document.myForm.apellido.focus();
        return false;
    }else if (document.myForm.apellido.value.length > 20  || document.myForm.apellido.value.length < 3){
        alert("Ingrese sus apellidos correctamente !!!");
        document.myForm.apellido.focus();
        return false;
    }



    //Fecha de Naciomiento
    if (document.myForm.date.value == ""){
        alert("Ingrese Fecha de nacimiento !!!!");
        document.myForm.date.focus();
        return false;
    }else if (!expfecha.test(document.myForm.date.value)){
        alert("Fecha Incorrecta Ejemplo: dd/mm/año!!!!");
        document.myForm.date.focus();
        return false;
    }

    //Nacionalidad
    if (document.myForm.nacionalidad.value == ""){
        alert("Ingrese Fecha de nacionalidad !!!!");
        document.myForm.nacionalidad.focus();
        return false;
    }else if (parseInt(document.myForm.nacionalidad.value)){
        alert("No se admiten numeros en su nacionalidad!!");
        document.myForm.nacionalidad.focus();
        return false;
    }

    //Cedula
    if (document.myForm.cedula.value ==""){
        alert(" Ingrese Cedula !!!");
        document.myForm.cedula.focus();
        return false;
    }else if (isNaN(document.myForm.cedula.value)){
        alert("No se permiten letras !!");
        document.myForm.cedula.focus();
        return false;
    }else if(document.myForm.cedula.value.length !=10){
        alert("Cedula Incorrecta !!!");
        document.myForm.cedula.focus();
        return false;
    }

    //Estado civil
    if(document.myForm.estado.value == "-1"){
        alert("Escoja estado civil !!");
        return false;
    }

    //Direccion
    if (document.myForm.direccion.value == ""){

        alert("Ingrese su Direccion !!");
        document.myForm.direccion.focus();
        return false;
    }

    //Telefono
    if (document.myForm.telefono.value ==""){
        alert(" Ingrese telefono !!!");
        document.myForm.telefono.focus();
        return false;
    }else if (isNaN(document.myForm.telefono.value)) {
        alert("No se permiten letras !!");
        document.myForm.telefono.focus();
        return false;
    }

    //Email
    if (document.myForm.email.value =="") {
        alert(" Ingrese email !!!");
        document.myForm.email.focus();
        return false;
    }else if(!expEmail.test(document.myForm.email.value)){
        alert("Email incorrecto Ejemplo: localhost@epn.ec");
        document.myForm.email.focus();
        return false;
    }

    //Observaciones
    if (document.myForm.area.value ==""){

        alert("Ingrese Observaciones");
        document.myForm.area.focus();
        return false;
    }

    //Archivo
    if (document.myForm.exampleInputFile.value ==""){

        alert("Ingrese Archivo para cargar !!");
        document.myForm.exampleInputFile.focus();
        return false;
    }

    //alert("Ingresado correctamente los datos");

}