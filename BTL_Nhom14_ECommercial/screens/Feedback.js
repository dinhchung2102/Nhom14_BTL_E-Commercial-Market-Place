import React, { useState }  from 'react';
import {Text, View, Pressable, Image, FlatList, StyleSheet, TextInput, Button, Platform} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
 
export default function Feedback({navigation}){
    const [image, setImage] = useState(null);

    const [rating, setRating] = useState(0); // Lưu trữ số sao đã chọn

    // Hàm xử lý khi người dùng nhấn vào sao
    const handlePress = (index) => {
        setRating(index + 1); // Cập nhật số sao khi nhấn vào sao thứ (index + 1)
    };

  // Tạo mảng 5 sao
  const stars = [1, 2, 3, 4, 5];

    
    const pickImage = async () => {
        // Yêu cầu quyền truy cập thư viện ảnh nếu chưa có
        if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Xin vui lòng cấp quyền truy cập thư viện ảnh để tiếp tục!');
            return;
        }
        }

        // Chọn ảnh từ thư viện
        const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        });

        if (!result.canceled) {
        setImage(result.assets[0].uri); // Lấy URI của ảnh
        }
    };

    const uploadImage = async () => {
        if (!image) return;

        let formData = new FormData();
        formData.append('file', {
        uri: image,
        name: 'upload.jpg',
        type: 'image/jpeg',
        });

  };
    return(
        <View style={{flex:1, width:380, height:800, backgroundColor:"#FFFFFF"}}>
            <View style={{flex:2, alignItems:'center', flexDirection:"row", borderBottomWidth:1, borderColor:"#C5BCBC"}}>
                <Text style={styles.header}>Feedback</Text>
                <Pressable onPress={()=>navigation.navigate('Home_ProductListing')}>
                    <Image
                        source={require("../images/x.png")}
                        style={{marginTop:20, marginLeft:100}}
                    />
                </Pressable>
                
            </View>
            <View style={{flex:5}}>
                <View style={{flex:2,flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                <Image
                    source={require("../images/icon1.png")}
                    style={{marginTop:20, margin:10}}
                />
                <Image
                    source={require("../images/icon2.png")}
                    style={{marginTop:20, margin:10}}
                />
                <Image
                    source={require("../images/icon3.png")}
                    style={{marginTop:20, margin:10}}
                />
                </View>
                <View style={{flex:5}}>
                    <View style={styles.view}>
                        <Pressable style={styles.press1}>
                            <Text style={{color:"#11D5EB"}}>Service</Text>
                            <Image
                                source={require("../images/v.png")}
                                style={{}}
                            />  
                        </Pressable>
                        <Pressable style={styles.press2}>
                            <Text>Quantity</Text>
                            <Image
                                source={require("../images/cong.png")}
                                style={{}}
                            />  
                        </Pressable>
                    </View>
                    <View style={styles.view}>
                        <Pressable style={styles.press2}>
                            <Text>Payment</Text>
                            <Image
                                source={require("../images/cong.png")}
                            />  
                        </Pressable>
                        <Pressable style={styles.press1}>
                            <Text style={{color:"#11D5EB"}}>Delivery</Text>
                            <Image
                                source={require("../images/v.png")}
                            />  
                        </Pressable>
                    </View>
                    <View style={styles.view}>
                        <Pressable style={styles.press2}>
                            <Text>Promotion</Text>
                            <Image
                                source={require("../images/cong.png")}
                                style={{}}
                            />  
                        </Pressable>
                        <Pressable style={styles.press1}>
                            <Text  style={{color:"#11D5EB"}}>Gift</Text>
                            <Image
                                source={require("../images/v.png")}
                                style={{}}
                            />  
                        </Pressable>
                    </View>
                    
                </View>
            </View>
            <View style={{flex:3}}>
                <View style={{flex:1, flexDirection:"row"}}>
                    <Text style={styles.txt1}>Cash to share more?</Text>
                </View>
                <View style={styles.ti}>
                    <TextInput 
                       style={{margin:5, color:"#98999C", fontWeight:"600"}}
                       placeholder='Type your feedback'
                    >
                       
                    </TextInput>
                </View>
            </View>
            <View style={{flex:3}}>
                <View style={{flex:2}}>
                    <Text style={styles.txt1}>Upload images</Text>
                </View>
                <View style={{flex:4, alignItems:"center", flexDirection:"row"}}>
                    <Pressable style={{marginLeft:20}} onPress={pickImage}>
                        <Image
                            source={require("../images/upload.png")}
                        />
                    </Pressable>

                {image && (
                    <>
                    <Image source={{ uri: image }} style={{ marginLeft: 20,width: 80, height: 80 }} />
                    </>
                )}
                
                </View>
                
            </View>
            <View style={{flex:3}}>
                <View style={{flex:1, marginTop:20}}>
                    <Text style={styles.txt1}>Rating</Text>
                </View>
                <View style={{flex:2, flexDirection:"row", alignItems:"center", justifyContent:"space-around", marginLeft:50, marginRight:50}}>
                    
                    {stars.map((star, index) => (
                    <Pressable key={index} onPress={() => handlePress(index)}>
                        <Image
                        source={index < rating ? require('../images/star.png') : require('../images/star1.png')}
                        style={{ marginLeft:10, width:30, height:30}}
                        />
                    </Pressable>
                    ))}
                </View>
            </View>
            <View style={{flex:2, justifyContent:'center', alignItems:"center"}}>
                <Pressable style={styles.butt} onPress={()=>navigation.navigate('Home_ProductListing')}>
                    <Text style={styles.txtBut}>Submit</Text>
                </Pressable>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    header:{
        fontSize:20, fontWeight:"700", marginLeft:150, marginTop:20
    },
    press1:{
        width:100, height:43, borderRadius:20, backgroundColor:"#EBFDFF", flexDirection:"row", 
        alignItems:"center", justifyContent:"center"
    },
    press2  :{
        width:100, height:43, borderRadius:20, backgroundColor:"#F3F4F6", flexDirection:"row", 
        alignItems:"center", justifyContent:"center"
    },
    view :{
        flex:1, marginTop:10, flexDirection:"row", alignItems:"center", marginLeft:60, marginRight:60, 
        justifyContent:"space-evenly"
    },
    txt1:{
        fontSize:16, fontWeight:"700", marginLeft:20, marginTop:10
    },
    ti:{
        flex:3,
        marginTop:10, marginLeft:20, marginRight: 20, 
        backgroundColor:"#F5F5F5",
        height:80, color:"#919493", alignItems:"flex-start", justifyContent:"flex-start"
    },
    butt:{
        width:300, height:50, backgroundColor:"#11D5EB", borderRadius:5, justifyContent:"center", alignItems:"center"
    },
    txtBut:{
        color:"white",
        fontWeight:"600",
        textAlign:"center",
        fontSize:18
    }

})