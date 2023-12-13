'use client'

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { facebook, instagram } from '../../../assets/icons';
import footerLogo from '../../../assets/images/ivanlogo_chico.png';

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
];

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
];

const Footer = () => {
  const router = useRouter();

  return (
    <footer className='bg-black text-gray-300'>
      <div className='max-w-screen-xl mx-auto p-4 lg:px-8 flex flex-col lg:flex-row items-start justify-around items-center'>
        <div className='flex flex-col items-start mb-8 lg:mb-0'>
          {/* <Link href='/'>
            <div>
              <Image src={footerLogo} alt='footerLogo' width={150} height={46} />
            </div>
          </Link> */}
          <div className='flex flex-row items-center gap-5 mt-6 lg:mt-0'>
            <p className='font-montserrat text-white-400 text-base leading-7 lg:max-w-sm'>
              Redes sociales:
            </p>
            <div className='flex items-center gap-5 '>
              {socialMedia.map((icon, index) => (
                <Link key={index} target='_blank' href={icon.link}>
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-white hover:bg-gray-700 hover:text-white'>
                    <Image src={icon.src} alt={icon.alt} width={24} height={24} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className='flex flex-wrap gap-6 lg:gap-20 max-md:flex-col max-md:items-center max-md:w-full'>
          {footerLinks.map((section) => (
            <div key={section.title} className='flex flex-col'>
              <h4
                className='font-montserrat mb-4 cursor-pointer rounded-md px-3 py-2 text-2xl font-medium leading-normal text-white hover:bg-gray-700 '
                onClick={() => router.push(section.link)}
              >
                {section.title}
              </h4>
            </div>
          ))}
        </div>
      </div>

      <div className='text-white-400 mt-8'>
        <div className='max-w-screen-xl mx-auto flex justify-between items-center font-montserrat'>
          <p>&copy; 2023 Iván Scarsella. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
