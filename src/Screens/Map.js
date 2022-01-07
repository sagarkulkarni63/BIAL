import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';


const Map=() => {
    return(
        <ScrollView>
            <View style={styles.page}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>This is Terminal Map Showing Locations of Boarding Gate, Lounges, Shops and Resturants.</Text>
                <View style={styles.root}>
                    <Image source={{uri:'http://2.bp.blogspot.com/-0EbEvBqkF4g/Uq7AV3kL1iI/AAAAAAAAAvo/CrWhEZgOf-I/s1600/Level_2_T1A_Bangalore_airport.jpg'}} style={{width: '100%', height: 150, borderWidth: 3, overflow: 'hidden', borderColor:'#FFD700', resizeMode:'contain'}}/>
                </View>
                <Image source={require('../Icons/Level_0_T1A_Bangalore_airport.png')} style={{width: '100%', height: 150, borderWidth: 3, overflow: 'hidden', borderColor:'#FFD700'}}/>
                <View>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>This is Exterior Airport Map </Text>
                    <Image source={require('../Icons/blr-airport-map.png')} style={{width: '100%', height: 250, flex: 1, borderWidth: 3, overflow: 'hidden', borderColor:'#FFD700'}}/>
                </View>
            </View>
        </ScrollView>
     
    );
  }

  const styles=StyleSheet.create({
    page:{
        width: '100%',
        padding: 10,
        
    },
    root:{
        flexDirection: 'row',
        margin: 10,
        borderWidth: 1,
        borderColor: '#d1d1d1',
        boederRadius: 10,
        backgroundColor:'#fff',
        marginVertical: 5,
    },
});
  
  export default Map;
  