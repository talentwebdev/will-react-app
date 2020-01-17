import React, {Component} from "react";
import { ImageBackground, View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import {RadioButton, RadioButtonInput, RadioButtonLabel} from "react-native-simple-radio-button";
import Icon from "react-native-vector-icons/Feather";

import styles from "./style";
import base_images from "./../../stylebase/images";

import background from "./../../assets/images/background.png";

class Notifications extends Component 
{
    state = {
        items: [
            { key: "1", title: "12345"},
            { key: "2", title: "12345"},
            { key: "3", title: "12345"},
            { key: "4", title: "12345"},
            { key: "5", title: "12345"},
            { key: "6", title: "12345"},
            { key: "7", title: "12345"},
            { key: "8", title: "12345"},
            { key: "9", title: "12345"},
            { key: "10", title: "12345"},
            { key: "11", title: "12345"},
            { key: "12", title: "12345"},
            { key: "13", title: "12345"},
            { key: "14", title: "12345"},
            { key: "15", title: "12345"},
            { key: "16", title: "12345"},
            { key: "17", title: "12345"},
            { key: "18", title: "12345"},
        ],
        selectedItem: -1
    }

    constructor(props)
    {
        super(props);

        this.renderItem = this.renderItem.bind(this);
    }
    renderItem = ({item}) => {
        return (
            <View key={item.key} style={styles.listItemContainer}>
                <RadioButton labelHorizontal={true} key={item.index}>
                    <RadioButtonInput
                        obj={{label: item.title, value: item.key }}
                        index={item.index}
                        isSelected={true}
                        borderWidth={1}
                        buttonInnerColor={this.state.selectedItem == item.key ? "#FFF" : 'rgba(0, 0, 0, 0)'}
                        buttonOuterColor={"#FFF"}
                        buttonSize={20}
                        buttonOuterSize={20}
                        onPress={() => {this.setState({selectedItem: item.key})}}
                        buttonStyle={{}}
                        buttonWrapStyle={{marginLeft: 10}}
                        />
                    <RadioButtonLabel
                        obj={{label: item.title, value: item.key }}
                        index={item.index}
                        labelHorizontal={true}
                        onPress={() => {this.setState({selectedItem: item.key})}}
                        labelStyle={{fontSize: 20, color: '#FFF'}}
                        labelWrapStyle={{}}
                        />
                </RadioButton>
            </View>
        );
    }

    render()
    {
        return (
            <ImageBackground source={background} style={styles.background}>
                <Icon name="menu" color="#FFF" style={styles.menuIcon} size={30} onPress={() => {console.log(this.props.navigation); this.props.navigation.openDrawer()}}></Icon>
                <View style={styles.toplogoContainer}>                    
                    <Image source={base_images.logo.small_image.source} style={[base_images.logo.small_image.style, {zIndex: 1000}]} onPress={() => {console.log("clicked");this.props.navigation.navigate("HomeScreen")}}></Image>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Notifications</Text>
                </View>
                <View style={styles.listContainer}>
                    <FlatList data={this.state.items} extraData={this.state.selectedItem} renderItem={this.renderItem} style={styles.flatList}></FlatList>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate("HomeScreen")}}>
                        <Text style={styles.text}>Back</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

export default Notifications;