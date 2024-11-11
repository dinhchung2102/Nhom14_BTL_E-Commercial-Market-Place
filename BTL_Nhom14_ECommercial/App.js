<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import HomeScreen from './screens/Home_ProductListing'
import Filter from './screens/Filter';
import Feedback from './screens/Feedback';
import ProductDetail1 from './screens/ProductDetail1';
=======
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Product_ListView from "./screens/Product_ListView";
import Checkout_Payment_Success from "./screens/Checkout_Payment_Success";
import { RecoilRoot } from "recoil";
import Checkout_Payment_Method from "./screens/Checkout_Payment_Method";
import Checkout_Cart from "./screens/Checkout_Cart";
import Feedback from "./screens/Feedback";
import Filter from "./screens/Filter";
import Home_ProductListing from "./screens/Home_ProductListing";
>>>>>>> c8d044a83c98d29f52572679e7ca51d1a597ceed

export default function App() {
  const Stack = createStackNavigator();
  return (
<<<<<<< HEAD
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    //<HomeScreen />
    //<Filter />
    //<Feedback/>
    <ProductDetail1 />
=======
    <RecoilRoot>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator
          initialRouteName="Product_ListView"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Product_ListView" component={Product_ListView} />
          <Stack.Screen name="Checkout_Payment_Success" component={Checkout_Payment_Success}/>
          <Stack.Screen name="Checkout_Payment_Method" component={Checkout_Payment_Method}/>
          <Stack.Screen name="Checkout_Cart" component={Checkout_Cart}/>
          <Stack.Screen name="Feedback" component={Feedback}/>
          <Stack.Screen name="Filter" component={Filter}/>
          <Stack.Screen name="Home_ProductListing" component={Home_ProductListing}/>
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
>>>>>>> c8d044a83c98d29f52572679e7ca51d1a597ceed
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
