import React, {Component} from "react";
import { ImageBackground, View, Text, ScrollView, TouchableOpacity, Image } from "react-native";

import styles from "./style";
import base_images from "./../../stylebase/images";

import background from "./../../assets/images/background.png";

class NotificationDetail extends Component 
{
    render()
    {
        return (
            <ImageBackground source={background} style={styles.background}>
                <View style={styles.toplogoContainer}>                    
                    <Image source={base_images.logo.small_image.source} style={base_images.logo.small_image.style}></Image>
                </View>
                <View style={styles.detailContainer}>
                    <View style={styles.titleNotificationContainer}>
                        <Text style={styles.titleText}>Title of Notification</Text>
                    </View>
                    <ScrollView style={styles.textContainer}>
                        <Text style={styles.text}>
                            
                            Viewabcdefghijklmnopqr
                            abcdefghijklmnopqr
                            abcdefghijklmnopqr
                            abcdefghijklmnopqr
                            abcdefghijklmnopqr
                            abcdefghijklmnopqr
                            abcdefghijklmnopqr
                            abcdefghijklmnopqr
                            abcdefghijklmnopqr
                            abcdefghijklmnopqr
                            abcdefghijklmnopqr
                            abcdefghijklmnopqr
                            abcdefghijklmnopqr
                        </Text>
                    </ScrollView>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Back</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

export default NotificationDetail;