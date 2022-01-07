import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import Shop from './Shop';
import products from '../Assets/products';




const MainShop=()=>{
    return(
        <View style={styles.page}>
            <Shop item={products[0]}/>
            <FlatList 
                data={products} 
                renderItem={({item}) => <Shop item={item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}


const styles= StyleSheet.create({
    page:{
        padding: 10,
    },
})