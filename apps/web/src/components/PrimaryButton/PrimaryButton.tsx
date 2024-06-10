/* eslint-disable @typescript-eslint/no-empty-function */
import { ButtonProps } from 'libs/types/src';
import styles from './PrimaryButton.module.css';

export default function PrimaryButton({id, children, onClick = () => {}, type = "button" }: ButtonProps) {
    return (
        <button id={id} onClick={onClick} className={styles.primaryButton} type={type}>{children}</button>
    )
}
