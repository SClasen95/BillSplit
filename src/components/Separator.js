
import React from "react"
import { Text, TouchableOpacity,StyleSheet, View } from "react-native"
import { colors } from "../utils/colors";

const Separator = () => {

    return (
        <View style={styles.line}>
           
        </View>
        
    )
}

export default React.memo(Separator)

const styles = StyleSheet.create({
    line:{        
        borderWidth:0.5,
        borderColor:colors.darkGrey
    }
  });
  
  
  