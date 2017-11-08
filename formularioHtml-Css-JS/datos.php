<?php

//conexion con la base de datos y el servidor
$link = mysql_connect("localhost","root","") or die("<h2>No se encuentra el servidor</h2>");
$db = mysql_select_db("usuarios",$link) or die("<h2>Error de Conexion</h2>");

    //obtenemos los valores del formulario

    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $direccion = $_POST['direccion'];
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

//Obtiene la longitus de un string
$req = (strlen($nombre)*strlen($apellido)*strlen($direccion)*strlen($telefono)*strlen($email)*strlen($mensaje)) or die("No se han llenado todos los campos");

//ingresamos la informacion a la base de datos
mysql_query("INSERT INTO datos VALUES('','$nombre','$apellido','$direccion','$telefono','$email','$mensaje')",$link) or die("<h2>Error Guardando los datos</h2>");
echo'
        		<script>
        			alert("Registro Exitoso");
        			location.href="index.html";
        		</script>
        	'

?>