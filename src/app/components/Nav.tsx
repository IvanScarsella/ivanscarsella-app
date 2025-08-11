'use client'

import { Disclosure, Transition } from '@headlessui/react'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useContext, Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '..\..\..\assets\images\ivanlogo_chico.png'
// import ThemeContext from '@\app\components\context\themeContext'
import ThemeContext from 'context\themeContext'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'

const navigation = [
  { name: 'Inicio', href: '/', current: true },
  { name: 'Música', href: '/music', current: false },
  { name: 'Programación', href: '/programming', current: false },
  { name: 'Contacto', href: '/contact', current: false },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  const router = useRouter()
  const pathname = usePathname()
  const [enabled, setEnabled] = useState(false)
  const { darkTheme, setDarkTheme } = useContext(ThemeContext)

  return (
    <Disclosure
      as='nav'
      className='fixed top-0 z-50 w-full  bg-slate-100 dark:bg-black'
    >
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
                <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  <svg
                    className={`${open ? 'hidden' : 'block'} h-6 w-6`}
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16m-7 6h7'
                    />
                  </svg>
                  <svg
                    className={`${open ? 'block' : 'hidden'} h-6 w-6`}
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-center justify-center '>
                <div className='flex flex-shrink-0 items-center '>
                  {/* <Image src={logo} alt='logo' width={100} height={100} /> */}
                </div>
                <div className='max-container flex items-center justify-between max-md:hidden'>
                  <div className='font-palanquin flex space-x-20 tracking-wide '>
                    {navigation.map((item) => (
                      // <Link key={item.name} href={item.href}>
                      (<a
                        className={`${pathname === item.href
                            ? 'bg-red-700 text-white'
                            : 'text-black hover:bg-gray-700 hover:text-white dark:text-gray-300'
                          } cursor-pointer rounded-md px-3 py-2 text-lg font-medium `}
                        aria-current={item.current ? 'page' : undefined}
                        onClick={() => router.push(item.href)}
                        key={item.name}
                      >
                        {item.name}
                      </a>)
                      // </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <a className='ml-2 hover:scale-150'>
                  {darkTheme ? (
                    <MdOutlineLightMode
                      className='cursor-pointer  rounded-full  hover:bg-slate-900'
                      title='Activar tema claro'
                      onClick={() => {
                        setDarkTheme(false)
                        localStorage.removeItem('hotel-theme')
                      }}
                    />
                  ) : (
                    <MdDarkMode
                      className='cursor-pointer  rounded-full   hover:bg-slate-100'
                      title='Activar tema oscuro'
                      onClick={() => {
                        setDarkTheme(true)
                        localStorage.setItem('hotel-theme', 'true')
                      }}
                    />
                  )}
                </a>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='md:hidden '>
            <Transition
              show={open}
              enter='duration-200 ease-out'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='duration-100 ease-in'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <div className='space-y-1 px-2 pb-3 pt-2 '>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      pathname === item.href
                        ? 'bg-red-700 text-white'
                        : 'text-black hover:bg-gray-700 hover:text-white dark:text-gray-300',
                      'block rounded-md px-3 py-2 text-center text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                    onClick={() => router.push(item.href)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Transition>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
