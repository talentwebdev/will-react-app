import React, { Component } from 'react';
import MainNavigator from "./navigation/MainNavigator";
import { createAppContainer } from 'react-navigation';

const AppRootContainer = createAppContainer(MainNavigator);
export default AppRootContainer;