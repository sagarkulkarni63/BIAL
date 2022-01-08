import React, { Component } from 'react'
import { Button } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { TouchableOpacity } from 'react-native';
import { AppRegistry,StyleSheet,View,TextInput, Text, Image, SafeAreaView} from 'react-native';



class QRScreen extends Component {
state = {
text:"",
isVisible:false,
};

chgVisib=()=>{
  this.setState({
    isVisible:!this.state.isVisible
  })
}

render() {
return (
  <SafeAreaView>
    <View>
      <View style={styles.header}>
        <Image source={require('../Icons/KIAB-Logo-1200-X-628-removebg-preview.png')} style={styles.headerImage}/>
        <Text  style={styles.headerText}>Welcome To Bengaluru International Airport</Text>
      </View>
      <TextInput style={styles.input} onChangeText={(text) => this.setState({text: text})} value={this.state.text}/>
      <TouchableOpacity style={styles.button} onPress={this.chgVisib} title="Click to Generate" > 
        <Text>Generate Boarding Pass </Text>
      </TouchableOpacity>
        {this.state.isVisible?
      <QRCode value={this.state.text.length > 0 ? this.state.text : "BIAL"}
      size={200}
      bgColor='#000000'
      fgColor='#FFFFFF'
      />:null}
    </View>
  </SafeAreaView>
);
}
}
 
const styles = StyleSheet.create({
    container: {
        
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header:{
      marginTop: 25,
      width:'100%',
      height: '25%',
      flexDirection: 'row',

    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 12,
        borderRadius: 5,
        padding: 10,
        width: 250,
        alignItems:"center",
        marginHorizontal: 60,
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
      marginHorizontal: 85,
      width: 200,
  },
  headerImage:{
    width: 120,
    height: 50,
    resizeMode:'contain',
  },
  headerText:{
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    flexWrap: 'wrap',
  },
});
 
AppRegistry.registerComponent('QRScreen', () => QRScreen);
 
module.exports = QRScreen;

























