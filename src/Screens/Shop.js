import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { SafeAreaView,  } from 'react-native-safe-area-context';


const Shop=() => {
    return(
        <View style={styles.page}>
            <View style={styles.root}>
                <Text>Hello</Text>
            </View>
        </View>
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
    image:{
        flex: 2,
        height: 150,
        resizeMode: 'contain',
    },
    title:{
        fontSize: 18,

    },
    price:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    rightContainer:{
        padding: 10,
        flex: 3,
    }
});



export default Shop;