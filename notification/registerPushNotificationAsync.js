import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import { initnotify, getToken  } from 'expo-push-notification-helper';
import Constants from 'expo-constants';

const PUSH_ENDPOINT = 'https://your-server.com/users/push-token';

const temp = new Promise((resolve, reject) => {
  initnotify().then((data) => {
    if(data){
      resolve(data);
    }
    else
    {
      reject(data);
    }
  })
});
export default async function registerForPushNotificationsAsync() {
  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(
        Permissions.NOTIFICATIONS
      );
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    let token = await Notifications.getExpoPushTokenAsync();
    return token;
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return "null";
}