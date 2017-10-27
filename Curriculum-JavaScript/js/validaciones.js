/**
 * Created by paul on 27/10/2017.
 */



function validar() {

    //vamos a validar mediante el id
    var nombre, apellido, cedula,telefono, email, expresion;

    //almacenamos los valores de los imputs de las variables
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    cedula = document.getElementById("cedula").value;
    telefono = document.getElementById("telefono").value;
    email = document.getElementById("email").value;

    if (nombre === "") {
        alert("Llene el campo Nombre");
        return false;
    }

}