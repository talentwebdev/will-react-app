import React, {Component} from "react";

import background from "./../../../assets/images/background_1.png";
import { ImageBackground, TouchableOpacity, Text, View } from "react-native";
import styles from "./style";
import { TextInput, ScrollView } from "react-native-gesture-handler";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {sendNextWillStep, sendPrevWillStep} from "./action";
import {value_names} from "./../../../questions/question";
import  Icon  from "react-native-vector-icons/FontAwesome";
import {StackActions, NavigationActions} from "react-navigation";

const contentType = {
    south_africa_people: "south_africa_people",
    uae_asset: "uae_asset",
    uae_children: "uae_children",
}
class PeopleList extends Component
{
    

    constructor(props)
    {
        super(props);

        const pagedata = this.props.will.pages[this.props.will.pages.length-1];
        const willData = this.props.will.will_data;

        let nameText = "Enter Name", idNumberText = "ID Number";
        let type = contentType.south_africa_people;

        if(pagedata.value === value_names.uae_assets || pagedata.value === value_names.specific_assets)
            nameText = "Asset", idNumberText = "Location", type = contentType.uae_asset;
        else if(willData[value_names.country_location] === "UAE" && pagedata.value === value_names.children)
            nameText = "Full Name", idNumberText = "Passport Number", type = contentType.uae_children;

        this.state = {
            text: this.props.will.pages[this.props.will.pages.length-1].title,
            children: Array.isArray(this.props.will.datas[this.props.will.datas.length-1]) && this.props.will.datas[this.props.will.datas.length-1].length > 0 ?  this.props.will.datas[this.props.will.datas.length-1] : [
                {name: "", id_number: "", nationality: ""},
            ],
            placeHolder: {
                name: nameText,
                id_number: idNumberText
            },
            pagedata: pagedata,

            isNone: false,
            type: type,
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
        else if(item === 2) children[index].nationality = value;

        this.setState({
            children: children
        });
    }

    addNewChild()
    {
        let children = [...this.state.children];
        children.push({name: "", id_number: "", nationality: ""});
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
        let items = [];
        if(this.state.type === contentType.south_africa_people || this.state.type === contentType.uae_asset)
            items = this.state.children.filter(item => item.name !== "" && item.id_number !== "");
        else if(this.state.type === contentType.uae_children)
            items = this.state.children.filter(item => item.name !== "" && item.id_number !== "" && item.nationality !== "");
        if(this.state.isNone === false && items.length === 0)
            return;
        
        this.props.sendNextWillStep(items, this.state.pagedata);
        const resetAction = StackActions.reset({
            index: 1,
            actions: [
              NavigationActions.navigate({ routeName: 'MakeWillScreen' }),
              NavigationActions.navigate({ routeName: this.state.pagedata.next.component }),
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
              NavigationActions.navigate({ routeName: this.props.will.pages[this.props.will.pages.length - 2].component }),
            ],
        });
        this.props.navigation.dispatch(resetAction);
    }

    render()
    {
        const childrenItems =  this.state.children.map((item, index) => {
            return(
                <View key={index} style={styles.listGroupContainer}>
                    <TextInput style={styles.textInput} 
                        placeholder={this.state.placeHolder.name} 
                        placeholderTextColor="#FFF"
                        value={item.name}
                        onChangeText={(name) => {this.updateChildrenList(name, index, 0)}}>
                    </TextInput>
                    <TextInput style={styles.textInput} 
                        placeholder={this.state.placeHolder.id_number} 
                        placeholderTextColor="#FFF"
                        value={item.id_number}
                        onChangeText={(id_number) => {this.updateChildrenList(id_number, index, 1)}}>
                    </TextInput>
                    {this.state.type === contentType.uae_children && 
                    <TextInput style={styles.textInput} 
                        placeholder="Nationality"
                        placeholderTextColor="#FFF"
                        value={item.nationality}
                        onChangeText={(nationality) => {this.updateChildrenList(nationality, index, 2)}}>
                    </TextInput>
                    }
                </View>
            );
        });

        return(
            <ImageBackground source={background} style={styles.background}>
                <View style={styles.listContainer}>
                    <View style={styles.listPanel}>
                        <Text style={styles.listTitleText}>{this.state.text}</Text>
                        {
                            this.state.pagedata.value === value_names.specific_assets && 
                            <TouchableOpacity style={[styles.selectButton, {marginBottom: 10}]} onPress={() => {this.setState({isNone: !this.setState.isNone})}}>
                                <Icon name="check" style={[styles.checkIcon, {opacity: (this.state.isNone === true ? 1 : 0) }]} size={15} color="#FFF" />
                                <Text style={styles.text}>None</Text>
                            </TouchableOpacity>
                        }                        
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