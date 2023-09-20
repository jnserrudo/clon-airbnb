import { Nunito } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from './components/Navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import Modal from './components/Modals/Modal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clon',
}

const font= Nunito({
  subsets:["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal title='Holaa' isOpen />
          <Navbar/>
        </ClientOnly>
        
        {children}
        </body>
      
    </html>
  )
}
