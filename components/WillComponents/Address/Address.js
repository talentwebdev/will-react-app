import React, {Component} from "react";

import background from "./../../../assets/images/background_1.png";
import { ImageBackground, TouchableOpacity, Text, View, TextInput, Keyboard } from "react-native";
import styles from "./style";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {sendNextWillStep, sendPrevWillStep} from "./action";
import { StackActions, NavigationActions } from 'react-navigation';

class Address extends Component
{
    constructor(props)
    {
        super(props);

        
        let page = this.props.will.pages[this.props.will.pages.length - 1];
        let data = this.props.will.datas[this.props.will.datas.length - 1];
        this.state = {
            text: page.title,
            address: data.address,
            city: data.city,
            post_code : data.post_code,
            keyboardHeight: 0,
            page: page,
        }

        this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
        this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);

        this.onNext = this.onNext.bind(this);
        this.onPrev = this.onPrev.bind(this);

    }

    componentWillUnmount() {
        this.keyboardDidShowSub.remove();
        this.keyboardDidHideSub.remove();
    }

    handleKeyboardDidShow = (event) => {
        this.setState({keyboardHeight: event.endCoordinates.height});
    }

    handleKeyboardDidHide = (event) => {
        this.setState({keyboardHeight: 0});
    }

    onNext()
    {
        if(this.state.address === null || this.state.address === "" || this.state.address === undefined || 
            this.state.city === null || this.state.city === "" || this.state.city === undefined || 
            this.state.post_code === null || this.state.post_code === "" || this.state.post_code === undefined)
            return; 

        
        this.props.sendNextWillStep({
            address: this.state.address,
            city: this.state.city,
            post_code: this.state.post_code
        }, this.state.page);
        const resetAction = StackActions.reset({
            index: 1,
            actions: [
              NavigationActions.navigate({ routeName: 'MakeWillScreen' }),
              NavigationActions.navigate({ routeName: this.state.page.next.component }),
            ],
        });
        this.props.navigation.dispatch(resetAction);
    }

    onPrev()
    {
        this.props.sendPrevWillStep();
        const resetAction = StackActions.reset({
            index: 1,
            actions: [
              NavigationActions.navigate({ routeName: 'MakeWillScreen' }),
              NavigationActions.navigate({ routeName: this.props.will.pages[this.props.will.pages.length - 2].component }),
            ],
        });
        this.props.navigation.dispatch(resetAction);
    }

    render()
    {
        return(
            <ImageBackground source={background} style={styles.background}>
                <View style={[styles.questionContainer]}>
                    <View style={[styles.questionPanel, {marginBottom: this.state.keyboardHeight}]}>
                        <Text style={styles.questionText}>{this.state.text}</Text>
                        <TextInput style={styles.textInput} 
                            placeholder="Address" 
                            placeholderTextColor="#FFF"
                            value={this.state.address}
                            onChangeText={(address) => {this.setState({address: address})}}>
                        </TextInput>
                        <TextInput style={styles.textInput} 
                            placeholder="City" 
                            placeholderTextColor="#FFF"
                            value={this.state.city}
                            onChangeText={(city) => { this.setState({city: city})}}>
                        </TextInput>
                        <TextInput style={styles.textInput} 
                            placeholder="Post Code" 
                            placeholderTextColor="#FFF"
                            value={this.state.post_code}
                            onChangeText={(post_code) => {this.setState({post_code: post_code})}}>
                        </TextInput>
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
    return { ...ownProps, will: state.will };
}
const mapDispatchToProps = dispatch => {
    return {
        sendNextWillStep: bindActionCreators(sendNextWillStep, dispatch),
        sendPrevWillStep: bindActionCreators(sendPrevWillStep, dispatch)
    }
}
export default connect(mapStatesToProps, mapDispatchToProps)(Address);