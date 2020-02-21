import React, {Component} from "react";
import ValidationComponent from 'react-native-form-validator';
import { 
        ImageBackground, 
        TouchableOpacity, 
        View, 
        Text, 
        Keyboard, 
        SafeAreaView, 
        Dimensions, 
        TextInput, 
        Image,
        TouchableWithoutFeedback 
    } from "react-native";
import Icon  from "react-native-vector-icons/AntDesign";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
// import style
import styles from "./style";
import {setUserData} from "./action";

// import images
import background from "./../../assets/images/background.png";

class SignUp extends ValidationComponent{
    constructor(props)
    {
        super(props);
        
        this.state = {
            keyboardshow: false,
            styles: {
                inputContainer: styles.inputContainer,
                inputContainer_keyboard: styles.inputContainer_keyboard,
                textInput: styles.textInput,
                textInput_keyboard: styles.textInput_keyboard,
                buttonContainer: styles.buttonContainer,
                buttonContainer_keyboard: styles.buttonContainer_keyboard,
                getstarted_btn: styles.getstarted_btn,
                getstarted_btn_keyboard: styles.getstarted_btn_keyboard,
                back_btn: styles.back_btn,
                back_btn_keyboard: styles.back_btn_keyboard
            },
            name: "",
            surname: "",
            id_number: "",
            email: "",
            password: "",
            confirmpassword: "",
            loading: false,
        }
        this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
        this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);

        this.onGetStarted = this.onGetStarted.bind(this);
    }


    componentWillUnmount() {
        this.keyboardDidShowSub.remove();
        this.keyboardDidHideSub.remove();
    }

    handleKeyboardDidShow = (event) => {
        const { height } = Dimensions.get('window');
        const keyboardHeight = event.endCoordinates.height;

        const x = parseFloat(height - keyboardHeight - 30 - 20) / 10.0;
        
        this.setState({
            keyboardshow: true
        });

        this.setState((state) => ({
            ...state, 
            styles: {
                ...state.styles,
                inputContainer_keyboard: {
                    ...state.styles.inputContainer_keyboard,
                    marginTop: x / 3.0,
                },
                textInput_keyboard: {
                    ...state.styles.textInput_keyboard,
                    height: x,
                    marginTop: x / 3.0,
                },
                buttonContainer_keyboard: {
                    ...state.styles.buttonContainer_keyboard,
                    marginTop: x / 3.0
                },
                back_btn_keyboard: {
                    ...state.styles.back_btn_keyboard,
                    height: x,
                },
                getstarted_btn_keyboard: {
                    ...state.styles.getstarted_btn_keyboard,
                    height: x
                }
            }
        }));
    }

    handleKeyboardDidHide = (event) => {
        this.setState({
            keyboardshow: false
        });
    }


    onGetStarted()
    {
        this.validate({
            name: {minlength:1, required: true},
            surname: {minlength:1, required: true},
            email: {email: true, required: true},
            id_number: {numbers: true, required: true},
            password: {minlength: 5, required: true},
            confirmpassword: {minlength: 5, required: true},
        });

        if(this.isFormValid() && this.state.password === this.state.confirmpassword)
        {
            this.props.actions({
                name: this.state.name,
                surname:  this.state.surname,
                email: this.state.email,
                id_number: this.state.id_number,
                password: this.state.password,
                confirmpassword: this.state.confirmpassword
            });
            this.props.navigation.navigate("IdentifyScreen");
            
        }
        else{
        }
    }

    render(){
        return (
            <ImageBackground source={background} style={styles.background} >
                
                <SafeAreaView style={styles.container}>
                    {
                        this.state.keyboardshow && 
                        <TouchableOpacity style={styles.back} onPress={Keyboard.dismiss} >
                            <Icon name={"left"} color="#FFF" size={20} />
                        
                        </TouchableOpacity>
                    }
                    
                    {
                        this.state.keyboardshow && 
                        <Text style={styles.signupText}>
                            Sign Up
                        </Text>
                    }
                    
                    <View style={this.state.keyboardshow ? 
                                    this.state.styles.inputContainer_keyboard : 
                                    this.state.styles.inputContainer}>
                        <TextInput 
                            style={this.state.keyboardshow ? 
                                this.state.styles.textInput_keyboard : 
                                this.state.styles.textInput}
                            placeholder="Name" 
                            placeholderTextColor="#FFF"
                            ref="name"
                            value={this.state.name}
                            onChangeText={(name) => {this.setState({name})}}
                            />
                        <TextInput 
                            style={this.state.keyboardshow ? 
                                this.state.styles.textInput_keyboard : 
                                this.state.styles.textInput}
                            placeholder="Surname" 
                            placeholderTextColor="#FFF"
                            ref="surname"
                            value={this.state.surname}
                            onChangeText={(surname) => {this.setState({surname})}}
                            />
                        <TextInput 
                            style={this.state.keyboardshow ? 
                                this.state.styles.textInput_keyboard : 
                                this.state.styles.textInput}
                            placeholder="ID Number" 
                            placeholderTextColor="#FFF"
                            ref="id_number"
                            value={this.state.id_number}
                            onChangeText={(id_number) => {this.setState({id_number})}}
                            />
                        <TextInput 
                            style={this.state.keyboardshow ? 
                                this.state.styles.textInput_keyboard : 
                                this.state.styles.textInput}
                            placeholder="Email" 
                            placeholderTextColor="#FFF"
                            ref="email"
                            keyboardType="email-address"
                            value={this.state.email}
                            onChangeText={(email) => {this.setState({email})}}
                            />
                        <TextInput 
                            style={this.state.keyboardshow ? 
                                this.state.styles.textInput_keyboard : 
                                this.state.styles.textInput}
                            placeholder="Password" 
                            placeholderTextColor="#FFF"
                            ref="password"
                            value={this.state.password}
                            onChangeText={(password) => {this.setState({password})}}
                            secureTextEntry={true}
                            />
                        <TextInput 
                            style={this.state.keyboardshow ? 
                                this.state.styles.textInput_keyboard : 
                                this.state.styles.textInput}
                            placeholder="Confirm Password" 
                            placeholderTextColor="#FFF"
                            ref="confirmpassword"
                            value={this.state.confirmpassword}
                            onChangeText={(confirmpassword) => {this.setState({confirmpassword})}}
                            secureTextEntry={true}
                            />
                    </View>
                    <View style={this.state.keyboardshow ? 
                                this.state.styles.buttonContainer_keyboard : 
                                this.state.styles.buttonContainer}>

                        <TouchableOpacity 
                            style={this.state.keyboardshow ? 
                                    this.state.styles.getstarted_btn_keyboard : 
                                    this.state.styles.getstarted_btn}
                            onPress={() => {this.onGetStarted()}}
                                    >

                            <Text style={styles.text}>
                                Get Started
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={this.state.keyboardshow ? 
                                    this.state.styles.back_btn_keyboard : 
                                    this.state.styles.back_btn}
                            onPress={() => {this.props.navigation.navigate("OpenScreen");}}>

                            <Text style={styles.text}>
                                Back
                            </Text>
                        </TouchableOpacity>
                    
                    </View>
                </SafeAreaView>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(setUserData, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);