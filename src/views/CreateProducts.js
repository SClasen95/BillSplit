import React, { useState } from "react";
import { StyleSheet, Text, View, ToastAndroid } from "react-native";
import Button from "../components/Button";
import { colors } from "../utils/colors";
import Input from "../components/Input";
import { FlatList } from "react-native-gesture-handler";

const CreateProducts = ({ navigation }) => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState('');
  const [productList, setProductList] = useState([]);

  const onProdChange = (text) => {
    setProductName(text);
  };

  const onPriceChange = (text) => {
    setPrice(text);
  };

  const resetForm = () => {
    setProductName("");
    setPrice('');
  };

  const onAddPress = () => {
    if (productName.trim() !== '') {
      setProductList([...productList, { name: productName, price }]);
      resetForm();
    }
  };

  const onNextPress = () => {
    if (productList.length > 0) {
      const data = productList;
      navigation.navigate('CreateBill', { data });
    } else {
      ToastAndroid.show("You need to add at least one product", ToastAndroid.SHORT);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add products</Text>
      <View style={styles.form}>
        <Input
          value={productName}
          label={"Product:"}
          onChangeText={(text) => onProdChange(text)}
        />
        <Input
          value={price.toString()}
          label={"Price:"}
          keyboardType="numeric"
          onChangeText={(text) => onPriceChange(text)}
        />

        <Button
          title={"Add"}
          onPress={onAddPress}
          style={{ backgroundColor: colors.orange }}
        />
        <FlatList
          style={styles.nameList}
          data={productList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Text style={styles.name}>{`${item.name}: ${item.price}`}</Text>
          )}
        />
      </View>
      <View style={styles.next}>
        <Button title={"Next"} onPress={onNextPress} />
      </View>
    </View>
  );
};

export default React.memo(CreateProducts);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  form: {
    flex: 1,
    marginTop: 25,
    marginHorizontal: 16,
  },
  title: {
    color: colors.blue,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: 30,
  },
  nameList: {
    width: 200,
    alignSelf: 'center',
    marginTop: 56,
  },
  name: {
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    textAlign: 'center',
    fontSize: 18,
  },
  next: {
    marginHorizontal: 16,
  },
});
