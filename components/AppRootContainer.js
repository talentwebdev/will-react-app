import React, { Component } from 'react';
import MainNavigator from "./navigation/MainNavigator";
import { createAppContainer } from 'react-navigation';
import registerForPushNotificationsAsync from "./../notification/registerPushNotificationAsync";
import { Notifications } from 'expo';

class AppRootContainer extends Component
{
    state = {
        notification: {

        }
    };

    componentDidMount()
    {
        registerForPushNotificationsAsync();
        // Handle notifications that are received or selected while the app
        // is open. If the app was closed and then opened by tapping the
        // notification (rather than just tapping the app icon to open it),
        // this function will fire on the next tick after the app starts
        // with the notification data.
        console.log("Notifcation Listener Attached");
        this._notificationSubscription = Notifications.addListener(this._handleNotification);
    }

    _handleNotification = notification => {
        // do whatever you want to do with the notification
        console.log("Received Notification:", notification);
        this.setState({ notification: notification });
      };
     
    render()
    {
        const MainAppContainer = createAppContainer(MainNavigator);;
        return (
            <MainAppContainer></MainAppContainer>
        );
    }
}

export default AppRootContainer;