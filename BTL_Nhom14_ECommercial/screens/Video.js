
import React from 'react';
import { ScrollView, StyleSheet, View, Text, Pressable, SafeAreaView } from 'react-native';
import YouTubePlayer from '../components/YoutubePlayer';
import Footer from '../components/Footer';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

export const Video = () => {
  const videoId = 'GDlkCkcIqTs'; 
  return (

    <SafeAreaView>
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{width:'95%', flexDirection:'row', marginBottom: 30, justifyContent:'space-between'}}>
        <View>
        <Pressable style={{flexDirection:'row', alignItems:'center'}}>
        <FontAwesome name='angle-left' size={30}/>
        <Text style={{marginLeft: 10, fontSize: 18, fontWeight:'bold'}}>Back</Text>
      </Pressable>
        </View>
      <View style={{flexDirection:"row", alignItems:"center"}}>
        <Pressable>
          <AntDesign name='shoppingcart' size={28}/>
        </Pressable>
        <Pressable style={{alignItems:'center', justifyContent:'center', marginLeft: 10}}>
        <FontAwesome name='commenting-o' size={25}/>
        </Pressable>
      </View>
      </View>
      
      <View >
      <Text style={{fontSize: 20, fontWeight:'bold'}}>Apple</Text>
        <YouTubePlayer videoId={videoId} height={230} width={420} />
       <View style={{flexDirection:'row', marginTop: 10}}>
       <Pressable style={{flex: 1, height: 50, backgroundColor:'#213A58', alignItems:'center', justifyContent:'center'}}>
          <Text style={{color:'white', fontSize: 16}}>Product Detail</Text>
        </Pressable>
        <Pressable style={{flex: 1, width: 100, height: 50, backgroundColor:'#09D1C7', alignItems:'center', justifyContent:'center'}}>
        <Text style={{color:'white', fontSize: 16}}>Add to cart</Text>
        </Pressable>
        <Pressable style={{flex: 1,width: 100, height: 50, backgroundColor:'red', alignItems:'center', justifyContent:'center'}}>
        <Text style={{color:'white', fontSize: 16}}>Buy now</Text>
        </Pressable>
       </View>  
      </View>
      
      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 20, fontWeight:'bold'}}>Dior</Text>
      <YouTubePlayer videoId={'HOsrjSRfBDY'} height={230} width={420} />
      <View style={{flexDirection:'row', marginTop: 10}}>
       <Pressable style={{flex: 1, height: 50, backgroundColor:'#213A58', alignItems:'center', justifyContent:'center'}}>
          <Text style={{color:'white', fontSize: 16}}>Product Detail</Text>
        </Pressable>
        <Pressable style={{flex: 1, width: 100, height: 50, backgroundColor:'#09D1C7', alignItems:'center', justifyContent:'center'}}>
        <Text style={{color:'white', fontSize: 16}}>Add to cart</Text>
        </Pressable>
        <Pressable style={{flex: 1,width: 100, height: 50, backgroundColor:'red', alignItems:'center', justifyContent:'center'}}>
        <Text style={{color:'white', fontSize: 16}}>Buy now</Text>
        </Pressable>
       </View>  
      </View>

      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 20, fontWeight:'bold'}}>Samsung</Text>
      <YouTubePlayer videoId={'mRApZVPSsps'} height={230} width={420} />
      <View style={{flexDirection:'row', marginTop: 10}}>
       <Pressable style={{flex: 1, height: 50, backgroundColor:'#213A58', alignItems:'center', justifyContent:'center'}}>
          <Text style={{color:'white', fontSize: 16}}>Product Detail</Text>
        </Pressable>
        <Pressable style={{flex: 1, width: 100, height: 50, backgroundColor:'#09D1C7', alignItems:'center', justifyContent:'center'}}>
        <Text style={{color:'white', fontSize: 16}}>Add to cart</Text>
        </Pressable>
        <Pressable style={{flex: 1,width: 100, height: 50, backgroundColor:'red', alignItems:'center', justifyContent:'center'}}>
        <Text style={{color:'white', fontSize: 16}}>Buy now</Text>
        </Pressable>
       </View>  
      </View>
    </ScrollView>
    <Footer/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingTop: 40,
    marginBottom:100,
    height: 1150
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

