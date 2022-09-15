import React, { Component} from 'react';
import ScreenOne from './app/screens/ScreenOneAndTwo';
import ScreenTwo from './app/screens/ScreenOneAndTwo';

//Navigation import
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const Data = {"Age": 50}

function makeFecth(){
  console.log('resultado')
}

const App = () => {
<<<<<<< Updated upstream
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
=======
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
>>>>>>> Stashed changes

export default App;