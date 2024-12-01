import React, { useState, useEffect } from 'react';
import { Text, View, Pressable, Image, FlatList, StyleSheet, ScrollView, TextInput, SafeAreaView, StatusBar } from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';
import { fetchAPIProduct, ProductDetail } from '../atoms/ProductAtom';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import SearchBar from '../components/SearchBar.js';
import Swiper_Cate from '../components/Swiper_Cate.js';
import Footer from '../components/Footer.js';
import { cartQuantity, cartState, cartStateFromStorage } from '../atoms/CartAtom.js';
import { getCart } from '../storage/cartStorage.js';
import YouTubePlayer from '../components/YoutubePlayer.js';

export default function Home_ProductListing({ navigation }) {
  const listProduct = useRecoilValue(fetchAPIProduct);
  const [, setProductDetail] = useRecoilState(ProductDetail);
  const cartQtt = useRecoilValue(cartQuantity);
  const [,setCart] = useRecoilState(cartState);

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
        if(item.size.length != 0){
          navigation.navigate('ProductDetail2');
        }
        else{
          navigation.navigate("ProductDetail1")
        }
      }}
    >
      <View style={styles.item}>
        <View style={styles.itemImageContainer}>
          <Image source={{ uri: item.image }} style={styles.itemImage} />
        </View>
        <View style={styles.itemTextContainer}>
          <Text>{item.name}</Text>
        </View>
        <View style={styles.itemFooter}>
          <View style={styles.itemRating}>
            <FontAwesome name='star' size={20} color={'#FFD167'} />
            <Text style={styles.itemRatingText}>{item.stars}</Text>
          </View>
          <Text style={styles.price}>${item.price}</Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    
    <SafeAreaView style={styles.safeArea}>
       <StatusBar
          animated={true}
          backgroundColor="white"
          barStyle={'dark-content'}
          hidden={false}
        />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerLeft}>
             <Image source={{uri:"https://i.imgur.com/ahAbser.png"}} style={{height: 50, width: 100}}/>
            </View>

            <View style={styles.headerRight}>
              <Pressable style={{flexDirection:'row',alignItems:'center'}} onPress={()=>{navigation.navigate("Checkout_Cart")}}>
                <AntDesign name='shoppingcart' size={30} color={'#09D1C7'}/>
                <Text style={{position:'absolute',zIndex: 1, backgroundColor:'red', width: 20, height: 20, borderRadius: 10,marginLeft: 15, top: 0, color: 'white', textAlign:'center'}}>{cartQtt}</Text>
              </Pressable>
              <FontAwesome name='commenting-o' size={27} color={'#09D1C7'} style={{marginLeft: 10}}/>
            </View>
          </View>

          <View style={styles.searchContainer}>
            <SearchBar />
          </View>

          <Text style={{marginLeft:10, fontSize: 18, fontWeight:'bold', marginTop: 10}}>Categories</Text>
          <Swiper_Cate navigation={navigation} confirm={true} />

          <View style={styles.promotions}>
            <YouTubePlayer videoId={"GDlkCkcIqTs"} height={260} width={420} />
          </View>

          <View style={styles.recommendedHeader}>
            <Text style={styles.recommendedText}>Recommended for you</Text>
            <Pressable onPress={() => navigation.navigate('Products')}>
              <Text style={styles.viewAllText}>View all</Text>
            </Pressable>
          </View>

          <View style={styles.productList}>
            <FlatList
              data={listProduct.slice(0,10)}
              keyExtractor={item => item._id}
              renderItem={renderItem}
              horizontal
            />
          </View>
        </View>
       
      </ScrollView>
      <Footer/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    height: 950
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  backIcon: {
    marginLeft: 10
  },
  deal: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 10
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  cartImage: {
    width: 20,
    height: 20,
    borderRadius: 20,
    marginRight: 10,
    marginLeft: 10
  },
  searchContainer: {
    marginTop: 15,
    marginBottom: 10,
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12
  },
  promotions: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  promotionItem: {
    marginTop: 10,
    flex: 2,
    backgroundColor: '#F5F2FD',
    borderTopLeftRadius: 5,
    width: 300,
    height: 150,
    borderTopRightRadius: 5,
    flexDirection: 'row'
  },
  promotionText: {
    flex: 4
  },
  promotionTitle: {
    color: '#24C7EC',
    fontSize: 24,
    marginLeft: 30,
    marginTop: 15,
    fontWeight: '700'
  },
  promotionDiscount: {
    color: '#807C7C',
    fontSize: 16,
    marginLeft: 30,
    marginTop: 1,
    fontWeight: '500'
  },
  promotionButton: {
    width: 55,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#151515',
    marginTop: 15,
    marginLeft: 38
  },
  promotionButtonText: {
    color: '#FFFFFF',
    fontSize: 13
  },
  promotionImageContainer: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  promotionImages: {
    marginTop: 10,
    flex: 3,
    width: 300,
    height: 150,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    flexDirection: 'row'
  },
  promotionImage: {
    width: 145,
    height: 100, marginRight:10
  },
  recommendedHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10
  },
  recommendedText: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 20
  },
  viewAllText: {
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 130,
    color: '#A19999'
  },
  productList: {
    height: 250
  },
  footer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    borderTopWidth: 2,
    borderColor: '#958F8F'
  },
  footerIcon: {
    width: 50,
    height: 50
  },
  item: {
    flex: 1,
    width: 130,
    height: 150,
    margin: 8,
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'grey'
  },
  itemImageContainer: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemImage: {
    width: 120,
    height: 120
  },
  itemTextContainer: {
    flex: 2,
    justifyContent: 'center',
    marginLeft: 20
  },
  itemFooter: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 0.5
  },
  itemRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 3
  },
  itemRatingText: {
    fontSize: 13
  },
  price: {
    color: '#11D5EB',
    fontWeight: '700',
    marginRight: 3
  }
});
