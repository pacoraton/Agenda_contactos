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

    if(nombre === '' || empresa === '' || telefono ==='') {
        //2 parametros: texto y clase
        mostrarNotificacion("Todos los campos son Obligatorios","error");
        //console.log('No puede haber campos vacios');
    }else{
         console.log('agregado');
    }


    
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
        notificacion.remove();
        }, 3000);
    }, 100);

}