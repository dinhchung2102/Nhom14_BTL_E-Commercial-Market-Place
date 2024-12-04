import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import TextHeader from "../components/TextHeader";
import { useRecoilValue } from "recoil";
import { cartState, selectedProductsState, totalMoneyState } from "../atoms/CartAtom";
import { fetchAccountById } from "../atoms/UserAtom";

export default function Checkout_Payment_Method({navigation}) {
  const [isPressed, setIsPressed] = useState(false);
  const totalMoney = useRecoilValue(totalMoneyState);
  const accountInfo = useRecoilValue(fetchAccountById)
  const cartPayment = useRecoilValue(selectedProductsState);
  const cart = useRecoilValue(cartState);


  const paymentMethod = [
    {
      _id: 1,
      name: "Cash on Delivery",
      icon:""
    },
    {
      _id: 2,
      name: "MB Bank",
      icon:""
    },
    {
      _id: 3,
      name: "Techcombank",
      icon:""
    },
  ]

  const selectedItem = cart.filter(item=>
    cartPayment.includes(item._id)
  )
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
            <View style={{backgroundColor:'white', width:'100%', alignItems:'center'}}>
              <TextHeader textHeader="Payment" onPress = {() =>{navigation.navigate("Feedback")}}/>
            </View>


            <View style={{backgroundColor:'white', width:'97%', alignItems:'center', marginTop: 15, borderRadius: 10}}>
                <View style={{flexDirection:'row', width:'97%',alignItems:'center', marginTop: 10, marginBottom: 10}}>
                  <FontAwesome name="location-arrow" size={20} color={'green'}/>
                  <Text style={{marginLeft: 10, marginRight: 10, fontSize: 16, fontWeight:'bold'}}>{accountInfo.user.name}</Text>
                  <Text>{accountInfo.user.phone}</Text>
                </View>
                <View style={{flexDirection:'row', width:'97%',marginBottom: 10}}>
                    <Text>{accountInfo.user.address}</Text>
                </View>
            </View>



            <View style={{width:'97%', backgroundColor:'#f0f0f0', alignItems:'center', marginTop: 15}}>
            {selectedItem.map((item)=>(
                <View key={item._id} style={{marginTop: 5, alignItems:'center', backgroundColor:'white', width:'100%', borderRadius: 15, marginBottom: 10}}>
                <View style={{flexDirection:'row', width:'97%', marginTop: 10, marginBottom: 10}}>
                  <Image source={{uri:item.image}} style={{width: 100, height: 100, backgroundColor:'red', borderRadius: 10}}/>
                  <View style={{justifyContent:'space-evenly'}}>
                    <Text style={{marginLeft: 10, fontSize: 18, textDecorationLine:1}}>{item.name}</Text>
                    <Text style={{marginLeft: 10, fontSize: 18, color:'red'}}>${item.price}</Text>
                  </View>
                  <Text style={{flex: 1,textAlign:'right', alignItems:'center', top: 0, fontSize: 17}}>X{item.quantity}</Text>
                </View>
              </View>
              ))}
            </View>




            <View style={{width:'97%', backgroundColor:'#f0f0f0', alignItems:'center', marginTop: 5}}>
              <View style={{width:'100%', backgroundColor:'white', borderRadius: 15, padding: 10, paddingBottom: 30}}>
                <Text style={{fontSize: 18, fontWeight:'bold'}}>
                  Payment Method
                </Text>
                {paymentMethod.map((item)=>(
                  <View key={item._id} style={{width:'100%', marginTop: 10}}>
                    <Pressable style={{width:'100%', alignItems:'center', justifyContent:'center', height: 30, borderWidth:1, borderColor:'#c4c4c4'}}>
                      <Text style={{textAlign:'center'}}>{item.name}</Text>
                    </Pressable>
                </View>

                ))}
                
              </View>
            </View>


            <View style={{width:'97%', backgroundColor:'#f0f0f0', alignItems:'center', marginTop: 15}}>
              <View style={{width:'100%', backgroundColor:'white', borderRadius: 15, padding: 10, paddingBottom: 20}}>
                <Text style={{fontSize: 18, fontWeight:'bold'}}>Payment Detail</Text>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginTop: 10}}>
                    <Text>Merchandise Subtotal</Text>
                    <Text>${totalMoney}</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginTop: 5}}>
                    <Text>Shipping Subtotal</Text>
                    <Text>$99</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginTop: 5}}>
                    <Text>Shipping Discount Subtotal</Text>
                    <Text style={{color:'red'}}>{-28.7}$</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginTop: 5}}>
                    <Text>Voucher Discount</Text>
                    <Text style={{color:'red'}}>{-25.2}$</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginTop: 5}}>
                    <Text>Total Payment</Text>
                    <Text style={{fontWeight:'bold'}}>${(totalMoney+99-28.7-25.2).toFixed(2)}</Text>
                </View>
              </View>
            </View>

            
            <View style={{width:'97%',marginBottom:100, backgroundColor:'#f0f0f0', alignItems:'center', marginTop: 15}}>
              <Text>By clicking "Place Order", you are agreeing to Ecommercial's General Transaction Terms</Text>
            </View>
            
        </View>
      </ScrollView>
      <View style={{ position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        padding: 5,
        borderTopColor:'#f0f0f0',
        borderTopWidth: 0.5}}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Text style={{marginRight: 10}}>Total</Text>
          <Text style={{fontSize: 20, fontWeight:'bold', color:'red'}}>${(totalMoney+99-28.7-25.2).toFixed(2)}</Text>
        </View>
       
       <Pressable onPress={()=>{navigation.navigate("Checkout_Payment_Success")}} style={{alignItems:'center', justifyContent:'center',borderRadius: 10,height: 50,width: 130, backgroundColor:'#213A58'}}>
        <Text style={{color:'white', fontSize: 15, fontWeight:'bold'}}>
          Place Order
        </Text>

       </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
});
