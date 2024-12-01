import React, { useState }  from 'react';
import {Text, View, Pressable, Image, StyleSheet,ScrollView} from 'react-native';
import { useRecoilState, useRecoilValue } from "recoil";
import { ProductDetail } from '../atoms/ProductAtom';
import { addToCart, getCart } from "../storage/cartStorage";
import { cartQuantity, cartState } from "../atoms/CartAtom";


export default function ProductDetail2({navigation}){

    const productDetail = useRecoilValue(ProductDetail);
    const cartQtt= useRecoilValue(cartQuantity)
    const [, setCart] = useRecoilState(cartState);
   
    //useState tăng giảm sô lượng 
    const [count, setCount] = useState(1);
    //useState giá, thành tiền
    const [price, setTotal] = useState(productDetail.price);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        if(count > 1){
            setCount(count - 1);
        }
    };
    //chọn size
    const [selectedSize, setSelectedSize] = useState(null);

    const sizes = productDetail.size;
    const colors = productDetail.color;

    return (
        <ScrollView>
            <View style={{flex:1, height:1150, backgroundColor:"#FFFFFF" }}>
                <View style={{flex:1, flexDirection: 'row', alignItems:'center'}}>
                    <Pressable onPress={()=>navigation.goBack()}>
                        <Image
                            source={require('../images/back.png')}
                            style={{marginLeft:10}}
                        />
                    </Pressable>
                <Text style={styles.deal}>{productDetail.name}</Text>
                </View>
                <View style={{flex:6, alignItems:"center", justifyContent:"center"}}>
                        <Image
                            source={{uri:productDetail.image}}
                            style={{width:280, height:250, borderRadius:6,marginBottom: 20, backgroundColor:'white'}}
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
                        <Text style={styles.price}>${productDetail.price}</Text>
                        <Pressable style={styles.press1}>
                            <Text style={styles.txt1}>Buy 1 get 1</Text>
                        </Pressable>
                    </View>
                    <View style={{flex:1.5, flexDirection:"row", alignItems:"center"}}>
                        <Text style={styles.txt2}>{productDetail.name}</Text>
                        <Image
                                source={require('../images/star.png')}
                                style={{marginLeft:110, width:20, height:20}}
                            />
                            <Text style={{marginLeft:5}}>{productDetail.stars}</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={styles.txt3}>{productDetail.description}</Text>
                    </View>
                    <View style={{flex:0.5}}></View>
                    <View style={{flex:8}}>
                        <View style={{flex:2}}>
                            <Text style={styles.size}>Color</Text>
                            <View style={{flex:1, flexDirection:"row", alignItems:"center"}}>
                            {/* Lặp qua mảng colors và render mỗi item */}
                            {colors.map((color, index) => (
                            <Pressable
                                key={index}
                                style={[styles.color1, { backgroundColor: color }]} // Thiết lập màu nền cho từng ô
                            />
      ))}
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
                    <Pressable onPress={()=>{navigation.navigate("Products")}} style={{flex:2,borderBottomWidth:1, borderColor:"#C5BCBC", alignItems:"center", flexDirection:"row"}}>
                        <Text style={styles.guide}>Review (99)</Text>  
                        <Image
                            source={require("../images/than.png")}
                            style={{width:30,height:30,marginLeft:140}}
                        />      
                    </Pressable>
                    <View style={{flex:2, alignItems:"center", justifyContent:"center"}}>
                        <Pressable style={styles.butt} 
                            onPress={() => {
                                addToCart(productDetail, setCart); // Thêm sản phẩm vào giỏ hàng
                                navigation.navigate('Checkout_Cart'); // Điều hướng tới màn hình giỏ hàng
                              }}
                              
                        >
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
        fontSize:20, fontWeight:"500", marginLeft:10, width:300
    },
    price:{
        marginLeft:20, fontSize:34, fontWeight:"700", width:150, color:"#11D5EB"
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
        width:30, height:30, borderRadius:40, borderWidth:2, borderColor:"#A19999", marginLeft:25
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