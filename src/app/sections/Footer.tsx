'use client'

import React from 'react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
// import { facebook, instagram } from '../../../assets/icons'
import facebook from '../../../assets/icons/facebook.png'
import github from '../../../assets/icons/github.png'
import instagram from '../../../assets/icons/instagram.png'
import linkedin from '../../../assets/icons/linkedin.png'
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
    link: 'https://www.linkedin.com/in/ivan-scarsella/',
  },
  {
    src: github,
    alt: 'github logo',
    link: 'https://github.com/IvanScarsella',
  },
]

const Footer = () => {
  const router = useRouter()
  console.log(usePathname())
  return (
    <footer className={`w-full h-[206px] flex flex-col items-center ${usePathname() === '/music' ? 'bg-[#0F1317]' : null}`}>
      <div className='flex flex-row gap-[60px] mt-[26px]'>
        {socialMedia.map((icon, index) => (
          <Link key={index} target='_blank' href={icon.link}>
            <div className='flex h-[50px] w-[50px] items-center justify-center rounded-full hover:bg-gray-400 hover:text-white dark:hover:bg-gray-[#333333] hover:p-2 ease-in-out '>
              <Image
                src={icon.src}
                alt={icon.alt}
                width={50}
                height={50}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className='flex flex-row gap-56 mt-7'>
        <p className={`font-megrim font-medium text-[32px] cursor-pointer px-2 rounded-xl hover:bg-[#333333] ${usePathname() === '/music' ? 'scale-110' : null}`} onClick={() => router.push('/music')}>Música</p>
        <p className={`font-mina font-medium text-[28px] cursor-pointer px-2 rounded-xl hover:bg-[#333333] ${usePathname() === '/programming' ? 'scale-110' : null}`} onClick={() => router.push('/programming')}>Programación</p>
      </div>
      <div className='text-white-400 mt-5 mb-1'>
        <div className='font-montserrat z-10 mx-auto flex max-w-screen-xl flex-col items-center justify-between  text-sm'>
          <p className='font-extralight text-xl text-center'>&copy; 2024 Iván Scarsella. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>

    // <footer className='relative z-10 mt-4 bg-white text-black dark:bg-black dark:text-gray-300'>
    //   <div className='mx-auto flex max-w-screen-xl flex-col items-start justify-around p-4 lg:px-8 '>
    //     <div className='mx-auto mb-8  flex flex-col items-start lg:mb-0'>
    //      {/* <Link href='/'>
    //        <div>
    //          <Image src={footerLogo} alt='footerLogo' width={150} height={46} />
    //        </div>
    //      </Link> */}
    //       <div className='mt-6 flex flex-row items-center gap-5 lg:mt-0 '>
    //         <p className='font-montserrat text-white-400 z-10 text-base leading-7  lg:max-w-sm'>
    //           Redes sociales:
    //         </p>
    //         <div className='z-10 flex items-center  gap-5'>
    //           {socialMedia.map((icon, index) => (
    //             <Link key={index} target='_blank' href={icon.link}>
    //               <div className='flex h-12 w-12 items-center justify-center rounded-full bg-white hover:bg-gray-400 hover:text-white dark:hover:bg-gray-700 '>
    //                 <Image
    //                   src={icon.src}
    //                   alt={icon.alt}
    //                   width={24}
    //                   height={24}
    //                 />
    //               </div>
    //             </Link>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //     <div className='mx-auto mt-4 flex flex-wrap max-lg:w-full max-lg:flex-col max-lg:items-center lg:gap-20'>
    //       {footerLinks.map((section) => (
    //         <div key={section.title} className='flex flex-col'>
    //           <h4
    //             className='font-montserrat z-10 mb-4 cursor-pointer rounded-md px-3 py-2 text-2xl font-medium leading-normal text-black hover:bg-gray-400 dark:text-white dark:hover:bg-gray-700  max-sm:text-base'
    //             onClick={() => router.push(section.link)}
    //           >
    //             {section.title}
    //           </h4>
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    //   <div className='text-white-400'>
    //     <div className='font-montserrat z-10 mx-auto flex max-w-screen-xl flex-col items-center justify-between  text-sm'>
    //       <p>&copy; 2024 Iván Scarsella. Todos los derechos reservados.</p>
    //     </div>
    //   </div>
    // </footer>
  )
}

export default Footer
