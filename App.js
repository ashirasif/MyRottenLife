

import React from 'react';
import {Text, StyleSheet} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// importing components
import HomeComponent from "./homecomp";
import CatalogComponent from "./catalog";
import DisplayComponent from './displayText';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="home"
        component={HomeComponent} 
        options={{
          title: "Home",
          headerStyle: {backgroundColor: "yellow"}
        }} 
        />
        <Stack.Screen 
        name="catalog"
        component={CatalogComponent}
        options={{
          title: "Past Tragedies",
          headerStyle: {backgroundColor: "yellow"}
        }}
        />
        <Stack.Screen
        name="display"
        component={DisplayComponent}
        options={{
          title: "Text",
          headerStyle: {backgroundColor: "yellow"}
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  
  container : {
    flex: 1,
    padding: 24,
    backgroundColor: "transparent"
  }

});
 
export default App;




