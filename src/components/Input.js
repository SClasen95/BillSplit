
import React from "react"
import { Text, StyleSheet, View, TextInput } from "react-native"
import { colors } from "../utils/colors";

const Input = ({label,placeholder,value, onChangeText, ...props}) => {

    return (
        <View style={styles.container}>
           <Text style={styles.label}>{label}</Text>
           <View>
            <TextInput keyboardType={props.keyboardType} onChangeText={onChangeText} value={value} placeholder={placeholder} style={styles.input}></TextInput>
           </View>
        </View>
        
    )
}

export default React.memo(Input)

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
   
    label: {
        marginLeft: 5,
        paddingVertical: 5,
        fontSize: 16,
        color: colors.black
    },
    input:{
        borderWidth: 1,
        borderRadius: 14,
        borderColor: colors.grey,
        fontSize: 16,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
        color: colors.darkGrey
    }
  });
  
  
  