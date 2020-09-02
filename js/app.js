// Variables
const carrito =document.querySelector('#carrito');
const contenedorCarrito=document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn=document.querySelector('#vaciar-carrito');
const listaCursos=document.querySelector('#lista-cursos');


//todos los eventos

cargarEventListeners();
function cargarEventListeners(){
    //cuando aegrar ub curso presionado "agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);
}


//FUNCIONES
function agregarCurso(e){
    e.preventDefault();//parar la accion del enlace
    if( e.target.classList.contains('agregar-carrito')){ // verifico si existe la clase agregar-carrito
        console.log(e.target);

    }
 
}
