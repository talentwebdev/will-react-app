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
import {API_URL} from "react-native-dotenv";

// import style
import styles from "./style";
import images from "./../../stylebase/images";

// import images
import background from "./../../assets/images/background.png";


class Login extends Component{
    constructor(props)
    {
        super(props);
        
        this.state = {
            keyboardshow: false,
            styles: {
                container: styles.container,
                container_keyboard: styles.container_keyboard
            },
            user: this.props.user,
            email: "",
            password: "",
        }

        this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
        this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
        this.onLogin = this.onLogin.bind(this);
    }


    componentWillUnmount() {
        this.keyboardDidShowSub.remove();
        this.keyboardDidHideSub.remove();
    }

    handleKeyboardDidShow = (event) => {
        const { height } = Dimensions.get('window');
        const keyboardHeight = event.endCoordinates.height;
        console.log(height - keyboardHeight);

        this.setState({
            keyboardshow: true
        });

        this.setState((state) => ({
            ...state, 
            styles: {
                ...state.styles,
                container_keyboard: {
                    ...state.styles.container_keyboard,
                    height: height - keyboardHeight,
                }
            }
        }));
    }

    handleKeyboardDidHide = (event) => {
        this.setState({
            keyboardshow: false
        });
    }

    onLogin()
    {
        fetch(API_URL+"/user/signin", {
            method: "POST",
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
        })
        .catch((error) => {
            console.log("sigin error", error);
        });
    }

    render(){
        return (
            <ImageBackground source={background} style={styles.background} >
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
                    
                    <View style={styles.inputContainer}>
                        <Image
                            style={images.logo.normal_image.style} 
                            source={images.logo.normal_image.source}
                            >                        
                        </Image>
                        <TextInput 
                            style={styles.textInput}
                            autoComplete ="email"
                            placeholder="Email" 
                             keyboardType="email-address"
                            placeholderTextColor="#FFF"
                            value={this.state.email}
                            onChangeText={(email) => {this.setState({email})}}
                            />
                        <TextInput 
                            style={styles.textInput}
                            autoComplete ="password"
                            placeholder="Password" 
                            placeholderTextColor="#FFF"
                            type="password"
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={(password) => {this.setState({password})}}
                            />

                        <TouchableOpacity 
                            style={styles.login_btn}
                            onPress={this.onLogin}>
                            <Text style={styles.text}>
                                Login
                            </Text>
                        </TouchableOpacity>

                        
                    </View>
                    <TouchableOpacity 
                        style={styles.back_btn}>
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
export default connect(mapStatesToPros)(Login);