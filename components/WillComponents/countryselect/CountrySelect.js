import React, {Component} from "react";

import background from "./../../../assets/images/background_1.png";
import { ImageBackground, TouchableOpacity, Text, View, Picker } from "react-native";
import  Icon  from "react-native-vector-icons/Ionicons";
import styles, {pickerStyle} from "./style";
import RNPickerSelect from "react-native-picker-select";
import {connect} from "react-redux";
import { sendNextWillStep, sendPrevWillStep } from "./action";
import { bindActionCreators } from "redux";
import { StackActions, NavigationActions } from 'react-navigation';

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

        const data  = this.props.will.datas[this.props.will.datas.length - 1];
        this.state = {
            text: this.props.will.pages[this.props.will.pages.length - 1].title,
            location:  data === undefined || data === null || data === ""  ? "None" : data,
            pagedata: this.props.will.pages[this.props.will.pages.length - 1],
        };

        this.onNext = this.onNext.bind(this);
        this.onPrev = this.onPrev.bind(this);      
    }

    onNext()
    {   
        if(this.state.location !== "" && this.state.location !== null && this.state.location !== 'None')
        {
            let routeName;

            this.props.sendNextWillStep(this.state.location, this.state.pagedata);
            switch(this.state.location)
            {
            case "South Africa": 
                {                    
                    routeName = this.state.pagedata.south_africa.component;
                    break;
                }
            case "UAE": 
                {
                    routeName = this.state.pagedata.uae.component;
                    break;
                }
            }

            const resetAction = StackActions.reset({
                index: 1,
                actions: [
                  NavigationActions.navigate({ routeName: 'MakeWillScreen' }),
                  NavigationActions.navigate({ routeName: routeName }),
                ],
            });
            this.props.navigation.dispatch(resetAction);
        }
    }

    onPrev()
    {
        if(this.state.location !== "")
        {
            this.props.sendPrevWillStep();
            this.props.navigation.navigate("MakeWillScreen");
        }
    }

    render()
    {
        const placeholder = {
            label: 'Select a Location...',
            value: "None",
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
                        <TouchableOpacity style={styles.backButton}
                            onPress={this.onPrev}>
                            <Text style={styles.text}>Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.nextButton}
                            onPress={this.onNext}>
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
    sendPrevWillStep: bindActionCreators(sendPrevWillStep, dispatch),
});
export default connect(mapStatesToProps, mapDispatchToProps)( CountrySelect);

