import React, {Component} from "react";
import { 
        ImageBackground, 
        TouchableOpacity, 
        View, 
        Text, 
        SafeAreaView, 
        Image,
    } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

// import style
import styles from "./style";
import base_images from "./../../stylebase/images";

// import images
import background from "./../../assets/images/background.png";

const checkMyWill = (key) => {
    return key === "MyWillScreen" || key === "EmailWillScreen" || key === "EmailSentScreen" || key === "EmailFailedScreen";
}
const checkNotification = (key) => {
    return key === "NotificationsScreen";
}
const ContentComponent = props => (
    <SafeAreaView style={{flex: 1}}>
    
    <ImageBackground source={background} style={styles.background} >
        <Icon name="cross" color="#FFF" style={styles.menuIcon} size={30} onPress={() => { props.navigation.closeDrawer()}}></Icon>
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    style={base_images.logo.normal_image.style} 
                    source={base_images.logo.normal_image.source}
                    >                        
                </Image>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={checkMyWill(props.activeItemKey) ? styles.button_selected : styles.button}>
                    <Text style={styles.text}>My Will</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>My Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={checkNotification(props.activeItemKey) ? styles.button_selected : styles.button}>
                    <Text style={styles.text}>Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    </ImageBackground>
    </SafeAreaView>
);

export default ContentComponent;