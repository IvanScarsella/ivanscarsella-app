'use client'

import React, { useEffect, useState } from 'react'
import ThemeContext from '@/app/components/context/themeContext'

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const themeFromStorage =
    typeof localStorage !== 'undefined' && localStorage.getItem('hotel-theme')
      ? JSON.parse(localStorage.getItem('hotel-theme')!)
      : true

  const [darkTheme, setDarkTheme] = useState<boolean>(themeFromStorage)
  const [renderComponent, setRenderComponent] = useState(false)

  useEffect(() => {
    setRenderComponent(true)
  }, [])

  if (!renderComponent) return <></>

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <div className={`${darkTheme ? 'dark' : ''} min-h-screen`}>
        <div className='text-[#1E1E1E] dark:bg-black dark:text-white'>
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
