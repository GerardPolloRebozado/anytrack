'use client'
import { SubmitHandler, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import styles from './page.module.css';
import { createUser } from '@/utils/fetch/users';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signupForm } from 'libs/types/src';
import { createUserSchema } from 'libs/joi/src';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Callout from '@/components/Callout/Callout';
import PasswordInput from '@/components/ui/passwordInput';

export default function RegisterPage() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const form = useForm<signupForm>({
    resolver: joiResolver(createUserSchema)
  });

  const onSubmit: SubmitHandler<signupForm> = async (data: signupForm) => {
    data.confirmPassword = undefined;
    const response = await createUser(data);
    if (response.status !== 201) {
      setError(await response.body.error);
    } else {
      router.push('/auth/signin');
    }
  }

  return (
    <div className='flex justify-center items-center h-dvh flex-col'>
      {error && <Callout type="error">{error}</Callout>}
      <h1 className='text-2xl font-semibold tracking-tight'>Register</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='w-80'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder='A cool name 🦄' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='Type your email ✉️' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <PasswordInput placeholder='Super secret password 🤫' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
                      <FormField
            control={form.control}
            name='confirmPassword'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm password</FormLabel>
                <FormControl>
                  <PasswordInput placeholder='Repeat the same password 🔒' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          <Button type='submit' className='w-full mt-1'>Login</Button>
        </form>
      </Form>
    </div>
  );
}
