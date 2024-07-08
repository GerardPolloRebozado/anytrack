'use client'
import withProtectedRoute from "@/components/Hocs/withProtectedRoute";
import styles from './settings.module.css'
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import { triggerUpdateMovies, triggerUpdateShows } from "@/utils/fetch/cron"
import { useEffect, useState } from "react";
import { getUser, updateUser } from "@/utils/fetch/users";
import Notifications from "@/components/Notifications/Notifications";
import { changePassword, Notification, updateUserForm } from "libs/types/src";
import { setting } from "@prisma/client";
import { getSettings, updateSettings } from "@/utils/fetch/settings";
import Cookies from "js-cookie";
import { changePasswordSchema, updateUserSchemaForm } from "libs/joi/src";
import { SubmitHandler, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Input from "@/components/Input/Input";
import { useRouter } from "next/navigation";

function SettingsPage() {
  const [user, setUser] = useState({} as any)
  const [settings, setSettings] = useState<setting>()
  const [reload, setReload] = useState(false)
  const [editProfile, setEditProfile] = useState(false)
  const [changePassword, setChangePassword] = useState(false)
  const [notifications, setNotifications] = useState<Notification[]>([])
  const router = useRouter()
  const { register: userRegister, handleSubmit: userHandleSubmit, formState: { errors: userErrors }, setValue: userSetValues } = useForm<updateUserForm>({
    resolver: joiResolver(updateUserSchemaForm),
  });
  const { register: passwordRegister, handleSubmit: passwordHandleSubmit, formState: { errors: passwordErrors } } = useForm<changePassword>({
    resolver: joiResolver(changePasswordSchema),
  });

  function addNotification(notification: Notification) {
    setNotifications((prevNotifications) => [...prevNotifications, notification]);
  };

  useEffect(() => {
    console.log(passwordErrors)
  }, [passwordErrors])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getUser()
        const user = await response.json()
        setUser(user)
        userSetValues('email', await user.email)
        userSetValues('name', await user.name)
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
  }, [reload, userSetValues])

  async function changeSettings(data: Omit<setting, "userId">) {
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
      addNotification({ type: 'error', message: 'Error updating Movies' })
    } else {
      addNotification({ type: 'success', message: 'Succefully updated Movies' })
    }
  }

  async function updateShows() {
    const response = await triggerUpdateShows()
    if (response.status !== 200) {
      addNotification({ type: 'error', message: 'Error updating Shows' })
    } else {
      addNotification({ type: 'success', message: 'Succefully updated Shows' })
    }
  }

  async function logout() {
    Cookies.remove('token')
    Cookies.remove('userId')
    router.push('/auth/signin')
  }

  const onSubmit: SubmitHandler<updateUserForm> = async (data: updateUserForm) => {
    const response = await updateUser(data)
    if (response.status !== 200) {
      addNotification({ type: 'error', message: 'Error updating profile' })
    } else {
      addNotification({ type: 'success', message: 'Updated profile' })
      setReload(!reload)
    }
  }

  return (
    <>
      <Notifications notifications={notifications} setNotifications={setNotifications} />
      <div className={styles.settingsContainer}>
        <h2>Settings</h2>
        <div className={styles.settingsActions}>
          {settings?.public ? <PrimaryButton onClick={() => changeSettings({ public: false })}>Set to private</PrimaryButton> : <PrimaryButton onClick={() => changeSettings({ public: true })}>Set to public</PrimaryButton>}
          <PrimaryButton onClick={updateMovies}>Force movie update</PrimaryButton>
          <PrimaryButton onClick={updateShows}>Force show update</PrimaryButton>
          <PrimaryButton onClick={() => setEditProfile(!editProfile)} className={styles.editButton}>Edit profile</PrimaryButton>
          <PrimaryButton onClick={() => setChangePassword(!changePassword)} className={styles.editButton}>Change Password</PrimaryButton>
          <PrimaryButton onClick={logout} >Log out</PrimaryButton>
        </div>
        <div className={styles.form}>
          {editProfile && (
            <>
              <h3>Edit profile</h3>
              <form onSubmit={userHandleSubmit(onSubmit)}>
                <Input
                  label="Email"
                  register={userRegister}
                  name="email"
                  type="email"
                  placeholder="Type your email ✉️"
                  error={userErrors.email}
                />
                <Input
                  label="Name"
                  register={userRegister}
                  name="name"
                  type="text"
                  placeholder="Whats your name?"
                  error={userErrors.name}
                />
                <PrimaryButton type="submit">Update</PrimaryButton>
              </form>
            </>)}
          {changePassword && (
            <>
              <h3>Change password</h3>
              <form onSubmit={passwordHandleSubmit(onSubmit)}>
                <Input
                  label="Password"
                  register={passwordRegister}
                  name="password"
                  type="password"
                  placeholder="Whats your new password? 🔒"
                  error={passwordErrors.password}
                />
                <PrimaryButton type="submit">Change password</PrimaryButton>
              </form>
            </>)}
        </div>
      </div >
    </>
  );
}


export default withProtectedRoute(SettingsPage);
