import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Pressable,
  Image,
  FlatList,
  StyleSheet,
  TextInput,
  ScrollView,
  SafeAreaView, Animated 
} from "react-native";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  fetchAPIProduct,
  ProductDetail,
  ProductType,
} from "../atoms/ProductAtom";
import { categoryState } from "../atoms/CategoryAtoms";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { addToCart, getCart } from "../storage/cartStorage";
import { cartQuantity, cartState } from "../atoms/CartAtom";

export default function ProductDetail1({ navigation }) {
  const [productDetail, setProductDetail] = useRecoilState(ProductDetail);
  const dataProducts = useRecoilValue(fetchAPIProduct);
  const [, setCategoryDetail] = useRecoilState(categoryState);
  const cartQtt= useRecoilValue(cartQuantity)
  const [, setCart] = useRecoilState(cartState);

  const filteredProducts = dataProducts.filter(
    (product) => product.category_id === productDetail.category_id
  );

  const handlePressSeeAllProduct = () =>{
    setCategoryDetail(filteredProducts[0]._id)
  }

  useEffect(() => {
    const fetchCartData = async () => {
      const cartData = await getCart();  
      setCart(cartData);
    };

    fetchCartData();  
  }, []);  

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => {
        setProductDetail(item);
        navigation.replace("ProductDetail1");
      }}
    >
      <View style={styles.item}>
        <View
          style={{ flex: 6, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={{ uri: item.image }}
            style={{ width: 100, height: 100 }}
          />
        </View>
        <View style={{ flex: 2, justifyContent: "center", marginLeft: 20, alignItems:'center' }}>
          <Text>{item.name}</Text>
        </View>
        <View style={{ flex: 2, flexDirection: "row", alignItems: "center", justifyContent:'space-between'}}>
            <View style={{flexDirection:'row', alignItems:'center', marginLeft: 5}}>
            <FontAwesome name="star" color={'#FFD167'} size={18} />
            <Text style={{ fontSize: 13}}>{item.stars}</Text>
            </View>
          
          <Text style={styles.price1}>${item.price}</Text>
        </View>
      </View>
    </Pressable>
  );
  const [isOn, setIsOn] = useState(false); // Trạng thái On/Off
  const translateX = useState(new Animated.Value(0))[0]; // Vị trí của nút trượt
  const [notifyBell, setNotifyBell] = useState('bell-slash');
  //Công tắc bật tắt thông báo
  const toggleSwitch = () => {
    if (isOn) {
      // Chuyển sang trạng thái Off
      Animated.timing(translateX, {
        toValue: 0, // Trượt về trái
        duration: 200,
        useNativeDriver: true,
      }).start();
      setNotifyBell('bell-slash')
    } else {
      // Chuyển sang trạng thái On
      Animated.timing(translateX, {
        toValue: 25, // Trượt sang phải
        duration: 200,
        useNativeDriver: true,
      }).start();
      setNotifyBell("bell")
    }
    setIsOn(!isOn); // Đảo trạng thái
  };
  return (
      
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF"}}>
            <ScrollView style={{marginBottom: 125}}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width:'95%',
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center"}}>
              <Pressable
                onPress={() => navigation.replace("Home_ProductListing")}
              >
                <FontAwesome name="angle-left" size={22} style={{marginLeft: 10}}/>
              </Pressable>
              <Text style={styles.deal}>{productDetail.name}</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center"}}>
              <Pressable onPress={()=>{navigation.navigate("Checkout_Cart")}}>
              <Text style={{position:'absolute',zIndex: 1, backgroundColor:'red', width: 20, height: 20, borderRadius: 10,marginLeft: 15, top: 0, color: 'white', textAlign:'center'}}>{cartQtt}</Text>
                <AntDesign name="shoppingcart" size={30} color={"grey"} />
              </Pressable>
              <Pressable style={{marginLeft:10}}>
                <FontAwesome name="commenting-o" size={28} color={'grey'}/>
              </Pressable>
            </View>
          </View>

          <View style={{ flex: 4 }}>
            <View style={{ flex: 2 }}>
              <View
                style={{
                  flex: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={{ uri: productDetail.image }}
                  style={{ width: '100%', height: 300, borderRadius: 5, marginBottom: 10 }}
                />
              </View>
              <View
                style={{
                  flex: 2,
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomWidth: 1,
                  borderColor: "#C5BCBC",
                }}
              >
                <Text style={styles.price}>${productDetail.price}</Text>
                <Image
                  source={require("../images/star.png")}
                  style={{ marginLeft: 140, width: 20, height: 20 }}
                />
                <Text style={{ marginLeft: 5 }}>{productDetail.stars}</Text>
                <Text style={styles.rv}>(99 reviews)</Text>
              </View>
            </View>
            <View style={{ flex: 2 }}>
              <View style={{ flex: 2 }}>
                <Text style={styles.txt1}>Description</Text>
                <Text style={styles.txt2}>{productDetail.description}</Text>
              </View>
              <View
                style={{
                  flex: 2,
                  borderBottomWidth: 1,
                  borderColor: "#C5BCBC",
                }}
              >
                <View style={{ flex: 2, flexDirection: "row" }}>
                  <Image
                    source={require("../images/express.png")}
                    style={{
                      marginLeft: 20,
                      width: 20,
                      height: 20,
                      marginTop: 20,
                    }}
                  />
                  <Text style={styles.txt3}>Express</Text>
                  <Image
                    source={require("../images/return.png")}
                    style={{
                      marginLeft: 80,
                      width: 20,
                      height: 20,
                      marginTop: 20,
                    }}
                  />
                  <Text style={styles.txt3}>30-day Free return</Text>
                </View>
                <View style={{ flex: 2, flexDirection: "row" }}>
                  <Image
                    source={require("../images/goodview.png")}
                    style={{
                      marginLeft: 20,
                      width: 20,
                      height: 20,
                      marginTop: 20,
                    }}
                  />
                  <Text style={styles.txt3}>Good review</Text>
                  <Image
                    source={require("../images/auth.png")}
                    style={{
                      marginLeft: 52,
                      width: 20,
                      height: 20,
                      marginTop: 20,
                    }}
                  />
                  <Text style={styles.txt3}>Authorized shop</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ flex: 6 }}>
            <View style={{ flex: 3 }}>
              <View style={{ flex: 1, marginTop: 15, flexDirection: "row", justifyContent:'space-between' }}>
                <Text style={styles.txt1}>Reviews</Text>
                <Pressable style={{alignItems:'center', justifyContent:'center'}}>
                  <Text style={styles.see}>See all </Text>
                </Pressable>
              </View>
              {/* Phần review  */}
              <View style={{ flex: 4, flexDirection:"row"}}>
                  <View style={styles.averageContainer}>
                    <Text style={styles.averageText}>{productDetail.stars}/5</Text>
                    <Text style={styles.reviewCount}>(99 reviews)</Text>
                    <View style={{flexDirection:"row", marginTop:5}}>
                    <FontAwesome name="star" color={'#FFD167'} size={18} style={{marginRight:5}} />
                    <FontAwesome name="star" color={'#FFD167'} size={18} style={{marginRight:5}} />
                    <FontAwesome name="star" color={'#FFD167'} size={18} style={{marginRight:5}} />
                    <FontAwesome name="star" color={'#FFD167'} size={18} style={{marginRight:5}} />
                    <FontAwesome name="star" color={'#C4C4C4'} size={18} style={{marginRight:5}} />
                    </View>
                  </View>

                  {/* Thanh đánh giá */}
                  <View style={{flex:5}}>
                  
                  <View style={styles.ratingRow}>
                    <View style={styles.progressBar}>
                      <View style={[styles.progress, { width: '80%' }]} />
                    </View>
                    <Text style={styles.countText}>5</Text>
                  </View>

                  <View style={styles.ratingRow}>
                    <View style={styles.progressBar}>
                      <View style={[styles.progress, { width: '60%' }]} />
                    </View>
                    <Text style={styles.countText}>4</Text>
                  </View>

                  <View style={styles.ratingRow}>
                    <View style={styles.progressBar}>
                      <View style={[styles.progress, { width: '37%' }]} />
                    </View>
                    <Text style={styles.countText}>3</Text>
                  </View>

                  <View style={styles.ratingRow}>
                    <View style={styles.progressBar}>
                      <View style={[styles.progress, { width: '22%' }]} />
                    </View>
                    <Text style={styles.countText}>2</Text>
                  </View>

                  <View style={styles.ratingRow}>
                    <View style={styles.progressBar}>
                      <View style={[styles.progress, { width: '8%' }]} />
                    </View>
                    <Text style={styles.countText}>1</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flex: 4,
                  borderBottomWidth: 1,
                  borderColor: "#C5BCBC",
                }}
              >
                <View style={{ flex: 4, flexDirection: "row", marginTop: 10 }}>
                  <View style={{ flex: 4 }}>
                    <Image
                      source={require("../images/pf1.png")}
                      style={{
                        marginLeft: 30,
                        borderRadius: 40,
                        marginRight: 20,
                        width: 50,
                        height: 50,
                      }}
                    />
                  </View>
                  <View style={{ flex: 8}}>
                    <Text style={styles.name}>Jevon Raynor</Text>
                    <Text style={styles.mota}>The girl likes singing </Text>
                  </View>
                  <View style={{ flex: 5, alignItems: "center" }}>
                    <Text style={styles.mota}>A day ago</Text>
                  </View>
                </View>
                <View style={{ flex: 4, flexDirection: "row", marginTop: 20 }}>
                  <View style={{ flex: 4 }}>
                    <Image
                      source={require("../images/pf2.png")}
                      style={{
                        marginLeft: 30,
                        borderRadius: 40,
                        width: 50,
                        height: 50,
                      }}
                    />
                  </View>
                  <View style={{ flex: 8, marginBottom: 20}}>
                    <Text style={styles.name}>Jason D.</Text>
                    <Text style={styles.mota}>
                      His favorite song is Reality
                    </Text>
                  </View>
                  <View style={{ flex: 5, alignItems: "center" }}>
                    <Text style={styles.mota}>Fews day ago</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ flex: 4 }}>
              <View style={{ flex: 1, marginTop: 10, flexDirection: "row", justifyContent:'space-between' }}>
                <Text style={styles.txt1}>Relevant products</Text>
                <Pressable onPress={() =>{navigation.navigate("Product_ListView")
                  handlePressSeeAllProduct();
                }}>
                  <Text style={styles.see}>See all </Text>
                </Pressable>
                
              </View>
              <View style={{ flex: 5 }}>
                <FlatList
                  data={filteredProducts}
                  keyExtractor={(item) => item._id}
                  renderItem={renderItem}
                  horizontal
                />
              </View>
            </View>
          </View>
          </ScrollView>
          <View style={{ position:'absolute',width:'100%', bottom: 0,backgroundColor:'white', borderTopWidth: 1, borderTopColor:'#f0f0f0'}}>
                <View style={styles.view1}>
                  <FontAwesome name={notifyBell} color={'#09D1C7'} size={30} style={{ width: 30,marginLeft: 10}}/>
                  <Text style={{fontSize:15, marginLeft: 10, color:'grey'}}>Notify me of promotions</Text>
                  <Pressable onPress={toggleSwitch} style={{marginLeft: 150, marginRight: 10}}>
                    <View
                      style={[
                        styles.switchContainer,
                        { backgroundColor: isOn ? '#4CAF50' : '#B0BEC5', borderWidth: 1, width: 55, borderColor:'#f0f0f0' },
                      ]}
                    >
                      <Animated.View
                        style={[styles.circle, { transform: [{ translateX }] }]}
                      />
                    </View>
                  </Pressable>
                </View>
                <View style={styles.viewButton}>
                  <Pressable style={{flexDirection:'row', alignItems:'center'}} onPress={()=>{addToCart(productDetail, setCart)}}>
                    <Image
                      source={require("../images/fcart.png")}
                      style={{ width: 50, height: 50 }}
                    />
                  </Pressable>
                  <Pressable style={styles.butt} onPress={()=>navigation.navigate('Checkout_Cart')}>
                    <Text style={styles.txtBut}>Buy now</Text>
                  </Pressable>
                </View>
              </View>
          </SafeAreaView>
     
    
  );
}

const styles = StyleSheet.create({

  
  viewButton: {
    marginLeft: 10,
    marginRight: 10,
    flex: 2,
    flexDirection: "row",
    alignItems:'center',
    marginBottom: 5
  },
  deal: {
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 10,
    width: 300,
  },
  price: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "700",
    width: 150,
  },
  rv: {
    marginRight: 20,
    marginLeft: 5,
  },
  txt1: {
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 20,
    marginTop: 10,
    width: 180,
  },
  txt2: {
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 20,
    marginTop: 10,
    color: "#A4A9A8",
  },
  txt3: {
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 10,
    marginTop: 20,
    color: "#A4A9A8",
  },
  see: {
    fontSize: 14,
    fontWeight: "500",
    marginRight: 10,
    marginTop: 10,
    color: "#A4A9A8",
  },
  name: {
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 20,
    marginTop: 5,
    color: "#A4A9A8",
  },
  mota: {
    fontSize: 12,
    fontWeight: "500",
    marginLeft: 20,
    marginTop: 5,
    color: "#A4A9A8",
  },
  item: {
    flex: 1,
    width: 130,
    height: 200,
    margin: 8,
    backgroundColor: "white",
    borderRadius:10,
    borderWidth: 1
  },
  price1: {
    color: "#11D5EB",
    marginRight: 5,
    fontWeight: "700",
  },
  view1: {
    margin: 10,
    height: 50,
    flex: 2.5,
    borderWidth: 1,
    borderColor: "#A4A9A8",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  butt: {
    marginLeft: 10,
    width: 260,
    height: 45,
    backgroundColor: "#11D5EB",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  txtBut: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 18,
  },
  averageContainer: {
    margin: 20,
    flex: 4,
  },
  averageText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  reviewCount: {
    fontSize: 16,
    color: '#888',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
  progressBar: {
    flex: 1,
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  progress: {
    height: '100%',
    backgroundColor: '#FFD700',
  },
  countText: {
    width: 30,
    fontSize: 14,
    color: '#555',
  },
  switchContainer: {
    width: 50,
    height: 30,
    borderRadius: 15,
    padding: 2,
    backgroundColor: '#B0BEC5', // Mặc định màu xám
    justifyContent: 'center',
  },
  circle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
  },
});
