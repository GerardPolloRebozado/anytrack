'use client'
import Input from '@/components/Input/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';
import styles from './page.module.css';
import { loginUser } from '@/utils/fetch/users';
import { useState } from 'react';
import Callout from '@/components/Callout/Callout';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { loginUserSchema } from 'libs/joi/src';
import { loginForm } from 'libs/types/src';

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const { register, handleSubmit, formState: { errors }, } = useForm<loginForm>({
    resolver: joiResolver(loginUserSchema)
  });
  const onSubmit: SubmitHandler<loginForm> = async (data: loginForm) => {
    const response = await loginUser(data);
    if (response.status !== 200) {
      setError(await response.body.error);
    } else {
      Cookies.set('token', response.body.token, { expires: 30 });
      router.push('/');
    }
  }

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {error && <Callout type="error">{error}</Callout>}
        <Input
          label="Email"
          register={register}
          required
          name="email"
          type="email"
          placeholder="Type your email ✉️"
          error={errors.email}
        />
        <Input
          label="Password"
          register={register}
          required
          name="password"
          type="password"
          placeholder="Type you secret password 🔒"
          error={errors.password}
        />
        <PrimaryButton type="submit">Login</PrimaryButton>
      </form>
    </div>
  );
}
