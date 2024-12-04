import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import {Text, View, Pressable, Image, FlatList, StyleSheet, StatusBar} from 'react-native';
import Slider from '@react-native-community/slider'
import { useRecoilState, useRecoilValue } from 'recoil';
import { fetchAPIProduct, ProductFilterByPrice, ProductFilterBySearchBar } from '../atoms/ProductAtom';
export default function Filter({navigation}){
   const [maxPrice, setMaxPrice] = useState(100);
   const [listFiltertest, setListFiltertest] = useRecoilState(ProductFilterBySearchBar);
   const [, setProductFilterPrice] = useRecoilState(ProductFilterByPrice);


   const handleFilter = ()=>{
    const filterProduct = listFiltertest.filter((item) => item.price <= maxPrice);
    setProductFilterPrice(filterProduct);
   }
    return(
        <View style={{flex:1, backgroundColor:'white'}}>
            <StatusBar
          animated={true}
          hidden={false}
          barStyle={'light-content'}
          translucent={false}
          backgroundColor={'#213A58'}
        />
            <View style={{flex:1, alignItems:'center', flexDirection:"row", justifyContent:'space-between', borderBottomWidth:1, borderColor:"#C5BCBC"}}>
                <Text style={styles.header}>Filter</Text>
                <Pressable onPress={()=>{navigation.goBack()}} style={{alignItems:'center', justifyContent:'center', marginRight: 20}}>
                <FontAwesome name='close' size={25}/>
                </Pressable>
                
            </View>
            <View style={{flex:3,borderBottomWidth:1, borderColor:"#C5BCBC"}}>
                <View style={{flex:2, flexDirection:"row", alignItems:'center', justifyContent:'space-between'}}>
                    <Text style={styles.txt1}>Shipping options</Text>
                    <Pressable style={{alignItems:'center', justifyContent:'center',marginRight:20}}>
                    <FontAwesome name='angle-up' size={30}/>
                    </Pressable>
                    
                </View>
                <View style={{flex:5}}>
                    <View style={{flex:1, flexDirection:"row"}}>
                        <Pressable
                            style={styles.checkbox}
                        />
                        <Text style={styles.txt2}>Instant (2 hours delivery)</Text>
                    </View>
                    <View style={{flex:1, flexDirection:"row"}}>
                        <Pressable
                            style={styles.checkbox}
                        />
                        <Text style={styles.txt2}>Express (2 days delivery)</Text>
                    </View>
                    <View style={{flex:1, flexDirection:"row"}}>
                        <Pressable
                            style={styles.checkbox}
                        />
                        <Text style={styles.txt2}>Standard (7-10 days delivery)</Text>
                    </View>
                    
                </View>
            </View>
            <View style={{flex:2,borderBottomWidth:1, borderColor:"#C5BCBC"}}>
                <View style={{flex:1, flexDirection:"row", alignItems:'center', justifyContent:'space-between'}}>
                    <Text style={styles.txt1}>Price range</Text>
                    <FontAwesome name='angle-up' size={30} style={{marginRight: 20}}/>
                </View>

                <View style={{flex:1, flexDirection:"row", justifyContent:"space-between", marginTop: 10}}>
                    <View style={{alignItems:'center', flexDirection:'row', marginLeft: 10}}>
                        <Text>Min</Text>
                        <Pressable style={styles.press}>
                        <Text style={{marginLeft:10, color:"#9F9A9A"}}>${0}</Text>
                    </Pressable>
                    </View>
                    <View style={{alignItems:'center', flexDirection:'row'}}>
                        <Text>Max</Text>
                    <Pressable style={styles.press}>
                        <Text style={{marginLeft:10, color:"#9F9A9A"}}>${maxPrice}</Text>
                    </Pressable>
                    </View>
                </View>

                <View>
                <Slider
    style={{ width: '100%', marginBottom: 20, marginTop: 10 }}
    minimumValue={0}
    maximumValue={2000}
    step={10}
    value={maxPrice}
    onValueChange={(value) => setMaxPrice(value)}
    minimumTrackTintColor="blue"
    maximumTrackTintColor="#D3D3D3"
  />
                </View>
            </View>
            <View style={{flex:2,borderBottomWidth:1, borderColor:"#C5BCBC"}}>
                <View style={{flex:1, flexDirection:"row", alignItems:'center', justifyContent:'space-between'}}>
                    <Text style={styles.txt1}>Average review</Text>
                    <FontAwesome name='angle-up' size={30} style={{marginRight: 20}}/>
                </View>
                <View style={{flex:2, flexDirection:"row"}}>
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
                        style={{ marginLeft:10, width:30,height:30}}
                        />
                    <Text style={{marginLeft:15, marginTop:5}}>& Up</Text> 
                </View>
                </View>
            <View style={{flex:4}}>
                <View style={{flex:2, flexDirection:"row", alignItems:'center', justifyContent:'space-between'}}>
                    <Text style={styles.txt1}>Others</Text>
                    <FontAwesome name='angle-up' size={30} style={{marginRight: 20}}/>
                </View> 
                <View style={{flex:4, flexDirection:"row", alignItems:"center", justifyContent:'space-evenly'}}>
                    <Pressable style={styles.Fpress}>
                        <Image
                            source={require("../images/2c2.png")}
                            style={{width:20, height:20}}
                        />
                        <Text style={styles.txt3}>30-day Free Return</Text>
                    </Pressable>
                    <Pressable style={styles.Fpress}>
                        <Image
                            source={require("../images/protection.png")}
                            style={{width:20, height:20}}
                        />
                        <Text style={styles.txt3}>Buyer protection</Text>
                    </Pressable>
                </View>
                <View style={{flex:4, flexDirection:"row", alignItems:"center", justifyContent:'space-evenly'}}>
                    <Pressable style={styles.Fpress}>
                        <Image
                            source={require("../images/Deal.png")}
                            style={{width:20, height:20}}
                        />
                        <Text style={styles.txt3}>Best Deal</Text>
                    </Pressable>
                    <Pressable style={styles.Fpress}>
                        <Image
                            source={require("../images/SStore.png")}
                            style={{width:20, height:20}}
                        />
                        <Text style={styles.txt3}>Ship to store</Text>
                    </Pressable>
                </View>
                
            </View>
            <View style={{flex: 1}}>
                <Pressable
                onPress={()=>{handleFilter()
                    navigation.navigate("Search_Products")
                }}
                 style={{width:430,height:50, backgroundColor:'#213A58',margin: 10,alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontSize: 20, fontWeight:'bold', color:'white'}}>FILTER</Text>
                </Pressable>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    header:{
        fontSize:20, fontWeight:"700", marginLeft: 20
    },
    txt1:{
        fontSize:16, fontWeight:"700", marginLeft:10
    },
    checkbox:{
        width:20, height:20, borderWidth:1, borderRadius:3, borderColor:"#413C3C", marginLeft:20 
    },
    txt2: {
        fontSize:14, fontWeight:"400", marginLeft:15, color:"#413C3C", 
    },
    press:{
        width:80, height:28, borderColor:"#9F9A9A", borderWidth:1, borderRadius:3, 
        justifyContent: "center", marginLeft: 10, marginRight: 10
    },
    Fpress:{
        width:155, height:80,borderColor:"#9F9A9A", borderWidth:1, borderRadius:3, 
        justifyContent: "center", alignItems:"center",
        borderRadius:10
    },
    txt3:{
        color:"#919493", fontSize:12
    }

})