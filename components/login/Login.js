import React, {Component} from "react";
import { 
        ImageBackground, 
        TouchableOpacity, 
        View, 
        Text, 
        Keyboard, 
        SafeAreaView, 
        Dimensions, 
        TextInput, 
        Image
    } from "react-native";
import Icon  from "react-native-vector-icons/AntDesign";
import {connect} from "react-redux";
import {API_URL} from "./../../Environment/Environment";

// import style
import styles from "./style";
import images from "./../../stylebase/images";

// import images
import background from "./../../assets/images/background.png";
import {UPDATE_USERDATA, INIT_WILL_DATA, FINAL_WILL_DATA} from "./../../reducer/types";
import { bindActionCreators } from "redux";
import Spinner from 'react-native-loading-spinner-overlay';
import {_storeEmail, _storePassword} from "./../../storage/storage";
import registerForPushNotificationsAsync from "./../../notification/registerPushNotificationAsync";

function setUserData(data)
{
    return {type: UPDATE_USERDATA, payload: data};
}
function initWillData(data)
{
    return {type: FINAL_WILL_DATA, payload: data};
}

class Login extends Component{
    constructor(props)
    {
        super(props);
        
        this.state = {
            keyboardshow: false,
            styles: {
                container: styles.container,
                container_keyboard: styles.container_keyboard,
                textInput: styles.textInput,
                textInput_keyboard: styles.textInput_keyboard,
                login_btn: styles.login_btn,
                login_btn_keyboard: styles.login_btn_keyboard,
                back_btn: styles.back_btn,
                back_btn_keyboard: styles.back_btn_keyboard,
            },
            user: this.props.user,
            email: "",
            password: "",
            loading: false,
        }

        this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
        this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
        this.onLogin = this.onLogin.bind(this);
        this.onResetPassword = this.onResetPassword.bind(this);
    }


    componentWillUnmount() {
        this.keyboardDidShowSub.remove();
        this.keyboardDidHideSub.remove();
    }

    handleKeyboardDidShow = (event) => {
        const { height } = Dimensions.get('window');
        const keyboardHeight = event.endCoordinates.height;

        const x = parseFloat(height - keyboardHeight - 40 - images.logo.normal_image.style.height) / 6.0;

        
        this.setState({
            keyboardshow: true
        });

        this.setState((state) => ({
            ...state, 
            styles: {
                ...state.styles,
                textInput_keyboard: {
                    ...state.styles.textInput_keyboard,
                    height: x, 
                    marginTop: x / 3.0,
                },
                login_btn_keyboard: {
                    ...state.styles.login_btn_keyboard,
                    height: x,
                    marginTop: x / 3.0,
                },
                back_btn_keyboard: {
                    ...state.styles.back_btn_keyboard,
                    height: x,
                    marginTop: x / 3.0,
                }
            }
        }));
        
    }

    handleKeyboardDidHide = (event) => {
        this.setState({
            keyboardshow: false
        });
    }

    async onLogin()
    {
        this.setState({loading: true});
        console.log(API_URL);
        fetch(API_URL+"/user/signin", {
            method: "POST",
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then((response) => response.text())
        .then(async (responseJson) => {
            await _storeEmail(this.state.email);
            await _storePassword(this.state.password);
            console.log("store email & password to storage", this.state.email, this.state.password);
            console.log("sign in", responseJson);
            this.setState({loading: false});
            if(responseJson.status === true)
            {
                this.props.setUserData(responseJson.data);
                if(responseJson.data.type === "admin")
                    this.props.navigation.navigate("NotificationSendScreen");                
                else if(responseJson.data.will === null || responseJson.data.will === "" || responseJson.data.will === undefined)
                {
                    this.props.navigation.navigate("MakeWillScreen");
                }
                else
                {
                    this.props.initWillData(JSON.parse(responseJson.data.will));
                    this.props.navigation.navigate("HomeScreen");
                }

                try{
                    let token = await registerForPushNotificationsAsync();
                    fetch(API_URL+"/user/savetoken", {
                        method: "POST",
                        body: JSON.stringify({
                            authorization: responseJson.data.token,
                            token: token
                        })                    
                    })
                    .then(response => response.json())
                    .then(responseJson => {
                        console.log("savetoken response", responseJson);
                    })
                    .catch(err => {
                        console.log("savetoken error", err);
                    });
                }catch(e){
                    console.log("registerForPushNotificationsAsync", e);
                    return;
                }
                
            }
            else
            {
                alert("Can not Sign in");
            }
        })
        .catch((error) => {
            this.setState({loading: false});
            alert("Can not Sign in");
            console.log("sigin error", error);
        });
    }

    onResetPassword()
    {
        
    }

    render(){
        return (
            <ImageBackground source={background} style={styles.background} >
                <Spinner
                    //visibility of Overlay Loading Spinner
                    visible={this.state.loading}
                    //Text with the Spinner
                    color="white"
                    />
                <SafeAreaView style={
                                this.state.keyboardshow ? 
                                this.state.styles.container_keyboard : 
                                this.state.styles.container
                                }>
                    {
                        this.state.keyboardshow && 
                        <Text style={styles.loginText}>
                            Login
                        </Text>
                    }
                    
                    <View style={
                            this.state.keyboardshow ? 
                            styles.inputContainer_keyboard : styles.inputContainer}>
                        <Image
                            style={images.logo.normal_image.style} 
                            source={images.logo.normal_image.source}
                            >                        
                        </Image>
                        <TextInput 
                            style={this.state.keyboardshow ? 
                                    this.state.styles.textInput_keyboard : 
                                    this.state.styles.textInput} 
                            autoComplete ="email"
                            placeholder="Email" 
                             keyboardType="email-address"
                            placeholderTextColor="#FFF"
                            value={this.state.email}
                            onChangeText={(email) => {this.setState({email})}}
                            />
                        <TextInput 
                            style={this.state.keyboardshow ? 
                                this.state.styles.textInput_keyboard : 
                                this.state.styles.textInput} 
                            autoComplete ="password"
                            placeholder="Password" 
                            placeholderTextColor="#FFF"
                            type="password"
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={(password) => {this.setState({password})}}
                            />

                        <TouchableOpacity 
                            style={this.state.keyboardshow ? 
                                this.state.styles.login_btn_keyboard : 
                                this.state.styles.login_btn} 
                            onPress={this.onLogin}>
                            <Text style={styles.text}>
                                Login
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={this.state.keyboardshow ? 
                                this.state.styles.login_btn_keyboard : 
                                this.state.styles.login_btn} 
                            onPress={() => {this.props.navigation.navigate("ResetPasswordScreen")}}>
                            <Text style={styles.text}>
                                Forgot Password
                            </Text>
                        </TouchableOpacity>

                        
                    </View>
                    <TouchableOpacity 
                        style={this.state.keyboardshow ? 
                                this.state.styles.back_btn_keyboard : 
                                this.state.styles.back_btn}
                        onPress={() => {this.props.navigation.navigate("OpenScreen")}}>
                        <Text style={styles.text}>
                            Back
                        </Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </ImageBackground>
        );
    }
}

const mapStatesToPros = (state, ownProps) => {
    return {...ownProps, user: state.user}
};

const mapDispatchToProps = dispatch => {
    return {
        setUserData: bindActionCreators(setUserData, dispatch),
        initWillData: bindActionCreators(initWillData, dispatch),
    }
}
export default connect(mapStatesToPros, mapDispatchToProps)(Login);