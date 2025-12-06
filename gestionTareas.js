class Tarea {
    constructor(id, titulo, descripcion, completada = false) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.completada = completada;
    }
}

class ListaTareas {
    constructor() {
        this.tareas = [];
    }

    agregarTarea(tarea) {
        this.tareas.push(tarea);
    }

    eliminarTarea(id) {
        this.tareas = this.tareas.filter(tarea => tarea.id !== id);
    }

    marcarComoCompletada(id) {
        const tarea = this.tareas.find(t => t.id === id);
        if (tarea) {
            tarea.completada = !tarea.completada; 
        }
    }
}

const gestorTareas = new ListaTareas();





const formulario = document.getElementById('form-tarea');
const inputTitulo = document.getElementById('titulo');
const inputDescripcion = document.getElementById('descripcion');
const listaContenedor = document.getElementById('lista-tareas');


function renderizarTareas() {
    listaContenedor.innerHTML = '';

    gestorTareas.tareas.forEach(tarea => {
        const item = document.createElement('li');
        
        item.className = `list-group-item d-flex justify-content-between align-items-center ${tarea.completada ? 'tarea-completada' : ''}`;
        
        item.innerHTML = `
            <div>
                <strong>${tarea.titulo}</strong>
                <small class="d-block text-muted">${tarea.descripcion}</small>
            </div>
            <div>
                <button class="btn btn-success btn-sm me-2 btn-completar" data-id="${tarea.id}">
                    ${tarea.completada ? 'Desmarcar' : 'Completar'}
                </button>
                <button class="btn btn-danger btn-sm btn-eliminar" data-id="${tarea.id}">
                    Eliminar
                </button>
            </div>
        `;

        listaContenedor.appendChild(item);
    });
}


formulario.addEventListener('submit', (evento) => {
    evento.preventDefault(); 

    const titulo = inputTitulo.value;
    const descripcion = inputDescripcion.value;
    
    const id = Date.now(); 

    const nuevaTarea = new Tarea(id, titulo, descripcion);

    gestorTareas.agregarTarea(nuevaTarea);
    renderizarTareas();

    formulario.reset();
});

listaContenedor.addEventListener('click', (evento) => {
    const target = evento.target; 
    const idSeleccionado = parseInt(target.getAttribute('data-id'));

    if (target.classList.contains('btn-eliminar')) {
        gestorTareas.eliminarTarea(idSeleccionado);
        renderizarTareas();
    } 
    
    if (target.classList.contains('btn-completar')) {
        gestorTareas.marcarComoCompletada(idSeleccionado);
        renderizarTareas();
    }
});