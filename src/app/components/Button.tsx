// "use client"

import { Button } from '@mui/material'
import { red } from '@mui/material/colors'
import Link from 'next/link'

const page = ({ text, href }: any) => {
  return (
    <>
      <Link target='_blank' href={href}>
        <Button
          variant='contained'
          color='primary'
          style={{ backgroundColor: red[900] }}
          className='ease-500 transition-all hover:scale-125 hover:shadow-2xl'
        >
          {text}
        </Button>
      </Link>
    </>
  )
}

export default page
