import React from "react";
import { Text, TouchableOpacity, StyleSheet, View, Pressable } from "react-native";
import { colors } from "../utils/colors";

const Header = ({ value, onBackPress }) => {
  return (
    <View style={styles.header}>
      <Pressable onPress={onBackPress}>
        <Text style={styles.arrow}>
        ←
        </Text>
      </Pressable>
      <Text style={styles.title}>{value}</Text>
    </View>
  );
};

export default React.memo(Header);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',    
  },
  arrow:{
    fontSize:48,
    marginLeft:12,
    color: colors.blue
  },
  title: {
    color: colors.blue,
    fontSize: 24,
    fontWeight: "bold",
    marginTop:27,
  },
});
