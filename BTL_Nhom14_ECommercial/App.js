
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// const Stack = createNativeStackNavigator();

// import HomeScreen from './screens/Home_ProductListing'
// import Filter from './screens/Filter';
// import Feedback from './screens/Feedback';
// import ProductDetail1 from './screens/ProductDetail1';

import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Product_ListView from "./screens/Product_ListView";
import Checkout_Payment_Success from "./screens/Checkout_Payment_Success";
import Checkout_Payment_Method from "./screens/Checkout_Payment_Method";
import Checkout_Cart from "./screens/Checkout_Cart";
import Feedback from "./screens/Feedback";
import Filter from "./screens/Filter";
import Home_ProductListing from "./screens/Home_ProductListing";
import {RecoilRoot} from "recoil";
import ProductDetail1 from "./screens/ProductDetail1";
import ProductDetail2 from "./screens/ProductDetail2";
import Products from "./screens/Products";
import Login from "./screens/Login";
import Register from "./screens/Register";


export default function App() {
  const Stack = createStackNavigator();
  return (

    <RecoilRoot>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator
          //initialRouteName="Product_ListView"
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Product_ListView" component={Product_ListView} />
          <Stack.Screen name="Checkout_Payment_Success" component={Checkout_Payment_Success}/>
          <Stack.Screen name="Checkout_Payment_Method" component={Checkout_Payment_Method}/>
          <Stack.Screen name="Checkout_Cart" component={Checkout_Cart}/>
          <Stack.Screen name="Feedback" component={Feedback}/>
          <Stack.Screen name="Filter" component={Filter}/>
          <Stack.Screen name="ProductDetail1" component={ProductDetail1}/>
          <Stack.Screen name="ProductDetail2" component={ProductDetail2}/>
          <Stack.Screen name="Home_ProductListing" component={Home_ProductListing}/>
          <Stack.Screen name="Products" component={Products}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Register" component={Register}/>
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
