import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native';

export default class Profile extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              
              
              <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.digilocker.android&hl=en_IN&gl=US')}>
                <Text>Open DigiLocker</Text>  
              </TouchableOpacity >              
              <TouchableOpacity style={styles.buttonContainer} onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=in.gov.uidai.mAadhaarPlus&hl=en_IN&gl=US')}>
                <Text> Open mAadhar </Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#FFD700",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#FFD700",
  },
});
