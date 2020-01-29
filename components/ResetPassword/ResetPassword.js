import React, {Component} from "react";
import { 
        ImageBackground, 
        TouchableOpacity, 
        View, 
        Text, 
        SafeAreaView, 
        Image,
        TextInput,
        Keyboard
    } from "react-native";
import Icon from "react-native-vector-icons/Feather";

// import style
import styles from "./style";
import base_images from "./../../stylebase/images";

// import images
import background from "./../../assets/images/background.png";
import { API_URL } from "./../../Environment/Environment";
import Spinner from 'react-native-loading-spinner-overlay';

class ResetPassword extends Component{
    constructor(props)
    {
        super(props);

        this.state = {
            email: "",
            sending: false,
            keyboardshow: false,
        }

        this.onSend = this.onSend.bind(this);
        this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
        this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
    }

    handleKeyboardDidShow = event => 
    {
        this.setState({
            keyboardshow: true
        });
    }

    handleKeyboardDidHide = event => 
    {
        this.setState({
            keyboardshow: false
        });
    }

    onSend()
    {
        this.setState({
            sending: true
        });

        fetch(API_URL + "/user/requestresetpassword", {
            method: "POST",
            body: JSON.stringify({
                email: this.state.email
            })
        })
        .then(response => response.json())
        .then(responseJson => {
            console.log("requestresetpassword success", responseJson);

            this.setState({
                sending: false
            });
            if(responseJson.status === true)
            {
                this.props.navigation.navigate("ResetPasswordCodeScreen", {email: this.state.email});
            }
            else
            {
                alert(responseJson.error)
            }
        })
        .catch(err => {
            this.setState({
                sending: false
            });
            console.log("requestresetpassword error", err);
        })
    }

    render(){
        return (
            <ImageBackground source={background} style={styles.background} >
                <Spinner
                    //visibility of Overlay Loading Spinner
                    visible={this.state.sending}
                    //Text with the Spinner
                    color="white"
                    />
                <SafeAreaView style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image
                            style={base_images.logo.normal_image.style} 
                            source={base_images.logo.normal_image.source}
                            >                        
                        </Image>
                    </View>
                    <View style={this.state.keyboardshow ? styles.emailContainer_keyboard : styles.emailContainer}>           
                    { this.state.keyboardshow === false && 
                            <Text style={styles.titleText}>Enter your Email Address</Text>
                    }             
                        <TextInput style={styles.textInput}
                                    placeholder="Email" 
                                    placeholderTextColor="#FFF"
                                    keyboardType="email-address"
                                    value={this.state.email}
                                    onChangeText={(email) => {this.setState({email: email})}}
                                    ></TextInput>
                        <TouchableOpacity style={styles.button}
                            onPress={this.onSend}>
                            <Text style={styles.text}>Send</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button_back}
                            onPress={() => {this.props.navigation.navigate("LoginScreen")}}>
                            <Text style={styles.text}>Back</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        );
    }
}

export default ResetPassword;