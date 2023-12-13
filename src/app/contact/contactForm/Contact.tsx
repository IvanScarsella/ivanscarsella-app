'use client'

import { Callout, TextField, Text } from '@radix-ui/themes';
import Button from '../../components/Button';
import SimpleMDE from 'react-simplemde-editor';
import { useForm, Controller } from 'react-hook-form';
import 'easymde/dist/easymde.min.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/validationSchemas';
import { z } from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage';
import Spinner from '@/app/components/Spinner';
import axios from 'axios';

type IssueForm = z.infer<typeof createIssueSchema>;

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: '',
    email: '',
    message: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const router = useRouter();

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/sendEmail', {
        formData,
      });
      if (response.data) {
        alert('Mail enviado correctamente');
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }

    console.log('Formulario enviado:', formData);
  };

  const isFormValid = () => {
    if (formData.subject && formData.email && formData.message) return true;
  };

  return (
    <div className='max-w-screen-xl mx-auto p-4 lg:px-8 flex flex-col items-center'>
      <div className='info-text ease-500 m-4 max-h-full rounded-3xl border-2 border-red-700 bg-gradient-to-r from-black to-red-800 p-4 shadow-lg transition-all hover:border-red-500 hover:shadow-2xl w-full'>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <div className='flex flex-col items-center m-2'>
            <label htmlFor='subject' className='text-slate-100'>
              Nombre:
            </label>
            <input
              type='text'
              id='subject'
              name='subject'
              value={formData.subject}
              onChange={handleChange}
              className='w-full p-2 rounded min-w-[450px] max-md:min-w-[250px]'
            />
          </div>
          <div className='flex flex-col items-center m-2'>
            <label htmlFor='email' className='text-slate-100'>
              Email:
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full p-2 rounded'
            />
          </div>

          <div className='flex flex-col items-center m-2'>
            <label htmlFor='message' className='text-slate-100'>
              Motivo de la consulta:
            </label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              className='w-full h-[200px] p-2 rounded'
            />
          </div>
          <button
            disabled={isSubmitting}
            className='ease-500 transition-all hover:scale-125 hover:shadow-2xl bg-red-700 text-white p-2 rounded'
            onClick={handleSubmit}
          >
            Enviar{isSubmitting && <Spinner />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
