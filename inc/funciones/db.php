<?php

 //credenciales de la base de datos

  $nombre="Agenda_contactos";
  $usuario="root";
  $contraseña="";
  $host="localhost";

  //Conexion a la base de datos(host,user,password,name_database)  
  $conn= new mysqli($host,$usuario,$contraseña,$nombre);

  echo $conn->ping();


?>