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

export default function App() {
  const Stack = createStackNavigator();
  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
