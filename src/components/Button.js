
import React from "react"
import { Text, TouchableOpacity,StyleSheet, View } from "react-native"
import { colors } from "../utils/colors";

const Button = ({onPress, customStyle, title, ...props}) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={[customStyle ? customStyle.buttonContainer : styles.buttonContainer, {...props.style}]}> 
                <Text style={ customStyle ? customStyle.title : styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
        
    )
}

export default React.memo(Button)

const styles = StyleSheet.create({
    container: {
        height:60,
        width:'100%',
        alignSelf:'center',
        marginVertical: 16
    },
    buttonContainer: {
        backgroundColor: colors.blue,
        paddingVertical: 20,
        paddingHorizontal: 8,
        borderRadius: 8,
        flex: 1,
    },
    title: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: "bold",

    }
  });
  
  
  