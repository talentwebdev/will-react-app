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
import ChildrenList from "./../WillComponents/ChildrenList/ChildrenList";
import Norminate from "./../WillComponents/Norminate/Norminate";
import ContentComponent from "./ContentComponent";

const MainNavigator = createDrawerNavigator({
        OpenScreen: {screen: OpenScreen, navigationOptions: {header:null} },
        SignupScreen: {screen: SignUp, navigationOptions: {header:null} },
        LoginScreen: {screen: Login, navigationOptions: {heard:null}},
        IdentifyScreen: {screen: Identify, navigationOptions: {header: null}},
        HomeScreen: {screen: HomeScreen, navigationOptions: {header: null}},
        NotificationsScreen: {screen: Notifications, navigationOptions: {header: null}},
        NotificationDetailScreen: {screen: NotificationDetail, navigationOptions: {header:null}},
        MyWillScreen: {screen: MyWill, navigationOptions: {header:null}},
        EmailWillScreen: {screen: EmailWill, navigationOptions: {header: null}},
        EmailSentScreen: {screen: EmailSent, navigationOptions: {header: null}},
        EmailFailedScreen: {screen: EmailFailed, navigationOptions: {header: null}},
        FamilyScreen: {screen: Family, navigationOptions: {header: null}},
        QuestionScreen: {screen: Question, navigationOptions: {header: null}},
        MakeWillScreen: {screen: MakeWill, navigationOptions: {header: null}},
        CountrySelectScreen: {screen: CountrySelect, navigationOptions: {header: null}},
        ChildrenListScreen: {screen: ChildrenList, navigationOptions: {header: null}},
        NorminateScreen: {screen: Norminate, navigationOptions: {header: null}},
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
        transitionConfig: () => fromRight(1500),
        contentComponent: ContentComponent,
    }
);

export default MainNavigator;