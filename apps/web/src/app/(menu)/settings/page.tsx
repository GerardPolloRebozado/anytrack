'use client'
import withProtectedRoute from "@/components/Hocs/withProtectedRoute";
import styles from './settings.module.css'
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import { triggerUpdateMovies, triggerUpdateShows } from "@/utils/fetch/cron"
import { useEffect, useState } from "react";
import { getUser } from "@/utils/fetch/users";
import Notifications from "@/components/Notifications/Notifications";
import { Notification } from "libs/types/src";
import { Settings } from "@prisma/client";
import { getSettings, updateSettings } from "@/utils/fetch/settings";

function SettingsPage() {
  const [user, setUser] = useState({} as any)
  const [settings, setSettings] = useState<Settings>()
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [reload, setReload] = useState(false)

  function addNotification(notification: Notification) {
    console.log(notification)
    setNotifications((prevNotifications) => [...prevNotifications, notification]);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const user = await getUser()
        setUser(await user.body)
      } catch (error) {
        console.log(error)
        setNotifications((prevNotifications) => [...prevNotifications, { type: 'error', message: 'Error fetching user data' }]);
      }
      try {
        const settings = await getSettings()
        setSettings(settings.body)
      } catch (error) {
        console.log(error)
        setNotifications((prevNotifications) => [...prevNotifications, { type: 'error', message: 'Error fetching settings' }]);
      }
    }
    fetchData();
  }, [reload])

  async function changeSettings(data: Omit<Settings, "userId">) {
    try {
      await updateSettings(data)
      setReload(!reload)
    } catch (error) {
      console.log(error)
      addNotification({ type: 'error', message: 'Error updating settings' })
    }
  }


    async function updateMovies() {
      const response = await triggerUpdateMovies();
      if (response.status !== 200) {
        console.log(await response.body)
        addNotification({ type: 'error', message: 'Error updating Movies' })
      } else {
        addNotification({ type: 'success', message: 'Succefully updated Movies' })
      }
    }

    async function updateShows() {
      const response = await triggerUpdateShows()
      if (response.status !== 200) {
        console.log(await response.body)
        addNotification({ type: 'error', message: 'Error updating Shows' })
      } else {
        addNotification({ type: 'success', message: 'Succefully updated Shows' })
      }
    }

    return (
      <>
        <Notifications notifications={notifications} setNotifications={setNotifications} />
        <h1>Settings</h1>
        <h2>Welcome {user?.name}</h2>
        <div className={styles.settingsGrid}>
          <PrimaryButton onClick={updateMovies}>Force movie update</PrimaryButton>
          <PrimaryButton onClick={updateShows}>Force show update</PrimaryButton>
          {settings?.public ? <PrimaryButton onClick={() => changeSettings({ public: false })}>Set to private</PrimaryButton> : <PrimaryButton onClick={() => changeSettings({ public: true })}>Set to public</PrimaryButton>}
        </div>
      </>
    );
  }


  export default withProtectedRoute(SettingsPage);
