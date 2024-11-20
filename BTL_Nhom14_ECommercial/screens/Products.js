import React, { useState, useEffect } from 'react';
import {Text, View, Pressable, Image, FlatList, StyleSheet, ScrollView} from 'react-native';


export default function Products ({navigation}){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
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
  
   
    const renderItem = ({item})=>(
        <Pressable onPress={()=> navigation.navigate('ProductDetail1', 
                        {ima:item.image, 
                        tit:item.title, 
                        pri:item.price,
                        des:item.description,
                        type:item.type
                        })}
                    style={({ pressed }) => [
                        {
                        backgroundColor: pressed ? 'aqua' : 'lightgray',
                        },
                    ]}
        >
            <View style={styles.item}>
                <View style={{flex:4, justifyContent:"center", alignItems:"center"}}>
                    <Image
                        source={{uri:item.image}}
                        style={{width:90, height:90}}
                    />
                </View>
                <View style={{flex:6}}>
                    <View style={{flex:2, justifyContent:"center", marginLeft:20}}>
                        <Text style={{fontSize:22, marginTop:20}}>
                            {item.title}
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
                        <Text style={styles.price}>
                            ${item.price}
                        </Text>
                    </View>
                </View>
                
            </View>
        </Pressable>
    )
  return(
        <View style={{flex: 1, marginTop:50, backgroundColor:"#FFFFFF"}}>
            <View style={styles.view}>
                <Text style={styles.txt1}>All Products</Text>
                <Text style={styles.txt2}>Choose product below</Text>
            </View>
            <View style={styles.list}>
                <FlatList 
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                />
            </View>
            <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                <Pressable style={styles.butt} onPress={()=>navigation.navigate('Home_ProductListing')}>
                    <Text style={styles.txtBut}>Return to home page</Text>
                </Pressable>
            </View>
        </View>
        
  )
}


const styles = StyleSheet.create({
    view: {
        flex:2, alignItems:'center', justifyContent:"center"
    },
    list: {
        flex:6, alignItems:'center', justifyContent:"center"
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
        color:"aqua",
        fontSize:34,
        fontWeight:"700"
    },
    butt:{
        width:300, height:50, backgroundColor:"#11D5EB", borderRadius:5, justifyContent:"center", alignItems:"center"
    },
    txtBut:{
        color:"white",
        fontWeight:"600",
        textAlign:"center",
        fontSize:18
    },
    txt2:{
        color:"orange",
        fontSize:16,
        marginTop:1,
        fontWeight:"700"
    },
    item:{
        flexDirection:"row",
        flex:1,
        width:330,
        height:150,
        margin:10,
        backgroundColor:"#F8F7F7"
    },
    price:{
       color:"#11D5EB",
       marginLeft:20,
       fontWeight:"700"
    },
});