const formularioContactos = document.querySelector('#contacto');

EventListener();


function EventListener(){
    //cuando el formualrio de crear o editar se ejecute
    formularioContactos.addEventListener('submit',leerformulario);
}

function leerformulario(e){
    
    e.preventDefault();

    const nombre=document.querySelector('#nombre').value;
    const empresa=document.querySelector('#empresa').value;
    const telefono=document.querySelector('#telefono').value;
    const accion=document.querySelector('#accion').value;

    if(nombre === '' || empresa === '' || telefono ==='') {
        //2 parametros: texto y clase
        mostrarNotificacion("Todos los campos son Obligatorios","error");
        //console.log('No puede haber campos vacios');
    }else{
         //Pasa la validacion, crear llamando a ajax

         const infoContacto= new FormData();
          infoContacto.append('nombre',nombre);
          infoContacto.append('empresa',empresa);
          infoContacto.append('telefono',telefono);
          infoContacto.append('accion',accion);

          //console.log(...infoContacto);
            if(accion === 'crear'){
                 //Crearemos un nuevo Contacto
                 insertarBD(infoContacto);    
            }else{
                //Editar contacto
            }
           
    }

}

//Inserta en la base de datos via Ajax
function insertarBD(datos){
    //llamado a ajax


    //crear el objeto
    const xhr =new XMLHttpRequest();



    //abrir la conexion
        xhr.open('POST','inc/modelos/modelos-contactos.php',true); 

    //pasar los datos
    xhr.onload=function(){
        if(this.status===200){
            console.log(JSON.parse(xhr.responseText));
            //Leemos la respuesta de PHP
            const respuesta= JSON.parse(xhr.responseText);
            console.log(respuesta.nombre);

        }
    }

    //enviar los datos
    xhr.send(datos)
}

//Notificacion en pantalla
function mostrarNotificacion(mensaje,clase){
    const notificacion=document.createElement('div');
    notificacion.classList.add(clase,'notificacion');
    notificacion.textContent=mensaje;

    //formulario
    formularioContactos.insertBefore(notificacion,document.querySelector('form legend'));

    //Ocultar y mostrar la notificacion
    setTimeout(() => {
        notificacion.classList.add('visible');
        setTimeout(() => {
        notificacion.classList.remove('visible'); 
        setTimeout(() => {
            notificacion.remove();
        }, 500);
        }, 3000);
    }, 100);

}