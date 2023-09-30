# Clon de Airbnb de Pila Completa con Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth 2023


Características:

- Diseño con Tailwind
- Animaciones y efectos de Tailwind
- Totalmente receptivo
- Autenticación de credenciales
- Autenticación de Google
- Autenticación de Github
- Subida de imágenes utilizando Cloudinary CDN
- Validación y manejo de formularios del cliente utilizando react-hook-form
- Manejo de errores del servidor utilizando react-toast
- Calendarios con react-date-range
- Estado de carga de la página
- Estado vacío de la página
- Sistema de Reserva / Reservación
- Cancelación de reserva de invitados
- Cancelación de reserva de propietarios
- Creación y eliminación de propiedades
- Cálculo de precios
- Algoritmo de búsqueda avanzada por categoría, rango de fechas, ubicación en el mapa, número de invitados, habitaciones y baños
  - Por ejemplo, filtraremos las propiedades que tienen una reserva en el rango de fechas deseado para viajar
- Sistema de Favoritos
- Filtros de URL compartibles
  - Supongamos que seleccionas una categoría, ubicación y rango de fechas, podrás compartir una URL con un amigo que no ha iniciado sesión en otro navegador y verá los mismos resultados
- Cómo escribir rutas POST y DELETE en manejadores de rutas (app/api)
- Cómo obtener datos en componentes react del servidor accediendo directamente a la base de datos (¡SIN API! ¡como por arte de magia!)
- Cómo manejar archivos como error.tsx y loading.tsx, que son nuevos archivos de plantilla de Next 13 para unificar la carga y el manejo de errores
- ¡Cómo manejar las relaciones entre componentes del servidor y secundarios!

### Requisitos Previos

**Node versión 14.x**


### Install packages

```shell
npm i
```

### Setup .env file


```js
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_SECRET=
```

### Setup Prisma

```shell
npx prisma db push

```

### Iniciar app

```shell
npm run dev
```

## Comandos disponibles

 `npm run [comando]`

| comando        | descripcion                                           |
| :-------------- | :---------------------------------------             |
| `dev`           | inicia una instancia del desarrollo de la aplicacion |