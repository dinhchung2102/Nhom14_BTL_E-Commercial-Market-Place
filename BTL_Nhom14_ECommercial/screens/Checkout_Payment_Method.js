import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  SafeAreaViewComponent,
  Pressable,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import TextHeader from "../components/TextHeader";
import { useRecoilValue } from "recoil";
import { totalMoneyState } from "../atoms/CartAtom";

export default function Checkout_Payment_Method({navigation}) {
  const [isPressed, setIsPressed] = useState(false);
  const totalMoney = useRecoilValue(totalMoneyState);
  const handleChooseMethod = () => {};
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TextHeader textHeader="Payment" onPress = {() =>{navigation.navigate("Feedback")}} />
        <Text style={{ fontSize: 20, marginTop: 80 }}>TOTAL</Text>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>$ {totalMoney}</Text>

        <View style={styles.content}>
          <Pressable
            style={[styles.method, isPressed && styles.methodPressed]}
            onPress={() => {
              setIsPressed(!isPressed);
            }}
          >
            <View style={styles.logoMethod}>
              <Image
                source={{ uri: "https://imgur.com/Qi2PxTx.png" }}
                style={{width: 50, height: 50}}
              />
            </View>
          </Pressable>
          <Pressable
            style={[styles.method, isPressed && styles.methodPressed]}
            onPress={() => {
              setIsPressed(!isPressed);
            }}
          >
            <View style={styles.logoMethod}>
              <Image
                source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1280px-MasterCard_Logo.svg.png" }}
                style={{width: 83, height: 50}}
              />
            </View>
          </Pressable>
          <Pressable
            style={[styles.method, isPressed && styles.methodPressed]}
            onPress={() => {
              setIsPressed(!isPressed);
            }}
          >
            <View style={styles.logoMethod}>
              <Image
                source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" }}
                style={{width: 50, height: 50}}
              />
            </View>
          </Pressable>

          <Pressable style={styles.button} onPress={()=>{navigation.navigate("Checkout_Payment_Success")}}>
            <FontAwesome name="money" size={25} color={'white'}/>
            <Text style={styles.textButton}>Pay now</Text>
          </Pressable>
            <Pressable style={styles.addCardView}>
                <FontAwesome name="plus" color={'red'} size={30}/>
                <Text style={{fontSize: 18, marginLeft: 10}}>Add new Card</Text>
            </Pressable>
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
  header: {
    width: "95%",
    marginTop: 35,
    marginBottom: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  content: {
    width: "95%",
    marginTop: 20,
    alignItems: "center",
  },
  method: {
    borderColor: "#E4E4E4",
    borderWidth: 1,
    width: "100%",
    marginBottom: 20,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
  },
  methodPressed: {
    borderColor: "blue",
  },
  logoMethod: {
    width: 100,
    height: '100%',
    justifyContent:'center',
    alignItems:'center'
  },
  //================
  button:{
    backgroundColor:'red',
    width:'100%',
    height: 60,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    marginBottom: 20,
    marginTop:20
  },
  textButton:{
    color:'white',
    fontSize: 25,
    marginLeft: 10
  },
  //================
  addCardView:{
    flexDirection:'row',
    alignItems:'center'
  }
});
