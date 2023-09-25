'use client';
import Image from 'next/image'
import React from 'react';
interface AvatarProps{
  src?:string|null|undefined
}

export const Avatar :React.FC<AvatarProps> = ({src}) => {
  return (
    <Image 
        className='rounded-full'
        height="30"
        width="30"
        alt='Avatar'
        // aca no utilizo el nullish coalesing && porque podria recibir un valor
        // false por ejemplo y debemos asegurarnos un valor de tipo string, por el tipo que se tiene definido 
        //en Image con src
        //ESTO LO HACEMOS PORQUE LOS LOGIN SOCIALES COMO GITHUB, OBTENEMOS LA URL DE LA IMAGEN, ASI LA PODEMOS USAR
        //HAY QUE RECORDAR QUE EN NEXT PARA EL TEMA DE LAS IMAGENES, DEBEMOS PONER EL DOMINIO DE LA IMAGEN 
        //EN EL ARCHIVO NEXT.CONFIG.JS
        src= {src?src:"/images/placeholder.jpg"} 
    />
  )
}
