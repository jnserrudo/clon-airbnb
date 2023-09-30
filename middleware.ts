export { default } from "next-auth/middleware"

//Este archivo de configuración está especificando que ciertas rutas, 
//como "/trips", "/reservations", "/properties" y "/favorites", deben estar protegidas por el
// middleware de autenticación proporcionado por NextAuth.js.

export const config = { 
  matcher: [
    "/trips",
    "/reservations",
    "/properties",
    "/favorites"
  ]
};