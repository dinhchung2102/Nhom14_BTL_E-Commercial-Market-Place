import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TextHeader from "../components/TextHeader";
import { FontAwesome } from "@expo/vector-icons";
import TextPayment from "../components/TextPayment";
import Button_Fonawesome from "../components/Button_Fonawesome";

export default function Checkout_Cart({navigation}) {
  const dataProduct = [
    { id: 1, name: "product1", price: 880, rate: 0, des: "mota" },
    { id: 2, name: "product2", price: 880, rate: 0, des: "mota" },
    { id: 3, name: "product3", price: 880, rate: 0, des: "mota" },
    { id: 4, name: "product4", price: 880, rate: 0, des: "mota" },
  ];
  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          marginBottom: 10,
          flexDirection: "row",
        }}
      >
        <Image
          source={{ uri: "link" }}
          style={{ width: 100, height: 100, backgroundColor: "red" }}
        />
        <View style={{ justifyContent: "center", marginLeft: 10, flex: 1 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>{item.name}</Text>
          <Text>{item.des}</Text>
          <Text style={{ fontSize: 22 }}>${item.price}</Text>
        </View>
        <View style={{ justifyContent: "center" }}>
          <Pressable>
            <FontAwesome name="pencil" size={20} />
          </Pressable>
          <Text style={{ fontSize: 20 }}>x{1}</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TextHeader textHeader="Checkout" />
        <View style={{ width: "95%", marginTop: 20 }}>
          <FlatList
            data={dataProduct}
            renderItem={renderItem}
            ListFooterComponent={
              <View style={styles.footer}>
                <Text>Voucher</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 10,
                  }}
                >
                  <View
                    style={{
                      borderWidth: 1,
                      flex: 1,
                      height: 40,
                      justifyContent: "center",
                      borderRadius: 5,
                    }}
                  >
                    <TextInput
                      placeholder="Enter your voucher"
                      style={{ marginLeft: 10 }}
                    />
                  </View>

                  <Pressable style={styles.btnApply}>
                    <Text style={styles.textBtnApply}>Apply</Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 20,
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    TOTAL
                  </Text>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    ${8800}
                  </Text>
                </View>
                <Button_Fonawesome name = "Next" nameIcon = "arrow-right" onPress ={()=>{navigation.navigate("Checkout_Payment_Method")}}/>
              </View>
            }
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  footer: {
    marginTop: 20,
  },
  btnApply: {
    backgroundColor: "red",
    height: 40,
    width: 115,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  textBtnApply: {
    fontSize: 25,
    color: "white",
  },
});
