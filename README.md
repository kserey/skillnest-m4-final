# 📋 Gestor de Tareas - JavaScript Full Stack

Este proyecto es una aplicación web para la gestión de tareas (To-Do List) desarrollada como parte de la evaluación del **Módulo 4: Programación Avanzada en JavaScript** del Bootcamp Full Stack Javascript Talento Digital.

El sistema implementa **Programación Orientada a Objetos (POO)** y manipulación del **DOM**, conectándose a una API externa para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) mediante `fetch` y `async/await`.

## 🚀 Características

* **Listar Tareas:** Carga inicial de tareas desde una API externa.
* **Agregar Tarea:** Permite ingresar título y descripción (Simulación POST).
* **Completar Tarea:** Alterna el estado visual y lógico de la tarea (Simulación PUT).
* **Eliminar Tarea:** Remueve la tarea de la lista y del servidor (Simulación DELETE).
* **Interfaz Responsiva:** Diseño moderno y adaptativo utilizando **Bootstrap 5**.

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica.
* **CSS3 & Bootstrap 5:** Estilos y diseño responsivo.
* **JavaScript (ES6+):**
    * Clases y Objetos (POO).
    * Manejo de asincronía (`async/await`).
    * Manipulación del DOM.
    * Fetch API.
* **API Externa:** [JSONPlaceholder](https://jsonplaceholder.typicode.com/) (Mock API).

## 📂 Estructura del Proyecto

```text
/proyecto-tareas
  ├── index.html           # Estructura principal y vista
  ├── gestionTareas.js     # Lógica del negocio (Clases y Controladores)
  ├── README.md            # Documentación
  └── assets
      └── css
          └── style.css    # Estilos personalizados
```

## ⚙️ Instalación y Uso
Este proyecto no requiere instalación de dependencias de Node.js, ya que funciona directamente en el navegador.

* 1. Clonar el repositorio:

```bash
git clone [https://github.com/TU_USUARIO/nombre-repo.git](https://github.com/TU_USUARIO/nombre-repo.git)
```

* 2. Ejecutar:
    * Abre el archivo index.html en tu navegador web de preferencia.
    * O utiliza una extensión como "Live Server" en VS Code.

## 📝 Notas sobre la API (JSONPlaceholder)
Este proyecto utiliza JSONPlaceholder como backend de prueba. Es importante notar que:

* **1.Persistencia:** Al ser una API de prueba pública, los cambios (nuevas tareas, ediciones, borrados) no se guardan realmente en el servidor. La API simula la respuesta correcta, pero al recargar la página, volverán a aparecer los datos originales de prueba.

* **2. Datos de Ejemplo:** Las tareas iniciales que aparecen (en latín) provienen directamente de la base de datos de JSONPlaceholder. Es normal ver algunas tareas iniciadas como "completadas" si así vienen desde el servidor.

✒️ Autor
Irina Serey - Desarrollador Full Stack en formación
