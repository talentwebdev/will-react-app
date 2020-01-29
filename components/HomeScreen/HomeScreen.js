import React, {Component} from "react";
import { 
        ImageBackground, 
        TouchableOpacity, 
        View, 
        Text, 
        Keyboard, 
        SafeAreaView, 
        Dimensions,
        Image,
    } from "react-native";

// import style
import styles from "./style";
import base_images from "./../../stylebase/images";

// import images
import background from "./../../assets/images/background.png";
import {_initStorage} from "./../../storage/storage";

class HomeScreen extends Component{

    constructor(props)
    {
        super(props);
        this.onLogout = this.onLogout.bind(this);
    }

    onLogout = async() => {
        await _initStorage();
        this.props.navigation.navigate("LoginScreen");
    }

    render(){
        return (
            <ImageBackground source={background} style={styles.background} >
                <SafeAreaView style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image
                            style={base_images.logo.normal_image.style} 
                            source={base_images.logo.normal_image.source}
                            >                        
                        </Image>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}
                            onPress={() => {this.props.navigation.navigate("DrawerScreen", {page: "MyWillScreen"})}}>
                            <Text style={styles.text}>My Will</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
                            onPress={() => {this.props.navigation.navigate("MyProfileScreen")}}>
                            <Text style={styles.text}>My Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
                            onPress={() => {this.props.navigation.navigate("DrawerScreen", {page: "NotificationsScreen"})}}>
                            <Text style={styles.text}>Notifications</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
                            onPress={this.onLogout}>
                            <Text style={styles.text}>Log Out</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        );
    }
}

export default HomeScreen;