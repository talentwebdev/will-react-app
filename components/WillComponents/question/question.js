import React, {Component} from "react";

import background from "./../../../assets/images/background_1.png";
import { ImageBackground, TouchableOpacity, Text, View } from "react-native";
import  Icon  from "react-native-vector-icons/FontAwesome";
import styles from "./style";
import {sendNextWillStep, sendPrevWillStep} from "./action";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import { StackActions, NavigationActions } from 'react-navigation';

class Question extends Component
{
   

    constructor(props)
    {
        super(props);
        this.state = {
            text: this.props.will.pages[this.props.will.pages.length - 1].title,
            selected: this.props.will.datas[this.props.will.datas.length - 1],
            pagedata: this.props.will.pages[this.props.will.pages.length - 1],
        }

        this.onNext = this.onNext.bind(this);
        this.onPrev = this.onPrev.bind(this);
    }

    onNext()
    {
        if(this.state.selected === undefined || this.state.selected === "" || this.state.selected === null)
            return;
        
        this.props.sendNextWillStep(this.state.selected, this.state.pagedata);
        let routeName;
        if(this.state.selected === "yes")
        {
            routeName = this.state.pagedata.yes.component;
            
        }
        else if(this.state.selected === "no")
        {
            routeName = this.state.pagedata.no.component;
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
                        <TouchableOpacity style={styles.selectButton} onPress={() => {this.setState({selected: "yes"})}}>
                            <Icon name="check" style={[styles.checkIcon, {opacity: (this.state.selected === "yes" ? 1 : 0) }]} size={15} color="#FFF" />
                            <Text style={styles.text}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.selectButton} onPress={() => {this.setState({selected: "no"})}}>
                                <Icon name="check" style={[styles.checkIcon, {opacity: (this.state.selected === "no" ? 1 : 0)}]} size={15} color="#FFF" />
                            <Text style={styles.text}>No</Text>
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