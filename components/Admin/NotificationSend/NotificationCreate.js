import React, {Component} from "react";
import { ImageBackground, View, Text, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";

import styles from "./style";
import base_images from "./../../../stylebase/images";

import background from "./../../../assets/images/background.png";
import {API_URL} from "./../../../Environment/Environment";
import {connect} from "react-redux";

class NotificationCreate extends Component 
{
    constructor(props)
    {
        super(props);

        const { navigation } = this.props;

        this.state = {
            title: "",
            content: "",
            
        };

        this.onSend = this.onSend.bind(this);

    }

    async onSend()
    {

        const message = this.props.user.expo_tokens.map(item => ({
            to: item,
            sound: 'default',
            title: 'Will Notification',
            body: 'New Notification',
            data: { title: this.state.title, content: this.state.content },
        }));

        console.log("sending message", message);

        fetch(API_URL + "/notification/add", {
            method: "POST",
            body: JSON.stringify({
                title: this.state.title,
                content: this.state.content,
                authorization: this.props.user.token
            })
        })
        .then(response => response.json())
        .then(responseJson => {
            console.log("notification add", responseJson);
        })
        .catch(err => {
            console.log("notification error", err);
        });

        const response = await fetch('https://exp.host/--/api/v2/push/send', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Accept-encoding': 'gzip, deflate',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
        });
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
                        <TextInput style={styles.titleText}
                         autoComplete ="Title"
                         placeholder="Title" 
                         placeholderTextColor="#FFF"
                         value={this.state.title}
                         onChangeText={(title) => {this.setState({title})}}></TextInput>
                    </View>
                    <ScrollView style={styles.textContainer}>
                        <TextInput style={styles.text}
                            autoComplete ="Content"
                            placeholder="Content" 
                            placeholderTextColor="#FFF"
                            value={this.state.email}
                            numberOfLines={10}
                            multiline={true}
                            onChangeText={(content) => {this.setState({content})}}>
                            {this.state.content}
                        </TextInput>
                    </ScrollView>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => {this.props.navigation.navigate("NotificationSendScreen");}}>
                        <Text style={styles.text}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonSend}
                        onPress={this.onSend}>
                        <Text style={styles.text}>Send</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

const mapStatesToProps = (state, props) => {
    return {
        ...props,
        user: state.user
    }
}
export default connect(mapStatesToProps)(NotificationCreate);