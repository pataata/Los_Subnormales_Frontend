import React, { Component} from 'react';
import ScreenOne from './app/screens/ScreenOneAndTwo';
import ScreenTwo from './app/screens/ScreenOneAndTwo';

//Navigation import
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const App = () => {
	//const
	const Stack = createStackNavigator();
  
	return (
	  <NavigationContainer>
		<Stack.Navigator>
		  <Stack.Screen name="Spaceship Titanic" component={ScreenOne} />
		  <Stack.Screen name="Prediction Model" component={ScreenTwo} />
		</Stack.Navigator>
	  </NavigationContainer>
	);
  };

export default App;