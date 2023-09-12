'use client';
import { Logo } from "./Navbar/Logo";

//lo pone como este contenedor es usado para ser importado, como un componente cliente

interface ContainerProps{
    children:React.ReactNode;
}



export const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <div className="
    max-w-[2520px]
    mx-auto
    xl:px-20
    md:px-10
    sm:px-2
    px-4
    ">
      {children}
    </div>
  )
}
