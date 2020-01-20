import React, {Component} from "react";
import { ImageBackground, TouchableOpacity, View, Text, Image } from "react-native";

// import style
import styles from "./style";
import images from "./../../stylebase/images";

// import images
import background from "./../../assets/images/background.png";

class OpenScreen extends Component{
    render(){
        return (
            <View style={{width: '100%', flex: 1}}>
                <ImageBackground source={background} style={styles.background} >
                    <View style={styles.logoContainer}>
                        <Image
                            style={images.logo.normal_image.style} 
                            source={images.logo.normal_image.source}
                            >                        
                        </Image>
                    </View>
                    <View style={styles.buttonContainer}>
                        
                        <TouchableOpacity style={styles.facebook_btn} onPress={() => {this.props.navigation.openDrawer()}}>
                            <Text style={styles.text}>
                                Connect with Facebook
                            </Text>
                        </TouchableOpacity>
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

export default OpenScreen;