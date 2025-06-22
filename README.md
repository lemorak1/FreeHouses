# FreeHouses

Este repositorio contiene una aplicación React creada con Vite.

## Instalación

1. Navegar a la carpeta `frontend`:
   ```bash
   cd frontend
   ```
2. Instalar las dependencias:
   ```bash
   npm install
   ```

Se recomienda utilizar **Node.js 20** o superior. Puedes verificar tu versión con:
```bash
node --version
```

## Desarrollo

Para iniciar el servidor de desarrollo:
```bash
npm run dev
```

Abre el navegador en la URL mostrada en la terminal para ver la aplicación.

## Estructura del proyecto

- `src/components`: componentes reutilizables (`PropertyCard`, `PropertyList`, `PropertyForm` y `Layout`).
- `src/App.jsx`: punto de entrada que usa `Layout`.

## Construcción para producción

```bash
npm run build
```
Esto generará los archivos en la carpeta `dist`.
