import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import { colors } from "../utils/colors";
import { useRoute } from "@react-navigation/native";
import DropDownList from "../components/DropDownList";
import Input from "../components/Input";
import { FlatList } from "react-native-gesture-handler";
import SummaryItem from "../components/SummaryItem";

const Summary = ({ navigation }) => {
  const route = useRoute();
  const billItems = route.params.data;

  const [names,setNames] = useState([])
  
  useEffect(() => {
    createNamesArray();
    console.log(names)
  },[]);


  const filterBillItemsByName = (filterName) => {
    
    return billItems.filter((item)=>item.name === filterName)
  }
  
  const createNamesArray = () => {
    const uniqueNames = [...new Set(billItems.map(item => item.name))];
    setNames(uniqueNames);
  }
  
  

  return (
    <View style={styles.summaryContainer}>
       {names.map((item) => (
        <SummaryItem key={item} value={filterBillItemsByName(item)} />
    ))}
    </View>
  );
};

export default React.memo(Summary);

const styles = StyleSheet.create({
  summaryContainer:{
    margin:18
  }
});
