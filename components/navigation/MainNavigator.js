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
import People from "./../WillComponents/People/People";
import Payment from "./../WillComponents/Payment/Payment";
import Address from "./../WillComponents/Address/Address";
import SelectOption from "./../WillComponents/SelectOption/SelectOption";
import FinalWill from "./../WillComponents/FinalWill/FinalWill";
import PaymentWebView from "./../WillComponents/Payment/PaymentWebView";
import PaymentSuccessScreen from "./../WillComponents/Payment/PaymentSuccessScreen";
import ViewWill from "./../WillComponents/ViewWill/ViewWill";
import UAEGuardian from "./../WillComponents/UAEGuardian/UAEGuardian";
import ContentComponent from "./ContentComponent";
import MyProfile from "./../MyProfile/MyProfile";
import ProfileResetPassword from "./../MyProfile/ProfileResetPassword/ProfileResetPassword";
import ResetPassword from "./../ResetPassword/ResetPassword";
import ResetPasswordCode from "./../ResetPassword/ResetPasswordCode";
import ResetPasswordInput from "./../ResetPassword/ResetPasswordInput";
import NotificationSend from "./../Admin/NotificationSend/NotificationSend";
import NotificationSendDetail from "./../Admin/NotificationSend/NotificationSendDetail";
import NotificationCreate from "./../Admin/NotificationSend/NotificationCreate";

const drawerNavigator = createDrawerNavigator({
        MyWillScreen: {screen: MyWill, navigationOptions: {headerShown:false}},
        EmailWillScreen: {screen: EmailWill, navigationOptions: {headerShown: false}},
        EmailSentScreen: {screen: EmailSent, navigationOptions: {headerShown: false}},
        EmailFailedScreen: {screen: EmailFailed, navigationOptions: {headerShown: false}},
        NotificationsScreen: {screen: Notifications, navigationOptions: {headerShown: false}},
        
        },
        {
            initialRouteName: "MyWillScreen",
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
        });
const MainNavigator = createStackNavigator({
        OpenScreen: {screen: OpenScreen, navigationOptions: {headerShown:false} },
        SignupScreen: {screen: SignUp, navigationOptions: {headerShown:false} },
        LoginScreen: {screen: Login, navigationOptions: {headerShown:false}},
        IdentifyScreen: {screen: Identify, navigationOptions: {headerShown: false}},
        HomeScreen: {screen: HomeScreen, navigationOptions: {headerShown: false}},
        FamilyScreen: {screen: Family, navigationOptions: {headerShown: false}},
        QuestionScreen: {screen: Question, navigationOptions: {headerShown: false}},
        MakeWillScreen: {screen: MakeWill, navigationOptions: {headerShown: false}},
        CountrySelectScreen: {screen: CountrySelect, navigationOptions: {headerShown: false}},
        PeopleListScreen: {screen: PeopleList, navigationOptions: {headerShown: false}},
        PeopleScreen: {screen: People, navigationOptions: {headerShown: false}},
        SelectOptionScreen: {screen: SelectOption, navigationOptions: {headerShown: false}},
        PaymentScreen: {screen: Payment, navigationOptions: {headerShown: false}},
        PaymentWebViewScreen: { screen: PaymentWebView, navigationOptions: {headerShown: false}},
        PaymentSuccessScreen: {screen: PaymentSuccessScreen, navigationOptions: {headerShown: false}},
        AddressScreen: {screen: Address, navigationOptions: {headerShown: false}},
        FinalWillScreen: {screen: FinalWill, navigationOptions: {headerShown: false}},   
        ViewWillScreen: {screen: ViewWill, navigationOptions: {headerShown: false}},
        DrawerScreen: {screen: drawerNavigator, navigationOptions: {headerShown: false}},
        NotificationDetailScreen: {screen: NotificationDetail, navigationOptions: {headerShown:false}}, 
        MyProfileScreen: {screen: MyProfile, navigationOptions: {headerShown: false}},
        ResetPasswordScreen: {screen: ResetPassword, navigationOptions: {headerShown: false}},
        ResetPasswordCodeScreen: {screen: ResetPasswordCode, navigationOptions: {headerShown: false}},
        ResetPasswordInputScreen: {screen: ResetPasswordInput, navigationOptions: {headerShown: false}},
        ProfileResetPasswordScreen: {screen: ProfileResetPassword, navigationOptions: {headerShown: false}},
        NotificationSendScreen: {screen: NotificationSend, navigationOptions: {headerShown: false}},
        NotificationSendDetailScreen: {screen: NotificationSendDetail, navigationOptions: {headerShown: false}},
        NotificationCreateScreen: {screen: NotificationCreate, navigationOptions: {headerShown: false}},
        UAEGuardianScreen: {screen: UAEGuardian, navigationOptions: {headerShown: false}},
    },
    {
        initialRouteName: "OpenScreen",
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