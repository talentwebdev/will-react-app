import React, { Component } from "react"; 
import {API_URL} from "./../../../Environment/Environment";
import {View} from "react-native";
import {WebView} from "react-native-webview";

class PaymentWebView extends Component {

    constructor(props)
    {
        super(props);

        const {navigation} = this.props;
        this.state = {
            type : navigation.getParam("type")
        }
        this.onMessage = this.onMessage.bind(this);
    }
    onMessage()
    {
        this.props.navigation.navigate("PaymentSuccessScreen");
    }

    render() {
        return (
            <View style={{flex: 1}}>
            {this.state.type === 0 && 
                <WebView
                    source={{uri: API_URL + "/payment"}}
                    onMessage={this.onMessage}
                />   
            }
            {this.state.type === 1 && 
                <WebView
                    source={{uri: API_URL + "/payment/mirror"}}
                    onMessage={this.onMessage}
                />   
            }
            {this.state.type === 2 && 
                <WebView
                    source={{uri: API_URL + "/payment/nonmirror"}}
                    onMessage={this.onMessage}
                />   
            }
            </View>
        );
    }
}

export default PaymentWebView;