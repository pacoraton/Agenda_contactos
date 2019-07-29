<?php include 'inc/layout/header.php'; ?>

 <div class='cabecera-barra' >
     <h1>Agenda Contactos</h1>
 </div>

 <div class="bg-amarillo contenedor sombra ">
    <form id="contacto" action="#">
        <legend>Añada un contacto. <span>Todos los campos son obligatorios</span></legend>
        
        <div class="campos">
            <div class="campo">
                <label for="nombre">Nombre: </label>        
                <input type="text" id="nombre" placeholder="Nombre Contacto" >
            </div> 
            <div class="campo">
                <label for="empresa">Empresa: </label>        
                <input type="text" id="empresa" placeholder="Empresa" >
            </div> 
            <div class="campo">
                <label for="telefono">Teléfono: </label>        
                <input type="tel" id="telefono" placeholder="Teléfono">
            </div>  
        </div>

        <div class="campo enviar">        
                <input type="submit" id="añadir" value="Añadir" >
        </div> 
    </form>
 </div>



<?php include 'inc/layout/header.php'; ?>