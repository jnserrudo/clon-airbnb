import {User} from "@prisma/client"

import { Container } from "../Container"
import { Logo } from "./Logo"
import  Search  from "./Search"
import { UserMenu } from "./UserMenu"
import { SafeUser } from "@/app/types"
import Categories from "./Categories"
//componente de la barra de navegacion
interface NavbarProps{
  currentUser?:SafeUser|null; 
}

export const Navbar: React.FC<NavbarProps> = ({currentUser}) => {
  console.log(currentUser)
    return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="
          flex
          flex-now
          items-center
          justify-between
          gap-3
          md:gap-0
          ">
          <Logo></Logo>
          <Search></Search>
          <UserMenu  currentUser={currentUser} ></UserMenu>
          </div>
        </Container>
      </div>
      <Categories/>
      </div>
  )
}
