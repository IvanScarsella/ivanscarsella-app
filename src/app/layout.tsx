import { Inter } from 'next/font/google'
import './globals.css'
import icon from './icon.ico'
import ThemeProvider from '@/app/components/ThemeProvider/ThemeProvider'
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Iván Scarsella - Desarrollador Web - Músico',
  description: 'Desarrollador experto en la creación de sitios web personalizados. Músico con amplia experiencia en diversos estilos musicales. En esta página encontrarás todo mi trabajo en ambas ramas. Si necesitás cualquiera de mis servicios, no dudes en contactarme. '
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <title>Iván Scarsella</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
        />
        <link rel='shortcut icon' href={icon.src} />
        <style>{`
          .shine-effect:hover {
            box-shadow: 0 0 10px 5px #ff0000; /* Ajusta el color (en este caso, rojo) y el tamaño del brillo */
          }
        `}</style>
      </head>
      <body className={`${inter.className} relative`}>
        <ThemeProvider>
          <div className=''>
            {children}
          </div>
          {/* <div className='content-container  min-h-screen z-1 relative bg-gradient-to-tl from-red-700 to-slate-200 dark:bg-gradient-to-br dark:from-bordo dark:to-black'>
            {children}
          </div>
          <div
            className='fixed left-0 top-0 z-[0] h-full w-full bg-cover bg-center bg-no-repeat opacity-20 invert'
            style={{
              backgroundImage:
                'url("https://64.media.tumblr.com/c065bd8029c005960f465d1478e0b9f0/tumblr_nhep76DdW41rjledmo1_500.gifv")',
            }}
          ></div> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
