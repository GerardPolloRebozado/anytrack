'use client'

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import styles from './GoBack.module.css';

export default function GoBack() {
  const router = useRouter()
  return (
    <ArrowLeft className={styles.back} size={32} onClick={() => router.back()} />
  )
}
