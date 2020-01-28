import React, {Component} from "react";
import { ImageBackground, TouchableOpacity, View, Text, Image } from "react-native";

// import style
import styles from "./style";
import images from "./../../stylebase/images";

// import images
import background from "./../../assets/images/background.png";
import {_fetchEmail, _fetchPassword} from "./../../storage/storage";
import {API_URL} from "./../../Environment/Environment";
import Spinner from 'react-native-loading-spinner-overlay';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {UPDATE_USERDATA, INIT_WILL_DATA} from "./../../reducer/types";
import { Notifications } from 'expo';
import {NavigateScreen} from "./../NavigationService";


function setUserData(data)
{
    return {type: UPDATE_USERDATA, payload: data};
}
function initWillData(data)
{
    return {type: INIT_WILL_DATA, payload: data};
}

class OpenScreen extends Component{

    constructor(props)
    {
        super(props);   
        this.state = {
            loading: false,
        }     

        console.log("OpenScreen");
    }

    componentDidMount() {
        this.login();

        this._notificationSubscription = Notifications.addListener(this._handleNotification);
        this._handleNotification = this._handleNotification.bind(this);
    }

    componentWillUnmount()
    {
        this._notificationSubscription.remove();
    }

    _handleNotification = notification => 
    {
        console.log("Notification", notification);
        NavigateScreen("NotificationDetailScreen", {...notification.data});
    }

    login = async() => {
        let email, password;
        try{
            email = await _fetchEmail();
            password = await _fetchPassword();
        }catch(e)
        {
            console.log("fetch email and password from storage error", e);
            return;
        }

        console.log("openscreen login", email, password);
        if(email === null || password === null)
            return;
        fetch(API_URL+"/user/signin", {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {            
            if(responseJson.status === true)
            {
                this.props.setUserData(responseJson.data);
                if(responseJson.data.will === null || responseJson.data.will === "" || responseJson.data.will === undefined)
                {
                    this.props.navigation.navigate("MakeWillScreen");
                }
                else
                {
                    this.props.initWillData(JSON.parse(responseJson.data.will));
                    this.props.navigation.navigate("HomeScreen");
                    //NavigateScreen("HomeScreen", {});
                }
            }
        })
        .catch((error) => {
            console.log("sigin error", error);
        });
    }
    render(){
        return (
            <View style={{width: '100%', flex: 1}}>
                <Spinner
                    //visibility of Overlay Loading Spinner
                    visible={this.state.loading}
                    //Text with the Spinner
                    color="white"
                    />
                <ImageBackground source={background} style={styles.background} >
                    <View style={styles.logoContainer}>
                        <Image
                            style={images.logo.normal_image.style} 
                            source={images.logo.normal_image.source}
                            >                        
                        </Image>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.signup_container}>
                            <TouchableOpacity style={styles.signup_btn}
                                    onPress={() => {this.props.navigation.navigate("SignupScreen")}}>
                                <Text style={styles.text}>
                                    Sign Up
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.login_btn} onPress={() => {this.props.navigation.navigate("LoginScreen")}}>
                                <Text style={styles.text}>
                                    Login
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                </ImageBackground>
            </View>
        );
    }
}

const mapStatesToProps = (state, ownProps) => {
    return {...ownProps, user: state.user}
};

const mapDispatchToProps = dispatch => {
    return {
        setUserData: bindActionCreators(setUserData, dispatch),
        initWillData: bindActionCreators(initWillData, dispatch),
    }
}
export default connect(mapStatesToProps, mapDispatchToProps)(OpenScreen);