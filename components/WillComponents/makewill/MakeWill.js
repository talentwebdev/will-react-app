import React, {Component} from "react";

import background from "./../../../assets/images/background_1.png";
import { ImageBackground, TouchableOpacity, Text, View, Image } from "react-native";
import  Icon  from "react-native-vector-icons/FontAwesome";
import styles from "./style";
import images from "./../../../stylebase/images";
import {connect} from "react-redux";
import {sendNextWillStep} from "./action";
import { bindActionCreators } from "redux";

class MakeWill extends Component
{
    

    constructor(props)
    {
        super(props);

        this.state = {
        }

        this.onNext = this.onNext.bind(this);
    }

    onNext()
    {
        this.props.sendNextWillStep();
        this.props.navigation.navigate("CountrySelectScreen");
    }

    render()
    {
        return(
            <ImageBackground source={background} style={styles.background}>
                <View style={[styles.mainContainer, {paddingTop: images.makewilllogo.normal_image.style.width / 2}]}>
                    <View style={styles.logoContainer}>
                        <View style={[{ width: images.makewilllogo.normal_image.style.width * 1.2, height: images.makewilllogo.normal_image.style.height * 1.2}, 
                                        styles.logo, 
                                        {transform: [ {translateY: -images.makewilllogo.normal_image.style.width * 1.2 / 2} ], 
                                        borderRadius: images.makewilllogo.normal_image.style.width * 1.2/2},
                                        {paddingLeft: images.makewilllogo.normal_image.style.width * 0.1}]}>
                            <Image source={images.makewilllogo.normal_image.source} style={images.makewilllogo.normal_image.style}></Image>
                        </View>
                        <Text style={[styles.titleText, {marginTop: -(images.makewilllogo.normal_image.style.height/2)}]}>Get Your Will With</Text>
                    </View>
                    <View style={styles.mainLogoContainer}>
                        <Image source={images.logo.normal_image.source} style={images.logo.normal_image.style}></Image>
                    </View>
                    <TouchableOpacity style={styles.primaryButton}
                        onPress={this.onNext}>
                        <Text style={styles.text}>Make My Will</Text>
                    </TouchableOpacity>                    
                    <TouchableOpacity style={styles.primaryButton}>
                        <Text style={styles.text}>Show Me An Example</Text>
                    </TouchableOpacity>      
                    <TouchableOpacity style={styles.backButton} 
                        onPress={() => {this.props.navigation.navigate("FamilyScreen");}}>
                        <Text style={styles.text}>Back</Text>
                    </TouchableOpacity>                 
                </View>                
            </ImageBackground>
        );
    }
}

const mapStatesToProps = (state, ownProps) => {
    return {
        ...ownProps, 
        state
    };
}
const mapDispatchToProps = dispatch => {
    return { 
        sendNextWillStep: bindActionCreators(sendNextWillStep, dispatch)
    }
}

export default connect(mapStatesToProps, mapDispatchToProps)(MakeWill);