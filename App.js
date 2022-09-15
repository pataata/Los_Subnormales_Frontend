import React, { Component} from 'react';

//Navigation import
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import MainScreen from './app/screens/MainScreen';

const Stack = createNativeStackNavigator();

const Data = {"Age": 50}

function makeFecth(){
  console.log('resultado')
}

const App = () => {

  makeFecth();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
        />
        <Stack.Screen name="MainScreen" component={MainScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;