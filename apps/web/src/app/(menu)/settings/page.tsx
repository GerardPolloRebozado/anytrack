'use client'
import withProtectedRoute from "@/components/Hocs/withProtectedRoute";
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
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import PasswordInput from "@/components/ui/passwordInput";

function SettingsPage() {
  const [user, setUser] = useState({} as any)
  const [settings, setSettings] = useState<setting>()
  const [reload, setReload] = useState(false)
  const [editProfile, setEditProfile] = useState(false)
  const [changePassword, setChangePassword] = useState(false)
  const [notifications, setNotifications] = useState<Notification[]>([])
  const router = useRouter()
  const editProfileForm = useForm<updateUserForm>({
    resolver: joiResolver(updateUserSchemaForm),
  });
  const passwordForm = useForm<changePassword>({
    resolver: joiResolver(changePasswordSchema),
  });

  function addNotification(notification: Notification) {
    setNotifications((prevNotifications) => [...prevNotifications, notification]);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getUser()
        const user = await response.json()
        setUser(user)
        editProfileForm.setValue('email', await user.email)
        editProfileForm.setValue('name', await user.name)
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
  }, [editProfileForm, reload])

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
      <div className=' w-full flex justify-center flex-col items-center'>
        <h2 className="text-2xl mb-2">Settings</h2>
        <div className='w-1/6 flex flex-col gap-3'>
          {settings?.public ? <Button onClick={() => changeSettings({ public: false })}>Set to private</Button> : <Button onClick={() => changeSettings({ public: true })}>Set to public</Button>}
          <Button onClick={updateMovies}>Force movie update</Button>
          <Button onClick={updateShows}>Force show update</Button>
          <Button onClick={() => setEditProfile(!editProfile)}>Edit profile</Button>
          <Button onClick={() => setChangePassword(!changePassword)}>Change Password</Button>
          <Button onClick={logout} >Log out</Button>
        </div>
        <div className='w-1/6 mt-4 flex flex-col items-center'>
          {editProfile && (
            <Form {...editProfileForm}>
              <form onSubmit={editProfileForm.handleSubmit(onSubmit)} className="w-full">
                <FormField
                  control={editProfileForm.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder='Type your email ✉️' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                <FormField
                  control={editProfileForm.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder='Type your name' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                <Button type="submit" className="w-full mt-2">Update</Button>
              </form>
            </Form>)}
          {changePassword && (
            <Form {...passwordForm}>
              <form onSubmit={passwordForm.handleSubmit(onSubmit)} className="w-full">
                <FormField
                  control={passwordForm.control}
                  name='password'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New password</FormLabel>
                      <FormControl>
                        <PasswordInput placeholder="Enter your new super secret password 🔒" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                <Button type="submit" className="w-full mt-2">Change password</Button>
              </form>
            </Form>)}
        </div>
      </div >
    </>
  );
}


export default withProtectedRoute(SettingsPage);
