import React, {Component} from "react";

import background from "./../../../assets/images/background_1.png";
import { ImageBackground, TouchableOpacity, Text, View } from "react-native";
import  Icon  from "react-native-vector-icons/FontAwesome";
import styles from "./style";

class Question extends Component
{
    state = {
        text: "Would you like to leave your entire estate to your spouse upon your death?",
        selected: ""
    }

    render()
    {
        return(
            <ImageBackground source={background} style={styles.background}>
                <View style={styles.questionContainer}>
                    <View style={styles.questionPanel}>
                        <Text style={styles.questionText}>{this.state.text}</Text>
                        <TouchableOpacity style={styles.selectButton} onPress={() => {this.setState({selected: "yes"})}}>
                            {
                                this.state.selected === "yes" && 
                                <Icon name="check" style={styles.checkIcon} size={15} color="#FFF" />
                            }
                            <Text style={styles.text}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.selectButton} onPress={() => {this.setState({selected: "no"})}}>
                            {
                                this.state.selected === "no" && 
                                <Icon name="check" style={styles.checkIcon} size={15} color="#FFF" />
                            }
                            <Text style={styles.text}>No</Text>
                        </TouchableOpacity>
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

export default Question;