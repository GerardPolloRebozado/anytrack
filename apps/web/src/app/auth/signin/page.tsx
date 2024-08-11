'use client'
import { SubmitHandler, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { loginUser } from '@/utils/fetch/users';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { loginUserSchema } from 'libs/joi/src';
import { loginForm } from 'libs/types/src';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import PasswordInput from '@/components/ui/passwordInput';
import { toast } from '@/components/ui/use-toast';

export default function LoginPage() {
  const router = useRouter();

  const form = useForm<loginForm>({
    resolver: joiResolver(loginUserSchema)
  });
  const onSubmit: SubmitHandler<loginForm> = async (data: loginForm) => {
    const response = await loginUser(data);
    if (response.status !== 200) {
      toast({ title: 'Error', description: JSON.stringify(response.body.error), variant: 'destructive' });
    } else {
      Cookies.set('token', response.body.token, { expires: 30 });
      Cookies.set('userId', response.body.userId, { expires: 30 });
      router.push('/');
    }
  }

  return (
    <div className='flex justify-center items-center h-dvh flex-col'>
      <h1 className='text-2xl font-semibold tracking-tight'>Login</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='w-80'>
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
                  <PasswordInput placeholder='Type you password 🔒' {...field} />
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
