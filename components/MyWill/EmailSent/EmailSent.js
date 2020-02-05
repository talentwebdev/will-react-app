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
import base_images from "../../../stylebase/images";

// import images
import background from "./../../../assets/images/background.png";

class EmailSent extends Component{
    constructor(props)
    {
        super(props);

        const { navigation } = this.props;
        if(navigation.getParam("page") !== "MyWillScreen")
        {
            navigation.navigate(navigation.getParam("page"));   
        }
    }

    render(){
        return (
            <ImageBackground source={background} style={styles.background} >
                <Icon name="menu" color="#FFF" style={styles.menuIcon} size={30} onPress={() => {this.props.navigation.openDrawer()}}></Icon>
                <SafeAreaView style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image
                            style={base_images.logo.normal_image.style} 
                            source={base_images.logo.normal_image.source}
                            >                        
                        </Image>
                    </View>
                    <View style={styles.emailContainer}>                        
                        <Text style={styles.titleText}>Confirm Email Address</Text>                        
                        <Text style={[styles.text, {width: '40%'}]}>Enter the email used for the profile</Text>                        
                        
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.text}>Email Sent Successfully</Text>
                        </TouchableOpacity>
                        <Text style={styles.text}>Please check your inbox</Text>
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

export default EmailSent;