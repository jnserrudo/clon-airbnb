import { Listing, Reservation, User } from "@prisma/client";

//DE ALGUNA MANERA  CON ESTO ASEGURAMOS EL TIPO DE LAS FECHAS EN NUESTRAS TABLAS, PORQUE SINO NOS 
//APARECEN ALGUNOS WARNING EN CONSOLA

/**
 * En esta sección, se define un nuevo tipo llamado SafeListing. Este tipo es una versión segura del tipo
 * Listing original, con una modificación: la propiedad createdAt se cambia de su tipo original a string.
 * Esto se hace utilizando la función Omit, que elimina la propiedad createdAt del tipo original y 
 * luego se agrega nuevamente con el tipo string.
 */
export type SafeListing = Omit<Listing, "createdAt"> & {
  createdAt: string;
};

/**
 * Similarmente, aquí se define el tipo SafeReservation. Se toma el tipo Reservation original y se
 * eliminan varias propiedades ("createdAt", "startDate", "endDate", "listing") utilizando Omit. 
 * Luego, se agregan nuevamente estas propiedades con tipos string, y la propiedad "listing" se 
 * reemplaza por el tipo SafeListing.
 */
export type SafeReservation = Omit<
  Reservation, 
  "createdAt" | "startDate" | "endDate" | "listing"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  listing: SafeListing;
};

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
/**
 * Finalmente, se define el tipo SafeUser. Al igual que en los casos anteriores, se eliminan las
 * propiedades "createdAt", "updatedAt", y "emailVerified" del tipo User original. Luego, se agregan
 * nuevamente con tipos string para "createdAt" y "updatedAt", y con el tipo string | null para "emailVerified".

Estos tipos seguros (SafeListing, SafeReservation, SafeUser) son útiles cuando queremos asegurarnos de que 
ciertas propiedades en los objetos coincidan con el tipo string, por ejemplo, al trabajar con fechas o valores 
específicos. Estos tipos permiten tener más control sobre la estructura de los objetos y evitar 
errores de tipo en el código TypeScript.
 */