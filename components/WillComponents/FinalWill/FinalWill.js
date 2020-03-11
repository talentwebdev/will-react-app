import React, {Component} from "react";

import background from "./../../../assets/images/background_1.png";
import { ImageBackground, TouchableOpacity, Text, View } from "react-native";
import  Icon  from "react-native-vector-icons/FontAwesome";
import styles from "./style";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import { StackActions, NavigationActions } from 'react-navigation';
import { sendPrevWillStep, sendNextWillStep } from "./action";

class FinalWill extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            text: this.props.will.pages[this.props.will.pages.length - 1].title,
            pagedata: this.props.will.pages[this.props.will.pages.length - 1],
        }

        this.onNext = this.onNext.bind(this);
        this.onPrev = this.onPrev.bind(this);
    }

    onNext()
    {
        console.log(this.state.pagedata.value);
        this.props.sendNextWillStep(this.state.pagedata.value, this.state.pagedata);
        const resetAction = StackActions.reset({
            index: 1,
            actions: [
              NavigationActions.navigate({ routeName: 'MakeWillScreen' }),
              //NavigationActions.navigate({ routeName: "PaymentScreen" }),
              NavigationActions.navigate({ routeName: "PaymentSuccessScreen" }),
            ],
        });
        this.props.navigation.dispatch(resetAction);
    }

    onPrev()
    {
        this.props.sendPrevWillStep();
        const routeName = this.props.will.pages[this.props.will.pages.length - 2].component;
        const resetAction = StackActions.reset({
            index: 1,
            actions: [
              NavigationActions.navigate({ routeName: 'MakeWillScreen' }),
              NavigationActions.navigate({ routeName: routeName }),
            ],
        });
        this.props.navigation.dispatch(resetAction);
    }

    render()
    {
        return(
            <ImageBackground source={background} style={styles.background}>
                <View style={styles.questionContainer}>
                    <View style={styles.questionPanel}>
                        <Text style={styles.questionText}>{this.state.text}</Text>                        
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.backButton}
                            onPress={this.onPrev}>
                            <Text style={styles.text}>Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.nextButton}
                            onPress={this.onNext}>
                            <Text style={styles.text}>View Will</Text>
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
        sendPrevWillStep: bindActionCreators(sendPrevWillStep, dispatch),
        sendNextWillStep: bindActionCreators(sendNextWillStep, dispatch),
    }
}

export default connect(mapStatesToProps, mapDispatchToProps)(FinalWill);