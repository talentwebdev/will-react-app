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
  initnotify().then( async(data)=>{
    if(data){
        console.log("get expo token", data);
        console.log("token:", await getToken());
        console.log("get expo token fetchd");
      }else{
        alert('please grant this app notification permission in settings.')
      }
 
  })

  /**
   * TODO: Post token to backend sever from where you can retrieve it to send push notifications
   */
  /*
  return fetch(PUSH_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: {
        value: token,
      },
      user: {
        username: 'Brent',
      },
    }),
  });
  */
}