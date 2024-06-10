'use client'
import Input from '@/components/Input/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';
import styles from './page.module.css';
import { createUser } from '@/utils/fetch/users';
import { useState } from 'react';
import Callout from '@/components/Callout/Callout';
import { useRouter } from 'next/navigation';
import { signupForm } from 'libs/types/src';
import { createUserSchema } from 'libs/joi/src';

export default function RegisterPage() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const { register, handleSubmit, formState: { errors }, } = useForm<signupForm>({
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
    <div className={styles.container}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {error && <Callout type="error">{error}</Callout>}
        <Input
          label="Name"
          register={register}
          required
          name="name"
          type="text"
          placeholder="A cool name 🦄"
          error={errors.name}
        />
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
          placeholder="Super secret password 🤫"
          error={errors.password}
        />
        <Input
          label="Confirm Password"
          register={register}
          required
          name="confirmPassword"
          type="password"
          placeholder="Repeat the same password 🔒"
          error={errors.confirmPassword}
        />
        <PrimaryButton type="submit">Register</PrimaryButton>
      </form>
    </div>
  );
}
