export const value_names = {
    user: "user",
    executor: "executor",
    address: "address",
    appoint_estate: "appoint_estate",
    spouse: "spouse",
    children: "children",
    beneficiaries: "beneficiaries",
    guard_appoint: "guard_appoint",
    spouse_passaway_appoint_estate: "spouse_passaway_appoint_estate",
    not_survived_appoint_estate: "not_survived_appoint_estate",
    married_option: "married_option",
}
const will_option_name = {
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
}

export const question = {
    component: "CountrySelectScreen", 
    title: "We tailor your will to the laws of the country you live in",
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
                                    component: "QuestionScreen",
                                    title: "If you are not survived by your spouse, Do you want your estate to your children?",
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
                                    component: "QuestionScreen",
                                    title: "Would you like to leave your entire estate to your spouse upon your death?",
                                    yes: {
                                        component: "QuestionScreen",
                                        title: "Would you like a join will with your spouse?",
                                        yes: {
                                            component: "PeopleScreen", 
                                            title: "name of Spouse",
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
                                        },
                                        no: {
                                            component: "PeopleScreen", 
                                            title: "name of Spouse",
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
                                    },
                                    no: {
                                        component: "QuestionScreen",
                                        title: "Would you like a join will with your spouse?",
                                        yes: {
                                            component: "PeopleScreen", 
                                            title: "name of Spouse",
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
                                        },
                                        no: {
                                            component: "PeopleScreen", 
                                            title: "name of Spouse",
                                            value: value_names.spouse,
                                            next: {
                                                component: "PeopleListScreen", 
                                                title: "List Beneficiaries",
                                                value: value_names.beneficiaries,
                                                next: {
                                                    component: "FinalWillScreen",
                                                    value: 7,
                                                    title: will_option_name.option_9,
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
                            title: "name of Spouse",
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
                            title: "name of Spouse",
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
                    title: "do you have child?",
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
                                    component: "PeopleListScreen",
                                    title: "If you are not survived by your chidlren/child, Who are you appointing your estate to?",
                                    value: value_names.not_survived_appoint_estate,
                                    next: {
                                        component: "FinalWillScreen",
                                        value: 3,
                                        title: will_option_name.option_3,
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
    }
}
