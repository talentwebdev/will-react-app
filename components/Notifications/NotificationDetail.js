import React, {Component} from "react";
import { ImageBackground, View, Text, ScrollView, TouchableOpacity, Image } from "react-native";

import styles from "./style";
import base_images from "./../../stylebase/images";

import background from "./../../assets/images/background.png";

class NotificationDetail extends Component 
{
    constructor(props)
    {
        super(props);

        const { navigation } = this.props;

        this.state = {
            title: navigation.getParam("title") !== null ? navigation.getParam("title") : "",
            content: navigation.getParam("content") !== null ? navigation.getParam("content") : ""
        }
    }
    render()
    {
        return (
            <ImageBackground source={background} style={styles.background}>
                <View style={styles.toplogoContainer}>                    
                    <Image source={base_images.logo.small_image.source} style={base_images.logo.small_image.style}></Image>
                </View>
                <View style={styles.detailContainer}>
                    <View style={styles.titleNotificationContainer}>
                        <Text style={styles.titleText}>{this.state.title}</Text>
                    </View>
                    <ScrollView style={styles.textContainer}>
                        <Text style={styles.text}>
                            {this.state.content}
                        </Text>
                    </ScrollView>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => {this.props.navigation.navigate("DrawerScreen", {
                            page: "NotificationsScreen"
                        });}}>
                        <Text style={styles.text}>Back</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

export default NotificationDetail;