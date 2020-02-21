import React, {Component} from "react";

import background from "./../../../assets/images/background_1.png";
import { ImageBackground, TouchableOpacity, Text, View } from "react-native";
import  Icon  from "react-native-vector-icons/FontAwesome";
import styles from "./style";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import {API_URL} from "./../../../Environment/Environment";
import {setFinalWill} from "./action";

class PaymentSuccessScreen extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            text: "Before We make your will. Please make Payment",
        }

        this.onViewWill = this.onViewWill.bind(this);
        this.onSendWill = this.onSendWill.bind(this);

        this.props.setFinalWill(this.props.will.will_data);

        // TODO: Save Will Content to backend
        const will_data = JSON.stringify(this.props.will.will_data);
        fetch(API_URL+"/user/willupdate", {
            method: "POST", 
            headers: {
                
            },
            body: JSON.stringify({
                will: will_data,
                authorization: this.props.user.token
            })            
        })
        .then(response => response.json())
        .then(result => {
            if(result.status === true)
            {
                
            }
            
        })
        .catch(err => {
            console.log("updatewill error", err);
        });
    }

    onViewWill()
    {
        this.props.navigation.navigate("ViewWillScreen");
    }

    onSendWill()
    {
        // TODO: navigate to send will screen
        this.props.navigation.navigate("DrawerScreen", {page: "EmailWillScreen"});
    }

    render()
    {
        return(
            <ImageBackground source={background} style={styles.background}>
                <View style={styles.questionContainer}>
                    <View style={styles.questionPanel}>
                        <Text style={styles.questionText}>{this.state.text}</Text>
                        <TouchableOpacity style={[styles.selectButton, {height: 'auto', padding: 30}]}
                            onPress={this.onViewWill}>
                            <Text style={styles.text}>View Will</Text>
                        </TouchableOpacity>     
                        <TouchableOpacity style={[styles.selectButton, {height: 'auto', padding: 30}]}
                            onPress={this.onSendWill}>
                            <Text style={styles.text}>Send Will</Text>
                        </TouchableOpacity>               
                    </View>
                </View>                
            </ImageBackground>
        );
    }
}

const mapStatesToProps = (state, ownProps) => {
    return {
        ...ownProps, will: state.will, user: state.user
    }
}; 
const mapDispatchToProps = dispatch => {
    return {
        setFinalWill: bindActionCreators(setFinalWill, dispatch)
    }
}
export default connect(mapStatesToProps, mapDispatchToProps)(PaymentSuccessScreen);