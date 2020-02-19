import React, {Component} from "react";

import background from "./../../../assets/images/background_1.png";
import { ImageBackground, TouchableOpacity, Text, View, TextInput, Keyboard } from "react-native";
import styles from "./style";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {sendNextWillStep, sendPrevWillStep} from "./action";
import { StackActions, NavigationActions } from 'react-navigation';
import {value_names} from "./../../../questions/question";

class PeopLe extends Component
{
    constructor(props)
    {
        super(props);

        let data = this.props.will.datas[this.props.will.datas.length - 1];
        let page = this.props.will.pages[this.props.will.pages.length - 1];

        this.state = {
            text: page.title,

            name: data.name,
            passport: data.passport,
            address: data.address,

            second_name: data.second_name,
            second_passport: data.second_passport,
            second_address: data.second_address, 
            
            keyboardHeight: 0,
            page: page,
        }

        this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
        this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);

        this.onPrev = this.onPrev.bind(this);
        this.onNext = this.onNext.bind(this);
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
        if(this.state.name === "" || this.state.name === undefined || this.state.name === null || 
            this.state.passport === "" || this.state.passport === undefined || this.state.passport === null || 
            this.state.address === "" || this.state.address === undefined || this.state.address === null)
            return;

        this.props.sendNextWillStep({
            name: this.state.name,
            passport: this.state.passport,
            address: this.state.address,

            second_name: this.state.second_name,
            second_passport: this.state.second_passport,
            second_address: this.state.second_address
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
                        
                        <TextInput style={[styles.textInput, {marginTop: 10}]} 
                            placeholder="Full Name" 
                            placeholderTextColor="#FFF"
                            value={this.state.name}
                            onChangeText={(name) => {this.setState({name})}}>
                        </TextInput>
                        <TextInput style={styles.textInput} 
                            placeholder="Passport Number" 
                            placeholderTextColor="#FFF"
                            value={this.state.passport}
                            onChangeText={(passport) => {this.setState({passport})}}>
                        </TextInput>
                        <TextInput style={styles.textInput} 
                            placeholder="Address" 
                            placeholderTextColor="#FFF"
                            value={this.state.address}
                            onChangeText={(address) => {this.setState({address})}}>
                        </TextInput>

                        <TextInput style={[styles.textInput, {marginTop: 20}]}
                            placeholder="Full Name" 
                            placeholderTextColor="#FFF"
                            value={this.state.second_name}
                            onChangeText={(second_name) => {this.setState({second_name})}}>
                        </TextInput>
                        <TextInput style={styles.textInput} 
                            placeholder="Passport Number" 
                            placeholderTextColor="#FFF"
                            value={this.state.second_passport}
                            onChangeText={(second_passport) => {this.setState({second_passport})}}>
                        </TextInput>
                        <TextInput style={styles.textInput} 
                            placeholder="Address" 
                            placeholderTextColor="#FFF"
                            value={this.state.second_address}
                            onChangeText={(second_address) => {this.setState({second_address})}}>
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
    return {
        ...ownProps,
        will: state.will
    }
};
const mapDispatchToProps = dispatch => {
    return {
        sendNextWillStep: bindActionCreators(sendNextWillStep, dispatch),
        sendPrevWillStep: bindActionCreators(sendPrevWillStep, dispatch)
    }
};

export default connect(mapStatesToProps, mapDispatchToProps)(PeopLe);