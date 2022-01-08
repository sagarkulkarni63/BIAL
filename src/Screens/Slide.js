import React, { Component } from 'react'
import { Button } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { TouchableOpacity } from 'react-native';
import { AppRegistry,StyleSheet,View,TextInput, Text, Image, SafeAreaView, ScrollView, Dimensions} from 'react-native';

const images=[
    'https://304ljw4amcep3ali496xph6b-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/Indira-Gandhi-International-Airport-2-1900-1600x1069.jpg',
    'https://cdn.businesstraveller.com/wp-content/uploads/fly-images/966723/Kempegowda-International-Airport-Bengaluru-916x514-916x514.jpg',
    'https://img.aviationpros.com/files/base/cygnus/cavc/image/2021/08/16x9/Skytrax_BLR_Airport.611fc244a28b6.png?auto=format&w=500&h=281&fit=clip'
  
  ]
  const WIDTH =Dimensions.get('window').width;
  const HEIGHT=Dimensions.get('window').height;
  

  wrap:{
    width: WIDTH,
    height: HEIGHT * 0.25,
  },
    container: {
        
        flex:1,
    },
