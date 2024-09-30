import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import HomeTabNavigator from "./TabNavigator"; // Assuming you have a TabNavigator for home screen navigation
import ProfileScreen from "../screens/ProfileScreen"; // Import other screens as needed

// Create the stack navigator
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen" // Set the initial screen
      screenOptions={{
        headerShown: false, // Default to hide headers for all screens
      }}
    >
      {/* Stack Screens */}
      <Stack.Screen 
        name="LoginScreen" 
        component={LoginScreen} 
        options={{ headerShown: false }} 
      />
      
      <Stack.Screen 
        name="SignUpScreen" 
        component={SignUpScreen} 
        options={{ headerShown: false }} 
      />

      <Stack.Screen 
        name="HomeScreen" 
        component={HomeTabNavigator} // Assuming this is your Tab Navigator for home
        options={{ headerShown: false }} 
      />

      <Stack.Screen 
        name="ProfileScreen" 
        component={ProfileScreen} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
