import { Inter } from 'next/font/google';
import './globals.css'; // Puedes reemplazar esto con el enfoque que uses para cargar tus estilos globales
import icon from './icon.ico';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
      <body className={`${inter.className} relative bg-gradient-to-br from-bordo to-black`}>
        <div className='content-container relative z-10'>{children}</div>
        <div className='fixed top-0 left-0 w-full h-full z-[-1] bg-cover bg-center bg-no-repeat invert opacity-20' style={{ backgroundImage: 'url("https://64.media.tumblr.com/c065bd8029c005960f465d1478e0b9f0/tumblr_nhep76DdW41rjledmo1_500.gifv")' }}></div>
      </body>
    </html>
  );
}
