import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator } from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import { Dimensions } from 'react-native';
import { fromRight } from 'react-navigation-transitions';

import OpenScreen from "./../openscreen/OpenScreen";
import SignUp from "./../signup/SignUp";
import Login from "./../login/Login";
import Identify from "./../Identify/Identify";
import HomeScreen from "./../HomeScreen/HomeScreen";
import Notifications from "./../Notifications/Notifications";
import NotificationDetail from "./../Notifications/NotificationDetail";
import MyWill from "./../MyWill/MyWill";
import EmailWill from "./../MyWill/EmailWill/EmailWill";
import EmailSent from "./../MyWill/EmailSent/EmailSent";
import EmailFailed from "./../MyWill/EmailFailed/EmailFailed";
import Family from "./../Family/Family";
import Question from "./../WillComponents/question/question";
import MakeWill from "./../WillComponents/makewill/MakeWill";
import CountrySelect from "./../WillComponents/countryselect/CountrySelect";
import PeopleList from "./../WillComponents/PeopleList/PeopleList";
import Norminate from "./../WillComponents/Norminate/Norminate";
import ContentComponent from "./ContentComponent";

const MainNavigator = createStackNavigator({
        OpenScreen: {screen: OpenScreen, navigationOptions: {headerShown:false} },
        SignupScreen: {screen: SignUp, navigationOptions: {headerShown:false} },
        LoginScreen: {screen: Login, navigationOptions: {headerShown:false}},
        IdentifyScreen: {screen: Identify, navigationOptions: {headerShown: false}},
        HomeScreen: {screen: HomeScreen, navigationOptions: {headerShown: false}},
        NotificationsScreen: {screen: Notifications, navigationOptions: {headerShown: false}},
        NotificationDetailScreen: {screen: NotificationDetail, navigationOptions: {headerShown:false}},
        MyWillScreen: {screen: MyWill, navigationOptions: {headerShown:false}},
        EmailWillScreen: {screen: EmailWill, navigationOptions: {headerShown: false}},
        EmailSentScreen: {screen: EmailSent, navigationOptions: {headerShown: false}},
        EmailFailedScreen: {screen: EmailFailed, navigationOptions: {headerShown: false}},
        FamilyScreen: {screen: Family, navigationOptions: {headerShown: false}},
        QuestionScreen: {screen: Question, navigationOptions: {headerShown: false}},
        MakeWillScreen: {screen: MakeWill, navigationOptions: {headerShown: false}},
        CountrySelectScreen: {screen: CountrySelect, navigationOptions: {headerShown: false}},
        PeopleListScreen: {screen: PeopleList, navigationOptions: {headerShown: false}},
        NorminateScreen: {screen: Norminate, navigationOptions: {headerShown: false}},
    },
    {
        initialRouteName: "MakeWillScreen",
        drawerPosition:'left',
        drawerType: "back",
        drawerWidth: function(){
            const {width} = Dimensions.get('window');
            return width;
        },
        contentOptions:{
          activeTintColor:'orange'
        },
        contentComponent: ContentComponent,
    }
);

export default MainNavigator;