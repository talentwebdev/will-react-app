export const value_names = {
    country_location: "country_location",
    user: "user",
    executor: "executor",
    address: "address",
    appoint_estate: "appoint_estate",
    spouse: "spouse",
    children: "children",
    beneficiaries: "beneficiaries",
    guard_appoint: "guard_appoint",
    another_guard_appoint: "another_guard_appoint",
    spouse_passaway_appoint_estate: "beneficiaries",
    not_survived_appoint_estate: "beneficiaries",
    married_option: "married_option",
    mirror: "mirror",
    dubai_court: "dubai_court",
    specific_assets: "specific_assets",
    temporary_guardian: "temporary_guardian",
    permanent_guardian: "permanent_guardian",
    alternative_executor: "alternative_executor",
    uae_assets: "uae_assets",
    state_country: "state_country",
    your_information: "your_information",
}
const will_option_name = {
    /*
    option_1: "Will Option 1 Single Will - No Children or Spouse",
    option_2: "Will Option 2 Single Will - no Children but has spouse",
    option_3: "Will Option 3 Single Will - no spouse but has minor child/children",
    option_4: "Will Option 4 Signle Will - with adult child/children and no spouse",
    option_5: "Will Option 5 Single Will - with spouse and adult children",
    option_6: "Will Option 6 Single Will - spouse and beneficiary other than a child",
    option_7: "Will Option 7 Single Will - with spouse and minor child/children",
    option_8: "Will Option 8 Joint Will - Husband and wife but no children",
    option_9: "Will Option 9 Joint Will - Husband and Wife with minor children",
    option_10: "Will Option 10 Joint Will - Husband and wife with adult children",
*/
    option_1: "Your will has been completed",
    option_2: "Your will has been completed",
    option_3: "Your will has been completed",
    option_4: "Your will has been completed",
    option_5: "Your will has been completed",
    option_6: "Your will has been completed",
    option_7: "Your will has been completed",
    option_8: "Your will has been completed",
    option_9: "Your will has been completed",
    option_10: "Your will has been completed",
}

function getUAELastModule(countryWill, noCountryWill)
{
    return {
        component: "PeopleListScreen", 
        title: "List of Beneficiaries", 
        value: value_names.beneficiaries,
        next : {
            component: "QuestionScreen",
            title: "Do you have a Will in another Country?",
            yes: {
                component: "PeopleScreen",
                title: "Please state the Country so that we can exclude the said Will from the UAE will",
                value: value_names.state_country,
                next: {
                    component: "FinalWillScreen",
                    value: countryWill, 
                    //title: "Will " + countryWill,
                    title: 'Your will has been completed',
                }   
            },
            no: {
                component: "FinalWillScreen",
                value: noCountryWill, 
                // title: "Will " + noCountryWill,
                title: 'Your will has been completed',
            }
        }        
    }
}
export const question = {
    component: "CountrySelectScreen", 
    title: "We tailor your will to the laws of the country you live in",
    value: value_names.country_location,
    south_africa: {
        component: "AddressScreen",
        title: "What is your residental address?",
        value: value_names.address,
        next: {
            component: "PeopleScreen", 
            title: "Name of Executor",
            value: value_names.executor,
            next: {
                component: "QuestionScreen",
                title: "Are you married?",
                yes: {
                    component: "QuestionScreen",
                    title: "Do you have children?",
                    yes: {
                        component: "QuestionScreen",
                        title: "Are your children over the age of majority(18 years of age)?",
                        yes: {
                            component: "PeopleListScreen",
                            title: "Name of Child/Children",
                            value: value_names.children,
                            next: {
                                component: "QuestionScreen",
                                title: "Would you like a joint will with your spouse?",
                                yes: {
                                    component: "SelectOptionScreen",
                                    title: "How are you married?",
                                    value: value_names.married_option,
                                    next: {
                                        component: "QuestionScreen",
                                        title: "If you are not survived by your spouse, Do you want to leave your estate to your children?",
                                        yes: {
                                            component: "FinalWillScreen",
                                            value: 10,
                                            title: will_option_name.option_10,
                                        },
                                        no: {
                                            component: "PeopleListScreen",
                                            title: "List Beneficiaries",
                                            value: value_names.beneficiaries,
                                            next: {
                                                component: "FinalWillScreen",
                                                value: 8,
                                                title: will_option_name.option_8,
                                            }
                                        }
                                    }                                    
                                },
                                no: {
                                    component: "QuestionScreen",
                                    title: "Would you like to leave your entire estate to your spouse upon your death?",                                        
                                    yes: {
                                        component: "PeopleScreen", 
                                        title: "Name of Spouse", 
                                        value: value_names.spouse,
                                        next: {
                                            component: "PeopleListScreen", 
                                            title: "If you are not survived by your children/child and spouse, Who are appointing your estate to?",
                                            value: value_names.not_survived_appoint_estate,
                                            next: {
                                                component: "FinalWillScreen",
                                                value: 5,
                                                title: will_option_name.option_5,
                                            }
                                        }
                                    },
                                    no: {
                                        component: "PeopleListScreen",
                                        title: "List Beneficiaries",
                                        value: value_names.beneficiaries,
                                        next: {
                                            component: "PeopleListScreen", 
                                            title: "If you are not survived by your children/child and spouse, Who are appointing your estate to?",
                                            value: value_names.not_survived_appoint_estate,
                                            next: {
                                                component: "FinalWillScreen",
                                                value: 5,
                                                title: will_option_name.option_5,
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        no: {
                            component: "PeopleListScreen",
                            title: "Name of child/Children",
                            value: value_names.children,
                            next: {
                                component: "PeopleScreen", 
                                title: "Who would you like to nominate or appoint as the guardian of your child/children?",
                                value: value_names.guard_appoint,
                                next: {
                                    component: "PeopleScreen", 
                                    title: "If you are not survived by guardian. List another Guardian",
                                    value: value_names.another_guard_appoint,
                                    next: {
                                        component: "QuestionScreen",
                                        title: "Would you like to leave your entire estate to your spouse upon your death?",
                                        yes: {
                                            component: "QuestionScreen",
                                            title: "Would you like a joint will with your spouse?",
                                            yes: {
                                                component: "SelectOptionScreen",
                                                title: "How are you married?",
                                                value: value_names.married_option,
                                                next: {
                                                    component: "PeopleScreen", 
                                                    title: "Name of Spouse",
                                                    value: value_names.spouse,
                                                    next: {
                                                        component: "PeopleListScreen", 
                                                        title: "List Beneficiaries",
                                                        value: value_names.beneficiaries,
                                                        next: {
                                                            component: "FinalWillScreen",
                                                            value: 9,
                                                            title: will_option_name.option_9,
                                                        }                                                
                                                    }
                                                }                                            
                                            },
                                            no: {
                                                component: "PeopleScreen", 
                                                title: "Name of Spouse",
                                                value: value_names.spouse,
                                                next: {
                                                    component: "PeopleListScreen", 
                                                    title: "If you are not survived by your spouse. List Beneficiaries",
                                                    value: value_names.beneficiaries,
                                                    next: {
                                                        component: "FinalWillScreen",
                                                        value: 7,
                                                        title: will_option_name.option_7,
                                                    }                                                
                                                }
                                            }
                                        },
                                        no: {
                                            component: "QuestionScreen",
                                            title: "Would you like a joint will with your spouse?",
                                            yes: {
                                                component: "SelectOptionScreen",
                                                title: "How are you married?",
                                                value: value_names.married_option,
                                                next: {
                                                    component: "PeopleScreen", 
                                                    title: "Name of Spouse",
                                                    value: value_names.spouse,
                                                    next: {
                                                        component: "PeopleListScreen", 
                                                        title: "List Beneficiaries",
                                                        value: value_names.beneficiaries,
                                                        next: {
                                                            component: "FinalWillScreen",
                                                            value: 9,
                                                            title: will_option_name.option_9,
                                                        }                                                
                                                    }
                                                }                                            
                                            },
                                            no: {
                                                component: "PeopleScreen", 
                                                title: "Name of Spouse",
                                                value: value_names.spouse,
                                                next: {
                                                    component: "PeopleListScreen", 
                                                    title: "List Beneficiaries",
                                                    value: value_names.beneficiaries,
                                                    next: {
                                                        component: "FinalWillScreen",
                                                        value: 7,
                                                        title: will_option_name.option_7,
                                                    }                                                
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    no: {
                        component: "QuestionScreen",
                        title: "Would you like to leave your entire estate to your spouse upon your death?",
                        yes: {
                            component: "PeopleScreen", 
                            title: "Name of Spouse",
                            value: value_names.spouse,
                            next: {
                                component: "QuestionScreen",
                                title: "Would you like to make a joint will with your spouse?",
                                yes: {
                                    component: "SelectOptionScreen",
                                    title: "How are you married?",
                                    value: value_names.married_option,
                                    next: {
                                        component: "PeopleListScreen",
                                        title: "In the event that your spouse passes away, Who are you appointing your estate to?",
                                        value: value_names.spouse_passaway_appoint_estate,
                                        next: {
                                            component: "FinalWillScreen",
                                            value: 8,
                                            title: will_option_name.option_8,
                                        }
                                    }
                                },
                                no: {
                                    component: "PeopleListScreen",
                                    title: "In the event that your spouse passes awawy, Who are you appointing your estate to?",
                                    value: value_names.spouse_passaway_appoint_estate,
                                    next: {
                                        component: "FinalWillScreen",
                                        value: 2,
                                        title: will_option_name.option_2,
                                    }
                                }
                            }                            
                        },
                        no: {
                            component: "PeopleScreen",
                            title: "Name of Spouse",
                            value: value_names.spouse,
                            next: {
                                component: "PeopleListScreen",
                                title: "List Beneficiaries",
                                value: value_names.beneficiaries,
                                next: {
                                    component: "FinalWillScreen",
                                    value: 6,
                                    title: will_option_name.option_6,
                                }
                            }                            
                        }
                    }
                },
                no: {
                    component: "QuestionScreen",
                    title: "Do you have children?",
                    yes: {
                        component: "QuestionScreen",
                        title: "Are your children over the age of majority (18 years of age)",
                        yes: {
                            component: "PeopleListScreen",
                            title: "Name of child/Chidren",
                            value: value_names.children,
                            next: {
                                component: "QuestionScreen",
                                title: "Would you like to leave your entire estate to your children upon your death?",
                                yes: {
                                    component: "PeopleListScreen",
                                    title: "If you are not survivied by your children/child, Who are you appoint your estate to?",
                                    value: value_names.not_survived_appoint_estate,
                                    next: {
                                        component: "FinalWillScreen",
                                        value: 4,
                                        title: will_option_name.option_4,
                                    }
                                },
                                no: {
                                    component: "PeopleListScreen",
                                    title: "Who are you appointing your estate to?",
                                    value: value_names.appoint_estate,
                                    next: {
                                        component: "FinalWillScreen",
                                        value: 1,
                                        title: will_option_name.option_1,
                                    }
                                }
                            }
                        },
                        no: {
                            component: "PeopleListScreen",
                            title: "Name of child/Chidren",
                            value: value_names.children,
                            next: {
                                component: "PeopleScreen",
                                title: "Who would you like to nominate or appoint as the guardian of your child/children?",
                                value: value_names.guard_appoint,
                                next: {
                                    component: "PeopleScreen",
                                    title: "If you are not survived by guardian. List another Guardian",
                                    value: value_names.another_guard_appoint,
                                    next: {                                        
                                        component: "PeopleListScreen",
                                        title: "If you are not survived by your children/child, Who are you appointing your estate to?",
                                        value: value_names.not_survived_appoint_estate,
                                        next: {
                                            component: "FinalWillScreen",
                                            value: 3,
                                            title: will_option_name.option_3,
                                        }       
                                    }                             
                                }
                            }
                        }
                    },
                    no: {
                        component: "PeopleListScreen", 
                        title: "Who are you appointing your estate to?",
                        value: value_names.appoint_estate,
                        next: {
                            component: "FinalWillScreen",
                            value: 1,
                            title: will_option_name.option_1,
                        }                        
                    }
                }
            },          
            
        }
    },
    uae: {
        component: "AddressScreen",
        title: "What is your residential address?",
        value: value_names.address,
        next: {
            component: "PeopleScreen", 
            title: "Your Information",
            value: value_names.your_information,
            next: {
                component: "PeopleScreen",
                title: "Name of executor",
                value: value_names.executor,
                next: {
                    component: "QuestionScreen",
                    title: "Are you married?",
                    yes: {
                        component: "PeopleScreen",
                        title: "What is your spouse Name?",
                        value: value_names.spouse,
                        next: {
                            component: "QuestionScreen",
                            value: value_names.mirror,
                            title: "Do you want a mirror will with your spouse?",
                            yes: {
                                component: "QuestionScreen",
                                title: "Do you declare that you are not a Muslim and have never been married a Muslim?",
                                yes: {
                                    component: "QuestionScreen",
                                    title: "Would you like to register your Will in the DIFC(Dubai) or Abu Dhabi Court?",
                                    value: value_names.dubai_court,
                                    yes: { // dubai 
                                        component: "QuestionScreen",
                                        title: "Are your children usually resident in the Emirates of Dubai or RAK?",
                                        yes: {
                                            component: "PeopleListScreen", 
                                            value: value_names.children,
                                            title: "Name of child/Children",
                                            next: {
                                                component: "PeopleListScreen",
                                                value: value_names.specific_assets,
                                                title: "List any Specific Assets in the UAE",
                                                next: {
                                                    component: "UAEGuardianScreen",
                                                    value: value_names.temporary_guardian,
                                                    title: "In the event of death to you and spouse death. Please name 2 temporary guardians residing in the UAE",
                                                    next: {
                                                        component: "PeopleScreen",
                                                        value: value_names.alternative_executor,
                                                        title: "Please name an alternative executor in the event of the above mentioned executor pre-deceasing you.",
                                                        next: {
                                                            component: "QuestionScreen",
                                                            title: "Do you have any Assets outside of the UAE that you would like to add to the Will?",
                                                            yes: {
                                                                component: "PeopleListScreen",
                                                                title: "Do you have any Assets outside of the UAE that you would like to add to the Will?",
                                                                value: value_names.uae_assets,
                                                                next: getUAELastModule(1, 5)
                                                            },
                                                            no: getUAELastModule(3, 7)
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        no: {
                                            component: "PeopleListScreen",
                                            title: "List any Specific Assets in the UAE",
                                            value: value_names.specific_assets,
                                            next: {
                                                component: "PeopleScreen",
                                                title: "Please name an alternative Executor in the event of the above mentioned Executor pre-deceasing you",
                                                value: value_names.alternative_executor,
                                                next: {
                                                    component: "QuestionScreen", 
                                                    title: "Do you have any Assets outside of the UAE that you would like to add to the Will?",
                                                    yes: {
                                                        component: "PeopleListScreen",
                                                        title: "Do you have any Assets outside of the UAE that you would like to add to the Will?",
                                                        value: value_names.uae_assets,
                                                        next: getUAELastModule(2, 6)
                                                    },
                                                    no: getUAELastModule(4, 8)
                                                }
                                            }
                                        }
                                    },
                                    no: { // Abh Dhabi
                                        component: "QuestionScreen",
                                        title: "Are your children usually resident in the Emirates of Dubai or RAK?",
                                        yes: {
                                            component: "PeopleListScreen", 
                                            value: value_names.children,
                                            title: "Name of child/Children",
                                            next: {
                                                component: "PeopleListScreen",
                                                value: value_names.specific_assets,
                                                title: "List any Specific Assets in the UAE",
                                                next: {
                                                    component: "UAEGuardianScreen",
                                                    value: value_names.temporary_guardian,
                                                    title: "In the event of death to you and spouse death. Please name 2 temporary guardians residing in the UAE",
                                                    next: {
                                                        component: "UAEGuardianScreen",
                                                        value: value_names.permanent_guardian,
                                                        title: "In the event of death to you and spouse death. Please name 2 permanent guardians",
                                                        next: {
                                                            component: "PeopleScreen",
                                                            value: value_names.alternative_executor,
                                                            title: "Please name an alternative executor in the event of the above mentioned executor pre-deceasing you.",
                                                            next: {
                                                                component: "QuestionScreen",
                                                                title: "Do you have any Assets outside of the UAE that you would like to add to the Will?",
                                                                yes: {
                                                                    component: "PeopleListScreen",
                                                                    title: "Do you have any Assets outside of the UAE that you would like to add to the Will?",
                                                                    value: value_names.uae_assets,
                                                                    next: getUAELastModule(9, 13)
                                                                },
                                                                no: getUAELastModule(11, 15)
                                                            }
                                                        }
                                                    }
                                                    
                                                }
                                            }
                                        },
                                        no: {
                                            component: "PeopleListScreen",
                                            title: "List any Specific Assets in the UAE",
                                            value: value_names.specific_assets,
                                            next: {
                                                component: "PeopleScreen",
                                                title: "Please name an alternative Executor in the event of the above mentioned Executor pre-deceasing you",
                                                value: value_names.alternative_executor,
                                                next: {
                                                    component: "QuestionScreen", 
                                                    title: "Do you have any Assets outside of the UAE that you would like to add to the Will?",
                                                    yes: {
                                                        component: "PeopleListScreen",
                                                        title: "Do you have any Assets outside of the UAE that you would like to add to the Will?",
                                                        value: value_names.uae_assets,
                                                        next: getUAELastModule(10, 14)
                                                    },
                                                    no: getUAELastModule(12, 16)
                                                }
                                            }
                                        }
                                    }
                                },
                                no: {
                                    component: "NoProvideWillScreen",
                                    title: "Unfortunately we can not provide you with a will in terms of UAE law",
                                }
                            },
                            no: {
                                component: "QuestionScreen",
                                title: "Do you declare that you are not a Muslim and have never been married a Muslim?",
                                yes: {
                                    component: "QuestionScreen",
                                    title: "Would you like to register your Will in the DIFC(Dubai) or Abu Dhabi Court?",
                                    value: value_names.dubai_court,
                                    yes: { // dubai 
                                        component: "QuestionScreen",
                                        title: "Are your children usually resident in the Emirates of Dubai or RAK?",
                                        yes: {
                                            component: "PeopleListScreen", 
                                            value: value_names.children,
                                            title: "Name of child/Children",
                                            next: {
                                                component: "PeopleListScreen",
                                                value: value_names.specific_assets,
                                                title: "List any Specific Assets in the UAE",
                                                next: {
                                                    component: "UAEGuardianScreen",
                                                    value: value_names.temporary_guardian,
                                                    title: "In the event of death to you and spouse death. Please name 2 temporary guardians residing in the UAE",
                                                    next: {
                                                        component: "PeopleScreen",
                                                        value: value_names.alternative_executor,
                                                        title: "Please name an alternative executor in the event of the above mentioned executor pre-deceasing you.",
                                                        next: {
                                                            component: "QuestionScreen",
                                                            title: "Do you have any Assets outside of the UAE that you would like to add to the Will?",
                                                            yes: {
                                                                component: "PeopleListScreen",
                                                                title: "Do you have any Assets outside of the UAE that you would like to add to the Will?",
                                                                value: value_names.uae_assets,
                                                                next: getUAELastModule(1, 5)
                                                            },
                                                            no: getUAELastModule(3, 7)
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        no: {
                                            component: "PeopleListScreen",
                                            title: "List any Specific Assets in the UAE",
                                            value: value_names.specific_assets,
                                            next: {
                                                component: "PeopleScreen",
                                                title: "Please name an alternative Executor in the event of the above mentioned Executor pre-deceasing you",
                                                value: value_names.alternative_executor,
                                                next: {
                                                    component: "QuestionScreen", 
                                                    title: "Do you have any Assets outside of the UAE that you would like to add to the Will?",
                                                    yes: {
                                                        component: "PeopleListScreen",
                                                        title: "Do you have any Assets outside of the UAE that you would like to add to the Will?",
                                                        value: value_names.uae_assets,
                                                        next: getUAELastModule(2, 6)
                                                    },
                                                    no: getUAELastModule(4, 8)
                                                }
                                            }
                                        }
                                    },
                                    no: { // Abh Dhabi
                                        component: "QuestionScreen",
                                        title: "Are your children usually resident in the Emirates of Dubai or RAK?",
                                        yes: {
                                            component: "PeopleListScreen", 
                                            value: value_names.children,
                                            title: "Name of child/Children",
                                            next: {
                                                component: "PeopleListScreen",
                                                value: value_names.specific_assets,
                                                title: "List any Specific Assets in the UAE",
                                                next: {
                                                    component: "UAEGuardianScreen",
                                                    value: value_names.temporary_guardian,
                                                    title: "In the event of death to you and spouse death. Please name 2 temporary guardians residing in the UAE",
                                                    next: {
                                                        component: "UAEGuardianScreen",
                                                        value: value_names.permanent_guardian,
                                                        title: "In the event of death to you and spouse death. Please name 2 permanent guardians",
                                                        next: {
                                                            component: "PeopleScreen",
                                                            value: value_names.alternative_executor,
                                                            title: "Please name an alternative executor in the event of the above mentioned executor pre-deceasing you.",
                                                            next: {
                                                                component: "QuestionScreen",
                                                                title: "Do you have any Assets outside of the UAE that you would like to add to the Will?",
                                                                yes: {
                                                                    component: "PeopleListScreen",
                                                                    title: "Do you have any Assets outside of the UAE that you would like to add to the Will?",
                                                                    value: value_names.uae_assets,
                                                                    next: getUAELastModule(9, 13)
                                                                },
                                                                no: getUAELastModule(11, 15)
                                                            }
                                                        }
                                                    }
                                                    
                                                }
                                            }
                                        },
                                        no: {
                                            component: "PeopleListScreen",
                                            title: "List any Specific Assets in the UAE",
                                            value: value_names.specific_assets,
                                            next: {
                                                component: "PeopleScreen",
                                                title: "Please name an alternative Executor in the event of the above mentioned Executor pre-deceasing you",
                                                value: value_names.alternative_executor,
                                                next: {
                                                    component: "QuestionScreen", 
                                                    title: "Do you have any Assets outside of the UAE that you would like to add to the Will?",
                                                    yes: {
                                                        component: "PeopleListScreen",
                                                        title: "Do you have any Assets outside of the UAE that you would like to add to the Will?",
                                                        value: value_names.uae_assets,
                                                        next: getUAELastModule(10, 14)
                                                    },
                                                    no: getUAELastModule(12, 16)
                                                }
                                            }
                                        }
                                    }
                                },
                                no: {
                                    component: "NoProvideWillScreen",
                                    title: "Unfortunately we can not provide you with a will in terms of UAE law",
                                }
                            }
                        } 
                    },
                    no: {
                        component: "QuestionScreen",
                        title: "Do you declare that you are not a Muslim and have never been Married a Muslim?",
                        yes: {
                            component: "QuestionScreen",
                            value: value_names.dubai_court,
                            title: "Would you like to register your Will in the DIFC(Dubai) or Abu Dhabi Court?",
                            yes: {// Dubai
                                component: "QuestionScreen",
                                title: "Are you children usually resident in the Emirates of Dubai or RAK?", 
                                yes: {
                                    component: "PeopleListScreen",
                                    title: "Name of child/Children",
                                    value: value_names.children,
                                    next: {
                                        component: "PeopleListScreen",
                                        title: "List any Specific Assets in the UAE", 
                                        value: value_names.specific_assets, 
                                        next: {
                                            component: "UAEGuardianScreen",
                                            title: "In the event of your death. Please name 2 temporary guardians residing in the UAE",
                                            value: value_names.temporary_guardian,
                                            next: {
                                                component: "UAEGuardianScreen",
                                                title: "In the event of your death. Please name 2 permanent guardians residing in the UAE", 
                                                value: value_names.permanent_guardian,
                                                next: {
                                                    component: "PeopleScreen",
                                                    title: "Please name an alternative Executor in the event of the above mentioned Executor pre-deceasing you",
                                                    value: value_names.alternative_executor,
                                                    next: {
                                                        component: "QuestionScreen",
                                                        title: "Do you have any Assets outside of the UAE that you would like to add to the Will?", 
                                                        yes: {
                                                            component: "PeopleListScreen", 
                                                            title: "Do you have any Assets outside of the UAE that ou would like to add to the Will?", 
                                                            value: value_names.uae_assets,
                                                            next: getUAELastModule(17, 21)
                                                        },
                                                        no: {
                                                            component: "PeopleListScreen",
                                                            title: "Do you have any Assets outside of the UAE that you would like to add to the Will?",
                                                            value: value_names.uae_assets,
                                                            next: getUAELastModule(19, 23)
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                no: {
                                    component: "PeopleListScreen",
                                    title: "List any Specific Assets in the UAE", 
                                    value: value_names.specific_assets, 
                                    next: {
                                        component: "PeopleScreen",
                                        title: "Please name an alternative Executor in the event of the above mentioned Executor pre-deceasing you",
                                        value: value_names.alternative_executor,
                                        next: {
                                            component: "QuestionScreen",
                                            title: "Do you have any Assets outside of the UAE that you would like to add to the Will?",
                                            yes: {
                                                component: "PeopleListScreen",
                                                title: "Do you have any Assets outside of the UAE that you would like to add to the Will?",
                                                value: value_names.uae_assets,
                                                next: getUAELastModule(18, 22)
                                            },
                                            no: getUAELastModule(20, 24)
                                        }
                                    }
                                }
                            },
                            no: {// Abu Dhabi
                                component: "QuestionScreen",
                                title: "Are you children usually resident in the Emirates of Dubai or RAK?", 
                                yes: {
                                    component: "PeopleListScreen",
                                    title: "Name of child/Children",
                                    value: value_names.children,
                                    next: {
                                        component: "PeopleListScreen",
                                        title: "List any Specific Assets in the UAE", 
                                        value: value_names.specific_assets, 
                                        next: {
                                            component: "UAEGuardianScreen",
                                            title: "In the event of your death. Please name 2 temporary guardians residing in the UAE",
                                            value: value_names.temporary_guardian,
                                            next: {
                                                component: "UAEGuardianScreen",
                                                title: "In the event of your death. Please name 2 permanent guardians residing in the UAE", 
                                                value: value_names.permanent_guardian,
                                                next: {
                                                    component: "PeopleScreen",
                                                    title: "Please name an alternative Executor in the event of the above mentioned Executor pre-deceasing you",
                                                    value: value_names.alternative_executor,
                                                    next: {
                                                        component: "QuestionScreen",
                                                        title: "Do you have any Assets outside of the UAE that you would like to add to the Will?", 
                                                        yes: {
                                                            component: "PeopleListScreen", 
                                                            title: "Do you have any Assets outside of the UAE that ou would like to add to the Will?", 
                                                            value: value_names.uae_assets,
                                                            next: getUAELastModule(25, 29)
                                                        },
                                                        no: {
                                                            component: "PeopleListScreen",
                                                            title: "Do you have any Assets outside of the UAE that you would like to add to the Will?",
                                                            value: value_names.uae_assets,
                                                            next: getUAELastModule(27, 31)
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                no: {
                                    component: "PeopleListScreen",
                                    title: "List any Specific Assets in the UAE", 
                                    value: value_names.specific_assets, 
                                    next: {
                                        component: "PeopleScreen",
                                        title: "Please name an alternative Executor in the event of the above mentioned Executor pre-deceasing you",
                                        value: value_names.alternative_executor,
                                        next: {
                                            component: "QuestionScreen",
                                            title: "Do you have any Assets outside of the UAE that you would like to add to the Will?",
                                            yes: {
                                                component: "PeopleListScreen",
                                                title: "Do you have any Assets outside of the UAE that you would like to add to the Will?",
                                                value: value_names.uae_assets,
                                                next: getUAELastModule(26, 30)
                                            },
                                            no: {
                                                component: "PeopleListScreen",
                                                title: "Do you have any Assets outside of the UAE that you would like to add to the Will?",
                                                value: value_names.uae_assets,
                                                next: getUAELastModule(28, 32)
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        no: {
                            component: "NoProvideWillScreen",
                            title: "Unfortunately we can not provide you with a will in terms of UAE law",
                        }
                    }
                }
            }   
        }
    }
}
