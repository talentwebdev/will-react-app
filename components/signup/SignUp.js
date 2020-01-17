import React, {Component} from "react";
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

// import style
import styles from "./style";

// import images
import background from "./../../assets/images/background.png";

class SignUp extends Component{
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
            }
        }
        this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
        this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
        this.keyDismiss = this.keyDismiss.bind(this);
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

    keyDismiss() {
        console.log("clicked");
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
                            />
                        <TextInput 
                            style={this.state.keyboardshow ? 
                                this.state.styles.textInput_keyboard : 
                                this.state.styles.textInput}
                            placeholder="Surname" 
                            placeholderTextColor="#FFF"
                            />
                        <TextInput 
                            style={this.state.keyboardshow ? 
                                this.state.styles.textInput_keyboard : 
                                this.state.styles.textInput}
                            placeholder="ID Number" 
                            placeholderTextColor="#FFF"
                            />
                        <TextInput 
                            style={this.state.keyboardshow ? 
                                this.state.styles.textInput_keyboard : 
                                this.state.styles.textInput}
                            placeholder="Email" 
                            placeholderTextColor="#FFF"
                            />
                        <TextInput 
                            style={this.state.keyboardshow ? 
                                this.state.styles.textInput_keyboard : 
                                this.state.styles.textInput}
                            placeholder="Password" 
                            placeholderTextColor="#FFF"
                            />
                        <TextInput 
                            style={this.state.keyboardshow ? 
                                this.state.styles.textInput_keyboard : 
                                this.state.styles.textInput}
                            placeholder="Confirm Password" 
                            placeholderTextColor="#FFF"
                            />
                    </View>
                    <View style={this.state.keyboardshow ? 
                                this.state.styles.buttonContainer_keyboard : 
                                this.state.styles.buttonContainer}>

                        <TouchableOpacity 
                            style={this.state.keyboardshow ? 
                                    this.state.styles.getstarted_btn_keyboard : 
                                    this.state.styles.getstarted_btn}>

                            <Text style={styles.text}>
                                Get Started
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={this.state.keyboardshow ? 
                                    this.state.styles.back_btn_keyboard : 
                                    this.state.styles.back_btn}>

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

export default SignUp;