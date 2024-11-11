import React, { useState }  from 'react';
import {Text, View, Pressable, Image, FlatList, StyleSheet, TextInput} from 'react-native';

 
export default function Feedback(){
    return(
        <View style={{flex:1, width:380, height:800}}>
            <View style={{flex:2, alignItems:'center', flexDirection:"row", borderBottomWidth:1, borderColor:"#C5BCBC"}}>
                <Text style={styles.header}>Feedback</Text>
                <Image
                    source={require("../images/x.png")}
                    style={{marginTop:20, marginLeft:100}}
                />
            </View>
            <View style={{flex:5}}>
                <View style={{flex:2,flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                <Image
                    source={require("../images/icon1.png")}
                    style={{marginTop:20, margin:10}}
                />
                <Image
                    source={require("../images/icon2.png")}
                    style={{marginTop:20, margin:10}}
                />
                <Image
                    source={require("../images/icon3.png")}
                    style={{marginTop:20, margin:10}}
                />
                </View>
                <View style={{flex:5}}>
                    <View style={styles.view}>
                        <Pressable style={styles.press1}>
                            <Text style={{color:"#11D5EB"}}>Service</Text>
                            <Image
                                source={require("../images/v.png")}
                                style={{}}
                            />  
                        </Pressable>
                        <Pressable style={styles.press2}>
                            <Text>Quantity</Text>
                            <Image
                                source={require("../images/cong.png")}
                                style={{}}
                            />  
                        </Pressable>
                    </View>
                    <View style={styles.view}>
                        <Pressable style={styles.press2}>
                            <Text>Payment</Text>
                            <Image
                                source={require("../images/cong.png")}
                            />  
                        </Pressable>
                        <Pressable style={styles.press1}>
                            <Text style={{color:"#11D5EB"}}>Delivery</Text>
                            <Image
                                source={require("../images/v.png")}
                            />  
                        </Pressable>
                    </View>
                    <View style={styles.view}>
                        <Pressable style={styles.press2}>
                            <Text>Promotion</Text>
                            <Image
                                source={require("../images/cong.png")}
                                style={{}}
                            />  
                        </Pressable>
                        <Pressable style={styles.press1}>
                            <Text  style={{color:"#11D5EB"}}>Gift</Text>
                            <Image
                                source={require("../images/v.png")}
                                style={{}}
                            />  
                        </Pressable>
                    </View>
                    
                </View>
            </View>
            <View style={{flex:3}}>
                <View style={{flex:1, flexDirection:"row"}}>
                    <Text style={styles.txt1}>Cash to share more?</Text>
                </View>
                <View style={styles.ti}>
                    <TextInput 
                       style={{margin:5, color:"#98999C", fontWeight:"600"}}
                       placeholder='Type your feedback'
                    >
                       
                    </TextInput>
                </View>
            </View>
            <View style={{flex:3}}>
                <View style={{flex:1}}>
                    <Text style={styles.txt1}>Upload images</Text>
                </View>
                <View style={{flex:4, justifyContent:"center"}}>
                    <Pressable style={{marginLeft:20}}>
                        <Image
                            source={require("../images/upload.png")}
                        />
                    </Pressable>
                </View>
                
            </View>
            <View style={{flex:3}}>
                <View style={{flex:1, marginTop:20}}>
                    <Text style={styles.txt1}>Rating</Text>
                </View>
                <View style={{flex:2, flexDirection:"row", alignItems:"center", justifyContent:"space-around"}}>
                <Image
                        source={require("../images/star.png")}
                        style={{ marginLeft:70, width:30,height:30}}
                        />
                    <Image
                        source={require("../images/star.png")}
                        style={{ marginLeft:10, width:30,height:30}}
                        />
                    <Image
                        source={require("../images/star.png")}
                        style={{ marginLeft:10, width:30,height:30}}
                        />
                    <Image
                        source={require("../images/star.png")}
                        style={{ marginLeft:10, width:30,height:30}}
                        />
                    <Image
                        source={require("../images/star1.png")}
                        style={{ marginLeft:10, width:30,height:30, marginRight: 70}}
                        />
                </View>
            </View>
            <View style={{flex:2, justifyContent:'center', alignItems:"center"}}>
                <Pressable style={styles.butt}>
                    <Text style={styles.txtBut}>Submit</Text>
                </Pressable>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    header:{
        fontSize:20, fontWeight:"700", marginLeft:150, marginTop:20
    },
    press1:{
        width:100, height:43, borderRadius:20, backgroundColor:"#EBFDFF", flexDirection:"row", 
        alignItems:"center", justifyContent:"center"
    },
    press2  :{
        width:100, height:43, borderRadius:20, backgroundColor:"#F3F4F6", flexDirection:"row", 
        alignItems:"center", justifyContent:"center"
    },
    view :{
        flex:1, marginTop:10, flexDirection:"row", alignItems:"center", marginLeft:60, marginRight:60, 
        justifyContent:"space-evenly"
    },
    txt1:{
        fontSize:16, fontWeight:"700", marginLeft:20, marginTop:10
    },
    ti:{
        flex:3,
        marginTop:10, marginLeft:20, marginRight: 20, 
        backgroundColor:"#F5F5F5",
        height:80, color:"#919493", alignItems:"flex-start", justifyContent:"flex-start"
    },
    butt:{
        width:300, height:50, backgroundColor:"#11D5EB", borderRadius:5, justifyContent:"center", alignItems:"center"
    },
    txtBut:{
        color:"white",
        fontWeight:"600",
        textAlign:"center",
        fontSize:18
    }

})