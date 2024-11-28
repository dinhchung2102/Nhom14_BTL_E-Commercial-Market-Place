import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { getCart, saveCart } from "../storage/cartStorage";
import { Checkbox } from "react-native-paper";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartQuantity, cartState, selectedProductsState, totalMoneyState } from "../atoms/CartAtom";

export default function Checkout_Cart({ navigation }) {
  const [cart, setCart] = useRecoilState(cartState);
  const totalQuantity = useRecoilValue(cartQuantity);

  const [totalMoney, setTotalMoney] = useRecoilState(totalMoneyState);
  const [checkedItems, setCheckedItems] = useRecoilState(selectedProductsState);

  const totalCheckedItems = checkedItems.flat().reduce((totalChecked, product_id) => {
    const product = cart.find((item) => item._id === product_id);
    if (product) {
      return totalChecked + product.quantity;
    }
    return totalChecked;
  }, 0);

  useEffect(() => {
    const fetchCart = async () => {
      const cartItems = await getCart();
      setCart(cartItems);
    };
    fetchCart();
  }, []);

  useEffect(() => {
    const calculateCheckedTotal = () => {
      const totalAmount = cart.reduce((sum, item) => {
        if (checkedItems.includes(item._id)) {
          return sum + item.price * item.quantity;
        }
        return sum;
      }, 0);
      setTotalMoney(totalAmount);
    };

    calculateCheckedTotal();
  }, [cart, checkedItems]);

  const handlePressMinus = async (product_id) => {
    const updatedCart = cart
      .map((item) => {
        if (item._id === product_id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return null;
          }
        }
        return item;
      })
      .filter((item) => item !== null);

    await saveCart(updatedCart);
    setCart(updatedCart);
  };

  const handlePressPlus = async (product_id) => {
    const updatedCart = cart.map((item) => {
      if (item._id === product_id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    await saveCart(updatedCart);
    setCart(updatedCart);
  };

  const handleCheckBoxChange = (product_id) => {
    setCheckedItems((prevCheckedItems) => {
      if (prevCheckedItems.includes(product_id)) {
        return prevCheckedItems.filter((id) => id !== product_id);
      } else {
        return [...prevCheckedItems, product_id];
      }
    });
  };

  const renderItem = ({ item }) => {
    const quantity = item.quantity ?? 1;

    return (
      <View style={styles.cartItemContainer}>
        <View style={styles.cartItemHeader}>
          <Pressable style={styles.shopNamePressable}>
            <Text style={styles.shopNameText}>Shop Name</Text>
            <FontAwesome name="angle-right" size={20} />
          </Pressable>
        </View>

        <View style={styles.cartItemBody}>
          <Checkbox
            status={checkedItems.includes(item._id) ? "checked" : "unchecked"}
            color="grey"
            uncheckedColor="red"
            onPress={() => handleCheckBoxChange(item._id)}
          />

          <Image
            source={{ uri: item.image }}
            style={styles.productImage}
          />
          <View style={styles.productInfo}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text>{item.des}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
          </View>

          <View style={styles.quantityControl}>
            <Pressable onPress={() => handlePressMinus(item._id)}>
              <FontAwesome name="minus-square" size={20} color={"#A52A2A"} />
            </Pressable>
            <TextInput
              value={String(quantity)}
              editable={false}
              style={styles.quantityTextInput}
            />
            <Pressable style={styles.plusButton} onPress={() => handlePressPlus(item._id)}>
              <FontAwesome name="plus-square" size={20} color={"#46DF01"} />
            </Pressable>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Pressable
              style={styles.backButton}
              onPress={() => navigation.pop(1)}
            >
              <FontAwesome name="angle-left" size={30} />
            </Pressable>
            <Text style={styles.cartTitle}>Cart ({totalQuantity})</Text>
          </View>
          <Pressable style={styles.commentButton}>
            <FontAwesome name="commenting-o" size={30} color={"grey"} />
          </Pressable>
        </View>

        <View style={styles.cartList}>
          {cart.flat().map((item) => (
            <View key={item._id} style={styles.cartItemWrapper}>
              {renderItem({ item })}
            </View>
          ))}
        </View>

        <Pressable style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See all</Text>
          <FontAwesome name="angle-double-down" size={25} color={"#15919B"} />
        </Pressable>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.eVoucherContainer}>
          <FontAwesome name="ticket" size={30} style={styles.eVoucherIcon} />
          <Text style={styles.eVoucherText}>E Voucher</Text>
          <Pressable style={styles.eVoucherPressable}>
            <Text>Choose or enter your voucher</Text>
            <FontAwesome name="angle-right" style={styles.angleRightIcon} size={20} />
          </Pressable>
        </View>
        
        <View style={styles.totalContainer}>
          <View style={styles.allOption}>
            <FontAwesome name="square-o" size={30} style={styles.squareIcon} />
            <Text>All</Text>
          </View>
          <View style={styles.totalAmountContainer}>
            <Text style={styles.totalAmountText}>Total: $ {totalMoney.toFixed(2)}</Text>
          </View>

          <Pressable style={styles.buyNowButton} onPress={()=>{navigation.navigate("Checkout_Payment_Method")}}>
            <Text style={styles.buyNowText}>Buy now ({totalCheckedItems})</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginBottom: 120,
  },
  header: {
    position: "relative",
    marginTop: 40,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    width: 20,
    marginLeft: 10,
  },
  cartTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  commentButton: {
    justifyContent: "center",
    marginRight: 10,
  },
  cartList: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  cartItemWrapper: {
    backgroundColor: "white",
    width: "100%",
    marginBottom: 10,
    borderBottomColor: "#F0F0F0",
    borderBottomWidth: 1,
    height: 150,
    borderRadius: 10,
  },
  cartItemContainer: {
    backgroundColor: "white",
    width: "100%",
    marginBottom: 10,
    borderBottomColor: "#F0F0F0",
    borderBottomWidth: 1,
    height: 150,
    borderRadius: 10,
  },
  cartItemHeader: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  shopNamePressable: {
    flexDirection: "row",
    alignItems: "center",
  },
  shopNameText: {
    fontWeight: "bold",
    fontSize: 18,
    marginRight: 10,
  },
  cartItemBody: {
    flexDirection: "row",
    alignItems: "center",
  },
  productImage: {
    width: 70,
    height: 70,
    marginLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#f0f0f0",
  },
  productInfo: {
    justifyContent: "center",
    marginLeft: 10,
    flex: 1,
  },
  productName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  productPrice: {
    fontSize: 22,
  },
  quantityControl: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  quantityTextInput: {
    width: 30,
    alignItems: "center",
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 19,
  },
  plusButton: {
    marginRight: 10,
  },
  seeAllButton: {
    alignItems: "center",
    width: "100%",
  },
  seeAllText: {
    fontSize: 16,
    color: "#15919B",
  },
  footer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    borderTopColor: "#f0f0f0",
    borderWidth: 1.5,
  },
  eVoucherContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    width: "100%",
  },
  eVoucherIcon: {
    marginLeft: 10,
  },
  eVoucherText: {
    fontSize: 16,
    marginLeft: 10,
  },
  eVoucherPressable: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
    marginRight: 10,
  },
  angleRightIcon: {
    marginLeft: 10,
  },
  totalContainer: {
    backgroundColor: "white",
    borderTopColor: "#f0f0f0",
    borderTopWidth: 1.5,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  allOption: {
    flexDirection: "row",
    marginLeft: 10,
    alignItems: "center",
  },
  squareIcon: {
    marginRight: 10,
  },
  totalAmountContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  totalAmountText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
  buyNowButton: {
    backgroundColor: "#09D1C7",
    alignItems: "center",
    justifyContent: "center",
    width: 140,
  },
  buyNowText: {
    color: "white",
    fontSize: 18,
  },
});
