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
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useRecoilState, useRecoilValue } from "recoil";
import { maxProductList } from "../atoms/MaxProductList";
import SearchBar from "../components/SearchBar";
import { categorySelector, categoryState } from "../atoms/CategoryAtoms";
import { fetchAPIProduct } from "../atoms/ProductAtom";

export default function Product_ListView({ navigation }) {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const translateX = useState(new Animated.Value(0))[0]; // Điều khiển di chuyển theo trục X



  const dataProducts = useRecoilValue(fetchAPIProduct);
  const [maxProduct, setMaxProduct] = useState(3);
  const dataCate = useRecoilValue(categorySelector);
  const [categoryDetail, setCategoryDetail] = useRecoilState(categoryState);
  const [startCate, setStartCate] = useState(0);
  const [endCate, setEndCate] = useState(3) 

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
          duration: 0,  // Không cần thời gian cho bước này, chỉ thay đổi vị trí
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

  
  const dataProductFilter = dataProducts.filter((item) => item.category_id == categoryDetail._id);

  const dataBanner = [
    "https://www.sys-track.com/img/custom/mobileappDevlopment.png",
    "https://www.arnavsoftech.com/assets/img/android-apps.jpg",
    "https://www.mindstask.com/en/wp-content/uploads/2022/03/android-app-half-banner.jpg",
  ];


  const renderItemProduct = ({ item }) => (
    <Pressable
      style={{
        flexDirection: "row",
        borderRadius: 15,
        borderWidth: 1,
        width: 420,
        height: 100,
        marginBottom: 10,
        borderColor: "#D3D3D3",
        alignItems:'center'
      }}
    >
      <Image
        source={{ uri: item.image }}
        style={{
          width: 98,
          height: 98,
          backgroundColor: "white",
          marginRight: 10,
          borderTopLeftRadius: 15,
          borderBottomLeftRadius: 15,
        }}
      />
      <View style={{ justifyContent: "center", marginRight: 10, flex: 8}}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.name}</Text>
        <View style={{ flexDirection: "row" }}>
          <FontAwesome name="star" color={"#FFD700"} size={20} />
          <FontAwesome name="star" color={"#FFD700"} size={20} />
          <FontAwesome name="star" color={"#FFD700"} size={20} />
          <FontAwesome name="star" color={"#FFD700"} size={20} />
          <FontAwesome name="star" color={"#FFD700"} size={20} />
        </View>
        
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          {item.price}$
        </Text>
      </View>
        <Pressable onPress={() => navigation.navigate("Checkout_Cart")} style={{flex: 1}}>
          <FontAwesome name="plus-circle" size={30} color={'blue'} />
        </Pressable>
    </Pressable>
  );

  return (
      
        <SafeAreaView style={styles.container}>
          <ScrollView>
          <View style={styles.header}>

            <View style={{flexDirection:'row', alignItems:'center', flex: 3, height: 30, justifyContent:'flex-start'}}>
            <Pressable style={styles.headerButton} onPress={() =>{navigation.navigate("Home_ProductListing")}}>
              <AntDesign name="left" size={25} color={"grey"} />
            </Pressable>

            <Text style={styles.headerType}>{categoryDetail.name}</Text>
            </View>
            


            <View style={{flexDirection:'row', alignItems:'center', flex: 0.6, height: 30, justifyContent:'space-between'}}>
            <Pressable style={styles.headerButton}>
              <AntDesign name="shoppingcart" color={"grey"} size={30} />
            </Pressable>
            <Pressable style={styles.headerButton}>
              <FontAwesome name="commenting-o" size={28} color={'grey'}/>
            </Pressable>
            </View>
            
            
          </View>

          <SearchBar/>

          <View style={styles.cateView}>
            <View style={styles.cateButtonView}>
              <Text style={styles.headerType}>Categories</Text>
              <Pressable style={styles.seeAllBtn}>
                <Text style={{ marginRight: 5 }}>See All</Text>
                <FontAwesome name="caret-right" size={25} />
              </Pressable>
            </View>
            <View style={styles.listCate}>
              <Pressable onPress={() =>{
                if(startCate >= 3){
                  setStartCate(startCate-3);
                  setEndCate(endCate-3)
                }
              }}>
                <FontAwesome name="angle-left" size={30}/>
              </Pressable>



              {dataCate.slice(startCate,endCate).map((item) => (
                <Pressable key={(item._id)} style={{alignItems:'center', width:130}} onPress={() => {
                  navigation.replace("Product_ListView");
                  setCategoryDetail(item);

                }}>
                <Image source={{uri:item.image}} style={{width: 80, height: 80, borderRadius: 40, borderWidth: 2, borderColor:'#09D1C7'}}/>
                <Text style={{fontWeight:'bold'}}>{item.name}</Text>
            </Pressable>
              ))}

<Pressable onPress={() =>{
                 if(endCate < dataCate.length){
                  setEndCate(endCate+3)
                  setStartCate(startCate+3)
              }
              }}>
                <FontAwesome name="angle-right" size={30}/>
              </Pressable>
            </View>
          </View>

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
              <View key={item._id || index}> 
                {renderItemProduct({ item })}
              </View>
            ))}
          </View>

          <Pressable style={styles.buttonSeeAll} onPress={() =>{setMaxProduct((preProduct) => preProduct+2)}}>
            <Text style={styles.txtBtnFilter}>SEE ALL</Text>
          </Pressable>

          <View style={styles.banner}>

            <Image
              style={styles.bannerImage}
              source={{ uri: dataBanner[currentBannerIndex] }}
            />
          </View>
          </ScrollView>
        </SafeAreaView>
      

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor:'white'
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  headerType: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginRight: "48%",
  },
  listIcon: {
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    borderWidth: 1,
    borderBottomEndRadius: 25,
    borderTopEndRadius: 25,
    height: 40,
    borderColor: "#D3D3D3",
    backgroundColor: "#D3D3D3",
  },
  cateView: {
    marginTop: 15,
  },
  cateButtonView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  seeAllBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  listCate: {
    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoryItem: {
    marginRight: 10,
    marginLeft: 10,
    alignItems: "center",
  },
  filterView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop:25,
    marginBottom: 15
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
    marginBottom: 30,
    alignItems:'center'
  },
  bannerImage: {
    width: 400,
    height: 200,
    borderRadius: 20,
  },
});
