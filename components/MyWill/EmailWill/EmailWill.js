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
import base_images from "./../../../stylebase/images";

// import images
import background from "./../../../assets/images/background.png";

class EmailWill extends Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return (
            <ImageBackground source={background} style={styles.background} >
                <Icon name="menu" color="#FFF" style={styles.menuIcon} size={30} onPress={() => {console.log(this.props.navigation); this.props.navigation.openDrawer()}}></Icon>
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
                        <TextInput style={styles.textInput}
                                    placeholder="Email" 
                                    placeholderTextColor="#FFF"
                                    keyboardType="email-address"
                                    ></TextInput>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.text}>Send</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button_back}>
                            <Text style={styles.text}>Back</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        );
    }
}

export default EmailWill;