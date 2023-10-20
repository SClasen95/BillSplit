import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { colors } from "../utils/colors";

const Header = ({ value }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{value}</Text>
    </View>
  );
};

export default React.memo(Header);

const styles = StyleSheet.create({

    title: {
        color: colors.blue,
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 30,
        marginLeft: 30,
      },
});
