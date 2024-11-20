import React, { useState, useEffect } from 'react';
import {Text, View, Pressable, Image, FlatList, StyleSheet, ScrollView} from 'react-native';
import stara from '../images/star.png'
import { useRecoilValue } from 'recoil';
import { fetchAPIProduct } from '../atoms/ProductAtom';

const data1 =[
  {
    id:"1",
    image:"https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=600",
    title:"Shoe",
    price:"$299",
  },
  {
    id:"2",
    image:"https://images.pexels.com/photos/2070069/pexels-photo-2070069.jpeg?auto=compress&cs=tinysrgb&w=600",
    title:"Tablet",
    price:"$499",
  },
  {
    id:"3",
    image:"https://images.pexels.com/photos/5945906/pexels-photo-5945906.jpeg?auto=compress&cs=tinysrgb&w=600",
    title:"Pear",
    price:"$99",
  },
  {
    id:"4",
    image:"https://images.pexels.com/photos/333984/pexels-photo-333984.jpeg?auto=compress&cs=tinysrgb&w=600",
    title:"Television",
    price:"$599",
  }
]

export default function Home_ProductListing ({navigation}){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //const listProduct = useRecoilValue(fetchAPIProduct);
  
    // useEffect to fetch data when the component mounts
    useEffect(() => {
      // The URL of the API
      const url = 'https://66ff34f02b9aac9c997e841a.mockapi.io/api/products';
  
      // Fetching data from the API
      fetch(url)
        .then((response) => {
          // Check if the response is okay (status 200-299)
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

    const handleNavigation = (item, navigation)=> {
         if (item.type === 'Fashion') {
          navigation.navigate('ProductDetail2', 
          {
                ima:item.image, tit:item.title, type:item.type, pri:item.price, des:item.description 
          });
        } else {
            navigation.navigate('ProductDetail1', 
            {
                ima:item.image, tit:item.title, type:item.type, pri:item.price, des:item.description
            });
        }
      }
  
   
    const renderItem = ({item})=>(
        <Pressable onPress={()=>handleNavigation(item,navigation)}>
            <View style={styles.item}>
                <View style={{flex:6, justifyContent:"center", alignItems:"center"}}>
                    <Image
                        source={{uri:item.image}}
                        style={{width:90, height:90}}
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
                        {item.stars}
                    </Text>
                    <Text style={styles.price}>
                        ${item.price}
                    </Text>
                </View>
            </View>
        </Pressable>
    )
  return(
    <ScrollView>
        <View style={{flex: 1, height:1000, marginTop:50, backgroundColor:"#FFFFFF"}}>
        <View style={{flex: 1, flexDirection: 'row', alignItems:'center'}}>
            <Image
                source={require('../images/back.png')}
                style={{marginLeft:10}}
            />
            <Text style={styles.deal}>All Deals</Text>
            <Image
                source={require('../images/DealCart.png')}
                style={{marginLeft:200, height:25, width:25}}
            />
            <Image
                source={require('../images/ima.png')}
                style={{marginLeft:10, width:40, height:40, borderRadius:40}}
            />
        </View>
        <View style={{flex: 1, marginTop:20, flexDirection:'row'}}>
          <Pressable style={{flexDirection:'row', width:250, height:27, backgroundColor:"#EFF1F9", borderRadius:3, marginLeft: 30, alignItems:"center"}}>
          <Image
            style={{width:25, height:25}}
          />
          <Text style={{color:"#958F8F"}}>
           Search for product
          </Text>
          </Pressable>
          <Image
            source={require('../images/filter.png')}
            style={{marginLeft:30,width:27, height:27}}
          />
        </View>
        
        <ScrollView horizontal={true}>
            <View style={{flex: 3, alignItems:"center", width:500, flexDirection:"row"}}>
            
                <Pressable style={styles.pres} 
                    onPress={()=>navigation.navigate('Product_ListView')}
                >
                    <Image
                        source={{uri:"https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600"}}
                        style={{ width: 80, height: 80, borderRadius:40 }}
                    />
                    <Text style={{marginTop:5}}>Electronics</Text>
                </Pressable>
                <Pressable style={styles.pres} 
                    onPress={()=>navigation.navigate('Product_ListView')}
                >
                    <Image
                        source={{uri:"https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=600"}}
                        style={{ width: 80, height: 80, borderRadius:40 }}
                    />
                    <Text style={{marginTop:5}}>Fresh fruits</Text>
                </Pressable>
                <Pressable style={styles.pres} 
                    onPress={()=>navigation.navigate('Product_ListView')}
                >
                    <Image
                        source={{uri:"https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"}}
                        style={{ width: 80, height: 80, borderRadius:40 }}
                    />
                    <Text style={{marginTop:5}}>Fashion</Text>
                </Pressable>
                <Pressable style={styles.pres} >
                    <Image
                        source={{uri:"https://images.pexels.com/photos/1377034/pexels-photo-1377034.jpeg?auto=compress&cs=tinysrgb&w=600"}}
                        style={{ width: 80, height: 80, borderRadius:40 }}
                    />
                    <Text style={{marginTop:5}}>Beauty</Text>
                </Pressable>
                
                
            </View>
            </ScrollView>
        
        
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
                data={data}
                //data={listProduct}
                keyExtractor={item => item.id}
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
        backgroundColor:"#F8F7F7"
    },
    price:{
       color:"#11D5EB",
       marginLeft:20,
       fontWeight:"700"
    },
    footer:{
        flex: 2, flexDirection:"row", justifyContent:"space-between", alignItems:"center",
        marginLeft:10, marginRight:10, borderTopWidth:2, borderColor:"#958F8F"
    }
});