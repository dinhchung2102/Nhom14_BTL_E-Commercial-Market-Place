import { FontAwesome } from '@expo/vector-icons';
import React, { Component } from 'react'
import { Pressable, Text, View } from 'react-native'

export default class Button_Fonawesome extends Component {
  render() {
    const {name, nameIcon, onPress} = this.props;
    return (
      <View style={{flex: 1, alignItems:'center', marginTop: 5}}>
        <Pressable onPress={onPress} style={{flexDirection:'row',width:'100%', backgroundColor:'#213A58', height: 45, alignItems:'center', justifyContent:'center'}}>
            <FontAwesome name={nameIcon} size={20} color={'white'}/>
            <Text style={{color:'white', fontWeight:'bold', fontSize: 20, marginLeft: 10}}>{name}</Text>
        </Pressable>
      </View>
    )
  }
}
