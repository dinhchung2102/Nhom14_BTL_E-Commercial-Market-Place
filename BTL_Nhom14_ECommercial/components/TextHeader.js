import { FontAwesome } from '@expo/vector-icons';
import React, { Component } from 'react';
import { Pressable, Text, View } from 'react-native';

export default class TextHeader extends Component {
  render() {
    const { textHeader , onPress} = this.props;
    return (
        <View style={{
            width: "95%",
            marginTop: 35,
            marginBottom: 10,
            alignItems: "center",
            flexDirection: "row",
          }}>
        <Pressable style={{position:'absolute'}} onPress={onPress}>
            <FontAwesome name="angle-left" size={30}/>
        </Pressable>
        <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{textHeader}</Text>
      </View>
    </View>
    );
  }
}
