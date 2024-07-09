import { useState } from 'react';
import Callout from '../Callout/Callout';
import styles from './Input.module.css';
import { Eye, EyeOff } from 'lucide-react';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

export default function Input({ label, register, name, type, placeholder = "", error, className }: {
  label: string;
  register: any;
  name: string;
  type: string;
  placeholder: string;
  error: any;
  className?: string;
}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={className}>
      <label htmlFor={name} className={styles.label}>
        {label + ":"}
      </label>
      <div className={styles.inputEyeContainer}>
        <input id={name} {...register(name)} type={type === "password" && showPassword ? "text" : type} placeholder={placeholder} className={styles.input}
        /> {type === "password" && showPassword && <PrimaryButton onClick={() => setShowPassword(false)}><Eye className={styles.eye} color='black' /></PrimaryButton>}
        {type === "password" && !showPassword && <PrimaryButton onClick={() => setShowPassword(true)}><EyeOff className={styles.eye} color='black' /></PrimaryButton>}
      </div>
      {error && <Callout type="error">{error.message}</Callout>}
    </div>
  );
}

