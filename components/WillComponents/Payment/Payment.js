import React, {Component} from "react";

import background from "./../../../assets/images/background_1.png";
import { ImageBackground, TouchableOpacity, Text, View } from "react-native";
import  Icon  from "react-native-vector-icons/FontAwesome";
import styles from "./style";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";

class Payment extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            text: "Before We make your will. Please make Payment",
        }

        this.onPrev = this.onPrev.bind(this);
    }   

    onPrev()
    {
        const routeName = this.props.will.pages[this.props.will.pages.length - 1];        
        this.props.navigation.navigate(routeName)
    }

    render()
    {
        return(
            <ImageBackground source={background} style={styles.background}>
                <View style={styles.questionContainer}>
                    <View style={styles.questionPanel}>
                        <Text style={styles.questionText}>{this.state.text}</Text>
                        <TouchableOpacity style={styles.selectButton}
                            onPress={() => {this.props.navigation.navigate("PaymentSuccessScreen")}}>
                            <Text style={styles.text}>WeWill Will - R399</Text>
                        </TouchableOpacity>
                        
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.backButton}
                            onPress={this.onPrev}>
                            <Text style={styles.text}>Back</Text>
                        </TouchableOpacity>
                    </View>
                </View>                
            </ImageBackground>
        );
    }
}

const mapStatesToProps = (state, ownProps) => {
    return {...ownProps, will: state.will};
}

export default connect(mapStatesToProps)(Payment);