import React from 'react';
import {AppRegistry} from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer/root_reducer"; 
import AppRootContainer from './components/AppRootContainer';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

const store = createStore(reducer);
export default function App() {
  return (
    <Provider store={store}>
      <AppRootContainer></AppRootContainer>
    </Provider>
  );
}


AppRegistry.registerComponent("rn-first-app", () => gestureHandlerRootHOC(App));