'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { facebook, instagram } from '../../../assets/icons'
import linkedin from '../../../assets/icons/linkedin.png'
import github from '../../../assets/icons/github.png'
import footerLogo from '../../../assets/images/ivanlogo_chico.png'

const footerLinks = [
  {
    title: 'Inicio',
    link: '/',
  },
  {
    title: 'Música',
    link: '/music',
  },
  {
    title: 'Programación',
    link: '/programming',
  },
  {
    title: 'Contacto',
    link: '/contact',
  },
]

const socialMedia = [
  {
    src: facebook,
    alt: 'facebook logo',
    link: 'https://www.facebook.com/IvanScarsella/',
  },
  {
    src: instagram,
    alt: 'instagram logo',
    link: 'https://www.instagram.com/ivan.scarsella/',
  },
  {
    src: linkedin,
    alt: 'linkedin logo',
    link: 'https://www.linkedin.com/in/iv%C3%A1n-scarsella-126a18261/',
  },
  {
    src: github,
    alt: 'github logo',
    link: 'https://github.com/IvanScarsella',
  },
]

const Footer = () => {
  const router = useRouter()

  return (
    <footer className='mt-4 bg-black text-gray-300'>
      <div className='mx-auto flex max-w-screen-xl flex-col items-start justify-around p-4 lg:px-8'>
        <div className='mx-auto mb-8  flex flex-col items-start lg:mb-0'>
          {/* <Link href='/'>
            <div>
              <Image src={footerLogo} alt='footerLogo' width={150} height={46} />
            </div>
          </Link> */}
          <div className='mt-6 flex flex-row items-center gap-5 lg:mt-0 '>
            <p className='font-montserrat text-white-400 text-base leading-7 lg:max-w-sm'>
              Redes sociales:
            </p>
            <div className='flex items-center gap-5 '>
              {socialMedia.map((icon, index) => (
                <Link key={index} target='_blank' href={icon.link}>
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-white hover:bg-gray-700 hover:text-white'>
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      width={24}
                      height={24}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className='mx-auto mt-4 flex flex-wrap max-lg:w-full max-lg:flex-col max-lg:items-center lg:gap-20'>
          {footerLinks.map((section) => (
            <div key={section.title} className='flex flex-col'>
              <h4
                className='font-montserrat mb-4 cursor-pointer rounded-md px-3 py-2 text-2xl font-medium leading-normal text-white hover:bg-gray-700 max-sm:text-base '
                onClick={() => router.push(section.link)}
              >
                {section.title}
              </h4>
            </div>
          ))}
        </div>
      </div>

      <div className='text-white-400'>
        <div className='font-montserrat mx-auto flex max-w-screen-xl flex-col items-center justify-between text-sm'>
          <p>&copy; 2024 Iván Scarsella. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
