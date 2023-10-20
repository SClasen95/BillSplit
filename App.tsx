/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Splash from './src/views/Splash';
import CreateBill from './src/views/CreateBill';
import CreatePayers from './src/views/CreateProducts';
import Summary from './src/views/Summary';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();



function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="CreatePayers" component={CreatePayers} />
        <Stack.Screen name="CreateBill" component={CreateBill} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
