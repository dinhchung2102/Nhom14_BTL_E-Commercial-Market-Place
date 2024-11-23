import React, { useState, useEffect } from 'react';
import {Text, View, Pressable, Image, FlatList, StyleSheet, ScrollView, TextInput, SafeAreaView} from 'react-native';
import stara from '../images/star.png'
import { useRecoilState, useRecoilValue } from 'recoil';
import { fetchAPIProduct, ProductDetail } from '../atoms/ProductAtom';
import {categorySelector, categoryState} from '../atoms/CategoryAtoms.js'
import {FontAwesome6, FontAwesome, FontAwesome5} from '@expo/vector-icons'
import SearchBar from '../components/SearchBar.js';


export default function Home_ProductListing ({navigation}){

    const listProduct = useRecoilValue(fetchAPIProduct);
    const [, setProductDetail] = useRecoilState(ProductDetail)
    const listCaterory = useRecoilValue(categorySelector)
    const [startCate, setStartCate] = useState(0);
    const [endCate, setEndCate] = useState(3);
    const [, setCategoryDetail] = useRecoilState(categoryState);


    const renderCategory = ({item}) =>{
        return(
            <Pressable style={{alignItems:'center', width:130}} onPress={() => {
                setCategoryDetail(item)
                navigation.replace("Product_ListView")

                }}>
            <Image source={{uri:item.image}} style={{width: 80, height: 80, borderRadius: 40, borderWidth: 2, borderColor:'#09D1C7'}}/>
            <Text style={{fontWeight:'bold'}}>{item.name}</Text>
        </Pressable>
        )
        
    }




   
    const renderItem = ({item})=>(

        <Pressable onPress={()=> {
        setProductDetail(item)
        navigation.navigate('ProductDetail1')
        }}>
            <View style={styles.item}>
                <View style={{flex:6, justifyContent:"center", alignItems:"center"}}>
                    <Image
                        source={{uri:item.image}}
                        style={{width:120, height:120}}
                    />
                </View>
                <View style={{flex:2, justifyContent:"center", marginLeft:20}}>
                    <Text>
                        {item.name}
                    </Text>
                </View>
                <View style={{flex:2, flexDirection:"row", alignItems:"center", justifyContent:'space-between', borderTopWidth: 0.5}}>
                    <View style={{flexDirection:'row', alignItems:"center", marginLeft:3}}>
                    <FontAwesome name='star' size={20} color={'#FFD167'} />
                    <Text style={{fontSize:13}}>
                        {item.stars}
                    </Text>
                    </View>
                    
                    <Text style={styles.price}>
                        ${item.price}
                    </Text>
                </View>
            </View>
        </Pressable>
    )



  return(
    <SafeAreaView style={{marginTop: 40}}>
    <ScrollView>
        <View style={{flex: 1, height:1000, backgroundColor:"#FFFFFF"}}>
        <View style={{flex: 1, flexDirection: 'row', alignItems:'center', justifyContent:'space-between'}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image
                source={require('../images/back.png')}
                style={{marginLeft:10}}
            />
            <Text style={styles.deal}>All Deals</Text>
            </View>

            <View style={{flexDirection:'row', alignItems:'center'}}>
            <FontAwesome name='shopping-cart' size={30} color={'#09D1C7'}/>
                <Image source={require('../images/ima.png')} style={{width: 20, height: 20, borderRadius:20, marginRight: 10, marginLeft: 10}}/>
              
            </View>
            
        </View>
       
        <View style={{flex: 1,width:'95%', marginTop:13, flexDirection:'row', alignItems:'center', marginLeft: 12}}>
         <SearchBar/>
        </View>
        
 
            <View style={{flex: 3,margin:10, alignItems:"center", flexDirection:'row', justifyContent:'space-between'}}>

            
            <Pressable onPress={() =>{
                if(startCate >= 3){
                    setEndCate(endCate-3)
                    setStartCate(startCate-3)
                }
                
             }}>
                <FontAwesome name='angle-left' size={30}/>
            </Pressable>
            {listCaterory.slice(startCate,endCate).map((item) => (
              <View key={item._id}> 
                {renderCategory({ item })}
              </View>
            ))}
             <Pressable onPress={() =>{
                if(endCate < listCaterory.length){
                    setEndCate(endCate+3)
                    setStartCate(startCate+3)
                }
                
             }}>
                <FontAwesome name='angle-right' size={30}/>
            </Pressable>



                
            </View>
         
        
        
        <View style={styles.view}>
            <View style={styles.view1}>
                <View style={{flex: 4}}>
                    <Text style={styles.txt1}>Shoes</Text>
                    <Text style={styles.txt2}>50% off</Text>
                    <Pressable style={styles.but} onPress={""}>
                        <Text style={styles.txt3}>Buy now</Text> 
                    </Pressable>
                </View>
                <View style={{flex: 6, justifyContent:"center", alignItems:"center"}}>
                    <Image
                        source={require("../images/shoe.png")}
                    />
                </View> 
            </View>
            <View style={styles.view2}>
                    <Image
                        source={require("../images/img2.png")}
                        style={{width:145, height:100}}
                    />  
                    <Image
                        source={require("../images/img3.png")}
                        style={{width:145, height:100, marginLeft:10}}
                    /> 
            </View>
        </View>
        <View style={{flex: 1, flexDirection:"row", alignItems:"center", marginTop:5}}>
            <Text style={styles.recom}>Recommended for you</Text>
            <Pressable onPress={()=>navigation.navigate('Products')}>
                <Text style={styles.viewall}>View all</Text>
            </Pressable>
            
            
        </View>
        <View style={{flex: 5}}>
            <FlatList 
                //data={data}
                //keyExtractor={item => item.id}
                data={listProduct}
                keyExtractor={item => item.product_id}
                renderItem={renderItem}
                horizontal
            />
        </View>
        <View style={styles.footer}>
            <Pressable onPress={()=>navigation.navigate('Home_ProductListing')}>
            <Image
                source={require("../images/home1.png")}
                style={{width:50,height:50}}
            />
            </Pressable>
            <Pressable>
            <Image
                source={require("../images/s.png")}
                style={{width:50,height:50}}
            />
            </Pressable>
            <Pressable>
            <Image
                source={require("../images/f.png")}
                style={{width:60,height:53}}
            />
            </Pressable>
            <Pressable onPress={()=>navigation.navigate('Feedback')}>
            <Image
                source={require("../images/i.png")}
                style={{width:50,height:50}}
            />
            </Pressable>
            <Pressable>
            <Image
                source={require("../images/a.png")}
                style={{width:50,height:50}}
            />
            </Pressable>
            

        </View>
    </View>
    </ScrollView>
    </SafeAreaView>
    
  )
}


const styles = StyleSheet.create({
    view: {
        flex: 7,  
        justifyContent:"center",
        alignItems:"center"
    },
    view1: {
        marginTop:10,
        flex: 4,
        backgroundColor: '#F5F2FD', 
        borderTopLeftRadius: 5, 
        width:300,
        height:150,  
        borderTopRightRadius:5,
        flexDirection:"row",
    },
    view2: {
        marginTop:10,
        flex: 3,
        width:300,
        height:150,  
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        flexDirection:"row",
    },
    txt1:{
        color:"#24C7EC",
        fontSize:24,
        marginLeft:30,
        marginTop:15,
        fontWeight:"700"
    },
    deal:{
        fontSize:14, fontWeight:"600", marginLeft:10
    },
    recom:{
        fontSize:16, fontWeight:"600", marginLeft:20
    },
    viewall:{
        fontSize:12, fontWeight:"600", marginLeft:130, color:"#A19999"
    },
    txt2:{
        color:"#807C7C",
        fontSize:16,
        marginLeft:30,
        marginTop:1,
        fontWeight:"500"
    },
    but:{
        width:55,
        height:18,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#151515",
        marginTop:15,
        marginLeft:38
    },
    txt3:{
        color:"#FFFFFF",
        fontSize:13,
        justifyContent:"center",
        alignItems:"center",
    },
    pres:{
        width:80,
        height:110,
        margin:15,
        alignItems:"center"
    },
    item:{
        flex:1,
        width:130,
        height:150,
        margin:8,
        backgroundColor:"white",
        borderRadius:15, 
        borderWidth: 1,
        borderColor:'grey'
    },
    price:{
       color:"#11D5EB",
       fontWeight:"700",
       marginRight:3
    },
    footer:{
        flex: 2, flexDirection:"row", justifyContent:"space-between", alignItems:"center",
        marginLeft:10, marginRight:10, borderTopWidth:2, borderColor:"#958F8F"
    }
});