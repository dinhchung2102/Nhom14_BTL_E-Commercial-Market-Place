import React, { useState }  from 'react';
import {Text, View, Pressable, Image, FlatList, StyleSheet, TextInput,ScrollView} from 'react-native';

const data1 =[
    {
      id:"1",
      image:"https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"Shoe",
      price:"$ 299",
    },
    {
      id:"2",
      image:"https://images.pexels.com/photos/2070069/pexels-photo-2070069.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"Tablet",
      price:"$ 499",
    },
    {
      id:"3",
      image:"https://images.pexels.com/photos/5945906/pexels-photo-5945906.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"Pear",
      price:"$ 99",
    },
    {
      id:"4",
      image:"https://images.pexels.com/photos/333984/pexels-photo-333984.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"Television",
      price:"$ 599",
    }
  ]

export default function ProductDetail2({navigation}){
    // const renderItem = ({item})=>(
    //     <Pressable>
    //         <View style={styles.item}>
    //             <View style={{flex:6, justifyContent:"center", alignItems:"center"}}>
    //                 <Image
    //                     source={{uri:item.image}}
    //                     style={{width:70, height:70}}
    //                 />
    //             </View>
    //             <View style={{flex:2, justifyContent:"center", marginLeft:20}}>
    //                 <Text>
    //                     {item.title}
    //                 </Text>
    //             </View>
    //             <View style={{flex:2, flexDirection:"row", alignItems:"center"}}>
    //                 <Image
    //                     source={require("../images/star.png")}
    //                     style={{width:20, height:20, marginLeft:20}}
    //                 />
    //                 <Text style={{fontSize:13, marginLeft:5}}>
    //                     4.5
    //                 </Text>
    //                 <Text style={styles.price1}>
    //                     {item.price}
    //                 </Text>
    //             </View>
    //         </View>
    //     </Pressable>
    // )
    return (
        <ScrollView>
            <View style={{flex:1,width:360, height:1050, backgroundColor:"#FFFFFF" }}>
                <View style={{flex:1}}></View>
                <View style={{flex:1, flexDirection: 'row', alignItems:'center'}}>
                    <Pressable onPress={()=>navigation.navigate('Home_ProductListing')}>
                        <Image
                            source={require('../images/back.png')}
                            style={{marginLeft:10}}
                        />
                    </Pressable>
                <Text style={styles.deal}>T-Shirt</Text>
                </View>
                <View style={{flex:5, alignItems:"center", justifyContent:"center"}}>
                        <Image
                            source={{uri:"https://media.istockphoto.com/id/2141442585/fr/photo/african-american-man-with-african-hairstyle-wearing-hoodie-standing-over-isolated-yellow.webp?a=1&b=1&s=612x612&w=0&k=20&c=erAsWKyEQxuLZiW23QEF5EzZBLcEhahot6pjDTaebJA="}}
                            style={{width:320, height:180, borderRadius:6}}
                        />
                </View>
                <View style={{flex:2, flexDirection:"row"}}>
                        <Image
                            source={{uri:"https://plus.unsplash.com/premium_photo-1673827311290-d435f481152e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9vZGllfGVufDB8fDB8fHww"}}
                            style={{width:72.5, height:72.5, borderRadius:6,marginLeft:20}}
                        />
                        <Image
                            source={{uri:"https://images.unsplash.com/photo-1542406775-ade58c52d2e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvb2RpZXxlbnwwfHwwfHx8MA%3D%3D"}}
                            style={{width:72.5, height:72.5, borderRadius:6,marginLeft:10}}
                        />
                        <Image
                            source={{uri:"https://media.istockphoto.com/id/2141442585/fr/photo/african-american-man-with-african-hairstyle-wearing-hoodie-standing-over-isolated-yellow.webp?a=1&b=1&s=612x612&w=0&k=20&c=erAsWKyEQxuLZiW23QEF5EzZBLcEhahot6pjDTaebJA="}}
                            style={{width:72.5, height:72.5, borderRadius:6,marginLeft:10}}
                        />
                        <Image
                            source={{uri:"https://plus.unsplash.com/premium_photo-1669125725661-24057fb671b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvb2RpZXxlbnwwfHwwfHx8MA%3D%3D"}}
                            style={{width:72.5, height:72.5, borderRadius:6,marginLeft:10}}
                        />
                </View>
                <View style={{flex:10}}>
                    <View style={{flex:2, flexDirection:"row", alignItems:"center"}}>
                        <Text style={styles.price}>$2,99</Text>
                        <Pressable style={styles.press1}>
                            <Text style={styles.txt1}>Buy 1 get 1</Text>
                        </Pressable>
                    </View>
                    <View style={{flex:1, flexDirection:"row", alignItems:"center"}}>
                        <Text style={styles.txt2}>Hoodie shirt</Text>
                        <Image
                                source={require('../images/star.png')}
                                style={{marginLeft:110, width:20, height:20}}
                            />
                            <Text style={{marginLeft:5}}>4.5</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={styles.txt3}>zzzzzz</Text>
                    </View>
                    <View style={{flex:6}}></View>
                </View>
                <View style={{flex:6}}></View>
                
                

            </View>
        </ScrollView>
        
    )
};

const styles = StyleSheet.create({
    deal:{
        fontSize:20, fontWeight:"500", marginLeft:10, width:100
    },
    price:{
        marginLeft:20, fontSize:34, fontWeight:"700", width:90, color:"#11D5EB"
    },
    press1:{
        width:85, height:30, backgroundColor:"#F5F5F5", borderRadius:20, justifyContent:"center", alignItems:"center"
    },
    txt1:{
        fontSize:14, fontWeight:"500", color:"#9E429D"
    },
    txt2:{
        fontSize:20, fontWeight:"700", marginLeft:20, marginTop:10, width:150
    },
    txt3:{
        fontSize:14, fontWeight:"500", marginLeft:20, color:"#A4A9A8"
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