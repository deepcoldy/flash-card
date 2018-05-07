import { Linking, AsyncStorage } from "react-native";
import { Permissions, Notifications } from "expo";
import { Modal } from 'antd-mobile';
const alert = Modal.alert;
const NOTIFICATIONS_KEY = 'flashcards:NOTIFICATION'


const createNotifications = () => {
  return {
    title: "You haven't quiz today!",
    body: "Don't forget to quiz yourself!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export const clearNotifications = () => {
  Notifications.cancelAllScheduledNotificationsAsync()
  AsyncStorage.removeItem(NOTIFICATIONS_KEY)
  setNotifications()
}

export const setNotifications = async () => {
  const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  if (status !== 'granted') {
    alert('Notifications Permissions Not Enabled', 'Go to enable?', [
      { text: 'Cancel', onPress: () => console.log('cancel') },
      {
        text: 'Ok', onPress: async () => {
          Permissions.askAsync(Permissions.NOTIFICATIONS);
          Linking.openURL('app-settings:')
        },
      },
    ])
    return;
  }
  AsyncStorage.getItem(NOTIFICATIONS_KEY)
  .then(JSON.parse)
  .then((data) => {
    if(data === null){
      Notifications.cancelAllScheduledNotificationsAsync()
      console.log('setnoti')
      const tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 1)
      tomorrow.setHours(20)
      tomorrow.setMinutes(0)
      Notifications.scheduleLocalNotificationAsync(
        createNotifications(),
        {
          time: tomorrow,
          repeat: 'day'
        },
        AsyncStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(true))
      )
    }
  })


}