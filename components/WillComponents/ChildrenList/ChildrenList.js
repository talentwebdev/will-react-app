import React, {Component} from "react";

import background from "./../../../assets/images/background_1.png";
import { ImageBackground, TouchableOpacity, Text, View } from "react-native";
import styles from "./style";
import { TextInput, ScrollView } from "react-native-gesture-handler";

class ChildrenList extends Component
{
    

    constructor(props)
    {
        super(props);

        this.state = {
            text: "Name of child/Children",
            children: [
                {name: "", id_number: ""},
            ]
        };

        this.updateChildrenList = this.updateChildrenList.bind(this);
        this.addNewChild = this.addNewChild.bind(this);
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
                        value={this.name}
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
                        <ScrollView style={styles.listScrollView}>
                            {
                                childrenItems
                            }
                            
                        </ScrollView>
                        <TouchableOpacity onPress={this.addNewChild} style={styles.addMoreButton}>
                            <Text style={styles.text}>Add More</Text>
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

export default ChildrenList;