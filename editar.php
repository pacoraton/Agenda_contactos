<?php include 'inc/layout/header.php'; ?>


    <div class='cabecera-barra' >
        <div class="contenedor barra">
            <a href=index.php class="btn volver">Volver</a>
            <h1>Editar Contactos</h1>
        </div>  
    </div>


    <div class="bg-amarillo contenedor sombra ">
        <form id="contacto" action="#">
            <legend>Edite el contacto. <span></span></legend>

            <?php include 'inc/layout/formulario.php'; ?>
            
        </form>
    </div>

<?php include 'inc/layout/footer.php'; ?>