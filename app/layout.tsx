import { Nunito } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from './components/Navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import Modal from './components/Modals/Modal'
import RegisterModal from './components/Modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from './components/Modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'
import RentModal from './components/Modals/RentModal'
import SearchModal from './components/Modals/SearchModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clon',
}

const font= Nunito({
  subsets:["latin"]
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentUser=await getCurrentUser()
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider/>
          <SearchModal/>
          <RentModal/>
          <LoginModal/>
          <RegisterModal  />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className='pb-20 pt-28' >
          {children}
        </div>
        
        </body>
      
    </html>
  )
}
