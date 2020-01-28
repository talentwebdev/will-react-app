import React, {Component} from "react";

import background from "./../../../assets/images/background_1.png";
import { ImageBackground, TouchableOpacity, Text, View } from "react-native";
import styles from "./style";
import { TextInput, ScrollView } from "react-native-gesture-handler";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {sendNextWillStep, sendPrevWillStep} from "./action";

class PeopleList extends Component
{
    

    constructor(props)
    {
        super(props);

        this.state = {
            text: this.props.will.pages[this.props.will.pages.length-1].title,
            children: Array.isArray(this.props.will.datas[this.props.will.datas.length-1]) && this.props.will.datas[this.props.will.datas.length-1].length > 0 ?  this.props.will.datas[this.props.will.datas.length-1] : [
                {name: "", id_number: ""},
            ],
            pagedata: this.props.will.pages[this.props.will.pages.length-1],
        };

        this.updateChildrenList = this.updateChildrenList.bind(this);
        this.addNewChild = this.addNewChild.bind(this);
        this.onNext = this.onNext.bind(this);
        this.onPrev = this.onPrev.bind(this);
    }

    updateChildrenList(value, index, item)
    {
        let children = [...this.state.children];

        if(item === 0) children[index].name = value;
        else if(item === 1) children[index].id_number = value;

        this.setState({
            children: children
        });
    }

    addNewChild()
    {
        let children = [...this.state.children];
        children.push({name: "", id_number: ""});
        this.setState({
            children: children
        });

        
    }

    componentDidUpdate()
    {
        this.refs.childrenList.scrollToEnd({animated: true});
    }

    onNext()
    {
        const items = this.state.children.filter(item => item.name !== "" && item.id_number !== "");
        this.props.sendNextWillStep(items, this.state.pagedata);
        this.props.navigation.navigate(this.state.pagedata.next.component);
    }

    onPrev()
    {
        this.props.sendPrevWillStep();
        this.props.navigation.navigate(this.props.will.pages[this.props.will.pages.length - 2].component);
    }

    render()
    {
        const childrenItems =  this.state.children.map((item, index) => {
            return(
                <View key={index} style={styles.listGroupContainer}>
                    <TextInput style={styles.textInput} 
                        placeholder="Enter Name" 
                        placeholderTextColor="#FFF"
                        value={item.name}
                        onChangeText={(name) => {this.updateChildrenList(name, index, 0)}}>
                    </TextInput>
                    <TextInput style={styles.textInput} 
                        placeholder="ID Number" 
                        placeholderTextColor="#FFF"
                        value={item.id_number}
                        onChangeText={(id_number) => {this.updateChildrenList(id_number, index, 1)}}>
                    </TextInput>
                </View>
            );
        });

        return(
            <ImageBackground source={background} style={styles.background}>
                <View style={styles.listContainer}>
                    <View style={styles.listPanel}>
                        <Text style={styles.listTitleText}>{this.state.text}</Text>
                        <ScrollView ref='childrenList' style={styles.listScrollView}>
                            {
                                childrenItems
                            }
                            
                        </ScrollView>
                        <TouchableOpacity onPress={this.addNewChild} style={styles.addMoreButton}>
                            <Text style={styles.text}>Add More</Text>
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
    return {
        ...ownProps, will: state.will
    };
};

const mapDispatchToProps = dispatch => {
    return {
        sendNextWillStep: bindActionCreators(sendNextWillStep, dispatch),
        sendPrevWillStep: bindActionCreators(sendPrevWillStep, dispatch),
    };
};

export default connect(mapStatesToProps, mapDispatchToProps)(PeopleList);