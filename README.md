Blog de Noticias - React Technical Challenge

Esta es una aplicación profesional de blog desarrollada con React que consume datos de la API pública de JSONPlaceholder. El proyecto destaca por un diseño moderno con efectos de **Glassmorphism**, filtrado avanzado y una arquitectura de componentes reutilizables.

## Características Principales

- **Consumo de API Real**: Obtención de publicaciones y comentarios dinámicamente.
- **Buscador Inteligente**: Filtro por texto que busca tanto en títulos como en el cuerpo de las publicaciones.
- **Filtro por Usuario**: Selección de publicaciones específicas por ID de usuario.
- **Navegación Dinámica**: Sistema de rutas para ver detalles de publicaciones.
- **Diseño Premium**: Estética Dark Mode con fondo gris elegante, efectos de cristal y centrado absoluto.
- **Paginación**: Navegación eficiente entre grandes volúmenes de datos.

## Tecnologías Utilizadas

- **React**: Biblioteca principal para la interfaz.
- **Vite**: Herramienta de construcción rápida.
- **React Router DOM**: Para la gestión de navegación y rutas.
- **CSS3 Moderno**: Variables, Flexbox, Grid y Backdrop-filters.

## Instrucciones de Ejecución Local

Sigue estos pasos para poner en marcha el proyecto en tu máquina local:

### 1. Requisitos previos
Tener instalado [Node.js](https://nodejs.org/) (versión 16 o superior recomendada).

### 2. Clonar el repositorio
bash
git clone [https://github.com/TU_USUARIO/TU_REPOSITORIO.git](https://github.com/TU_USUARIO/TU_REPOSITORIO.git)
cd nombre-de-tu-carpeta

3. Instalar dependencias
Utiliza npm para instalar todos los paquetes necesarios:

Bash

npm install

4. Ejecutar en modo desarrollo
Inicia el servidor local:

Bash

npm run dev

Una vez ejecutado, abre tu navegador en: http://localhost:5173

Estructura del Proyecto
/src/components: Componentes reutilizables (SearchBar, PostCard, CommentList).

/src/services: Lógica de peticiones a la API (api.js).

/src/App.jsx: Componente principal que gestiona el estado global.

/src/App.css: Estilos finales unificados (Gris Elegante y Glassmorphism).

Desarrollado por: SERGIO ALEJANDRO LARA RODRIGUEZ

---

### Consejos para un repositorio profesional:

1.  **Captura de pantalla:** Te recomiendo tomar una captura de pantalla de tu aplicación final y guardarla en una carpeta llamada `/screenshots`. Luego puedes añadirla al README con `![Captura de pantalla](./screenshots/preview.png)` para que el evaluador vea el diseño antes de descargar el código.
2.  **El archivo `.gitignore`:** Asegúrate de que exista en tu raíz para que NO se suba la carpeta `node_modules`. Si no existe, créalo y escribe `node_modules` dentro.
3.  **Comentario de Commit:** Al subirlo a GitHub, usa un mensaje descriptivo como: `git commit -m "feat: entrega final con diseño premium y filtros funcionales"`.
