import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import { colors } from "../utils/colors";


const Splash = ({navigation}) => {

    const onButtonPress = () => {
        navigation.navigate('CreatePayers')
    }


    return (
        <View style= {styles.container}>
            <Text style={styles.title}>
                Bienvenido a Bill Split!
            </Text>
            <Button title="Entrar" onPress={onButtonPress} customStyle={buttonStyles} />
        </View>
      
    );
}

export default React.memo(Splash);


const buttonStyles = StyleSheet.create({
    container: {
        alignItems: "center", // Center horizontally
        justifyContent: "center", // Center vertically
        
      },
      buttonContainer: {
        backgroundColor: "transparent",
        borderColor: colors.blue,
        borderWidth: 2,
        width: 150,
        height: 150,
        borderRadius: 75,
        alignSelf:'center',
        alignItems: "center", // Center button horizontally
        justifyContent: "center", // Center button vertically
      },
      title:{
        fontWeight: 'bold',
        color:colors.blue,
        fontSize: 24,
      }
   
  });

  const styles = StyleSheet.create({
    container: {
        alignItems: "center", // Center horizontally
        justifyContent: "center", // Center vertically      
        flex:1,
        
      },
    title: {
        color: colors.black,
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 30
    }
   
  });