import React, {Component} from "react";
import { ImageBackground, View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import {RadioButton, RadioButtonInput, RadioButtonLabel} from "react-native-simple-radio-button";
import Icon from "react-native-vector-icons/Feather";

import styles from "./style";
import base_images from "./../../stylebase/images";

import background from "./../../assets/images/background.png";
import { API_URL } from "../../Environment/Environment";
import { connect } from "react-redux";


class Notifications extends Component 
{

    constructor(props)
    {
        super(props);

        this.state = {
            items: [],
        }

        this.renderItem = this.renderItem.bind(this);
        this.onSelect = this.onSelect.bind(this);

        fetch(API_URL+"/notification/fetch", {
            method: "POST",
            body: JSON.stringify({
                authorization: this.props.user.token
            })
        })
        .then(response => response.json())
        .then(responseJson => {
            console.log("fetch notification success", responseJson);
            if(responseJson.status === true)
            {
                let items = responseJson.data.map(item => ({...item}));
                this.setState({items: items});
            }
        })
        .catch(err => {
            console.log("fetch notification error", err);
        });

        
    }

    onSelect = (index) => {
        let items = [...this.state.items];

        items[index].read = true;
        this.setState({
            items: items
        });

        this.props.navigation.navigate("NotificationDetailScreen", {
            id: items[index].id,
            title: items[index].title,
            content: items[index].content
        });
    }
    renderItem = (_item) => {
        return (
            <View key={_item.item.key} style={styles.listItemContainer}>
                <RadioButton labelHorizontal={true} key={_item.index}>
                    <RadioButtonInput
                        obj={{label: _item.item.title, value: _item.key }}
                        index={_item.index}
                        isSelected={true}
                        borderWidth={1}
                        buttonInnerColor={_item.item.read === true ? "#FFF" : 'rgba(0, 0, 0, 0)'}
                        buttonOuterColor={"#FFF"}
                        buttonSize={20}
                        buttonOuterSize={20}
                        onPress={() => {this.onSelect(_item.index )}}
                        buttonStyle={{}}
                        buttonWrapStyle={{marginLeft: 10}}
                        />
                    <RadioButtonLabel
                        obj={{label: _item.item.title, value: _item.key }}
                        index={_item.item.index}
                        labelHorizontal={true}
                        onPress={() => {this.onSelect(_item.index )}}
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
                <Icon name="menu" color="#FFF" style={styles.menuIcon} size={30} onPress={() => {this.props.navigation.openDrawer()}}></Icon>
                <View style={styles.toplogoContainer}>                    
                    <Image source={base_images.logo.small_image.source} style={[base_images.logo.small_image.style, {zIndex: 1000}]} onPress={() => {this.props.navigation.navigate("HomeScreen")}}></Image>
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


const mapStatesToProps = (state, props) => {
    return {
        ...props,
        user: state.user
    }
}
export default connect(mapStatesToProps)(Notifications);