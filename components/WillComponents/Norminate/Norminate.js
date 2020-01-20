import React, {Component} from "react";

import background from "./../../../assets/images/background_1.png";
import { ImageBackground, TouchableOpacity, Text, View, TextInput, Keyboard, Easing } from "react-native";
import  Icon  from "react-native-vector-icons/FontAwesome"
import styles from "./style";
import Animated from "react-native-reanimated";

class Norminate extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            text: "Who would you like to norminate or appoint as the guardian of your child/children?",
            name: "",
            id_number: "",
            keyboardHeight: 0,
        }

        this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
        this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
    }

    componentWillUnmount() {
        this.keyboardDidShowSub.remove();
        this.keyboardDidHideSub.remove();
    }

    handleKeyboardDidShow = (event) => {
        this.setState({keyboardHeight: event.endCoordinates.height});
        /*
        Animated.timing(this.keyboardHeight, {
            duration: event.duration,
            toValue: event.endCoordinates.height,
        }).start();
        */
    }

    handleKeyboardDidHide = (event) => {
        this.setState({keyboardHeight: 0});
    }

    render()
    {
        return(
            <ImageBackground source={background} style={styles.background}>
                <View style={[styles.questionContainer]}>
                    <View style={[styles.questionPanel, {marginBottom: this.state.keyboardHeight}]}>
                        <Text style={styles.questionText}>{this.state.text}</Text>
                        <TextInput style={styles.textInput} 
                            placeholder="Enter Name" 
                            placeholderTextColor="#FFF"
                            value={this.state.name}
                            onChangeText={(name) => {console.log(this.state.name); this.setState({name})}}>
                        </TextInput>
                        <TextInput style={styles.textInput} 
                            placeholder="ID Number" 
                            placeholderTextColor="#FFF"
                            value={this.state.id_number}
                            onChangeText={(id_number) => {this.setState({id_number})}}>
                        </TextInput>
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

export default Norminate;