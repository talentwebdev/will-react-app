import React, { Component } from "react";
import { ImageBackground, View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./style";

import background from "./../../assets/images/background_1.png";
import female_img from "./../../assets/images/female.png";
import male_img from "./../../assets/images/male.png";
import nonbinary_img from "./../../assets/images/nonbinary.png";
import  Icon  from "react-native-vector-icons/FontAwesome";

class Identify extends Component 
{
    state = {
        selected: "",
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
                        onPress={() => { this.setState((state) => ({selected: "male"})) }}
                        >
                        { this.state.selected == "male" && <Icon name="check" style={styles.checkIcon} size={20} color="#FFF" />}                        
                        <Image source={male_img} style={styles.maleImage} />
                        <Text style={styles.text}>Male</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={this.state.selected == "female" ? styles.selectOption_selected: styles.selectOption} 
                        onPress={() => { this.setState((state) => ({selected: "female"})) }}
                    >
                        { this.state.selected == "female" && <Icon name="check" style={styles.checkIcon} size={20} color="#FFF" />}                        
                        <Image source={female_img} style={styles.femaleImage} />
                        <Text style={styles.text}>Female</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={this.state.selected == "nonbinary" ? styles.selectOption_selected: styles.selectOption} 
                        onPress={() => { this.setState((state) => ({selected: "nonbinary"})) }}
                    >
                        { this.state.selected == "nonbinary" && <Icon name="check" style={styles.checkIcon} size={20} color="#FFF" />}                        
                        <Image source={nonbinary_img} style={styles.nonbinaryImage} />
                        <Text style={styles.text}>Non-Binary</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity style={styles.nextButton}>
                        <Text style={styles.text}>Next</Text>
                    </TouchableOpacity>
                </View> 
            </ImageBackground>
        );
    }
}

export default Identify;