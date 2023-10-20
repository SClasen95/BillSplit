import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import { colors } from "../utils/colors";
import { useRoute } from "@react-navigation/native";
import DropDownList from "../components/DropDownList";
import Input from "../components/Input";
import SummaryItem from "../components/SummaryItem";
import Separator from "../components/Separator";
import Header from "../components/Header";

const CreateBill = ({ navigation }) => {
  const route = useRoute();
  const productList = route.params.data;

  // Extract product names from productList
  const productOptions = productList.map((product) => product.name);

  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [cantidad, setCantidad] = useState("1"); // Initialize cantidad to "0"
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
    setCantidad("1"); // Reset cantidad to "0"
  };

  const onAddPress = () => {
    // Find the selected product from productList
    const selectedProduct = productList.find((item) => item.name === product);

    if (selectedProduct) {
      if (name === "") {
        // Calculate the price per person
        const newPrice = selectedProduct.price / names.length;
        // Create a new sharedBillItem for each participant
        const sharedBillItems = names.map((item) => ({
          name: item,
          cantidad: cantidad,
          product: product,
          price: newPrice,
        }));
        // Update the billItems array with the new sharedBillItems
        setBillItems([...billItems, ...sharedBillItems]);
      } else {
        // Create a new bill item for a single payer
        const newBillItem = {
          name: name,
          cantidad: cantidad,
          product: product,
          price: selectedProduct.price,
        };
        var existingProduct = billItems.find(
          (item) =>
            item.product === newBillItem.product &&
            item.name === newBillItem.name
        );
        console.log(existingProduct);

        if (existingProduct) {
          existingProduct.cantidad++;
        } else {
          // Update the billItems array with the newBillItem
          setBillItems([...billItems, newBillItem]);
        }
      }
      // Reset the form
      resetForm();
    }
  };

  const [names, setNames] = useState([]);

  useEffect(() => {
    createNamesArray();
  }, [billItems]);

  const filterBillItemsByName = (filterName) => {
    return billItems.filter((item) => item.name === filterName);
  };

  const createNamesArray = () => {
    const uniqueNames = [...new Set(billItems.map((item) => item.name))];
    setNames(uniqueNames);
  };

  const cantidadOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  return (
    <View style={styles.container}>
      <Header value={"Create Bills"} />
      <View style={styles.form}>
        <Input
          value={name}
          placeholder={"Leave empty if shared amongst everyone."}
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
        <Separator />
        <ScrollView>
          <View style={styles.summaryContainer}>
            {names.map((item) => (
              <SummaryItem key={item} value={filterBillItemsByName(item)} />
            ))}
          </View>
        </ScrollView>
        <View style={styles.addButton}>
          <Button
            title={"Add"}
            onPress={onAddPress}
            style={{ backgroundColor: colors.orange }}
          />
        </View>
      </View>
    </View>
  );
};

export default React.memo(CreateBill);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  form: {
    marginHorizontal: 24,
    marginTop: 14,
    flex: 1,
  },
  summaryContainer: {
    marginTop: 12,
  },
  productInfo: {
    flexDirection: "row",
  },
  productInput: {
    width: 225,
    marginRight: 8,
  },
  cantInput: {
    flex: 1,
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
