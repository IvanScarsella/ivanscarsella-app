'use client'

import { Callout, TextField, Text } from '@radix-ui/themes'
import Button from '../../components/Button'
import SimpleMDE from 'react-simplemde-editor'
import { useForm, Controller } from 'react-hook-form'
import 'easymde/dist/easymde.min.css'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { createIssueSchema } from '@/app/validationSchemas'
import { z } from 'zod'
import ErrorMessage from '@/app/components/ErrorMessage'
import Spinner from '../../components/Spinner'
import axios from 'axios'

type IssueForm = z.infer<typeof createIssueSchema>

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: '',
    email: '',
    message: '',
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const router = useRouter()

  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      const response = await axios.post('/api/sendEmail', {
        formData,
      })
      if (response.data) {
        alert('Mail enviado correctamente')
        window.location.reload()
      }
    } catch (error) {
      console.log(error)
    }

    console.log('Formulario enviado:', formData)
  }

  const isFormValid = () => {
    if (formData.subject && formData.email && formData.message) return true
  }

  return (
    <div className='mx-auto flex max-w-screen-xl flex-col items-center p-4 lg:px-8'>
      <div className='info-text ease-500 m-4 max-h-full w-full rounded-3xl border-2 border-red-700 bg-gradient-to-r from-red-800 to-slate-100 p-4 shadow-lg transition-all hover:border-red-500 hover:shadow-2xl dark:from-black dark:to-red-800'>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col text-black dark:text-slate-100'
        >
          <div className='m-2 flex flex-col items-center'>
            <label htmlFor='subject' className=''>
              Nombre:
            </label>
            <input
              type='text'
              id='subject'
              name='subject'
              value={formData.subject}
              onChange={handleChange}
              className='w-full min-w-[450px] rounded p-2 text-black max-md:min-w-[250px]'
            />
          </div>
          <div className='m-2 flex flex-col items-center'>
            <label htmlFor='email' className=''>
              Email:
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full rounded p-2 text-black'
            />
          </div>

          <div className='m-2 flex flex-col items-center'>
            <label htmlFor='message' className=''>
              Motivo de la consulta:
            </label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              className='h-[200px] w-full rounded p-2 text-black'
            />
          </div>
          <button
            disabled={isSubmitting}
            className='ease-500 rounded bg-red-700 p-2 text-white transition-all hover:scale-125 hover:shadow-2xl'
            onClick={handleSubmit}
          >
            Enviar{isSubmitting && <Spinner />}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
