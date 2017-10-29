<?php

    //conexion con la base de datos y el servidor
	$link = mysql_connect("localhost","root","") or die("<h2>No se encuentra el servidor</h2>");
	$db = mysql_select_db("form_datos",$link) or die("<h2>Error de Conexion</h2>");

    //obtenemos los valores del formulario

    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $date = $_POST['date'];
    $nacionalidad = $_POST['nacionalidad'];
    $cedula = $_POST['cedula'];
    $estado = $_POST['estado'];
    $direccion = $_POST['direccion'];
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];
    $area = $_POST['area'];
    $exampleInputFile = $_POST['exampleInputFile'];

    	//Obtiene la longitus de un string
    	$req = (strlen($nombre)*strlen($apellido)*strlen($date)*strlen($nacionalidad)*strlen($cedula)*strlen($estado)*strlen($direccion)*strlen($telefono)*strlen($email)*strlen($area)*strlen($exampleInputFile)) or die("No se han llenado todos los campos");

    	//ingresamos la informacion a la base de datos
        	mysql_query("INSERT INTO datos VALUES('','$nombre','$apellido','$date','$nacionalidad','$cedula','$estado','$direccion','$telefono','$email','$area','$exampleInputFile')",$link) or die("<h2>Error Guardando los datos</h2>");
        	echo'
        		<script>
        			alert("Registro Exitoso");
        			location.href="../index.html";
        		</script>
        	'

?>