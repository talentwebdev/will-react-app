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
import {API_URL} from "../../Environment/Environment";

// import style
import styles from "./style";
import images from "../../stylebase/images";

// import images
import background from "./../../assets/images/background.png";
import {UPDATE_USERDATA, INIT_WILL_DATA} from "../../reducer/types";
import { bindActionCreators } from "redux";
import Spinner from 'react-native-loading-spinner-overlay';
import {_storeEmail, _storePassword} from "../../storage/storage";
import registerForPushNotificationsAsync from "../../notification/registerPushNotificationAsync";
import { FlatList } from "react-native-gesture-handler";

function updateUserData(data)
{
    return {type: UPDATE_USERDATA, payload: data};
}

class MyProfile extends Component{
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
                reset_btn: styles.reset_btn,
                reset_btn_keyboard: styles.reset_btn_keyboard,
            },
            user: this.props.user,
            email: this.props.user.email,
            name:  this.props.user.name,
            surname:  this.props.user.surname,
            id_number:  this.props.user.id_number,
            loading: false,
        }

        this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
        this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
        this.onReset = this.onReset.bind(this);
    }

    onReset()
    {
        if(this.state.email === "" || 
            this.state.name === "" || 
            this.state.surname === "" || 
            this.state.id_number === "")
            return;

        this.setState({
            loading: true
        });
        fetch(API_URL+"/user/profileupdate", {
            method: "POST", 
            body: JSON.stringify({
                name: this.state.name,
                surname: this.state.surname,
                id_number: this.state.id_number,
                email: this.state.email,
                authorization: this.props.user.token
            })
        })
        .then(response => response.json())
        .then(responseJson => {
            console.log("profile update success", responseJson);
            this.setState({
                loading: false
            });
            if(responseJson.status === true)
            {
                this.props.updateUserData({
                    name: this.state.name,
                    surname: this.state.surname,
                    id_number: this.state.id_number,
                    email: this.state.email,
                });
                this.props.navigation.navigate("HomeScreen");
            }
        })
        .catch(err => {
            this.setState({
                loading: false
            });
            console.log("profile update error", err);
        });
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
    }

    handleKeyboardDidHide = (event) => {
        this.setState({
            keyboardshow: false
        });
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
                    
                    <View style={
                            this.state.keyboardshow ? 
                            styles.inputContainer_keyboard : styles.inputContainer}>
                        <Image
                            style={[images.logo.normal_image.style, {marginBottom: this.state.keyboardshow ? 0 : 40,}]} 
                            source={images.logo.normal_image.source}
                            >                        
                        </Image>
                        <TextInput 
                            style={this.state.keyboardshow ? 
                                    this.state.styles.textInput_keyboard : 
                                    this.state.styles.textInput} 
                            placeholder="Name" 
                            placeholderTextColor="#FFF"
                            value={this.state.name}
                            onChangeText={(name) => {this.setState({name})}}
                            />
                        <TextInput 
                            style={this.state.keyboardshow ? 
                                this.state.styles.textInput_keyboard : 
                                this.state.styles.textInput} 
                            placeholder="Surname" 
                            placeholderTextColor="#FFF"
                            value={this.state.surname}
                            onChangeText={(surname) => {this.setState({surname})}}
                            />
                        <TextInput 
                            style={this.state.keyboardshow ? 
                                this.state.styles.textInput_keyboard : 
                                this.state.styles.textInput} 
                            placeholder="ID Number/Passport Number" 
                            placeholderTextColor="#FFF"
                            value={this.state.id_number}
                            onChangeText={(id_number) => {this.setState({id_number})}}
                            />
                        <TextInput 
                            style={this.state.keyboardshow ? 
                                this.state.styles.textInput_keyboard : 
                                this.state.styles.textInput} 
                            placeholder="Email" 
                            placeholderTextColor="#FFF"
                            value={this.state.email}
                            onChangeText={(email) => {this.setState({email})}}
                            />                        
                    </View>
                    { !this.state.keyboardshow &&
                    <TouchableOpacity 
                        style={this.state.keyboardshow ? 
                                this.state.styles.reset_btn_keyboard : 
                                this.state.styles.reset_btn}
                        onPress={this.onReset}>
                        <Text style={styles.text}>
                            Edit Profile
                        </Text>
                    </TouchableOpacity>
                    }
                    { !this.state.keyboardshow &&
                    <TouchableOpacity 
                        style={this.state.keyboardshow ? 
                                this.state.styles.reset_btn_keyboard : 
                                this.state.styles.reset_btn}
                                
                        onPress={() => {this.props.navigation.navigate("ProfileResetPasswordScreen")}}>
                        <Text style={styles.text}>
                            Reset Password
                        </Text>
                    </TouchableOpacity>
                    }
                    { !this.state.keyboardshow && 
                    <TouchableOpacity 
                        style={this.state.keyboardshow ? 
                                this.state.styles.back_btn_keyboard : 
                                this.state.styles.back_btn}
                        onPress={() => {this.props.navigation.navigate("HomeScreen")}}>
                        <Text style={styles.text}>
                            Back
                        </Text>
                    </TouchableOpacity>
                    }
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
        updateUserData: bindActionCreators(updateUserData, dispatch),
    }
}
export default connect(mapStatesToPros, mapDispatchToProps)(MyProfile);