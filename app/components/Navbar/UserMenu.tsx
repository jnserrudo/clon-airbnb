'use client';

import React from 'react'


import {AiOutlineMenu} from "react-icons/ai";
import { Avatar } from "../Avatar";
import { useCallback, useEffect, useState } from "react";
import { MenuItem } from "./MenuItem";
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';

import { User } from '@prisma/client';
import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/types';
import useRentModal from '@/app/hooks/useRentModal';

interface UserMenuProps{
  currentUser?:SafeUser|null
}


export const UserMenu:React.FC<UserMenuProps> = ({currentUser}) => {
  const registerModal=useRegisterModal();
  const loginModal=useLoginModal();

  const rentModal=useRentModal();

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen= useCallback(()=>{
    setIsOpen((value)=>!value);
  },[])

  //con esto hacemos que este logeado en caso que quiera abrir la ventana que pone en alquiler su auto
  const onRent=useCallback(()=>{
    if(!currentUser){
      return loginModal.onOpen()
    }
    rentModal.onOpen();

  },[currentUser,loginModal,rentModal])

  return (
    <div className="relative"    >
      <div className="flex flex-row items-center gap-3">
        <div
        onClick={onRent}
          className="
            hidden
            md:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:bg-neutral-100
            transition 
            cursor-pointer
          "
        >
          Agrega tu Auto!
        </div>
        <div
        onClick={toggleOpen} 
        className="
          p-4
          md:py-1
          md:px-2
          border-[1px]
          border-neutral-200
          flex
          flex-row
          items-center
          gap-3
          rounded-full
          cursor-pointer
          hover:shadow-md
          transition

        "
        >
          <AiOutlineMenu/>
          <div className="hidden md:block">
            <Avatar  src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen&&(
        <div
        className="
          absolute
          rounded-xl
          shadow-md
          w-[40vw]
          md:w-3/4
          bg-white
          overflow-hidden
          right-0
          top-12
          text-sm
        "
        >
          <div
            className="flex flex-col cursor-pointer"
          > 
{/* para el menu */}
          {currentUser?(
// si tenemos un usuario actual( si estamos logeados, mostraremos cosas distintas, como las que son propias del usuario)
<>
    <MenuItem
      onClick={()=>{}}
      label="Mis viajes"
    />
    <MenuItem
      onClick={()=>{}}
      label="Mis favoritos"
    />
    <MenuItem
      onClick={()=>{}}
      label="Mis reservaciones"
    />
    <MenuItem
    onClick={()=>{}}
    label="Mis propiedades"
/>
<MenuItem
  onClick={rentModal.onOpen}
  label="Alquilar mi auto "
/>
<hr/>
{/* esta funcion signout es propia de nextAuth, asi que la usamos para cerrar la sesion */}
<MenuItem
  onClick={signOut}
  label="Cerrar Sesion"
/>
</>
          ):(

<>
<MenuItem
  onClick={loginModal.onOpen}
  label="Login"
/>
<MenuItem
  onClick={registerModal.onOpen}
  label="Sign Up"
/>
</>
          )}

          
          </div>
        </div>
      )}
    </div>
  )
}
