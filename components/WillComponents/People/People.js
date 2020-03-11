import React, {Component} from "react";

import background from "./../../../assets/images/background_1.png";
import { ImageBackground, TouchableOpacity, Text, View, TextInput, Keyboard, Platform } from "react-native";
import styles from "./style";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {sendNextWillStep, sendPrevWillStep} from "./action";
import { StackActions, NavigationActions } from 'react-navigation';
import {value_names} from "./../../../questions/question";
import {DatePickerIOS} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

const contentType = {
    south_africa_people: "south_africa_people",
    south_africa_executor: "south_africa_executor",
    uae_country: "uae_country",
    uae_executor: "uae_executor",
    uae_alternative_executor: "uae_alternative_executor",
    uae_your_information: "uae_your_information",
    uae_spouse: "uae_spouse", 
    uae_normal_people: "uae_normal_people",
}
class PeopLe extends Component
{
    constructor(props)
    {
        super(props);

        let data = this.props.will.datas[this.props.will.datas.length - 1];
        let page = this.props.will.pages[this.props.will.pages.length - 1];
        const will_data = this.props.will.will_data;
        let isUAE = will_data[value_names.country_location] === "UAE" ? true: false;
        let type;
        if(isUAE === false){
            if(page.value === value_names.executor)
                type = contentType.south_africa_executor;
            else
                type = contentType.south_africa_people;
        }
        else 
        {
            if(page.value === value_names.state_country)
                type = contentType.uae_country;
            else if(page.value === value_names.executor)
                type = contentType.uae_executor;
            else if(page.value === value_names.alternative_executor)
                type = contentType.uae_alternative_executor;
            else if(page.value === value_names.your_information)
                type = contentType.uae_your_information;
            else if(page.value === value_names.spouse)
                type = contentType.uae_spouse;
            else 
                type = contentType.uae_normal_people;
        }

        this.state = {
            text: page.title,
            // south africa people
            name: data.name,
            id_number: data.id_number,
            // uae people
            uae_name: data.name,        
            uae_passport: data.passport, 
            uae_address: data.address, 
            uae_nationality: data.nationality,

            // uae country
            uae_country: data.country,

            // your information
            emirates_id: data.emirates_id,
            birth_of_date: data.birth_of_date,

            keyboardHeight: 0,
            page: page,
            type: type,
            showdate: false,
            date: new Date(),
        }

        this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
        this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);

        this.onPrev = this.onPrev.bind(this);
        this.onNext = this.onNext.bind(this);
    }

    componentWillUnmount() {
        this.keyboardDidShowSub.remove();
        this.keyboardDidHideSub.remove();
    }

    handleKeyboardDidShow = (event) => {
        this.setState({keyboardHeight: event.endCoordinates.height});
    }

    handleKeyboardDidHide = (event) => {
        this.setState({keyboardHeight: 0});
    }

    onNext()
    {
        if(this.state.type === contentType.south_africa_people)
        {
            if(this.state.name === "" || this.state.name === undefined || this.state.name === null || 
                this.state.id_number === "" || this.state.id_number === undefined || this.state.id_number === null)
                return;

            this.props.sendNextWillStep({
                name: this.state.name, id_number: this.state.id_number
            }, this.state.page);
        }
        else if(this.state.type === contentType.south_africa_executor)
        {
            if(this.state.name === "" || this.state.name === undefined || this.state.name === null || 
                this.state.id_number === "" || this.state.id_number === undefined || this.state.id_number === null || 
                this.state.uae_address === "" || this.state.uae_address === undefined || this.state.uae_address === null)
                return;

            this.props.sendNextWillStep({
                name: this.state.name, 
                id_number: this.state.id_number,
                address: this.state.uae_address
            }, this.state.page);
        }
        else if(this.state.type === contentType.uae_executor || this.state.type === contentType.uae_alternative_executor)
        {
            if(this.state.uae_name === "" || this.state.uae_name === undefined || this.state.uae_name === null || 
                this.state.uae_passport === "" || this.state.uae_passport === undefined || this.state.uae_passport === null || 
                this.state.uae_address === "" || this.state.uae_address === undefined || this.state.uae_address === null || 
                this.state.uae_nationality === "" || this.state.uae_nationality === undefined || this.state.uae_nationality === null)
                return;

            this.props.sendNextWillStep({
                name: this.state.uae_name, 
                passport: this.state.uae_passport, 
                id_number: this.state.uae_passport,
                address: this.state.uae_address,
                nationality: this.state.uae_nationality,
            }, this.state.page);
        }  
        else if(this.state.type === contentType.uae_country)   
        {
            if(this.state.uae_country === "" || this.state.uae_country === undefined || this.state.uae_country === null)
                return;
            
            this.props.sendNextWillStep({
                country: this.state.uae_country
            }, this.state.page);
        }
        else if(this.state.type === contentType.uae_your_information)
        {
            if(this.state.emirates_id === "" || this.state.emirates_id === undefined || this.state.emirates_id === null || 
            this.state.uae_nationality === "" || this.state.uae_nationality === undefined || this.state.uae_nationality === null || 
            this.state.birth_of_date === "" || this.state.birth_of_date === undefined || this.state.birth_of_date === null)
                return;
            
            this.props.sendNextWillStep({
                emirates_id: this.state.emirates_id,
                nationality: this.state.uae_nationality,
                birth_of_date: this.state.birth_of_date,
            }, this.state.page);
        }
        else if(this.state.type === contentType.uae_spouse)
        {
            if(this.state.uae_name === "" || this.state.uae_name === undefined || this.state.uae_name === null || 
            this.state.uae_passport === "" || this.state.uae_passport === undefined || this.state.uae_passport === null || 
            this.state.emirates_id === "" || this.state.emirates_id === undefined || this.state.emirates_id === null || 
            this.state.birth_of_date === "" || this.state.birth_of_date === undefined || this.state.birth_of_date === null)
                return;
            
            this.props.sendNextWillStep({
                name: this.state.uae_name,
                passport: this.state.uae_passport,
                id_number: this.state.uae_passport,
                birth_of_date: this.state.birth_of_date,
                emirates_id: this.state.emirates_id,
            }, this.state.page);
        }
        else if(this.state.type === contentType.uae_normal_people)
        {
            if(this.state.uae_name === "" || this.state.uae_name === undefined || this.state.uae_name === null || 
            this.state.uae_passport === "" || this.state.uae_passport === undefined || this.state.uae_passport === null)
                return;
            
            this.props.sendNextWillStep({
                name: this.state.uae_name,
                id_number: this.state.uae_passport,
                passport: this.state.uae_passport,
            }, this.state.page);
        }

        
        const resetAction = StackActions.reset({
            index: 1,
            actions: [
              NavigationActions.navigate({ routeName: 'MakeWillScreen' }),
              NavigationActions.navigate({ routeName: this.state.page.next.component }),
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
        return(
            <ImageBackground source={background} style={styles.background}>
                
                <View style={[styles.questionContainer]}>
                    <View style={[styles.questionPanel, {marginBottom: this.state.keyboardHeight}]}>
                        <Text style={styles.questionText}>{this.state.text}</Text>

                        {(this.state.type === contentType.south_africa_people  || 
                        this.state.type === contentType.south_africa_executor) && 
                            <TextInput style={styles.textInput} 
                                placeholder="Enter Name" 
                                placeholderTextColor="#FFF"
                                value={this.state.name}
                                onChangeText={(name) => {this.setState({name})}}>
                            </TextInput>
                        }
                        {
                            (this.state.type === contentType.south_africa_people ||
                            this.state.type === contentType.south_africa_executor)  && 
                            <TextInput style={styles.textInput} 
                                placeholder="ID Number" 
                                placeholderTextColor="#FFF"
                                value={this.state.id_number}
                                onChangeText={(id_number) => {this.setState({id_number})}}>
                            </TextInput>
                        }    


                        {
                            (this.state.type === contentType.uae_executor || 
                                this.state.type === contentType.uae_alternative_executor || 
                                this.state.type === contentType.uae_spouse || 
                                this.state.type === contentType.uae_normal_people) && 
                            <TextInput style={styles.textInput} 
                                placeholder="Full Name" 
                                placeholderTextColor="#FFF"
                                value={this.state.uae_name}
                                onChangeText={(uae_name) => {this.setState({uae_name})}}>
                            </TextInput>
                        }
                        {
                            (this.state.type === contentType.uae_executor || 
                                this.state.type === contentType.uae_alternative_executor || 
                                this.state.type === contentType.uae_spouse || 
                                this.state.type === contentType.uae_normal_people) && 
                            <TextInput style={styles.textInput} 
                                placeholder="Passport Number" 
                                placeholderTextColor="#FFF"
                                value={this.state.uae_passport}
                                onChangeText={(uae_passport) => {this.setState({uae_passport})}}>
                            </TextInput>
                        }      
                        {
                            (this.state.type === contentType.uae_executor 
                                || this.state.type === contentType.uae_alternative_executor
                                || this.state.type === contentType.south_africa_executor) && 
                            <TextInput style={styles.textInput} 
                                placeholder="Address" 
                                placeholderTextColor="#FFF"
                                value={this.state.uae_address}
                                onChangeText={(uae_address) => {this.setState({uae_address})}}>
                            </TextInput>
                        }      

                        {
                            (this.state.type === contentType.uae_your_information || 
                                this.state.type === contentType.uae_spouse) && 
                            <TextInput style={styles.textInput} 
                                placeholder="Emirates ID" 
                                placeholderTextColor="#FFF"
                                value={this.state.emirates_id}
                                onChangeText={(emirates_id) => {this.setState({emirates_id})}}>
                            </TextInput>
                        }         
                        {
                            (this.state.type === contentType.uae_executor || this.state.type === contentType.uae_alternative_executor || this.state.type === contentType.uae_your_information) && 
                            <TextInput style={styles.textInput} 
                                placeholder="Nationality" 
                                placeholderTextColor="#FFF"
                                value={this.state.uae_nationality}
                                onChangeText={(uae_nationality) => {this.setState({uae_nationality})}}>
                            </TextInput>
                        }            


                        { 
                            this.state.type === contentType.uae_country && 
                            <TextInput style={styles.textInput} 
                                placeholder="Country" 
                                placeholderTextColor="#FFF"
                                value={this.state.uae_country}
                                onChangeText={(uae_country) => {this.setState({uae_country})}}>
                            </TextInput>
                        }   

                        {
                            (this.state.type === contentType.uae_your_information || 
                                this.state.type === contentType.uae_spouse) && 
                            <TextInput style={styles.textInput} 
                                placeholder="Birth Of Date" 
                                onBlur={() => {this.setState({showdate: false})}}
                                placeholderTextColor="#FFF"                          
                                onChangeText={(birth_of_date) => {
                                    this.setState({birth_of_date})
                                }}  
                                value={this.state.birth_of_date}>
                            </TextInput>
                        }      

                        
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
                
                {this.state.showdate && 
                    <DateTimePicker
                    testID="dateTimePicker"
                    timeZoneOffsetInMinutes={0}
                    mode="date"
                    value={this.state.date}
                    initialDate={new Date()}
                    is24Hour={true}
                    display="default"
                    onChange={(e, selectedDate) => {
                        console.log("changed date", selectedDate);
                        this.setState({date: selectedDate});
                        //this.setState({showdate: Platform.OS === 'ios' ? true : false});
                        this.setState({birth_of_date: selectedDate.getFullYear() + "-" + selectedDate.getMonth() + "-" + selectedDate.getDate()});
                    }}
                    />
                }
            </ImageBackground>
        );
    }
}

const mapStatesToProps = (state, ownProps) => {
    return {
        ...ownProps,
        will: state.will
    }
};
const mapDispatchToProps = dispatch => {
    return {
        sendNextWillStep: bindActionCreators(sendNextWillStep, dispatch),
        sendPrevWillStep: bindActionCreators(sendPrevWillStep, dispatch)
    }
};

export default connect(mapStatesToProps, mapDispatchToProps)(PeopLe);