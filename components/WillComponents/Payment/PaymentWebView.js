import React, { Component } from "react"; 
import {API_URL} from "./../../../Environment/Environment";
import {WebView} from "react-native-webview";

class PaymentWebView extends Component {

    constructor(props)
    {
        super(props);

        this.onMessage = this.onMessage.bind(this);
    }
    onMessage()
    {
        this.props.navigation.navigate("PaymentSuccessScreen");
    }

    render() {
        return (
            <WebView
                source={{uri: API_URL + "/payment"}}
                onMessage={this.onMessage}
            />   
        );
    }
}

export default PaymentWebView;