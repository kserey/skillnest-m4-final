const API_URL = 'https://jsonplaceholder.typicode.com/todos';

// Clases y Objetos

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

    // --- GET ---
    async cargarTareasDesdeAPI() {
        try {
            const respuesta = await fetch(API_URL + '?_limit=5'); 
            const datos = await respuesta.json();

            this.tareas = datos.map(t => new Tarea(t.id, t.title, "Descripción desde API", t.completed));
            
            console.log("Tareas cargadas desde API:", this.tareas);
            renderizarTareas();
        } catch (error) {
            console.error("Error al cargar tareas:", error);
        }
    }

    // --- POST ---
    async agregarTarea(titulo, descripcion) {
        try {
            const nuevaTareaDatos = {
                title: titulo,
                completed: false,
            };

            const respuesta = await fetch(API_URL, {
                method: 'POST',
                body: JSON.stringify(nuevaTareaDatos),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });

            const data = await respuesta.json();
            
            const nuevaTarea = new Tarea(data.id, titulo, descripcion, false);
            
            this.tareas.push(nuevaTarea);
            renderizarTareas();
            console.log("Tarea creada en servidor:", data);

        } catch (error) {
            console.error("Error al crear tarea:", error);
        }
    }

    // --- DELETE ---
    async eliminarTarea(id) {
        try {
            await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
            });

            this.tareas = this.tareas.filter(tarea => tarea.id !== id);
            renderizarTareas();
            console.log(`Tarea ${id} eliminada del servidor simulado.`);

        } catch (error) {
            console.error("Error al eliminar tarea:", error);
        }
    }

    // --- PUT ---
    async marcarComoCompletada(id) {
        try {
            const tarea = this.tareas.find(t => t.id === id);
            if (!tarea) return;

            const nuevoEstado = !tarea.completada;

            await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    completed: nuevoEstado
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });

            tarea.completada = nuevoEstado;
            renderizarTareas();
            console.log(`Tarea ${id} actualizada a: ${nuevoEstado}`);

        } catch (error) {
            console.error("Error al actualizar tarea:", error);
        }
    }
}

const gestorTareas = new ListaTareas();


// INTERACCIÓN CON EL DOM 

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

    gestorTareas.agregarTarea(titulo, descripcion);
    
    formulario.reset();
});

listaContenedor.addEventListener('click', (evento) => {
    const target = evento.target;
    const idSeleccionado = parseInt(target.getAttribute('data-id'));

    if (target.classList.contains('btn-eliminar')) {
        gestorTareas.eliminarTarea(idSeleccionado);
    } 
    
    if (target.classList.contains('btn-completar')) {
        gestorTareas.marcarComoCompletada(idSeleccionado);
    }
});


// INICIALIZACIÓN

gestorTareas.cargarTareasDesdeAPI();