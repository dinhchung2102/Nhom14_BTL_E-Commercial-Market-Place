import { FontAwesome } from "@expo/vector-icons";
import React, { Component } from "react";
import { Text, View } from "react-native";

export default class TextPayment extends Component {
  render() {
    const { text, price } = this.props;
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90%",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{text}</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          ${price.toFixed(2)}
        </Text>
      </View>
    );
  }
}
export class TextCardPayment extends Component {
    
  render() {
    const { text, cardNumber } = this.props;
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90%",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{text}</Text>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <FontAwesome name="id-card" size={20} color={'red'}/>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10}}>
            {cardNumber}
        </Text>
        </View>
        
      </View>
    );
  }
}
