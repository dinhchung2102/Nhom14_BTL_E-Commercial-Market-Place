import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import TextPayment, { TextCardPayment } from "../components/TextPayment";

export default Checkout_Payment_Success = ({navigation}) => {
  return (
    <SafeAreaProvider>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <FontAwesome name="check-circle" size={100} color={"green"} />
            <Text style={styles.headerText}>Order Placed Successfully</Text>
            <Text style={{fontSize: 18, color:'grey'}}>Text test i love u so much, please hold on</Text>
          </View>

          <View style={styles.content}>
            <TextPayment text = "SubTotal" price = {800} />
            <TextPayment text = "Tax (10%)" price = {800*0.1} />
            <TextPayment text = 'Fee' price = {0}/>
            <TextCardPayment text = "Card" cardNumber = '123456789'/>
            <View style={{flexDirection:'row', alignItems:'center', width:"90%"}}>
            <TextPayment text = 'Total' price = {800+800*0.1+ 0}/>
            <FontAwesome name="check-circle" color={'green'} size={20} style={{marginLeft: 10, flex: 1}}/>
            </View>
            
          </View>

          <View style={styles.footer}>
            <Text style={{fontSize: 18, color:'grey', marginBottom: 5}}>How was your experience?</Text>
            <View style={{ flexDirection: "row" }}>
              <FontAwesome name="star" color={"#FFD700"} size={30} />
              <FontAwesome name="star" color={"#FFD700"} size={30} />
              <FontAwesome name="star" color={"#FFD700"} size={30} />
              <FontAwesome name="star" color={"#FFD700"} size={30} />
              <FontAwesome name="star" color={"#FFD700"} size={30} />
            </View>

            <Pressable style={styles.button} onPress={() =>{navigation.navigate("Product_ListView")}}>
              <FontAwesome name="home" color={'white'} size={30}/>
              <Text style={styles.textButton}>BACK TO HOME</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </ScrollView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  //==================================
  header: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "green",
    marginBottom: 20,
  },
  //=======================
  content: {
    width: "90%",
    backgroundColor: "#E0E0E0",
    height: 300,
    marginTop: 30,
    borderRadius: 10,
    alignItems:'center'
  },
  //===================
  footer:{
    alignItems:'center',
    marginTop: 20,
    width:'90%'
  },
  button:{
    backgroundColor:'#0000CC',
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    height: 50,
    borderRadius: 10,
    marginTop: 20,
    justifyContent:'center'
  },
  textButton:{
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }

});
