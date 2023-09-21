'use client';
//creamos este 'proveedor' mas que nada porque el hot toast es un componente que usa useeffect, y como lo usamos en el layout, no queremos
//usar el use client a nivel layout, asi que creamos este proveedor para tener el use client lo mas bajo posible 
import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return ( 
    <Toaster />
   );
}
 
export default ToasterProvider;