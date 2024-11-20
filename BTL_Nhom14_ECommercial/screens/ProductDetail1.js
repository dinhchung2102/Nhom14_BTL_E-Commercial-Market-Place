import React, { useState, useEffect }  from 'react';
import {Text, View, Pressable, Image, FlatList, StyleSheet, TextInput,ScrollView} from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';
import { fetchAPIProduct, ProductDetail, ProductType } from '../atoms/ProductAtom';


export default function ProductDetail1({navigation}){


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [type, setType] = useState("")

    const productDetail = useRecoilValue(ProductDetail);
    console.log(productDetail.type);
    
    const dataProducts = useRecoilValue(fetchAPIProduct);
    
    
    
  
  
    useEffect(() => {
     
      const url = 'https://66ff34f02b9aac9c997e841a.mockapi.io/api/products';
  
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // Parse the JSON data
        })
        .then((data) => {
          setData(data); // Set the data into the state
          setLoading(false); // Set loading to false after data is fetched
        })
        .catch((error) => {
          setError(error.message); // Set the error message if there is an error
          setLoading(false); // Set loading to false in case of error
        });
    }, []); // Empty dependency array means this effect runs once after the first render

    const filteredProducts = dataProducts.filter(
        (product) => product.type === productDetail.type
      );
      console.log(filteredProducts);
      
    const renderItem = ({item})=>(
        <Pressable>
            <View style={styles.item}>
                <View style={{flex:6, justifyContent:"center", alignItems:"center"}}>
                    <Image
                        source={{uri:item.image}}
                        style={{width:70, height:70}}
                    />
                </View>
                <View style={{flex:2, justifyContent:"center", marginLeft:20}}>
                    <Text>
                        {item.name}
                    </Text>
                </View>
                <View style={{flex:2, flexDirection:"row", alignItems:"center"}}>
                    <Image
                        source={require("../images/star.png")}
                        style={{width:20, height:20, marginLeft:20}}
                    />
                    <Text style={{fontSize:13, marginLeft:5}}>
                        4.5
                    </Text>
                    <Text style={styles.price1}>
                        {item.price}
                    </Text>
                </View>
            </View>
        </Pressable>
    )
    return (
        <ScrollView>
            <View style={{flex:1,width:360, height:1250, backgroundColor:"#FFFFFF" }}>
                <View style={{flex: 1, flexDirection: 'row', alignItems:'center'}}>
                <Pressable onPress={()=>navigation.navigate('Home_ProductListing')}>
                    <Image
                        source={require('../images/back.png')}
                        style={{marginLeft:10}}
                    />
                </Pressable>
                <Text style={styles.deal}>{productDetail.name}</Text>
                <Image
                    source={require('../images/DealCart.png')}
                    style={{marginLeft:150, height:25, width:25}}
                />
                <Image
                    source={require('../images/ima.png')}
                    style={{marginLeft:10, width:30, height:30, borderRadius:40}}
                />
                </View>
                <View style={{flex:4}}>
                    <View style={{flex:2,}}>
                        <View style={{flex:5, justifyContent:"center", alignItems:"center"}}>
                            <Image
                                source={{uri:productDetail.image}}
                                style={{width:320, height:180, borderRadius:5 }}
                            />
                        </View>
                        <View style={{flex:2, flexDirection:"row", alignItems:"center", borderBottomWidth:1, borderColor:"#C5BCBC"}}>
                            <Text style={styles.price}>{productDetail.price}</Text>
                            <Image
                                source={require('../images/star.png')}
                                style={{marginLeft:140, width:20, height:20}}
                            />
                            <Text style={{marginLeft:5}}>{productDetail.stars}</Text>
                            <Text style={styles.rv}>(99 reviews)</Text>
                        </View>
                    </View>
                    <View style={{flex:2}}>
                        <View style={{flex:2}}>
                            <Text style={styles.txt1}>Description</Text>
                            <Text style={styles.txt2}>{productDetail.description}</Text>
                        </View>
                        <View style={{flex:2, borderBottomWidth:1, borderColor:"#C5BCBC"}}>
                            <View style={{flex:2,flexDirection:"row"}}>
                                <Image
                                    source={require('../images/express.png')}
                                    style={{marginLeft:20, width:20, height:20, marginTop:20}}
                                />
                                <Text style={styles.txt3}>Express</Text>
                                <Image
                                    source={require('../images/return.png')}
                                    style={{marginLeft:80, width:20, height:20, marginTop:20}}
                                />
                                <Text style={styles.txt3}>30-day Free return</Text>
                            </View>
                            <View style={{flex:2,flexDirection:"row"}}>
                                <Image
                                    source={require('../images/goodview.png')}
                                    style={{marginLeft:20, width:20, height:20, marginTop:20}}
                                />
                                <Text style={styles.txt3}>Good review</Text>
                                <Image
                                    source={require('../images/auth.png')}
                                    style={{marginLeft:52, width:20, height:20, marginTop:20}}
                                />
                                <Text style={styles.txt3}>Authorized shop</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flex:6}}>
                    <View style={{flex:3}}>
                            <View style={{flex:1,marginTop:15, flexDirection:"row"}}>
                                <Text style={styles.txt1}>Reviews</Text>
                                <Text style={styles.see}>See all </Text>
                            </View>
                            <View style={{flex:4}}>
                                <Image
                                    source={require('../images/review.png')}
                                    style={{marginLeft:30, borderRadius:3, marginRight:20, width:300, height:130}}
                                    
                                />
                            </View>
                            <View style={{flex:4, borderBottomWidth:1, borderColor:"#C5BCBC"}}>
                                <View style={{flex:4, flexDirection:"row", marginTop:10}}>
                                    <View style={{flex:4}}>
                                        <Image
                                            source={require('../images/pf1.png')}
                                            style={{marginLeft:30, borderRadius:40, marginRight:20, width:50, height:50}}
                                            
                                        />
                                    </View>
                                    <View style={{flex:8}}>
                                        <Text style={styles.name}>Jevon Raynor</Text>
                                        <Text style={styles.mota}>The girl likes singing </Text>
                                    </View>
                                    <View style={{flex:5, alignItems:"center"}}>
                                    <Text style={styles.mota}>A day ago</Text>
                                    </View>
                                </View>
                                <View style={{flex:4, flexDirection:"row"}}>
                                    <View style={{flex:4}}>
                                        <Image
                                            source={require('../images/pf2.png')}
                                            style={{marginLeft:30, borderRadius:40, marginRight:20, width:50, height:50}}
                                            
                                        />
                                    </View>
                                    <View style={{flex:8}}>
                                        <Text style={styles.name}>Jason D.</Text>
                                        <Text style={styles.mota}>His favorite song is Reality</Text>
                                    </View>
                                    <View style={{flex:5, alignItems:"center"}}>
                                    <Text style={styles.mota}>Fews day ago</Text>
                                    </View>
                                </View>
                                
                            </View>
                        
                    </View>
                    <View style={{flex:4}}>
                            <View style={{flex:1, marginTop:10, flexDirection:"row"}}>
                                <Text style={styles.txt1}>Relevant products</Text>
                                <Text style={styles.see}>See all </Text>
                            </View>
                            <View style={{flex:5}}>
                                <FlatList 
                                    data={filteredProducts}
                                    keyExtractor={item => item._id}
                                    renderItem={renderItem}
                                    horizontal
                                />
                            </View>
                            <View style={{flex:4}}>
                                <View style={styles.view1}>
                                        <Image
                                            source={require('../images/bell.png')}
                                            style={{marginLeft:10, borderRadius:3, width:40, height:40}}
                                            
                                        />
                                        <Text style={styles.mota}>Notify me of promotions</Text>
                                        <Image
                                            source={require('../images/onoff.png')}
                                            style={{marginLeft:70, width:33, height:35}}
                                            
                                        />
                                </View>
                                <View style={{marginLeft:20, marginRight:20, marginTop:10, flex:2, flexDirection:"row" }}>
                                    <Image
                                        source={require('../images/fcart.png')}
                                        style={{ width:50, height:50}}
                                    />
                                    <Pressable style={styles.butt}>
                                        <Text style={styles.txtBut}>Buy now</Text>
                                    </Pressable>
                                </View>
                            </View>
                            
                    </View>
                </View>
                

            </View>
        </ScrollView>
        
    )
};

const styles = StyleSheet.create({
    deal:{
        fontSize:16, fontWeight:"700", marginLeft:10, width:100
    },
    price:{
        marginLeft:20, fontSize:20, fontWeight:"700", width:70
    },
    rv:{
        marginRight:20, marginLeft:5
    },
    txt1:{
        fontSize:16, fontWeight:"700", marginLeft:20, marginTop:10, width:180
    },
    txt2:{
        fontSize:14, fontWeight:"500", marginLeft:20, marginTop:10, color:"#A4A9A8"
    },
    txt3:{
        fontSize:14, fontWeight:"500", marginLeft:10, marginTop:20, color:"#A4A9A8"
    },
    see:{
        fontSize:14, fontWeight:"500", marginLeft:80, marginTop:10, color:"#A4A9A8"
    },
    name:{
        fontSize:14, fontWeight:"500", marginLeft:20, marginTop:5, color:"#A4A9A8"
    },
    mota:{
        fontSize:12, fontWeight:"500", marginLeft:20, marginTop:5, color:"#A4A9A8"
    },
    item:{
        flex:1,
        width:130,
        height:150,
        margin:8,
        backgroundColor:"#F8F7F7"
    },
    price1:{
       color:"#11D5EB",
       marginLeft:20,
       fontWeight:"700"
    },
    view1:{
        marginLeft:20, marginRight:20, marginTop:10, flex:2.5,
        borderWidth:1, borderColor:"#A4A9A8", borderRadius:5, flexDirection:"row", alignItems:"center"
    },
    butt:{
        marginLeft:10, width:260, height:50, backgroundColor:"#11D5EB", borderRadius:5, justifyContent:"center", alignItems:"center"
    },
    txtBut:{
        color:"white",
        fontWeight:"600",
        textAlign:"center",
        fontSize:18
    }
    
});