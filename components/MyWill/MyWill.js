import React, {Component} from "react";
import { 
        ImageBackground, 
        TouchableOpacity, 
        View, 
        Text, 
        SafeAreaView, 
        Image,
    } from "react-native";
import Icon from "react-native-vector-icons/Feather";

// import style
import styles from "./style";
import base_images from "./../../stylebase/images";

// import images
import background from "./../../assets/images/background.png";

class MyWill extends Component{
    constructor(props)
    {
        super(props);
        const { navigation } = this.props;

        if(navigation.getParam("page") !== "MyWillScreen" && navigation.getParam("page") !== undefined && navigation.getParam("page") !== null && navigation.getParam("page") !== '')
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
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}
                            onPress={() => {this.props.navigation.navigate("MakeWillScreen")}}>
                            <Text style={styles.text}>Edit Will</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
                            onPress={() => {this.props.navigation.navigate("EmailWillScreen")}}>
                            <Text style={styles.text}>Email Will</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button_back}
                            onPress={() => { this.props.navigation.navigate("HomeScreen")}}>
                            <Text style={styles.text}>Back</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        );
    }
}

export default MyWill;