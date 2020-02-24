import React, {Component} from "react";

import background from "./../../../assets/images/background_1.png";
import { ImageBackground, TouchableOpacity, Text, View } from "react-native";
import  Icon  from "react-native-vector-icons/FontAwesome";
import styles from "./style";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import {value_names} from "./../../../questions/question";

class Payment extends Component
{
    constructor(props)
    {
        super(props);
        let type = 0; // South Africa
        let will_data = props.will.will_data;
        if(will_data[value_names.country_location] === "UAE" )
        {
            if(will_data[value_names.mirror] === "Yes")
            {
                type = 1; // Mirror
            }
            else 
            {
                type = 2; // Non Mirror
            }
        }
        this.state = {
            text: "Before We make your will. Please make Payment",
            type: type,
        }

        this.onPrev = this.onPrev.bind(this);
    }   

    onPrev()
    {
        const routeName = this.props.will.pages[this.props.will.pages.length - 1];        
        this.props.navigation.navigate(routeName);
    }

    render()
    {
        return(
            <ImageBackground source={background} style={styles.background}>
                <View style={styles.questionContainer}>
                    <View style={styles.questionPanel}>
                        <Text style={styles.questionText}>{this.state.text}</Text>
                        <TouchableOpacity style={styles.selectButton}
                            onPress={() => {this.props.navigation.navigate("PaymentWebViewScreen", {type: this.state.type})}}>
                            { this.state.type  === 0 && 
                                <Text style={styles.text}>WeWill Will - R399</Text>
                            }
                            { this.state.type  === 1 && 
                                <Text style={styles.text}>WeWill Will - Dhs1999</Text> // Mirror
                            }
                            { this.state.type  === 2 && 
                                <Text style={styles.text}>WeWill Will - Dhs1599</Text> // Non Mirror
                            }
                        </TouchableOpacity>
                        {(this.state.type === 1 || this.state.type === 2) && 
                            <Text style={styles.text}>This amount will be converted into Rands on payment </Text>
                        }

                        
                        
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