import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
  ScrollView,
  Animated,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useRecoilState, useRecoilValue } from "recoil";
import SearchBar from "../components/SearchBar";
import { categoryState } from "../atoms/CategoryAtoms";
import { ProductDetail, ProductFilterByCate } from "../atoms/ProductAtom";
import Swiper_Cate from "../components/Swiper_Cate";
import Footer from "../components/Footer";
import { addToCart, getCart } from "../storage/cartStorage";
import { cartQuantity, cartState } from "../atoms/CartAtom";


export default function Product_ListView({ navigation }) {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const translateX = useState(new Animated.Value(0))[0]; 

  const [maxProduct, setMaxProduct] = useState(3);
  const [categoryDetail, setCategoryDetail] = useRecoilState(categoryState);
  const cartQtt = useRecoilValue(cartQuantity)
  const [, setCart]= useRecoilState(cartState)
  const [, setProductDetail] = useRecoilState(ProductDetail)

  const dataProductFilter = useRecoilValue(ProductFilterByCate);

  useEffect(() => {
    const bannerInterval = setInterval(() => {
      // Di chuyển từ bên phải sang bên trái
      Animated.sequence([
        // Di chuyển ra ngoài màn hình
        Animated.timing(translateX, {
          toValue: -400, // Di chuyển banner ra ngoài (hoặc giá trị chiều rộng của banner)
          duration: 1000, // Thời gian di chuyển chậm lại (1 giây)
          useNativeDriver: true,
        }),
        // Reset về vị trí ban đầu và thay đổi banner
        Animated.timing(translateX, {
          toValue: 400, // Di chuyển banner ra ngoài bên phải
          duration: 0, // Không cần thời gian cho bước này, chỉ thay đổi vị trí
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: 0, // Đưa banner trở lại vị trí ban đầu
          duration: 1000, // Thời gian di chuyển từ từ (1 giây)
          useNativeDriver: true,
        }),
      ]).start();

      // Cập nhật chỉ số banner sau khi hoàn thành animation
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % dataBanner.length);
    }, 3000); // Thời gian chuyển banner (3s)

    return () => clearInterval(bannerInterval); // Dọn dẹp khi component unmount
  }, [translateX]);

  useEffect(() => {
    const fetchCartData = async () => {
      const cartData = await getCart();  
      setCart(cartData);
    };

    fetchCartData();  
  }, []);  
  const dataBanner = [
    "https://www.sys-track.com/img/custom/mobileappDevlopment.png",
    "https://www.arnavsoftech.com/assets/img/android-apps.jpg",
    "https://www.mindstask.com/en/wp-content/uploads/2022/03/android-app-half-banner.jpg",
  ];

  const renderItemProduct = ({ item }) => (
    <Pressable style={styles.productItem} onPress={()=>{
      setProductDetail(item);
      navigation.navigate("ProductDetail1")}}>
      <Image
        source={{ uri: item.image }}
        style={styles.productImage}
      />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <View style={styles.productRating}>
          <FontAwesome name="star" color={"#FFD700"} size={20} />
          <FontAwesome name="star" color={"#FFD700"} size={20} />
          <FontAwesome name="star" color={"#FFD700"} size={20} />
          <FontAwesome name="star" color={"#FFD700"} size={20} />
          <FontAwesome name="star" color={"#FFD700"} size={20} />
        </View>
        <Text style={styles.productPrice}>{item.price}$</Text>
      </View>
      <Pressable
        onPress={() =>{addToCart(item, setCart)}}
        style={styles.addToCartButton}
      >
        <FontAwesome name="plus-circle" size={30} color={"#09D1C7"} />
      </Pressable>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Pressable
              style={styles.headerButton}
              onPress={() => {
                navigation.navigate("Home_ProductListing");
              }}
            >
              <AntDesign name="left" size={25} color={"grey"} />
            </Pressable>
            <Text style={styles.headerType}>{categoryDetail.name}</Text>
          </View>
          <View style={styles.headerRight}>
            <Pressable style={styles.headerButton} onPress={()=>{navigation.navigate("Checkout_Cart")}}>
              <AntDesign name="shoppingcart" color={"grey"} size={30} />
              <Text style={{position:'absolute',zIndex: 1, backgroundColor:'red', width: 20, height: 20, borderRadius: 10,marginLeft: 15, top: 0, color: 'white', textAlign:'center'}}>{cartQtt}</Text>
            </Pressable>
            <Pressable style={styles.headerButton}>
              <FontAwesome name="commenting-o" size={28} color={"grey"} />
            </Pressable>
          </View>
        </View>

        <SearchBar />

        <Text style={{width:'95%', fontSize: 18, fontWeight:'bold', marginTop: 10}}>Categories</Text>
        <Swiper_Cate navigation={navigation} confirm={false} />

        <View style={styles.filterView}>
          <Pressable style={styles.btnFilter}>
            <Text style={styles.txtBtnFilter}>Best Sales</Text>
          </Pressable>
          <Pressable style={styles.btnFilter}>
            <Text style={styles.txtBtnFilter}>Best Matched</Text>
          </Pressable>
          <Pressable style={styles.btnFilter}>
            <Text style={styles.txtBtnFilter}>Popular</Text>
          </Pressable>
        </View>

        <View style={styles.listProduct}>
          {dataProductFilter.slice(0, maxProduct).map((item, index) => (
            <View key={item._id || index}>{renderItemProduct({ item })}</View>
          ))}
        </View>
        <Pressable
          style={styles.buttonSeeAll}
          onPress={() => {
            setMaxProduct((preProduct) => preProduct + 2);
          }}
        >
          <Text style={styles.txtBtnFilter}>SEE ALL</Text>
        </Pressable>

        <View style={styles.banner}>
          <Image
            style={styles.bannerImage}
            source={{ uri: dataBanner[currentBannerIndex] }}
          />
        </View>
      </ScrollView>
      <Footer/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 3,
    height: 30,
    justifyContent: "flex-start",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    flex: 0.6,
    height: 30,
    justifyContent: "space-between",
  },
  headerType: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginRight: "48%",
  },
  headerButton: {
    marginRight: 10,
  },
  productItem: {
    flexDirection: "row",
    borderRadius: 15,
    borderWidth: 1,
    width: 420,
    height: 100,
    marginBottom: 10,
    borderColor: "#D3D3D3",
    alignItems: "center",
  },
  productImage: {
    width: 98,
    height: 98,
    backgroundColor: "white",
    marginRight: 10,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  productDetails: {
    justifyContent: "center",
    marginRight: 10,
    flex: 8,
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  productRating: {
    flexDirection: "row",
  },
  productPrice: {
    fontSize: 20,
    fontWeight: "bold",
  },
  addToCartButton: {
    flex: 1,
  },
  filterView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 15,
  },
  btnFilter: {
    width: 120,
    height: 30,
    backgroundColor: "#E4E4E4",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  txtBtnFilter: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
  listProduct: {
    alignItems: "center",
    marginTop: 10,
  },
  buttonSeeAll: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E4E4E4",
    height: 40,
    borderRadius: 10,
    marginBottom: 15,
  },
  banner: {
    marginBottom: 80,
    alignItems: "center",
  },
  bannerImage: {
    width: 400,
    height: 200,
    borderRadius: 20,
  },
});
