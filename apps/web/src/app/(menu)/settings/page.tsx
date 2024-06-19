'use client'
import withProtectedRoute from "@/components/Hocs/withProtectedRoute";
import styles from './settings.module.css'
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import { triggerUpdateMovies, triggerUpdateShows } from "@/utils/fetch/cron"
import { useState } from "react";
import Callout from "@/components/Callout/Callout";

function SettingsPage() {
  const [error, setError] = useState('')
  const [successful, setSuccessful] = useState('')
  async function updateMovies() {
    const response = await triggerUpdateMovies()
    if (response.status !== 200) {
      console.log(await response.body)
      setError('Error updating Shows')
    } else {
      setSuccessful('Succefully updated Movies')
    }
  }

  async function updateShows() {
    const response = await triggerUpdateShows()
    if (response.status !== 200) {
      console.log(await response.body)
      setError('Error updating Shows')
    } else {
      setSuccessful('Succefully updated Shows')
    }
  }
  return (
    <div>
      <h1>Settings</h1>
      {error && <Callout type="error">{error}</Callout>}
      {successful && <Callout type="success">{successful}</Callout>}
      <PrimaryButton onClick={updateMovies}>Force movie update</PrimaryButton>
      <PrimaryButton onClick={updateShows}>Force show update</PrimaryButton>
    </div>
  );
}


export default withProtectedRoute(SettingsPage);
