import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'

export default function Footer() {
  const navigation  = useNavigation();
  return (
    <View style={styles.buttonView}>
       <Pressable style={styles.button} onPress={()=>{navigation.replace("Home_ProductListing")}}>
          <FontAwesome name='home' size={30} color={'#15919B'}/>
          <Text style={styles.textButton}>Home</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <FontAwesome name='shopping-bag' size={30} color={'#15919B'}/>
          <Text style={styles.textButton}>Mall</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <FontAwesome name='video-camera' size={30} color={'#15919B'}/>
          <Text style={styles.textButton}>Live</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <FontAwesome name='youtube-play' size={30} color={'#15919B'}/>
          <Text style={styles.textButton}>Video</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <FontAwesome name='user-circle-o' size={30} color={'#15919B'}/>
          <Text style={styles.textButton}>Account</Text>
        </Pressable>
      </View>
  )
}
const styles = StyleSheet.create({
    buttonView:{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        padding: 5,
        borderTopColor:'#f0f0f0',
        borderTopWidth: 0.5
    },
    button:{
        alignItems:'center'
    },
    textButton:{
        fontSize: 14,
        color: 'grey'
    }
})