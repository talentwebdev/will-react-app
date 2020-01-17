import React, {Component} from "react";
import { ImageBackground, TouchableOpacity, View, Text, Image, ScrollView } from "react-native";
import styles from "./style";
import  Icon  from "react-native-vector-icons/FontAwesome";
import images from "./../../stylebase/images";

class Family extends Component 
{
    state = {
        peoples: [
                [
                    {
                        title: "My Father",
                        content: images.people.normal_image.father,
                        selected: false,
                    },
                    {
                        title: "My Mother",
                        content: images.people.normal_image.mother,
                        selected: false,
                    }
                ],
                [
                    {
                        title: "My Grandfather",
                        content: images.people.normal_image.grandfather,
                        selected: false,
                    },
                    {
                        title: "My Grandmother",
                        content: images.people.normal_image.grandmother,
                        selected: false,
                    }
                ],
                [
                    {
                        title: "My Brother",
                        content: images.people.normal_image.brother,
                        selected: false,
                    },
                    {
                        title: "My Sister",
                        content: images.people.normal_image.sister,
                        selected: false,
                    }
                ],
                [
                    {
                        title: "My Domestic Partner",
                        content: images.people.normal_image.domesticpartner,
                        selected: false,
                    },
                    {
                        title: "My Civil Union Partner",
                        content: images.people.normal_image.civilunionpartner,
                        selected: false,
                    }
                ],
                [
                    {
                        title: "My Husband",
                        content: images.people.normal_image.husband,
                        selected: false,
                    },
                    {
                        title: "My Wife",
                        content: images.people.normal_image.wife,
                        selected: false,
                    }
                ],
                [
                    {
                        title: "My Son",
                        content: images.people.normal_image.son,
                        selected: false,
                    },
                    {
                        title: "My Daughter",
                        content: images.people.normal_image.daughter,
                        selected: false,
                    }
                ],
                [
                    {
                        title: "My Uncle",
                        content: images.people.normal_image.uncle,
                        selected: false,
                    },
                    {
                        title: "My Aunt",
                        content: images.people.normal_image.aunt,
                        selected: false,
                    }
                ],
                [
                    {
                        title: "My Grandson",
                        content: images.people.normal_image.grandson,
                        selected: false,
                    },
                    {
                        title: "My Granddaughter",
                        content: images.people.normal_image.granddaughter,
                        selected: false,
                    }
                ],
                [
                    {
                        title: "My Niece",
                        content: images.people.normal_image.niece,
                        selected: false,
                    },
                    {
                        title: "My Nephew",
                        content: images.people.normal_image.nephew,
                        selected: false,
                    }
                ]

            ],
    }

    constructor(props)
    {
        super(props);

        this.selectFamily = this.selectFamily.bind(this);
    }

    selectFamily(index, subindex)
    {
        let peoples = [...this.state.peoples];
        peoples[index][subindex].selected = !peoples[index][subindex].selected;
        this.setState({peoples: peoples});
    }
    render()
    {
        const familyMembers = this.state.peoples.map((item, index) => {
            return (
                <View key={index + "k" + 0} style={styles.famliyButtonGroupContainer}>                
                    <View style={styles.famliyButtonContainer}>
                        <TouchableOpacity  style={item[0].selected ? styles.familyButton_selected : styles.familyButton}
                            onPress={() => {                    
                                this.selectFamily(index, 0);
                            }}>
                            <Text style={styles.text}>{item[0].title}</Text>
                            {
                                item[0].selected && 
                                <Icon name="check" style={styles.checkIcon} size={15} color="#FFF" />
                            }
                            
                        </TouchableOpacity>
                        <View style={item[0].selected ? styles.peopleImageContainer_selected : styles.peopleImageContainer}>
                            <Image source={item[0].content.source} style={item[0].content.style}></Image>
                        </View>
                    </View>
                    <View key={index + "k" + 1} style={styles.famliyButtonContainer}>
                        <TouchableOpacity  style={item[1].selected ? styles.familyButton_selected : styles.familyButton}
                            onPress={() => {                    
                                this.selectFamily(index, 1);
                            }}>
                            <Text style={styles.text}>{item[1].title}</Text>
                            {
                                item[1].selected && 
                                <Icon name="check" style={styles.checkIcon} size={15} color="#FFF" />
                            }
                        </TouchableOpacity>
                        <View style={item[1].selected ? styles.peopleImageContainer_selected : styles.peopleImageContainer}>
                            <Image source={item[1].content.source} style={item[1].content.style}></Image>
                        </View>
                    </View>
                </View>
            );
        });

        return (
            <ImageBackground source={require('./../../assets/images/background_1.png')} style={styles.background}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>
                        Who else is in your family?
                    </Text>
                </View>
                <View style={styles.meContainer}>                    
                    <View style={styles.meSelect}>
                        <Text style={styles.text}>
                            Me
                            <Icon name="check" style={styles.checkIcon} size={30} color="#FFF" />
                        </Text>
                        
                    </View>
                </View>
                <ScrollView style={styles.familyContainer}>
                    {
                        familyMembers
                    }
                </ScrollView>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.backbutton}>
                        <Text style={styles.text}>Back</Text>                        
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.nextbutton}>
                        <Text style={styles.text}>Next</Text>                        
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

export default Family;