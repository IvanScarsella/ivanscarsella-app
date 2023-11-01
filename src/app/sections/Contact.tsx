'use client';

import { Button, Callout, TextField, Text } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from 'react-hook-form';
// import axios from 'axios';
import "easymde/dist/easymde.min.css";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod'
import { createIssueSchema } from '@/app/validationSchemas';
import { z } from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage';
import Spinner from '@/app/components/Spinner';
// import validator from 'validator';
// import isEmail from 'validator/lib/isEmail';

type IssueForm = z.infer<typeof createIssueSchema>

const Contact = () => {
  const router = useRouter();
  const { register, control, handleSubmit, formState: { errors } } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema)
  });
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = handleSubmit(async (data) => {
    // try {
    //   setIsSubmitting(true)
    //   await axios.post('/api/issues', data);
    //   router.push('/issues');
    // } catch (error) {
    //   setIsSubmitting(false)
    //   setError('An unexpected error ocurred.')
    // }
  })

  return (
    <div className='max-w-xl'>
      {error && <Callout.Root color='red' className='mb-5'>
        <Callout.Text>{error}</Callout.Text>
      </Callout.Root>}
      <form
        className='space-y-3'
        onSubmit={onSubmit}>
        <TextField.Root>
          <h2 className="font-palanquin text-xl capitalize font-bold lg:max-w-lg ">Deje su consulta</h2>
          <TextField.Input placeholder='Asunto' {...register('title')} />
        </TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <TextField.Input placeholder="Ingrese su email" />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
        <Controller
          name="description"
          control={control}
          render={({ field }) => <SimpleMDE placeholder='Mensaje' {...field} />}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button disabled={isSubmitting}>Enviar{isSubmitting && <Spinner />}</Button>
      </form>
    </div>
  )
}

export default Contact