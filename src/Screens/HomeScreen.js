import React from 'react'
import { View, Text, TextInput, ScrollView, StyleSheet, SafeAreaView, Alert, TouchableOpacity } from 'react-native'
import { useState } from 'react';
import { color } from 'react-native-elements/dist/helpers';
import { Button } from 'react-native-elements/dist/buttons/Button';
import Test from '../Screens/Test'
import {createNavigationStack} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import QRCode from 'react-native-qrcode';

const HomeScreen=() => {
    const [pnr, setPnr] = useState('ABCD')
    return(
        <SafeAreaView>
            <View>
                <TextInput  placeholder='Enter PNR/Booking Ref.' 
                style={styles.input} 
                onChangeText={(val)=> setPnr(val)}></TextInput>
                <TouchableOpacity style={styles.button}>
                    <Text>Generate Ticket</Text>
                </TouchableOpacity>
                <Text>
                    
                </Text>
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
});
  
  export default HomeScreen;
  
