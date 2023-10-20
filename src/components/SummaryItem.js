import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { FlatList } from 'react-native-gesture-handler';

const SummaryItem = ({value}) => {

    let total = 0
    
    

    const calculateTotal = (value) => {
        setTotal(()=>{
            total+=value
        })
    }

    console.log(value)
    return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
        <Text style={styles.title}>{value.length > 0 ? value[0].name : null}</Text>
        <View style={styles.totalContainer}>
            <Text style={styles.total}>Total:</Text>
            <Text style={styles.totalValue}>
            {value.map((item) => {
                total += item.price * item.cantidad            
              return null;
            })}
            ${total}</Text>
        </View>
        </View>
        <FlatList style={styles.productList}
        data={value}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
            
            <View style={styles.productItem}>
                <View style={styles.productDetails}>
                    <Text style={styles.productName}>{item.product}</Text>
                    <Text style={styles.productAmount}>x{item.cantidad}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.productPrice}>${item.price}</Text>
                </View>
          </View>
        )}
        />
            
    </View>
    );
}
export default React.memo(SummaryItem);

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:colors.black,
        marginTop:14,
        borderRadius:8,
        padding:6
    },
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    title:{
        color: colors.blue,
        fontWeight: 'bold',
        fontSize: 24,
        
    },
    totalContainer:{
        flexDirection:'row',        
    },
    total:{
        color:colors.black,
        fontWeight:'bold',
        paddingTop:1          
    },
    totalValue:{
        color:colors.blue,
        fontWeight:'bold',
        fontSize:18,
        paddingHorizontal:12      
    },
    productList:{
        paddingHorizontal:12
    },
    productItem:{
        flexDirection:'row',
        flex:1,
        justifyContent:'space-between',
        alignSelf:'center',
        width:'90%',
        borderBottomWidth:1
    },
    productDetails: {
        flexDirection:'row',
        flex:1,
        justifyContent:'space-between',
    },
    productName: {
        color: colors.black
    },
    productAmount:{
        color: colors.black
    },
    priceContainer:{
        width:'50%',
        alignItems:'flex-end'
    },
    productPrice: {
        color: colors.black
    }
  });
  