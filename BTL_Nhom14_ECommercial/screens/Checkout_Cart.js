import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { calculateTotal , getCart, saveCart } from "../storage/cartStorage";
import {Checkbox} from 'react-native-paper'





export default function Checkout_Cart({navigation}) {

  const [cart, setCart] = useState([]);
  const [totalMoney, setTotalMoney] = useState(0);
  const [checkedItems, setCheckedItems] = useState([]);

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalCheckedItems = checkedItems.reduce((totalChecked, product_id) => {
    const product = cart.find(item => item._id === product_id);
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
          return sum + (item.price * item.quantity);    
        }
        return sum;
      }, 0);
      setTotalMoney(totalAmount); 
    };
  
    calculateCheckedTotal(); 
  }, [cart, checkedItems]); 

  const handlePressMinus = async (product_id) => {
    let updatedCart = [...cart]; 
    const productIndex = updatedCart.findIndex(item => item._id === product_id);
  
    if (productIndex !== -1) {
      const product = updatedCart[productIndex];
      
      if (product.quantity > 1) {
        product.quantity -= 1;
      } else {
        
        updatedCart.splice(productIndex, 1);
      }
      await saveCart(updatedCart);  
      setCart(updatedCart); 
    }
  };
  
  const handlePressPlus = async (product_id) => {
    let updatedCart = [...cart];
    const productIndex = updatedCart.findIndex(item => item._id === product_id);
  
    if (productIndex !== -1) {
      const product = updatedCart[productIndex];
      product.quantity += 1; 
      await saveCart(updatedCart); 
  
      setCart(updatedCart); 
    }
  };
  
  const handleCheckBoxChange = (product_id) => {
    setCheckedItems(prevCheckedItems => {
      if (prevCheckedItems.includes(product_id)) {
        return prevCheckedItems.filter(id => id !== product_id);
      } else {
        return [...prevCheckedItems, product_id];
      }      
    });
  };
  


 
  const renderItem = ({ item }) => {
    const quantity = item.quantity ?? 1;

    return (
      <View style={{backgroundColor: "white",
        width: "100%",
        marginBottom: 10,
        borderBottomColor:'#F0F0F0',
          borderBottomWidth:1,
          height: 150,
          borderRadius: 10}}>
      <View style={{flexDirection:'row',marginLeft: 10,marginTop:10,marginBottom: 10, alignItems:'center'}}>
        
        <Pressable style={{flexDirection:'row', alignItems:'center'}}>
          <Text style={{fontWeight:'bold', fontSize: 18, marginRight: 10}}>Shop Name</Text>
          <FontAwesome name="angle-right" size={20}/>
        </Pressable>
        
      </View>


      <View
        style={{ 
          flexDirection: "row",
          alignItems:'center',
        }}
      >
         <Checkbox
  status={checkedItems.includes(item._id) ? 'checked' : 'unchecked'} 
  color="grey"
  uncheckedColor="red"
  onPress={() => handleCheckBoxChange(item._id)} 
 />

        <Image
          source={{ uri: item.image }}
          style={{ width: 70, height: 70, marginLeft: 10, borderWidth:1, borderRadius: 10, borderColor:'#f0f0f0' }}
        />
        <View style={{ justifyContent: "center", marginLeft: 10, flex: 1 }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{item.name}</Text>
          <Text>{item.des}</Text>
          <Text style={{ fontSize: 22 }}>${item.price}</Text>
        </View>
        <View style={{ justifyContent: "center", flexDirection:'row', alignItems:'center'}}>
          <Pressable onPress={()=>{handlePressMinus(item._id)}}>
            <FontAwesome name="minus-square" size={20} color={'#A52A2A'}/>
          </Pressable>
          <TextInput
           value={String(quantity)}
           editable= {false}
           style={{width: 30, alignItems:'center',fontWeight:'bold', justifyContent:'center', textAlign:'center', fontSize: 19}}
           />
          <Pressable style={{marginRight: 10}} onPress={()=>{handlePressPlus(item._id)}}>
            <FontAwesome name="plus-square" size={20} color={'#46DF01'}/>
          </Pressable>
        </View>
      </View>
      </View>
    );
  };
  return (
      <SafeAreaView>
        <ScrollView style={{marginBottom: 120}}>
        <View style={{position:'relative', marginTop: 40,height: 60 ,flexDirection:"row", alignItems:'center', width:'100%', justifyContent:'space-between', backgroundColor:'white'}}>
          <View style={{flexDirection:"row", alignItems:'center'}}>
          <Pressable style={{width: 20, marginLeft: 10}} onPress={()=>{navigation.pop(1)}}>
            <FontAwesome name="angle-left" size={30}/>
          </Pressable>
          <Text style={{ fontWeight:'bold', fontSize: 20}}>Cart ({totalQuantity})</Text>
          </View>
          <Pressable style={{justifyContent:'center', marginRight: 10}}>
            <FontAwesome name="commenting-o" size={30} color={'grey'}/>
          </Pressable>
        </View>
        <View style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>
          {cart.map((item) => renderItem({ item }))}
        </View>
        <Pressable style={{alignItems:'center', width:'100%'}}>
            <Text style={{fontSize:16, color:"#15919B"}}>See all</Text>
            <FontAwesome name="angle-double-down" size={25} color={'#15919B'}/>
          </Pressable>

        </ScrollView>


        <View style={{width:'100%', position:'absolute', bottom:0, borderTopColor:'#f0f0f0', borderWidth: 1.5}}>
            <View style={{backgroundColor:'white', flexDirection:'row', alignItems:'center', height: 60, width:'100%'}}>
              <FontAwesome name="ticket" size={30} style={{marginLeft: 10}}/>
              <Text style={{fontSize: 16, marginLeft: 10}}>E Voucher</Text>
              <Pressable style={{flexDirection:'row', alignItems:'center', flex: 1, justifyContent:'flex-end', marginRight: 10}}>
                <Text>Choose or enter your voucher</Text>
                <FontAwesome name="angle-right" style={{marginLeft: 10}} size={20}/>
              </Pressable>
            </View>
            <View style={{backgroundColor:'white',borderTopColor: '#f0f0f0', borderTopWidth:1.5, height: 60, flexDirection:'row', justifyContent:'space-between'}}>
              <View style={{flexDirection:'row', marginLeft: 10, alignItems:'center'}}>
                <FontAwesome name="square-o" size={30} style={{marginRight: 10}} />
                <Text>All</Text>
              </View>
              <View style={{alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontSize: 20, fontWeight:'bold', color:'red'}}>
                  Total: $ {totalMoney.toFixed(2)}
                </Text>
              </View>

              <Pressable style={{backgroundColor:'#09D1C7', alignItems:'center', justifyContent:'center', width:140}}
                onPress={()=>{console.log(checkedItems);
                }}
              >
                <Text style={{color:'white', fontSize: 18}}>Buy now ({totalCheckedItems})</Text>
              </Pressable>       
            </View>
          </View>
      </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5F5F5",

  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#FF5722',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  checkoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontSize: 18,
    color: '#888',
  },
  list:{
    marginTop:60,
    fontSize:17,
    margin:10,
    fontWeight:"700",
    color:"darkorange"
  },
  deliveryContainer: {
  padding: 30,
  backgroundColor: '#fff',
  marginBottom: 10,
},
deliveryTitle: {
  fontSize: 16,
  fontWeight: 'bold',
  marginBottom: 10,
},
radioOption: {
  flexDirection: 'row',
  alignItems: 'center',
  marginVertical: 5,
},
radioCircle: {
  width: 20,
  height: 20,
  borderRadius: 10,
  borderWidth: 2,
  borderColor: '#ccc',
  marginRight: 10,
},
radioSelected: {
  backgroundColor: '#4CAF50',
  borderColor: '#4CAF50',
},
radioLabel: {
  fontSize: 14,
},
message: {
    textAlign: 'center',
    fontSize: 16,
    color: 'red',
    marginTop: 10,
  },

});
