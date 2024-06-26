import Callout from '../Callout/Callout';
import styles from './Input.module.css';

export default function Input({ label, register, name, type, placeholder = "", error, className }: {
  label: string;
  register: any;
  name: string;
  type: string;
  placeholder: string;
  error: any;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className={styles.label}>
        {label + ":"}
      </label>
      <input id={name} {...register(name)} type={type} placeholder={placeholder} className={styles.input}
      />
      {error && <Callout type="error">{error.message}</Callout>}
    </div>
  );
}

