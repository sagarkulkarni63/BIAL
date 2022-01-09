import * as React from "react";
import { Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Food from '../Screens/Food'
import Explore from '../Screens/Explore'

function Shops() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#03cafc"
      }}
    >
      <Text> Home </Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTinColor: "#e91e63",
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: "white" }
      }}
    >
      <Tab.Screen
        name="Shops"
        component={Explore}
        options={{ tabBarLabel: "Shops" }}
      />
      <Tab.Screen
        name="Food"
        component={Food}
        options={{ tabBarLabel: "Food" }}
      />
    </Tab.Navigator>
  );
}

export default function TopNavigation() {
  return (
    <NavigationContainer independent='true'>
        <MyTabs />
    </NavigationContainer>
  );
}