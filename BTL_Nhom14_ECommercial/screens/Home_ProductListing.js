import React, { useState, useEffect } from 'react';
import { Text, View, Pressable, Image, FlatList, StyleSheet, ScrollView, TextInput, SafeAreaView } from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';
import { fetchAPIProduct, ProductDetail } from '../atoms/ProductAtom';
import { FontAwesome } from '@expo/vector-icons';
import SearchBar from '../components/SearchBar.js';
import Swiper_Cate from '../components/Swiper_Cate.js';
import Footer from '../components/Footer.js';

export default function Home_ProductListing({ navigation }) {
  const listProduct = useRecoilValue(fetchAPIProduct);
  const [, setProductDetail] = useRecoilState(ProductDetail);

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => {
        setProductDetail(item);
        navigation.navigate('ProductDetail1');
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
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Image source={require('../images/back.png')} style={styles.backIcon} />
              <Text style={styles.deal}>All Deals</Text>
            </View>

            <View style={styles.headerRight}>
              <FontAwesome name='shopping-cart' size={30} color={'#09D1C7'} />
              <Image source={require('../images/ima.png')} style={styles.cartImage} />
            </View>
          </View>

          <View style={styles.searchContainer}>
            <SearchBar />
          </View>

          <Swiper_Cate navigation={navigation} confirm={true} />

          <View style={styles.promotions}>
            <View style={styles.promotionItem}>
              <View style={styles.promotionText}>
                <Text style={styles.promotionTitle}>Shoes</Text>
                <Text style={styles.promotionDiscount}>50% off</Text>
                <Pressable style={styles.promotionButton} onPress={""}>
                  <Text style={styles.promotionButtonText}>Buy now</Text>
                </Pressable>
              </View>
              <View style={styles.promotionImageContainer}>
                <Image source={require('../images/shoe.png')} />
              </View>
            </View>
            <View style={styles.promotionImages}>
              <Image source={require('../images/img2.png')} style={styles.promotionImage} />
              <Image source={require('../images/img3.png')} style={styles.promotionImage} />
            </View>
          </View>

          <View style={styles.recommendedHeader}>
            <Text style={styles.recommendedText}>Recommended for you</Text>
            <Pressable onPress={() => navigation.navigate('Products')}>
              <Text style={styles.viewAllText}>View all</Text>
            </Pressable>
          </View>

          <View style={styles.productList}>
            <FlatList
              data={listProduct}
              keyExtractor={item => item.product_id}
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
  safeArea: {
    marginTop: 40
  },
  container: {
    flex: 1,
    height: 1000,
    backgroundColor: '#FFFFFF',
    marginBottom: 60
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
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
    alignItems: 'center'
  },
  cartImage: {
    width: 20,
    height: 20,
    borderRadius: 20,
    marginRight: 10,
    marginLeft: 10
  },
  searchContainer: {
    flex: 1,
    width: '95%',
    marginTop: 13,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12
  },
  promotions: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  promotionItem: {
    marginTop: 10,
    flex: 3,
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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
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
    flex: 5
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
