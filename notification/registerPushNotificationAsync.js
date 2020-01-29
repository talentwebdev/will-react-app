import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import { initnotify, getToken  } from 'expo-push-notification-helper';

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
  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  // only asks if permissions have not already been determined, because
  // iOS won't necessarily promp t the user a second time.
  // On Android, permissions are granted on app installation, so
  // `askAsync` will never prompt the user

  // Stop here if the user did not grant permissions
  if (status !== 'granted') {
    //alert('No notification permissions!');
    return;
  }

  // Get the token that identifies this device
  let token = await Notifications.getExpoPushTokenAsync();
  //let token = "EXPO1234";
  return token;
}