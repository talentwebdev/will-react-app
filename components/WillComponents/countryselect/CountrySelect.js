import React, {Component} from "react";

import background from "./../../../assets/images/background_1.png";
import { ImageBackground, TouchableOpacity, Text, View, Picker } from "react-native";
import  Icon  from "react-native-vector-icons/Ionicons";
import styles, {pickerStyle} from "./style";
import RNPickerSelect from "react-native-picker-select";
import {connect} from "react-redux";
import { sendNextWillStep } from "./action";

const countries = [
    {
        label: "South Africa", 
        value: 'South Africa',
    },
    {
        label: "UAE", 
        value: 'UAE',
    }
]


class CountrySelect extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            text: "Would you like to leave your entire estate to your spouse upon your death?",
            selected: "",
            location: "",
        };

        this.onNext = this.onNext.bind(this);
        this.onPrev = this.onPrev.bind(this);
    }

    onNext()
    {   
        if(this.state.location !== "")
        {
            this.props.sendNextWillStep(this.state.location);
            this.props.navigation.navigate(this.state.will.pages.next.Component)
        }
    }

    render()
    {
        const placeholder = {
            label: 'Select a Location...',
            value: null,
            color: '#9EA0A4',
            
          };

        return(
            <ImageBackground source={background} style={styles.background}>
                <View style={styles.questionContainer}>
                    <View style={styles.questionPanel}>
                        <View style={styles.questionTextContainer}>
                            <Text style={styles.questionText}>{this.state.text}</Text>
                        </View>

                        <View>
                            <Text style={[styles.text, {textAlign: "left"}]}>
                                Country of Residence
                            </Text>
                            <RNPickerSelect
                                placeholder={placeholder}
                                items={countries}
                                onValueChange={value => {
                                    this.setState({
                                        location: value,
                                    });
                                }}
                                style={{
                                    ...pickerStyle,
                                    iconContainer: {
                                        top: 10,
                                        right: 12,
                                    },
                                }}
                                value={this.state.location}
                                useNativeAndroidPickerStyle={false} 
                                Icon={() => {
                                    return <Icon name="ios-arrow-down" size={20} color="white" />;
                                }}
                                />
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.backButton}>
                            <Text style={styles.text}>Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.nextButton}>
                            <Text style={styles.text}>Next</Text>
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

const mapDispatchToProps = dispatch => ({
    sendNextWillStep: bindActionCreators(sendNextWillStep, dispatch),
});
export default connect(mapStatesToProps, mapDispatchToProps)( CountrySelect);

