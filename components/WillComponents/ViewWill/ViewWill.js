import React, {Component} from "react";
import WebView from "react-native-webview";
import { TouchableOpacity, Text, View } from "react-native";
import {connect} from "react-redux";
import {getWillHTML} from "./../../../will_html/mainwill";
import {getUAEWillHTML} from "./../../../will_uae_html/mainwill";
import styles from "./style";
import {value_names} from "./../../../questions/question";
import {isDebug} from "./../../../Environment/Environment";

class ViewWill extends Component
{
    constructor(props)
    {
        super(props);
        
        let willType = this.props.will.final_will["will_type"];
        let data = this.props.will.final_will;

        data['user'] = this.props.user;
        if(isDebug )
        {
            /*
            data[value_names.country_location] = "South Africa";
            data[value_names.user].name = "Zhuping ";data[value_names.user].surname = "Hello ";
            data[value_names.address] = "asdlfksdjf sdlfksdjf";
            data[value_names.mirror] = "Yes";
            data[value_names.executor] = {name: "abcd"};
            data[value_names.guard_appoint] = {name: "abcd"};
            data[value_names.another_guard_appoint] = {name: "abcd"};
            data[value_names.spouse] = {name: "abcd"};
            willType = 9;
            */
        }

        this.state = {
            html: data[value_names.country_location] === "UAE" ? getUAEWillHTML(willType, data) : getWillHTML(willType, data),
        }
    }

    render()
    {
        return(
            <View style={styles.container}>
                <WebView style={styles.willview} source={{html:this.state.html}}>
                </WebView>
                <TouchableOpacity style={styles.nextButton} 
                    onPress={() => {this.props.navigation.navigate("DrawerScreen", {
                        page: "EmailWillScreen"
                    });}}
                    >
                    <Text style={styles.text}> Next </Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const mapStatesToProps = (state, ownProps) => {
    return {...ownProps, will: state.will, user: state.user};
}
export default connect(mapStatesToProps)(ViewWill);