import { Linking } from "react-native";
import { Permissions, Notifications } from "expo";
import { Modal } from 'antd-mobile';
const alert = Modal.alert;

export const setNotifications = async () => {
  const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  console.log(status)
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


}