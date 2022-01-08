import React, {Component} from 'react'
import { View, Text, TextInput, ScrollView, StyleSheet, SafeAreaView, Alert, TouchableOpacity, Image } from 'react-native'
import { useState } from 'react';
import { color } from 'react-native-elements/dist/helpers';
import { Button } from 'react-native-elements/dist/buttons/Button';
import Test from '../Screens/Test'
import {createNavigationStack} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';


const HomeScreen=() => {
    const [pnr, setPnr] = useState("")
    return(
        <SafeAreaView>
            <View>
                <View style={styles.headerTitle}>
                    <Image source={require('../Icons/KIAB-Logo-1200-X-628-removebg-preview.png')} style={styles.headerImage}/>
                    <Text  style={styles.headerText}>Welcome To Bengaluru International Airport</Text>
                </View>
                <TextInput placeholder='Enter PNR/Booking Ref.' 
                style={styles.input} 
                onChangeText={(val)=> setPnr(val)}></TextInput>
                <TouchableOpacity  style={styles.button}>
                    <Text>Generate Ticket</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        
    );
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        marginHorizontal:50,
        justifyContent:'center',
        alignItems:'center',
    },
    container:{
        flex: 1,
        justifyContent:'center',
        marginHorizontal: 16,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        marginHorizontal: 100
    },
    header:{
        width:'100%',
        height: '100%',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
    },
    headerImage:{
        width: 110,
        height: 50,
        resizeMode:'contain',
    },
    headerText:{
        fontWeight: 'bold',
        color: '#333',
        flex: 1,
        flexWrap: 'wrap',
    },
    headerTitle:{
        flexDirection:'row',
    },
});
  
  export default HomeScreen;
  
