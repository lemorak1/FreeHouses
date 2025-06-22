# FreeHouses

Este repositorio contiene una aplicación React creada con Vite.

## Versión recomendada de Node.js

Esta aplicación se desarrolló con **Node.js 18**. Se recomienda utilizar la
versión 18 o superior.

Puedes descargar Node desde [nodejs.org](https://nodejs.org/) o instalarlo con
[nvm](https://github.com/nvm-sh/nvm):

```bash
nvm install 18
```

## Instalación

1. Navegar a la carpeta `frontend`:
   ```bash
   cd frontend
   ```
2. Instalar las dependencias:
   ```bash
   npm install
   ```

## Desarrollo

Para iniciar el servidor de desarrollo:
```bash
npm run dev
```

Abre el navegador en la URL mostrada en la terminal para ver la aplicación.

## Estructura del proyecto

- `src/components`: componentes reutilizables como `PropertyCard`, `PropertyList`, `PropertyForm` y `Layout`.
- `src/App.jsx`: punto de entrada que usa `Layout`.

## Construcción para producción

```bash
npm run build
```
Esto generará los archivos en la carpeta `dist`.
