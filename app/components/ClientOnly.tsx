'use client'
import React, { useEffect, useState } from 'react'
// este componente solo nos protege del error que se tiene en nextjs de que si actualizamos muy rapido la pagina
//esta no tiene nada que renderizar y no puede hidratarse, por eso lo manejamos de esta manera
interface ClientOnlyProps{
    children:React.ReactNode
}
const ClientOnly:React.FC<ClientOnlyProps> = ({children}) => {
    const [hasMounted, setHasMounted] = useState(false)
    useEffect(()=>{
        setHasMounted(true)
    },[])

    if(!hasMounted){
        return null;
    }
    return (
    
        <>
        {children}
        </>
  )
}

export default ClientOnly