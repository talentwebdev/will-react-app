import React, {Component} from "react";
import WebView from "react-native-webview";
import { TouchableOpacity, Text, View } from "react-native";
import {connect} from "react-redux";
import {getWillHTML} from "./../../../will_html/mainwill";
import styles from "./style";

class ViewWill extends Component
{
    constructor(props)
    {
        super(props);
        
        let willType = this.props.will.will_data["will_type"];
        let data = this.props.will.will_data;

        data['user'] = this.props.user;
        this.state = {
            html: getWillHTML(willType, data)
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