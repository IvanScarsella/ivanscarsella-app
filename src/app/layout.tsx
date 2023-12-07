import { Inter } from 'next/font/google'
import './globals.css'
import backgroundImage from '../../public/fondo.png'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} relative bg-gradient-to-br from-bordo to-black`}
      >
        {/* Contenido principal */}
        <div className='relative z-10'>{children}</div>

        {/* Fondo con movimiento */}
        <div className='animate-float-container pointer-events-none absolute inset-0'>
          <Image
            src={backgroundImage}
            alt='Fondo con movimiento'
            className='animate-float h-full w-full opacity-10'
            width={100}
            height={100}
          />
        </div>
        <div className='animate-float-container-reverse pointer-events-none absolute inset-0'>
          <Image
            src={backgroundImage}
            alt='Fondo con movimiento'
            className='animate-float-reverse h-full w-full opacity-10'
            width={100}
            height={100}
          />
        </div>

        {/* Resto de tu contenido si es necesario */}
      </body>
    </html>
  )
}
