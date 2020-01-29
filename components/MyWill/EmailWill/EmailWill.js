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
import base_images from "./../../../stylebase/images";

// import images
import background from "./../../../assets/images/background.png";

import {getWillHTML} from "./../../../will_html/mainwill";
import {API_URL} from "./../../../Environment/Environment";
import {connect} from "react-redux";
import Spinner from 'react-native-loading-spinner-overlay';

class EmailWill extends Component{
    constructor(props)
    {
        super(props);

        this.state = {
            keyboardshow: false,
            email: "",
            sending: false,
        }
        this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
        this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);

        this.onSend = this.onSend.bind(this);
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
        let data = this.props.will.will_data;
        data['user'] = this.props.user;

        const willType = this.props.will.will_data["will_type"];

        this.setState({sending: true});
        fetch(API_URL + "/email/send", {
            method: "POST",
            headers: {
                
            },
            body: JSON.stringify({
                email: this.state.email,
                content: getWillHTML(willType, data),
                authorization: this.props.user.token
            })
        })
        .then(response => response.json())
        .then(responseJson => {
            console.log(responseJson);
            this.setState({sending: false});
            if(responseJson.status === true)
                this.props.navigation.navigate("EmailSentScreen");
            else 
                this.props.navigation.navigate("EmailFailedScreen");
        })
        .catch(err => {
            this.setState({sending: false});
            this.props.navigation.navigate("EmailFailedScreen");
            console.log("email send error", err);
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
                <Icon name="menu" color="#FFF" style={styles.menuIcon} size={30} onPress={() => {this.props.navigation.openDrawer()}}></Icon>
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
                            <Text style={styles.titleText}>Confirm Email Address</Text>                        }
                    { this.state.keyboardshow === false && 
                        <Text style={[styles.text, {width: '40%'}]}>Enter the email used for the profile</Text>                        
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
                            onPress={() => {this.props.navigation.navigate("MyWillScreen")}}>
                            <Text style={styles.text}>Back</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        );
    }
}

const mapStatesToProps = (state, ownProps ) => {
    return {...ownProps, will: state.will, user: state.user}
};

export default connect(mapStatesToProps)(EmailWill);