import Info from '../Callout/Callout';
import styles from './Input.module.css';
export default function Input({ label, register, required, name, type, placeholder = "", error }: {
    label: string;
    register: any;
    required: boolean;
    name: string;
    type: string;
    placeholder: string;
    error: any;
}) {
    return (
        <>
            <label htmlFor={name} className={styles.label}>
                {label + ":"}
            </label>
            <input id={name} {...register(name, { required })} type={type} placeholder={placeholder} className={styles.input}
            />
            {error && <Info type="error">{error.message}</Info>}
        </>
    );
}

