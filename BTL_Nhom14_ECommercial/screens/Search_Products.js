import { View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar, Pressable, TextInput, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { useRecoilState, useRecoilValue } from 'recoil'
import { fetchAPIProduct, ProductDetail, ProductFilterByPrice, ProductFilterBySearchBar, querySearchState } from '../atoms/ProductAtom'
import Footer from '../components/Footer'
import { useNavigation } from '@react-navigation/native'

export default function Search_Products() {
    const [listFiltertest, setListFiltertest] = useRecoilState(ProductFilterBySearchBar)
    const [keyWordSearch, setKeyWordSearch]= useRecoilState(querySearchState)
    const [isSorted, setIsSorted] = useState(false); 
    const [isSortedByPrice, setIsSortedByPrice] = useState(false);
    const [sortedList, setSortedList] = useState([...listFiltertest]);
    const [filterPrice, setFilterPrice] = useRecoilState(ProductFilterByPrice)
    const [productDetail, setProductDetail] = useRecoilState(ProductDetail)


    useEffect(() => {
        if(filterPrice.length > 0){
            setSortedList([...filterPrice]);
        }
        else{
            setSortedList([...listFiltertest]); 
        }
    }, [listFiltertest]);

    const handleSortByRating = () => {
        if (!isSorted) {
          const sorted = [...listFiltertest].sort((a, b) => b.stars - a.stars);
          setSortedList(sorted); 
        } else {
          setSortedList(listFiltertest);
        }
        setIsSorted(!isSorted);
    };

    const handleSortByPrice = ()=>{
        if(!isSortedByPrice){
            const sorted = [...sortedList].sort((a,b)=> b.price - a.price);
            setSortedList(sorted)
            setIsSortedByPrice(!isSortedByPrice)
        }
        else{
            const sorted = [...sortedList].sort((a,b)=> a.price - b.price);
            setSortedList(sorted)
            setIsSortedByPrice(!isSortedByPrice)
        }
    }
    const handleProductDetail = (item) =>{
        if(item.color.length > 0 ){
            setProductDetail(item);
            navigation.navigate("ProductDetail2");
        }
        else{
            setProductDetail(item);
            navigation.navigate("ProductDetail1");
        }
    }


    
    const renderItemProduct = ({item})=>{
        return(
        <Pressable 
        onPress={()=>{handleProductDetail(item)}}
        style={{backgroundColor:'white',height: 270, width:"100%", borderRadius: 15, alignItems:'center'}}>
            <Image source={{uri:item.image}} style={{height: 150, width: 180, marginTop: 10}}/>
            <Text numberOfLines={1} style={{width:'95%', fontSize: 17}}>{item.name}</Text>
            <Text style={{width:'95%', fontSize: 18, color:'red', fontWeight:'bold'}}>${item.price}</Text>
            <View style={{width:'95%', marginTop: 5, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <View style={{flexDirection:'row', alignItems:'center', backgroundColor:'#FFDAB3',width:'30%', borderRadius: 5, height: 25 }}>
                <FontAwesome name='star' size={20} color={'yellow'} style={{marginRight: 10}}/>
                <Text>{item.stars}</Text>
                </View>
                <Text style={{marginLeft: 50}}>999+ sold</Text>
            </View>
            <View style={{ marginTop: 10, flexDirection:'row', alignItems:'center', width:'180'}}>
                <FontAwesome name='location-arrow' style={{marginRight: 20}}/>
                <Text>Ho Chi Minh City</Text>
            </View>
        </Pressable>
        )
    }
    const navigation = useNavigation()
  return (
    <SafeAreaView>
        <StatusBar
            barStyle={'dark-content'}
            backgroundColor={'white'}
        />
        <ScrollView>
            <View style={styles.container}>
                
                
                <View style={styles.header}>
                    <Pressable style={{marginLeft: 10, marginRight: 20}} onPress={()=>{navigation.goBack()}}>
                        <FontAwesome name='angle-left' size={30}/>
                    </Pressable>
                    <View style={{flexDirection:'row',flex:1, alignItems:'center', borderWidth:1, borderColor:'black', borderRadius: 10}}>
                        <Pressable style={{alignItems:'center', justifyContent:'center', marginLeft: 10}}>
                            <FontAwesome name='search' size={20}/>
                        </Pressable>
                        <TextInput
                            placeholder='Search your product here'
                            style={{flex: 1, alignItems:'center',justifyContent:'center', height: '100%'}}
                            value={keyWordSearch}
                            onChangeText={setKeyWordSearch}
                        />
                    </View>
                    <Pressable onPress={()=>{navigation.navigate("Filter")}} style={{marginLeft: 10, marginRight: 10, flexDirection:'row', alignItems:'center'}}>
                        <FontAwesome name='filter' size={30}/>
                        <Text style={{marginLeft: 5}}>Filter</Text>
                    </Pressable>
                </View>


                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop: 20, width: '95%',alignItems:'center'}}>
                    <Pressable style={{alignItems:'center', justifyContent:'center', borderRightWidth: 1, flex: 1}}>
                        <Text>Relevance</Text>
                    </Pressable>
                    <Pressable style={{alignItems:'center', justifyContent:'center', borderRightWidth: 1, flex: 1}}>
                        <Text>Lastest</Text>
                    </Pressable>
                    <Pressable style={{alignItems:'center', justifyContent:'center', borderRightWidth: 1, flex: 1}}>
                        <Text>Top Sales</Text>
                    </Pressable>
                    <Pressable onPress={handleSortByPrice} style={{flexDirection:'row', alignItems:'center', justifyContent:'center', flex: 1}}>
                        <Text style={{marginRight: 5, color: isSortedByPrice? "red" : "black"}}>Price</Text>
                        <FontAwesome name={isSortedByPrice? "sort-down" : "sort-up"} size={15} color={isSortedByPrice? "red" : "black"}/>
                    </Pressable>
                </View>


                <ScrollView horizontal={true} contentContainerStyle={{marginTop: 5,marginBottom: 20, borderTopWidth: 1, width:'100%', flexDirection:'row', alignItems:'center'}}>
                    <Pressable style={{marginLeft: 10, height: 35,width: 50,alignItems:'center',justifyContent:'center', marginTop: 10, borderRadius: 10, backgroundColor:'#f0f0f0'}}>
                        <Text style={{textAlign:'center'}}>Mall</Text>
                    </Pressable>
                    <Pressable style={{marginLeft: 10, height: 35, width: 100,alignItems:'center',justifyContent:'center', marginTop: 10, borderRadius: 10, backgroundColor:'#f0f0f0'}}>
                        <Text style={{textAlign:'center'}}>Preferred Shop</Text>
                    </Pressable>
                    <Pressable style={{marginLeft: 10, height: 35, width: 100,alignItems:'center',justifyContent:'center', marginTop: 10, borderRadius: 10, backgroundColor:'#f0f0f0'}}>
                        <Text style={{textAlign:'center'}}>FreeShip</Text>
                    </Pressable>
                    <Pressable onPress={handleSortByRating} style={{marginLeft: 10, height: 35, width: 100,alignItems:'center',justifyContent:'center', marginTop: 10, borderRadius: 10, backgroundColor: isSorted? 'cyan' : '#f0f0f0'}}>
                        <Text style={{textAlign:'center'}}>Rating</Text>
                    </Pressable>
                    <Pressable style={{marginLeft: 10, height: 35, width: 100,alignItems:'center',justifyContent:'center', marginTop: 10, borderRadius: 10, backgroundColor:'#f0f0f0'}}>
                        <Text style={{textAlign:'center'}}>By Category</Text>
                    </Pressable>
                </ScrollView>


                <View style={{width:'100%',marginLeft: 10,marginBottom: 60, marginRight: 10,justifyContent:'space-between', backgroundColor:'#f0f0f0',flexDirection:'row', flexWrap:'wrap'}}>
                    {sortedList.slice(0,20).map((item)=>(
                         <View key={item._id} style={{width:'44%',marginBottom: 8,marginLeft: 12,marginRight: 12, marginTop: 8, alignItems:"center", justifyContent:'center'}}>
                        {renderItemProduct({item})}
                        </View>
                    ))}
                </View>



            </View>
        </ScrollView>
        <Footer/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        backgroundColor:"#fff",
        width:'100%',
    },
    header:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-between"
    }
})