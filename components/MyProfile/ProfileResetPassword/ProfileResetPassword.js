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
import {API_URL} from "./../../../Environment/Environment";

// import style
import styles from "./style";
import images from "./../../../stylebase/images";

// import images
import background from "./../../../assets/images/background.png";
import Spinner from 'react-native-loading-spinner-overlay';


class ProfileResetPassword extends Component{
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
            password: "",
            loading: false,
            confirm_password: "",
        }

        this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
        this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
        this.onReset = this.onReset.bind(this);
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

    onReset()
    {
        if(this.state.password === "" || this.state.password !== this.state.confirm_password) return;
        this.setState({loading: true});
        fetch(API_URL + "/user/authresetpassword", {
            method: "POST",
            body: JSON.stringify({
                authorization: this.props.user.token,
                password: this.state.password,
            })
        })
        .then(response => response.json())
        .then(responseJson => {
            console.log("resetpassword success", responseJson);
            this.setState({loading: false});
            if(responseJson.status === true)
            {
                this.props.navigation.navigate("MyProfileScreen");
            }
            else
            {
                alert("Can not reset password");
            }
        })
        .catch(err => {
            this.setState({loading: false});
            console.log("ResetPassword error", err);
        })
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
                            Reset Password
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
                            autoComplete ="password"
                            placeholder="Password" 
                            placeholderTextColor="#FFF"
                            type="password"
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={(password) => {this.setState({password})}}
                            />
                        <TextInput 
                            style={this.state.keyboardshow ? 
                                this.state.styles.textInput_keyboard : 
                                this.state.styles.textInput} 
                            autoComplete ="password"
                            placeholder="Confirm Password" 
                            placeholderTextColor="#FFF"
                            type="password"
                            secureTextEntry={true}
                            value={this.state.confirm_password}
                            onChangeText={(confirm_password) => {this.setState({confirm_password})}}
                            />

                        <TouchableOpacity 
                            style={this.state.keyboardshow ? 
                                this.state.styles.login_btn_keyboard : 
                                this.state.styles.login_btn} 
                            onPress={this.onReset}>
                            <Text style={styles.text}>
                                Reset Password
                            </Text>
                        </TouchableOpacity>

                        
                    </View>
                    <TouchableOpacity 
                        style={this.state.keyboardshow ? 
                                this.state.styles.back_btn_keyboard : 
                                this.state.styles.back_btn}
                        onPress={() => {this.props.navigation.navigate("MyProfileScreen")}}>
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

export default connect(mapStatesToPros)(ProfileResetPassword);