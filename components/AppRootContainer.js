import React, { Component } from 'react';
import MainNavigator from "./navigation/MainNavigator";
import { createAppContainer } from 'react-navigation';
import registerForPushNotificationsAsync from "./../notification/registerPushNotificationAsync";
import {setTopLevelNavigator, NavigateScreen} from "./NavigationService";

class AppRootContainer extends Component
{

    constructor(props)
    {
        super(props);

        this.state = {
        }

        this.navigation = null;
    }

    componentDidMount()
    {
        registerForPushNotificationsAsync();
        
        //this._notificationSubscription = Notifications.addListener(this._handleNotification);
    }

    componentWillUnmount()
    {
        console.log("AppContainer Unmount");
    }
     
    render()
    {
        const MainAppContainer = createAppContainer(MainNavigator);;
        return (
            <MainAppContainer ref={nav => { setTopLevelNavigator(nav); } }></MainAppContainer>
        );
    }
}

export default AppRootContainer;