import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import { colors } from "../utils/colors";
import { useRoute } from "@react-navigation/native";
import DropDownList from "../components/DropDownList";
import Input from "../components/Input";
import { FlatList } from "react-native-gesture-handler";

const CreateBill = ({ navigation }) => {
  const route = useRoute();
  const productList = route.params.data;

  // Extract product names from productList
  const productOptions = productList.map((product) => product.name);

  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [cantidad, setCantidad] = useState("0"); // Initialize cantidad to "0"
  const [billItems, setBillItems] = useState([]);

  const onDropDownChange = (opt) => {
    setProduct(opt);
  };

  const onPayerChange = (text) => {
    setName(text);
  };

  const onCantidadChange = (opt) => {
    setCantidad(opt);
  };

  const resetForm = () => {
    setProduct("");
    setCantidad("0"); // Reset cantidad to "0"
  };

  const onAddPress = () => {
    // Find the selected product from productList
    const selectedProduct = productList.find((item) => item.name === product);

    if (selectedProduct) {
      // Create a new bill item object
      const newBillItem = {
        name: name,
        cantidad: cantidad,
        product: product,
        price: selectedProduct.price,
      };

      // Add the new bill item to billItems array
      setBillItems([...billItems, newBillItem]);

      // Reset the form
      resetForm();
    }
  };

  // Define cantidad (quantity) options, including "0"
  const cantidadOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add the products to each person</Text>
      <View style={styles.form}>
        <Input
          value={name}
          label={"Payer:"}
          onChangeText={(text) => onPayerChange(text)}
        />
        <View style={styles.productInfo}>
          <View style={styles.productInput}>
            <DropDownList
              value={product}
              placeholder={"Select a product"}
              label={"Product:"}
              options={productOptions}
              onChangeText={onDropDownChange}
            />
          </View>
          <View style={styles.cantInput}>
            <DropDownList
              value={cantidad}
              label={"Cantidad:"}
              options={cantidadOptions}
              onChangeText={onCantidadChange}
            />
          </View>
        </View>
        <Button
          title={"Add"}
          onPress={onAddPress}
          style={{ backgroundColor: colors.orange }}
        />
      </View>
      <FlatList
        style={styles.nameList}
        data={billItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.name}>{`${item.name}:  ${item.product} - $${item.price} x${item.cantidad}`}</Text>
        )}
      />
    </View>
  );
};

export default React.memo(CreateBill);

const styles = StyleSheet.create({
  title: {
    color: colors.blue,
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 30,
    marginLeft: 30,
  },
  form: {
    marginHorizontal: 24,
    marginTop: 14,
  },
  productInfo: {
    flexDirection: "row",
  },
  productInput: {
    width:225,
    marginRight: 8,    
  },
  cantInput: {
    flex:1,
    marginRight: 8,
  },
  nameList: {
    width: 300,
    alignSelf: "center",
    marginTop: 56,
  },
  name: {
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    textAlign: "center",
    fontSize: 18,
  },
});
