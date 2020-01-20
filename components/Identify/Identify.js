import React, { Component } from "react";
import { ImageBackground, View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./style";
import {connect} from "react-redux";

import background from "./../../assets/images/background_1.png";
import female_img from "./../../assets/images/female.png";
import male_img from "./../../assets/images/male.png";
import nonbinary_img from "./../../assets/images/nonbinary.png";
import  Icon  from "react-native-vector-icons/FontAwesome";
import { API_URL } from 'react-native-dotenv';

class Identify extends Component 
{
    
    constructor(props)
    {
        super(props);
        this.state = {
            selected: "",
            user: this.props.user,
        }

        this.onNext = this.onNext.bind(this);
        console.log(this.props);
    }

    onNext()
    {
        
        if(this.state.user.gender !== undefined)
        {
            console.log(this.state.user);
            fetch(API_URL+"/user/signup", {
                method: "POST", 
                header: {
                },
                body: JSON.stringify(this.state.user)
            })
            .then((response) => response.json())
            .then((responseJson) => {
                if(responseJson.status === true)
                {
                    this.props.navigation.navigate("LoginScreen");
                }
            })
            .catch((error) => {
                console.log("error", error);
            });
        }
        
    }

    render()
    {
        return (
            <ImageBackground source={background} style={styles.background}>
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

export default connect(mapStatesToPros)(Identify);