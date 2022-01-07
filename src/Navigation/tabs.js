import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from "../Screens/HomeScreen";
import Map from "../Screens/Map"
import Shop from "../Screens/Shop"
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Identity from "../Screens/Identity";


const Tab= createBottomTabNavigator();
const Tabs= () =>{
    return(
        <Tab.Navigator
            screenOptions={{headerShown: false}}
            tabBarOptions={{
                showLabel: false,
                style:{
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor:'#ffffff',
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow
                }
            }}
            >
            <Tab.Screen name="Welcome to Bangalore Intl. Airport" component={HomeScreen} options={{tabBarIcon: ({focused}) =>(
                <View style={{alignItems: 'center', justifyContent:'center',top:10}}>
                    <Image source={require('../Icons/download.png')}
                    resizeMode='contain'
                    style={{width: 25, height:15, tintColor: focused?'#e32f45':'#748c94'}}/>
                    <Text style={{color: focused?'#e32f45':'#748c94', fontSize: 12}}>Home</Text>
                </View>
            )
            }}/>
            <Tab.Screen name="Identity" component={Identity} options={{tabBarIcon: ({focused}) =>(
                <View style={{alignItems: 'center', justifyContent:'center',top:10}}>
                    <Image source={require('../Icons/id-card-regular.png')}
                    resizeMode='contain'
                    style={{width: 25, height:15, tintColor: focused?'#e32f45':'#748c94'}}/>
                    <Text style={{color: focused?'#e32f45':'#748c94', fontSize: 12}}>ID</Text>
                </View>
            )
            }}/>
            <Tab.Screen name="Map" component={Map} options={{tabBarIcon: ({focused}) =>(
                <View style={{alignItems: 'center', justifyContent:'center',top:10}}>
                    <Image source={require('../Icons/map-marker-alt-solid.png')}
                    resizeMode='contain'
                    style={{width: 25, height:15, tintColor: focused?'#e32f45':'#748c94'}}/>
                    <Text style={{color: focused?'#e32f45':'#748c94', fontSize: 12}}>Airport Map</Text>
                </View>
            )
            }} />
            <Tab.Screen name="Explore" component={Shop} options={{tabBarIcon: ({focused}) =>(
                <View style={{alignItems: 'center', justifyContent:'center',top:10}}>
                    <Image source={require('../Icons/explore.png')}
                    resizeMode='contain'
                    style={{width: 25, height:15, tintColor: focused?'#e32f45':'#748c94'}}/>
                    <Text style={{color: focused?'#e32f45':'#748c94', fontSize: 12}}>Explore</Text>
                </View>
            )
            }}/>
            
        </Tab.Navigator>
    );
}
const styles= StyleSheet.create({
    shadow:{
        shadowOffset:{
            width: 0,
            height: 10,
        },
        shadowOpacity:0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
});

export default Tabs;