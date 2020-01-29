import React, {Component} from "react";
import { 
        ImageBackground, 
        TouchableOpacity, 
        View, 
        Text, 
        SafeAreaView, 
        Image,
        TextInput,
    } from "react-native";
import Icon from "react-native-vector-icons/Feather";

// import style
import styles from "./style";
import base_images from "./../../stylebase/images";

// import images
import background from "./../../assets/images/background.png";
import { API_URL } from "./../../Environment/Environment";
import Spinner from 'react-native-loading-spinner-overlay';

class ResetPasswordInput extends Component{
    constructor(props)
    {
        super(props);

        const {navigation} = this.props;
        this.state = {
            email: navigation.getParam('email'),
            password: "",
            sending: false,
        }

        this.onSend = this.onSend.bind(this);
    }

    onSend()
    {
        this.setState({
            sending: true
        });

        fetch(API_URL + "/user/resetpassword", {
            method: "POST",
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(responseJson => {
            console.log("resetpassword success", responseJson);
            this.setState({sending: false});
            if(responseJson.status === true)
            {
                this.props.navigation.navigate("LoginScreen");
            }
            else
            {
                alert(responseJson.error)
            }
        })
        .catch(err => {
            this.setState({sending: false});
            console.log("checkcode error", err);
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
                            <Text style={styles.titleText}>Enter your new password</Text>                        
                    }             
                        <TextInput style={styles.textInput}
                                    placeholder="Enter Password" 
                                    placeholderTextColor="#FFF"
                                    value={this.state.password}
                                    type="password"
                                    secureTextEntry={true}
                                    onChangeText={(password) => {this.setState({password: password})}}
                                    ></TextInput>
                        <TouchableOpacity style={styles.button}
                            onPress={this.onSend}>
                            <Text style={styles.text}>Reset</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button_back}
                            onPress={() => {this.props.navigation.navigate("ResetPasswordCodeScreen")}}>
                            <Text style={styles.text}>Back</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        );
    }
}

export default ResetPasswordInput;