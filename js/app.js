// Variables
const carrito =document.querySelector('#carrito');
const contenedorCarrito=document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn=document.querySelector('#vaciar-carrito');
const listaCursos=document.querySelector('#lista-cursos');
let articulosCarritos=[];

//todos los eventos

cargarEventListeners();
function cargarEventListeners(){
    //cuando aegrar ub curso presionado "agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);

    //eliminba cursos del carrito

    carrito.addEventListener('click', eliminarCurso);

    //Vaciar el carrito 
    vaciarCarritoBtn.addEventListener('click', () =>{
        articulosCarritos= [];

        limpiarHtml(); //eliminar el html del carrito
    })
}


//FUNCIONES
function agregarCurso(e){
    e.preventDefault();//parar la accion del enlace


    if( e.target.classList.contains('agregar-carrito')){ // verifico si existe la clase agregar-carrito
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso (cursoSeleccionado);
    }
}

//ELIMINA UN CURSO DEL CARRITO
function eliminarCurso(e){
    console.log();
    if(e.target.classList.contains('borrar-curso')){
        const cursoId=e.target.getAttribute('data-id');

        //Elimina del arreglo de articuloscarrito por el ID

        articulosCarritos= articulosCarritos.filter(curso => curso.id !==cursoId );
        console.log(articulosCarritos);

        carritoHtml(); //iterar sobre el carrito y mostar su html

    }

}



//lee el contenido del html al que le dimos click y extrae la infomracion del curso
function leerDatosCurso(curso){

    //crear un obejto con el contenido del curso actual
    const infoCurso={
        imagen : curso.querySelector('img').src, //seleccionar el curso
        titulo : curso.querySelector('h4').textContent,
        precio : curso.querySelector('.precio span').textContent,
        id     : curso.querySelector('a').getAttribute('data-id'), //obtener el atributo data
        cantidad : 1

    }

    //revisa si un elemento existe en el carrito
    const existe= articulosCarritos.some( curso => curso.id=== infoCurso.id);
    if(existe){

        //actualizar la cantidad
        const cursos= articulosCarritos.map(curso =>{
            if( curso.id=== infoCurso.id){
                curso.cantidad++;
                return curso;//retorna el objeto actualizado
            }
            else{
                return curso; //retorna los objetos que no son duplicados
            }

        });
        articulosCarritos=[...cursos];

    }
    else{
        //Agrega elementos al arreglo carrito
        articulosCarritos= [...articulosCarritos, infoCurso];

    }



    console.log(articulosCarritos);

    carritoHtml();

}

//MUESTRA EL CARRITO DE COMPRAN EN EL HTML
function carritoHtml(){

    //limpiar el html
    limpiarHtml();


    //recorre el carrito y genera el html
    articulosCarritos.forEach( curso =>{
        const {imagen, titulo, precio, cantidad,id}= curso;
        const row= document.createElement('tr');
        row.innerHTML=`
            <td>
                <img src="${imagen}" width="125">

            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `;

        //agrega el html al carrito en el tbody
        contenedorCarrito.appendChild(row);

    });
}

//elimina los cursos del tbody
function limpiarHtml(){
    while(contenedorCarrito.firstChild){ //verifica si hay hijos los borra
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)

    }

}
