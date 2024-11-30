import { View, Text, SafeAreaView, ScrollView, StyleSheet, Pressable, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import {useRecoilValue, useRecoilState} from 'recoil'
import { fetchAPIProduct } from '../atoms/ProductAtom'
import Footer from '../components/Footer'
import { useNavigation } from '@react-navigation/native'
import { cartQuantity } from '../atoms/CartAtom'
import { fetchAccountById } from '../atoms/UserAtom'



const renderItemProducts = ({item})=>{
    return(
        <View style={{width: '46.5%',height: 250,alignItems:"center",backgroundColor:'white',marginBottom:5, marginTop: 3,borderRadius: 10, marginLeft:8, marginRight: 8}}>
            <Image source={{uri:item.image}} style={{width: 150, height: 150, borderRadius:10, marginTop: 10}}/> 
            <Text style={{fontSize:20}}>{item.name}</Text>
            <View style={{flexDirection:'row',marginTop: 20,width:'100%',alignItems:'center', justifyContent:'space-between'}}>
                <Text style={{fontSize: 17, fontWeight:'bold', color:"red", marginLeft: 10}}>${item.price}</Text>
                <Text style={{marginRight: 10, fontSize: 17, fontWeight:'bold'}}>Rate: {item.stars}</Text>
            </View>
        </View>
    )
}

export default function Account() {
    const listDataProduct = useRecoilValue(fetchAPIProduct)
    const navigation = useNavigation()
    const cartQtt = useRecoilValue(cartQuantity);
    const userData = useRecoilValue(fetchAccountById);
  return (
    <SafeAreaView style={{backgroundColor:'#213A58'}}>
            

                <FlatList 
                    data={listDataProduct.slice(0,20)}
                    renderItem={renderItemProducts}
                    keyExtractor={item=>item._id}
                    numColumns={2}
                    style={{backgroundColor:'#c4c4c4'}}
                    ListHeaderComponent={
                        <View style={styles.container}>
<View style={styles.header}>
                    <Pressable style={{flexDirection:'row',marginTop: 20,height: 35, borderRadius: 20, width:130, justifyContent:'space-between', alignItems:'center', backgroundColor:'white'}}>
                        <FontAwesome name='home' size={25} style={{marginLeft:5}}/>
                        <Text style={{fontSize: 15, color:'black', fontWeight:"bold"}}>Start Selling</Text>
                        <FontAwesome name='angle-right' size={20} style={{marginRight: 5}} color={'black'}/>
                    </Pressable>
                    <View style={{flexDirection:'row',marginTop: 20, alignItems:'center', justifyContent:'space-between', width:'100'}}>
                        <Pressable>
                            <FontAwesome name='gear' size={25} color={"white"}/>
                        </Pressable>
                        <Pressable onPress={()=>{navigation.navigate("Checkout_Cart")}}>
                            <Text style={{backgroundColor:'red', color:"white", borderRadius: 10, width: 20, height: 20, position:'absolute', zIndex:1, alignItems:'center', justifyContent:'center', textAlign:'center', marginLeft: 14}}>{cartQtt}</Text>
                            <AntDesign name='shoppingcart' size={25} color={"white"}/>
                        </Pressable>
                        <Pressable>
                            <FontAwesome name='commenting-o' size={22} color={"white"}/>
                        </Pressable>
                    </View>
                </View>

                <View style={styles.userHeader}>
                    <Image source={{uri:"source"}} style={{width: 50, height:50, backgroundColor:'white', borderRadius: 25}}/>
                    <View>
                        <View  style={{flexDirection:'row', alignItems:'center', marginLeft: 10}}>
                            <Text style={{fontSize: 22, fontWeight:'bold', color:"white"}}>{userData.user.name}</Text>
                            <Pressable style={{flexDirection:'row',width: 60, justifyContent:'center', borderRadius: 15,backgroundColor:'yellow', alignItems:'center', marginLeft: 20}}>
                                <Text style={{marginRight:5}}>Gold</Text>
                                <FontAwesome name='angle-right'/>
                            </Pressable>
                        </View>

                        <View  style={{flexDirection:'row', alignItems:'center', marginLeft: 10}}>
                            <Text style={{marginRight: 50, color:"white"}}>0 Follower</Text>
                            <Text style={{color:'white'}}>8 Following</Text>
                        </View>
                        
                    </View>
                </View>


                <View style={{backgroundColor:'white', width:'100%', marginTop: 15}}>
                    <View style={{width:"100%",flexDirection:'row',borderTopWidth: 10,borderTopColor:'#c4c4c4', alignItems:'center',justifyContent:'space-between'}}>
                        <Text style={{marginLeft: 10,fontWeight:'bold', fontSize: 20}}>My Purchases</Text>
                        <Pressable style={{marginRight: 10, flexDirection:'row', alignItems:'center'}}>
                            <Text>View Purchase History</Text>
                            <FontAwesome name='angle-right' size={20} style={{marginLeft: 10}}/>
                        </Pressable>
                    </View>
                    <View style={{width:'100%',marginTop: 15, flexDirection:'row', justifyContent:'space-between'}}>
                        <Pressable style={{alignItems:'center', marginLeft: 35}}>
                            <FontAwesome name='money' size={25} color={'green'} />
                            <Text >To Pay</Text>
                        </Pressable>
                        <Pressable style={{alignItems:'center'}}>
                            <FontAwesome name='gift' size={25} color={'red'}/>
                            <Text >To Ship</Text>
                        </Pressable>
                        <Pressable style={{alignItems:'center'}}>
                            <FontAwesome name='truck' size={25} color={'black'} />
                            <Text>To Receive</Text>
                        </Pressable>
                        <Pressable style={{alignItems:'center', marginRight:35}}>
                            <FontAwesome name='star-half-o' size={25} color={'gold'} />
                            <Text>To Rate</Text>
                        </Pressable>
                    </View>
                </View>


                <View style={{backgroundColor:'white', width:'100%'}}>
                    <View style={{width:"100%", borderTopWidth: 10, marginTop: 15, borderTopColor:'#c4c4c4', flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
                        <Text style={{fontSize: 20,fontWeight:'bold', marginLeft: 10, marginTop: 5}}>12.12 Black Friday</Text>
                    </View>
                    <View style={{width:'100%',marginTop: 15, flexDirection:'row', justifyContent:'space-between'}}>
                        <Pressable style={{marginLeft: 10, alignItems:"center"}} onPress={()=>{navigation.navigate("Home_ProductListing")}}>
                            <Image source={{uri:"https://play-lh.googleusercontent.com/JFU5aj82mN1F8U-PEmo_H2120bg-VZQVPqAPDyva5XtXdQy9bE6dUTEA8qsdhLNVgetY"}} style={{width: 60, height: 60, borderRadius: 30, backgroundColor:'black'}}/>
                            <Text>Main</Text>
                            <Text style={{color:'red'}}>Page</Text>
                        </Pressable>
                        <View style={{ alignItems:"center"}}>
                            
                            <View style={{width: 60, alignItems:"center", justifyContent:'center', height: 60, borderRadius: 30, backgroundColor:'#213A58'}}>
                                <FontAwesome name='flash' size={50} color={'white'} style={{marginLeft: 3}}/>
                            </View>
                            <Text>Rush</Text>
                            <Text style={{color:'red'}}>Hour</Text>
                        </View>
                        <Pressable style={{alignItems:"center"}} onPress={()=>{navigation.navigate("Video")}}>
                            <Image source={{uri:"https://cf.shopee.com.my/file/d0aeab56ebaffbf45fe018c057b3e5a1"}} style={{width: 60, height: 60, borderRadius: 30,borderWidth:2, borderColor:'red', backgroundColor:'black'}}/>
                            <Text>Ecommer</Text>
                            <Text style={{color:'red'}}>Video</Text>
                        </Pressable>
                        <View style={{marginRight: 10, alignItems:"center"}}>
                            <Image source={{uri:"https://zalo-article-photo.zadn.vn/ffbeba5796037f5d2612"}} style={{width: 60, height: 60, borderWidth: 2, borderColor:'red', borderRadius: 30, backgroundColor:'black'}}/>
                            <Text>Ecommer</Text>
                            <Text style={{color:'red'}}>Live</Text>
                        </View>
                    </View>
                </View>

                <View style={{backgroundColor:'white', width:'100%'}}>
                    <View style={{width:"100%", borderTopWidth: 10, marginTop: 15, borderTopColor:'#c4c4c4', flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
                        <Text style={{fontSize: 20,fontWeight:'bold', marginLeft: 10, marginTop: 5}}>My Wallet</Text>
                    </View>
                    <View style={{width:'100%',marginTop: 15,marginBottom: 10, flexDirection:'row', justifyContent:'space-between'}}>
                        <View style={{flex:1,alignItems:"center"}}>
                          
                            <AntDesign name='wallet' size={25}/>
                            <Text>Ecommerpay</Text>

                        </View>
                        <View style={{ flex:1,alignItems:"center"}}>
                            <FontAwesome name='times-circle' size={20} style={{position:'absolute', zIndex: 1, color:'red'}}/>
                            <AntDesign name='wallet' size={25} />
                            <Text>Epaylater</Text>
                            <Text style={{color:'red'}}>Activate Now</Text>
                        </View>
                        <View style={{flex:1,alignItems:"center"}}>
                            <FontAwesome name='creative-commons' size={25} color={'gold'} />
                            <Text> Ecommer Coins</Text>
                            <Text style={{color:'red'}}>Check in now!</Text>
                            
                        </View>
                        <View style={{flex:1, alignItems:"center"}}>
                            <AntDesign name='creditcard' size={25} />
                            <Text>My Vouchers</Text>
                            <Text style={{color:'red'}}>50+ Vouchers</Text>
                        
                        </View>
                    </View>
                </View>

                <View style={{width:"100%", backgroundColor:'white' , borderTopColor:'#c4c4c4', borderTopWidth: 10}}>
                    <Text style={{marginLeft: 10, fontWeight:'bold', fontSize: 20}}>Support</Text>
                    <View style={{width:"100%",flexDirection:'row', marginTop: 10,borderTopColor:'#c4c4c4', alignItems:'center'}}>
                        <FontAwesome name='question-circle-o' size={25} style={{marginLeft: 10}}/>
                        <Text style={{marginLeft: 10, fontSize: 17}}>Help Center</Text>
                    </View>
                    <View style={{width:"100%",flexDirection:'row',marginTop: 10,marginBottom: 10, borderTopColor:'#c4c4c4', alignItems:'center'}}>
                        <FontAwesome name='user-secret' size={25} style={{marginLeft: 10}}/>
                        <Text style={{marginLeft: 10, fontSize: 17}}>Chat with Ecommercial</Text>
                    </View>
                </View>
                <View style={{backgroundColor:'#c4c4c4', width: '100%', borderTopWidth: 10,  borderTopColor:"#c4c4c4"}}>
                     </View>
                      </View>
                    }
                    />  
               
        <Footer/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#213A58',
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#213A58',
        height: 95,
        alignItems:'center',
        marginLeft: 10,
        marginRight: 10
    },
    userHeader:{
        backgroundColor:'#213A58',
        flexDirection:'row',
        marginLeft: 10, 
        marginRight: 10
    }
})