'use client'
import { Notification } from 'libs/types/src'
import Callout from '../Callout/Callout'
import styles from './Notifications.module.css'

export default function Notifications({ notifications, setNotifications }: { notifications: Notification[], setNotifications: any }) {
  function removeNotification(index: number) {
    setNotifications(notifications.filter((_, i) => i !== index))
  }
  return (
    <div className={styles.notifications}>
      {notifications.map((notification: Notification, index) => (
        <Callout key={index} type={notification.type} onClick={() => removeNotification(index)}>{notification.message}</Callout>
      ))}
    </div>
  )
}
