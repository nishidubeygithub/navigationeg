import React from  "react";
import {View, Text} from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//import Homescreen from "./components/HomeScreen";
//import Aboutscreen from "./components/AboutScreen";
import Register from './components/Register';
import Login from './components/Login'
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name ="Home" component ={Homescreen}/>
        <Stack.Screen name ="About" component ={Aboutscreen}/> */}
        <Stack.Screen name ="Register" component ={Register}/>
        <Stack.Screen name ="Login" component ={Login}/>
        
        </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;