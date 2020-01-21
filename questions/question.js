
const question = {
    component: "CountrySelectScreen", 
    title: "Would you like to leave your entire estate to your spouse upon your death?",
    south_africa: {
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
                    next: {
                        component: "QuestionScreen",
                        title: "Would you like to leave your entire estate to your spouse upon your death?",
                        yes: {
                            
                        },
                        no: {
                            component: "QuestionScreen",
                            title: "Would you like a joint will with yoru sapouse?",
                            yes: {
                                component: "PeopleListScreen",
                                title: "List Befeficiaries",
                                next: {
                                    component: "will option 10"
                                }
                            },
                            no: 
                            {
                                component: "list of benefit",
                                title: "List Befeficiaries",
                                next: {
                                    component: "will option 5"
                                }
                            }
                        }
                    }
                },
                no: {
                    component: "name of children",
                    title: "Name of child/Children",
                    next: {
                        component: "who you like to norminate", 
                        title: "Who would you like to nominate or appoint as the guardian of your child/children?",
                        next: {
                            component: "would you like to leave your",
                            title: "Would you like to leave your entire estate to your spouse upon your death?",
                            yes: {

                            },
                            no: {
                                component: "would you like to joint will",
                                title: "Would you like a join will with your spouse?",
                                yes: {
                                    component: "list of benefits",
                                    title: "List Befeficiaries",
                                    next: {
                                        component: "Will Option 9"
                                    }
                                },
                                no: {
                                    component: "list of Benefits",
                                    title: "List Befeficiaries",
                                    next: {
                                        component: "Will Option 7"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            no: {
                component: "would you like to leave your",
                title: "Would you like to leave your entire estate to your spouse upon your death?",
                yes: {
                    title: "Would you like to make a joint will with your spouse",
                    yes: {
                        component: "Will Option 8",
                    },
                    no: {
                        component: "Will Option 2",
                    }
                },
                no: {

                }
            }
        },
        no: {
            component: "do you have child",
            yes: {
                component: "are your children over 18 years",
                title: "Are your children over the age of majority (18 years of age)",
                yes: {
                    component: "name of children",
                    title: "Name of child/Chidren",
                    next: {
                        component: "will Option 4"
                    }
                },
                no: {
                    component: "name of children",
                    title: "Name of child/Chidren",
                    next: {
                        component: "Who would like to norminate",
                        next: {
                            component: "Will Option 3"
                        }
                    }
                }
            },
            no: {
                component: "Will Option 1"
            }
        }
    }
}

export default question;