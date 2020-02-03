import React, { Component } from "react";
import { ImageBackground, View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./style";
import {connect} from "react-redux";

import background from "./../../assets/images/background_1.png";
import female_img from "./../../assets/images/female.png";
import male_img from "./../../assets/images/male.png";
import nonbinary_img from "./../../assets/images/nonbinary.png";
import  Icon  from "react-native-vector-icons/FontAwesome";
import { API_URL } from '../../Environment/Environment';
import Spinner from 'react-native-loading-spinner-overlay';
import { bindActionCreators } from "redux";
import {UPDATE_USERDATA} from "./../../reducer/types";
import registerForPushNotificationsAsync from "./../../notification/registerPushNotificationAsync";

function setUserData(data)
{
    return {type: UPDATE_USERDATA, payload: data};
}

class Identify extends Component 
{
    
    constructor(props)
    {
        super(props);
        this.state = {
            selected: "",
            user: this.props.user,
            loading: false,
        }

        this.onNext = this.onNext.bind(this);
    }

    onNext()
    {
        
        if(this.state.user.gender !== undefined)
        {
            this.setState({loading: true});
            fetch(API_URL+"/user/signup", {
                method: "POST", 
                header: {
                },
                body: JSON.stringify(this.state.user)
            })
            .then((response) => response.json())
            .then(async (responseJson) => {
                this.setState({loading: false});
                if(responseJson.status === true)
                {
                    this.props.setUserData(responseJson.data);
                    this.props.navigation.navigate("MakeWillScreen");

                    let token = await registerForPushNotificationsAsync();
                    fetch(API_URL+"/user/savetoken", {
                        method: "POST",
                        body: JSON.stringify({
                            authorization: responseJson.data.token,
                            token: token
                        })                    
                    })
                    .then(response => response.json())
                    .then(responseJson => {
                        console.log("savetoken response", responseJson);
                    })
                    .catch(err => {
                        console.log("savetoken error", err);
                    });
                }
                else{
                    alert("Can not Signup");
                }
            })
            .catch((error) => {
                this.setState({loading: false});
                alert("Can not signup");
                console.log("error", error);
            });
        }
        
    }

    render()
    {
        return (
            <ImageBackground source={background} style={styles.background}>
                <Spinner
                    //visibility of Overlay Loading Spinner
                    visible={this.state.loading}
                    //Text with the Spinner
                    color="white"
                    />
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>
                        How do you identify yourself?
                    </Text>
                </View>
                <View style={styles.identifyContainer} >                
                    <TouchableOpacity 
                        style={this.state.selected == "male" ? styles.selectOption_selected: styles.selectOption} 
                        onPress={() => { this.setState((state) => ({selected: "male", user: {...state.user, gender: "male"}})) }}
                        >
                        { this.state.selected == "male" && <Icon name="check" style={styles.checkIcon} size={20} color="#FFF" />}                        
                        <Image source={male_img} style={styles.maleImage} />
                        <Text style={styles.text}>Male</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={this.state.selected == "female" ? styles.selectOption_selected: styles.selectOption} 
                        onPress={() => { this.setState((state) => ({selected: "female", user: {...state.user, gender: "female"}})) }}
                    >
                        { this.state.selected == "female" && <Icon name="check" style={styles.checkIcon} size={20} color="#FFF" />}                        
                        <Image source={female_img} style={styles.femaleImage} />
                        <Text style={styles.text}>Female</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={this.state.selected == "nonbinary" ? styles.selectOption_selected: styles.selectOption} 
                        onPress={() => { this.setState((state) => ({selected: "nonbinary", user: {...state.user, gender: "nonbinary"}})) }}
                    >
                        { this.state.selected == "nonbinary" && <Icon name="check" style={styles.checkIcon} size={20} color="#FFF" />}                        
                        <Image source={nonbinary_img} style={styles.nonbinaryImage} />
                        <Text style={styles.text}>Non-Binary</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity style={styles.nextButton} onPress={this.onNext}>
                        <Text style={styles.text}>Next</Text>
                    </TouchableOpacity>
                </View> 
            </ImageBackground>
        );
    }
}

const mapStatesToPros = (state, ownProps) => {
    return {...ownProps, user: state.user};
}

const mapDispatchToProps = dispatch => {
    return {
        setUserData: bindActionCreators(setUserData, dispatch)
    }
}

export default connect(mapStatesToPros, mapDispatchToProps)(Identify);