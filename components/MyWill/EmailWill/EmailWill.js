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
import {getUAEWillHTML} from "./../../../will_uae_html/mainwill";
import {API_URL, isDebug} from "./../../../Environment/Environment";
import {connect} from "react-redux";
import Spinner from 'react-native-loading-spinner-overlay';
import {StackActions, NavigationActions} from "react-navigation";
import {value_names} from "./../../../questions/question";

class EmailWill extends Component{
    constructor(props)
    {
        super(props);

        this.state = {
            keyboardshow: false,
            email: isDebug ? "zhuping.kp@gmail.com" : "",
            sending: false,
        }
        this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
        this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);

        this.onSend = this.onSend.bind(this);

        const { navigation } = this.props;
        console.log("page", navigation.getParam("page"));
        if(navigation.getParam("page") !== "MyWillScreen" && navigation.getParam("page") !== undefined && navigation.getParam("page") !== null && navigation.getParam("page") !== '')
        {
            navigation.navigate(navigation.getParam("page"));   
        }
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
        let data = {...this.props.will.final_will};
        data['user'] = this.props.user;

        let willType = this.props.will.final_will["will_type"];

        this.setState({sending: true});
        console.log("data", data);
        if(isDebug )
        {
            /*
            data[value_names.country_location] = "South Africa";
            data[value_names.user].name = "Zhuping ";data[value_names.user].surname = "Hello ";
            data[value_names.address] = "asdlfksdjf sdlfksdjf";
            data[value_names.mirror] = "Yes";
            data[value_names.executor] = {name: "abcd"};
            data[value_names.guard_appoint] = {name: "abcd"};
            data[value_names.another_guard_appoint] = {name: "abcd"};
            data[value_names.spouse] = {name: "abcd"};
            */
            willType = 9;
        }
        
        //console.log(data[value_names.country_location]);
        //console.log("content", data[value_names.country_location] === "UAE" ? getUAEWillHTML(willType, data, true) : getWillHTML(willType, data, true));
        fetch(API_URL + "/email/send", {
            method: "POST",
            headers: {
                
            },
            body: JSON.stringify({
                email: this.state.email,
                content: data[value_names.country_location] === "UAE" ? getUAEWillHTML(willType, data, true) : getWillHTML(willType, data, true),
                authorization: this.props.user.token
            })
        })
        .then(response => response.json())
        .then(responseJson => {
            console.log(responseJson, data[value_names.mirror]  );
            
            if(data[value_names.mirror] === "Yes"){
                let newdata = {...data};
                newdata[value_names.spouse] = {...this.props.user, ...data[value_names.your_information]};
                newdata[value_names.spouse].name = this.props.user.name + " " + this.props.user.surname;
                newdata[value_names.spouse].passport = newdata[value_names.spouse].id_number;
                newdata[value_names.user] = {...data.spouse};
                newdata[value_names.user].gender = newdata[value_names.spouse].gender === "male" ? "female" : "male";
                newdata[value_names.user].surname = "";
                newdata[value_names.your_information] = {...data.spouse};
                fetch(API_URL + "/email/send", {
                    method: "POST",
                    headers: {
                        
                    },
                    body: JSON.stringify({
                        email: this.state.email,
                        content: getUAEWillHTML(willType, newdata, true, true),
                        authorization: this.props.user.token
                    })
                })
                .then(response => response.json())
                .then(responsejson => {
                    if(responsejson.status === true){
                        console.log("navigate");
                        this.props.navigation.navigate("EmailSentScreen", {page: null});
                    }
                    else 
                    {
                        this.props.navigation.navigate("EmailFailedScreen", {page: null});
                    }
                    this.setState({sending: false});
                })
                .catch(err => {
                    this.setState({sending: false});
                    this.props.navigation.navigate("EmailFailedScreen", {page: null});
                    console.log("email send error", err);
                });
                return;
            }

            if(responseJson.status === true){
                console.log("navigate");
                this.props.navigation.navigate("EmailSentScreen", {page: null});
            }
            else 
            {
                this.props.navigation.navigate("EmailFailedScreen", {page: null});
            }
            this.setState({sending: false});
        })
        .catch(err => {
            this.setState({sending: false});
            this.props.navigation.navigate("EmailFailedScreen", {page: null});
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