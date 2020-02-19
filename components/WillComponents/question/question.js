import React, {Component} from "react";

import background from "./../../../assets/images/background_1.png";
import { ImageBackground, TouchableOpacity, Text, View } from "react-native";
import  Icon  from "react-native-vector-icons/FontAwesome";
import styles from "./style";
import {sendNextWillStep, sendPrevWillStep} from "./action";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import { StackActions, NavigationActions } from 'react-navigation';
import {value_names} from "./../../../questions/question";

class Question extends Component
{
   

    constructor(props)
    {
        super(props);

        const pagedata = this.props.will.pages[this.props.will.pages.length - 1];
        this.state = {
            text: this.props.will.pages[this.props.will.pages.length - 1].title,
            selected: this.props.will.datas[this.props.will.datas.length - 1],
            pagedata: pagedata,
            yesText: pagedata.value === value_names.dubai_court ? "Dubai" : "Yes",
            // when change this text, you should change the text also in action.js
            noText: pagedata.value === value_names.dubai_court ? "Abu Dhabi" : "No",
        }

        this.onNext = this.onNext.bind(this);
        this.onPrev = this.onPrev.bind(this);
    }

    onNext()
    {
        if(this.state.selected === undefined || this.state.selected === "" || this.state.selected === null)
            return;
        
            console.log("QuestionScreen", this.state.selected);
        this.props.sendNextWillStep(this.state.selected, this.state.pagedata);
        let routeName;
        if(this.state.selected === this.state.yesText)
        {
            routeName = this.state.pagedata.yes.component;
            
        }
        else if(this.state.selected === this.state.noText)
        {
            routeName = this.state.pagedata.no.component;
        }
        console.log("QuestionScreen", routeName);

        const resetAction = StackActions.reset({
            index: 1,
            actions: [
              NavigationActions.navigate({ routeName: 'MakeWillScreen' }),
              NavigationActions.navigate({ routeName: routeName }),
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
              NavigationActions.navigate({ routeName:  this.props.will.pages[this.props.will.pages.length - 2].component}),
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
                        <TouchableOpacity style={styles.selectButton} onPress={() => {this.setState({selected: this.state.yesText})}}>
                            <Icon name="check" style={[styles.checkIcon, {opacity: (this.state.selected === this.state.yesText ? 1 : 0) }]} size={15} color="#FFF" />
                            <Text style={styles.text}>{this.state.yesText}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.selectButton} onPress={() => {this.setState({selected: this.state.noText})}}>
                                <Icon name="check" style={[styles.checkIcon, {opacity: (this.state.selected === this.state.noText ? 1 : 0)}]} size={15} color="#FFF" />
                            <Text style={styles.text}>{this.state.noText}</Text>
                        </TouchableOpacity>
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
        sendPrevWillStep: bindActionCreators(sendPrevWillStep, dispatch),
    };
}
export default connect(mapStatesToProps, mapDispatchToProps)(Question);