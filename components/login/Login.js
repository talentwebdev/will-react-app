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
        Image
    } from "react-native";
import Icon  from "react-native-vector-icons/AntDesign";

// import style
import styles from "./style";

// import images
import background from "./../../assets/images/background.png";

class Login extends Component{
    constructor(props)
    {
        super(props);
        
        this.state = {
            keyboardshow: false,
            styles: {
                container: styles.container,
                container_keyboard: styles.container_keyboard
            }
        }

        this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
        this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
    }


    componentWillUnmount() {
        this.keyboardDidShowSub.remove();
        this.keyboardDidHideSub.remove();
    }

    handleKeyboardDidShow = (event) => {
        const { height } = Dimensions.get('window');
        const keyboardHeight = event.endCoordinates.height;
        console.log(height - keyboardHeight);

        this.setState({
            keyboardshow: true
        });

        this.setState((state) => ({
            ...state, 
            styles: {
                ...state.styles,
                container_keyboard: {
                    ...state.styles.container_keyboard,
                    height: height - keyboardHeight,
                }
            }
        }));
    }

    handleKeyboardDidHide = (event) => {
        this.setState({
            keyboardshow: false
        });
    }


    render(){
        return (
            <ImageBackground source={background} style={styles.background} >
                <SafeAreaView style={
                                this.state.keyboardshow ? 
                                this.state.styles.container_keyboard : 
                                this.state.styles.container
                                }>
                    {
                        this.state.keyboardshow && 
                        <Text style={styles.loginText}>
                            Login
                        </Text>
                    }
                    
                    <View style={styles.inputContainer}>
                        <Image
                            style={styles.logoImage} 
                            source={require('./../../assets/images/logo.png')}
                            >                        
                        </Image>
                        <TextInput 
                            style={styles.textInput}
                            autoComplete ="email"
                            placeholder="Email" 
                             keyboardType="email-address"
                            placeholderTextColor="#FFF"
                            />
                        <TextInput 
                            style={styles.textInput}
                            autoComplete ="password"
                            placeholder="Password" 
                            placeholderTextColor="#FFF"
                            type="password"
                            secureTextEntry={true}
                            />

                        <TouchableOpacity 
                            style={styles.login_btn}>

                            <Text style={styles.text}>
                                Login
                            </Text>

                        </TouchableOpacity>

                        
                    </View>
                    <TouchableOpacity 
                        style={styles.back_btn}>
                        <Text style={styles.text}>
                            Back
                        </Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </ImageBackground>
        );
    }
}

export default Login;