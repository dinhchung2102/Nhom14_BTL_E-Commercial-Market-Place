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
    //useState tăng giảm sô lượng 
    const [count, setCount] = useState(1);
    //useState giá, thành tiền
    const [price, setTotal] = useState(2.99);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    //chọn size
    const [selectedSize, setSelectedSize] = useState(null);

    const sizes = ['XS','S', 'M', 'L', 'XL'];
    return (
        <ScrollView>
            <View style={{flex:1, height:1150, backgroundColor:"#FFFFFF" }}>
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
                            style={{width:72.5, height:72.5, borderRadius:6,marginLeft:35}}
                        />
                        <Image
                            source={{uri:"https://images.unsplash.com/photo-1542406775-ade58c52d2e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvb2RpZXxlbnwwfHwwfHx8MA%3D%3D"}}
                            style={{width:72.5, height:72.5, borderRadius:6,marginLeft:10}}
                        />
                        <Image
                            source={{uri:"https://media.istockphoto.com/id/2170496889/vi/anh/african-american-man-with-african-hairstyle-wearing-hoodie-standing-over-isolated-yellow.jpg?s=612x612&w=0&k=20&c=Xd3ChKIF6UCICBLQd43sRgEKeQ-uM_wXH44qwOeaHfU="}}
                            style={{width:72.5, height:72.5, borderRadius:6,marginLeft:10}}
                        />
                        <Image
                            source={{uri:"https://plus.unsplash.com/premium_photo-1669125725661-24057fb671b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvb2RpZXxlbnwwfHwwfHx8MA%3D%3D"}}
                            style={{width:72.5, height:72.5, borderRadius:6,marginLeft:10}}
                        />
                </View>
                <View style={{flex:10}}>
                    <View style={{flex:1.5, flexDirection:"row", alignItems:"center"}}>
                        <Text style={styles.price}>$2,99</Text>
                        <Pressable style={styles.press1}>
                            <Text style={styles.txt1}>Buy 1 get 1</Text>
                        </Pressable>
                    </View>
                    <View style={{flex:1.5, flexDirection:"row", alignItems:"center"}}>
                        <Text style={styles.txt2}>Hoodie shirt</Text>
                        <Image
                                source={require('../images/star.png')}
                                style={{marginLeft:110, width:20, height:20}}
                            />
                            <Text style={{marginLeft:5}}>4.5</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={styles.txt3}>African american man with african hairstyle wearing hoodie standing over isolated yellow background</Text>
                    </View>
                    <View style={{flex:0.5}}></View>
                    <View style={{flex:8}}>
                        <View style={{flex:2}}>
                            <Text style={styles.size}>Color</Text>
                            <View style={{flex:1, flexDirection:"row", alignItems:"center"}}>
                                <Pressable style={styles.color1}/>
                                <Pressable style={styles.color2}/>
                                <Pressable style={styles.color3}/>
                            </View>
                        </View>
                        <View style={{flex:2}}>
                            <Text style={styles.size}>Size</Text>
                            <View style={{flex:1, flexDirection:"row", alignItems:"center",marginLeft:20}}>
                            {sizes.map((size, index) => (
                                <Pressable
                                key={index}
                                onPress={() => setSelectedSize(size)}
                                style={[
                                    styles.Buttsize,
                                    selectedSize === size && styles.selectedButton,
                                ]}
                                >
                                <Text>{size}</Text>
                                </Pressable>
                            ))}
                                
                            </View>
                        </View>
                        <View style={{flex:2, borderBottomWidth:1, borderColor:"#C5BCBC"}}>
                            <Text style={styles.size}>Quantity</Text>
                            <View style={{
                                flex:2,
                                flexDirection:"row", alignItems:"center"
                            }}>
                                <Pressable 
                                onPress={decrement} 
                                style={({ pressed }) => [
                                    {
                                    backgroundColor: pressed ? 'aqua' : 'lightgray',
                                    },
                                    styles.button,
                                ]}
                                >
                                    <Text style={styles.text}>-</Text>
                                </Pressable>
                                <Text style={{fontSize: 20,fontWeight:700, marginLeft:20}}>{count}</Text>
                                <Pressable 
                                onPress={increment} 
                                style={({ pressed }) => [
                                    {
                                    backgroundColor: pressed ? 'aqua' : 'lightgray',
                                    },
                                    styles.button,
                                ]}
                                >
                                    <Text style={styles.text}>+</Text>
                                </Pressable>
                                <Text style={styles.total}>Total</Text>
                                <Text style={styles.totalP}>$ {price*count}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flex:6}}>
                    <View style={{flex:2,borderBottomWidth:1, borderColor:"#C5BCBC", alignItems:"center", flexDirection:"row"}}>
                        <Text style={styles.guide}>Size guide</Text>  
                        <Image
                            source={require("../images/than.png")}
                            style={{width:30,height:30,marginLeft:140}}
                        />     
                    </View>
                    <View style={{flex:2,borderBottomWidth:1, borderColor:"#C5BCBC", alignItems:"center", flexDirection:"row"}}>
                        <Text style={styles.guide}>Review (99)</Text>  
                        <Image
                            source={require("../images/than.png")}
                            style={{width:30,height:30,marginLeft:140}}
                        />      
                    </View>
                    <View style={{flex:2, alignItems:"center", justifyContent:"center"}}>
                        <Pressable style={styles.butt}>
                            <Image
                                source={require("../images/BCart.png")}
                                style={{width:20,height:20, marginRight:4}}
                            />
                            <Text style={{color:"#FFFFFF"}}>Add to cart</Text>
                        </Pressable>
                    </View>
                </View>
                
                

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
    size:{
        fontSize:18, fontWeight:"400", marginLeft:20, marginTop:10
    },
    name:{
        fontSize:14, fontWeight:"500", marginLeft:20, marginTop:5, color:"#A4A9A8"
    },
    mota:{
        fontSize:12, fontWeight:"500", marginLeft:20, marginTop:5, color:"#A4A9A8"
    },
    butt:{
         width:300, height:50, backgroundColor:"#00BDD6", borderRadius:5, 
         justifyContent:"center", alignItems:"center", flexDirection:"row"
    },
    txtBut:{
        color:"white",
        fontWeight:"600",
        textAlign:"center",
        fontSize:18
    },
    color1:{
        width:30, height:30, borderRadius:40, backgroundColor:"red", borderWidth:2, borderColor:"#A19999", marginLeft:25
    },
    color2:{
        width:30, height:30, borderRadius:40, backgroundColor:"brown", borderWidth:2, borderColor:"#A19999", marginLeft:25
    },
    color3:{
        width:30, height:30, borderRadius:40, backgroundColor:"yellow", borderWidth:2, borderColor:"#A19999", marginLeft:25
    },
    Buttsize:{
        width:40, height:40,borderRadius:5, alignItems:"center", justifyContent:"center", borderWidth:1, borderColor:"#A19999", marginRight:5
    },
    button: {
        alignItems: 'center',
        height:30,
        width:30,
        justifyContent:"center", 
        alignItems:"center", marginLeft:20, borderRadius:5
        
      },
      text: {
        fontSize: 24,
        fontWeight:"700"
      },
    total:{
        color:"#A19999", fontSize:12, fontWeight:"500", marginLeft:120
    },
    totalP:{
        fontSize:20, fontWeight:"700", marginLeft:10,
    },
    guide:{
        fontSize:18, fontWeight:"700", marginLeft:20, width:150
    },
    selectedButton: {
        backgroundColor: '#00BDD6', // Màu nền khi được chọn
      },
    
});