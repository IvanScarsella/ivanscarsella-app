'use client'

import { copyrightSign } from '../../../assets/icons'
import footerLogo from '../../../assets/images/ivanlogo_chico.png'
import Image from 'next/image'
import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from '../../../assets/icons'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const footerLinks = [
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
]

const Footer = () => {
  const router = useRouter()

  return (
    <footer className='mt-4 w-full bg-black text-gray-300'>
      <div className='flex flex-1 flex-row items-start justify-around p-4 max-lg:flex-col'>
        <div className='ml-4 flex flex-col items-start'>
          {/* <a href="/">
            <Image
              src={footerLogo}
              alt='footerLogo'
              width={150}
              height={46}
            />
          </a> */}
          <div className='flex flex-row'>
            <p className='font-montserrat text-white-400 m-6 text-base leading-7 sm:max-w-sm'>
              Redes sociales:
            </p>
            <div className='flex items-center gap-5 '>
              {socialMedia.map((icon) => (
                <Link target='_blank' href={icon.link}>
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
        <div className='flex flex-1 flex-wrap justify-around gap-20 lg:gap-10'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4
                className='font-montserrat mb-6 cursor-pointer rounded-md px-3 py-2 text-2xl font-medium leading-normal text-white hover:bg-gray-700 '
                onClick={() => router.push(section.link)}
              >
                {section.title}
              </h4>
              {/* <ul>
                {section.links.map((link) => (
                  <li className='mt-3 text-white-400 font-montserrat text-base leading-normal cursor-pointer hover:bg-red-500 hover:text-white rounded-md px-3 py-2 font-medium'
                    key={link.name}>
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul> */}
            </div>
          ))}
        </div>
      </div>

      {/* <div className='flex-justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat'>
          <Image
            src={copyrightSign}
            alt="copy right sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
      </div> */}
    </footer>
  )
}

export default Footer
