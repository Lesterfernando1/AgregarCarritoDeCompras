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
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso (cursoSeleccionado);
    }
}

//lee el contenido del html al que le dimos click y extrae la infomracion del curso
function leerDatosCurso(curso){
   console.log(curso);

    //crear un obejto con el contenido del curso actual
    const infoCurso={
        imagen : curso.querySelector('img').src, //seleccionar el curso
        titulo : curso.querySelector('h4').textContent,
        precio : curso.querySelector('.precio span').textContent,
        id     : curso.querySelector('a').getAttribute('data-id'), //obtener el atributo data
        cantidad : 1

    }
    console.log(infoCurso);

}
