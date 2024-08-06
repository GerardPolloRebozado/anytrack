'use client'
import withProtectedRoute from "@/components/Hocs/withProtectedRoute";
import { triggerUpdateMovies, triggerUpdateShows } from "@/utils/fetch/cron"
import { useEffect, useState } from "react";
import { getUser, updateUser } from "@/utils/fetch/users";
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
import { toast } from "@/components/ui/use-toast";

function SettingsPage() {
  const [user, setUser] = useState({} as any)
  const [settings, setSettings] = useState<setting>()
  const [reload, setReload] = useState(false)
  const [editProfile, setEditProfile] = useState(false)
  const [changePassword, setChangePassword] = useState(false)
  const router = useRouter()
  const editProfileForm = useForm<updateUserForm>({
    resolver: joiResolver(updateUserSchemaForm),
  });
  const passwordForm = useForm<changePassword>({
    resolver: joiResolver(changePasswordSchema),
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getUser()
        const user = await response.json()
        setUser(user)
        editProfileForm.setValue('email', await user.email)
        editProfileForm.setValue('name', await user.name)
      } catch (error: any) {
        console.log(error)
        toast({ title: 'Failed to fetch user', description: error?.message, variant: "destructive" })
      }
      try {
        const settings = await getSettings()
        setSettings(settings.body)
      } catch (error: any) {
        console.log(error)
        toast({ title: 'Failed to fetch settings', description: error?.message, variant: "destructive" })
      }
    }
    fetchData();
  }, [editProfileForm, reload])

  async function changeSettings(data: Omit<setting, "userId">) {
    try {
      const respose = await updateSettings(data)
      if (respose.status === 200) {
        setReload(!reload)
      }
    } catch (error: any) {
      console.log(error)
      toast({ title: 'Failed to update settings', description: error?.message, variant: "destructive" })
    }
  }


  async function updateMovies() {
    try {
      const response = await triggerUpdateMovies()
      if (response.status === 200) {
        toast({ title: 'Movies updated', description: 'Movies updated successfully' })
      }
    } catch (error: any) {
      toast({ title: 'Failed to update movies', description: error?.message, variant: "destructive" })
    }
  }

  async function updateShows() {
    try {
      const response = await triggerUpdateShows()
      if (response.status === 200) {
        toast({ title: 'Shows updated', description: 'Shows updated successfully' })
      }
    } catch (error: any) {
      toast({ title: 'Failed to update shows', description: error?.message, variant: "destructive" })
    }
  }

  async function logout() {
    Cookies.remove('token')
    Cookies.remove('userId')
    router.push('/auth/signin')
  }

  const onSubmit: SubmitHandler<updateUserForm> = async (data: updateUserForm) => {
    try {
      const response = await updateUser(data)
      if (response.status === 200) {
        toast({ title: 'User updated', description: 'User updated successfully' })
        setReload(!reload)
      }
    } catch (error: any) {
      toast({ title: 'Failed to update user', description: error?.message, variant: "destructive" })
      setReload(!reload)
    }
  }

  return (
    <>
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
