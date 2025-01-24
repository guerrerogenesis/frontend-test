# React Product Management App - 

Este proyecto es una aplicación React para la gestión de productos que incluye funcionalidades para listar, agregar, actualizar y eliminar productos. Se conecta a un backend construido en Laravel mediante una API RESTful.

## Requisitos previos

Antes de instalar y ejecutar este proyecto, asegúrate de tener lo siguiente instalado en tu sistema:

- [Node.js](https://nodejs.org/) (versión 20 o superior recomendada)
- [npm](https://www.npmjs.com/) (incluido con Node.js en version 10 o superior) 
- Un backend API funcional (por ejemplo, el backend Laravel proporcionado en este proyecto)

---


## Instalación

Sigue los pasos a continuación para clonar e instalar este proyecto en tu máquina local (recuerda utilizar la ruta de tu preferencia):

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/guerrerogenesis/frontend-test.git

2. **Accede al directorio del proyecto donde lo clonaste:**
   ```bash
   cd nombre-del-directorio

3. **Instala las dependencias: Si usas npm:**
   ```bash
   npm install

4. **Configura las variables de entorno: Crea un archivo .env en la raíz del proyecto y agrega las siguientes variables:**
   ```bash
   VITE_API_URL=http://localhost:8000/api



## Ejecución del proyecto

1. **Inicia el servidor de desarrollo:**
   ```bash
   npm start

2. **Abre la aplicación en el navegador: Ve a http://localhost:3000 para ver la aplicación en acción.**



## Ejecución del proyecto
En este proyecto, puedes ejecutar los siguientes scripts:

    - npm start / yarn start: Ejecuta la aplicación en modo desarrollo.
    - npm run build / yarn build: Genera la aplicación optimizada para producción.


## Notas adicionales
    - Asegúrate de que tu backend Laravel esté ejecutándose correctamente antes de probar la conexión.
    - Si cambias el puerto o la URL del backend, actualiza el archivo .env para reflejar la nueva configuración.




## Esta aplicación esta hecha con React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
