import React, {Component} from "react";

import background from "./../../../assets/images/background_1.png";
import { ImageBackground, TouchableOpacity, Text, View } from "react-native";
import  Icon  from "react-native-vector-icons/FontAwesome";
import styles from "./style";
import {sendNextWillStep, sendPrevWillStep} from "./action";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import { StackActions, NavigationActions } from 'react-navigation';

class SelectOption extends Component
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

        let data;
        switch(this.state.selected)
        {
            case "cop": 
                data = "In Cop";
                break;
            case "out_of_cop_without_accural":
                data = "Out of COP without ACCRUAL";
                break;
            case "out_of_cop_with_accural": 
                data = "Out of COP with ACCRUAL";
                break;

        }
        this.props.sendNextWillStep(this.state.selected, this.state.pagedata);
        let routeName = this.state.pagedata.next.component;        

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
                        <TouchableOpacity style={styles.selectButton} onPress={() => {this.setState({selected: "out_of_cop_without_accural"})}}>
                            <Icon name="check" style={[styles.checkIcon, {opacity: (this.state.selected === "out_of_cop_without_accural" ? 1 : 0) }]} size={15} color="#FFF" />
                            <Text style={styles.text}>Out of COP without ACCRUAL</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.selectButton} onPress={() => {this.setState({selected: "out_of_cop_with_accural"})}}>
                                <Icon name="check" style={[styles.checkIcon, {opacity: (this.state.selected === "out_of_cop_with_accural" ? 1 : 0)}]} size={15} color="#FFF" />
                            <Text style={styles.text}>Out of COP with ACCRUAL</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.selectButton} onPress={() => {this.setState({selected: "cop"})}}>
                            <Icon name="check" style={[styles.checkIcon, {opacity: (this.state.selected === "cop" ? 1 : 0) }]} size={15} color="#FFF" />
                            <Text style={styles.text}>In COP</Text>
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
export default connect(mapStatesToProps, mapDispatchToProps)(SelectOption);