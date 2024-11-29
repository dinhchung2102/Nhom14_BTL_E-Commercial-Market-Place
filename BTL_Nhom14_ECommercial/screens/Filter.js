import React from 'react';
import {Text, View, Pressable, Image, FlatList, StyleSheet} from 'react-native';
 
export default function Filter(){
    return(
        <View style={{flex:1, backgroundColor:'white'}}>
            <View style={{flex:1.5, alignItems:'center', flexDirection:"row", borderBottomWidth:1, borderColor:"#C5BCBC"}}>
                <Text style={styles.header}>Filter</Text>
                <Image
                    source={require("../images/x.png")}
                    style={{marginTop:20, marginLeft:120}}
                />
            </View>
            <View style={{flex:3,borderBottomWidth:1, borderColor:"#C5BCBC"}}>
                <View style={{flex:2, flexDirection:"row"}}>
                    <Text style={styles.txt1}>Shipping options</Text>
                    <Image
                    source={require("../images/up.png")}
                    style={{marginTop:10, marginLeft:190}}
                    />
                </View>
                <View style={{flex:5}}>
                    <View style={{flex:1, flexDirection:"row"}}>
                        <Pressable
                            style={styles.checkbox}
                        />
                        <Text style={styles.txt2}>Instant (2 hours delivery)</Text>
                    </View>
                    <View style={{flex:1, flexDirection:"row"}}>
                        <Pressable
                            style={styles.checkbox}
                        />
                        <Text style={styles.txt2}>Express (2 days delivery)</Text>
                    </View>
                    <View style={{flex:1, flexDirection:"row"}}>
                        <Pressable
                            style={styles.checkbox}
                        />
                        <Text style={styles.txt2}>Standard (7-10 days delivery)</Text>
                    </View>
                    
                </View>
            </View>
            <View style={{flex:2,borderBottomWidth:1, borderColor:"#C5BCBC"}}>
                <View style={{flex:1, flexDirection:"row"}}>
                    <Text style={styles.txt1}>Price range</Text>
                    <Image
                    source={require("../images/up.png")}
                    style={{marginTop:10, marginLeft:230}}
                    />
                </View>
                <View style={{flex:1, flexDirection:"row", justifyContent:"space-between"}}>
                    <Pressable style={styles.press}>
                        <Text style={{marginLeft:10, color:"#9F9A9A"}}>$ 10</Text>
                    </Pressable>
                    <Pressable style={styles.press}>
                        <Text style={{marginLeft:10, color:"#9F9A9A"}}>$ 1000</Text>
                    </Pressable>
                </View>
                <View style={{flex:1, alignItems:"center"}}>
                <Image
                    source={require("../images/line.png")}
                    style={{}}
                    />
                </View>
            </View>
            <View style={{flex:2,borderBottomWidth:1, borderColor:"#C5BCBC"}}>
                <View style={{flex:2, flexDirection:"row"}}>
                    <Text style={styles.txt1}>Average review</Text>
                    <Image
                    source={require("../images/up.png")}
                    style={{marginTop:10, marginLeft:200}}
                    />
                </View>
                <View style={{flex:2, flexDirection:"row"}}>
                    <Image
                        source={require("../images/star.png")}
                        style={{ marginLeft:70, width:30,height:30}}
                        />
                    <Image
                        source={require("../images/star.png")}
                        style={{ marginLeft:10, width:30,height:30}}
                        />
                    <Image
                        source={require("../images/star.png")}
                        style={{ marginLeft:10, width:30,height:30}}
                        />
                    <Image
                        source={require("../images/star.png")}
                        style={{ marginLeft:10, width:30,height:30}}
                        />
                    <Image
                        source={require("../images/star1.png")}
                        style={{ marginLeft:10, width:30,height:30}}
                        />
                    <Text style={{marginLeft:15, marginTop:5}}>& Up</Text> 
                </View>
                </View>
            <View style={{flex:4}}>
                <View style={{flex:2, flexDirection:"row"}}>
                    <Text style={styles.txt1}>Others</Text>
                    <Image
                        source={require("../images/up.png")}
                        style={{marginTop:10, marginLeft:260}}
                    />
                </View> 
                <View style={{flex:4, flexDirection:"row", alignItems:"center"}}>
                    <Pressable style={styles.Fpress}>
                        <Image
                            source={require("../images/2c2.png")}
                            style={{width:20, height:20}}
                        />
                        <Text style={styles.txt3}>30-day Free Return</Text>
                    </Pressable>
                    <Pressable style={styles.Fpress}>
                        <Image
                            source={require("../images/protection.png")}
                            style={{width:20, height:20}}
                        />
                        <Text style={styles.txt3}>Buyer protection</Text>
                    </Pressable>
                </View>
                <View style={{flex:4, flexDirection:"row", alignItems:"center"}}>
                    <Pressable style={styles.Fpress}>
                        <Image
                            source={require("../images/Deal.png")}
                            style={{width:20, height:20}}
                        />
                        <Text style={styles.txt3}>Best Deal</Text>
                    </Pressable>
                    <Pressable style={styles.Fpress}>
                        <Image
                            source={require("../images/SStore.png")}
                            style={{width:20, height:20}}
                        />
                        <Text style={styles.txt3}>Ship to store</Text>
                    </Pressable>
                </View>
                
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    header:{
        fontSize:20, fontWeight:"700", marginLeft:170, marginTop:20
    },
    txt1:{
        fontSize:16, fontWeight:"700", marginLeft:20, marginTop:10
    },
    checkbox:{
        width:20, height:20, borderWidth:1, borderRadius:3, borderColor:"#413C3C", marginLeft:20 
    },
    txt2: {
        fontSize:14, fontWeight:"400", marginLeft:15, color:"#413C3C", 
    },
    press:{
        width:80, height:28, borderColor:"#9F9A9A", borderWidth:1, borderRadius:3, 
        justifyContent: "center", marginLeft:20, marginRight:20, marginTop:10
    },
    Fpress:{
        width:155, height:80,borderColor:"#9F9A9A", borderWidth:1, borderRadius:3, 
        justifyContent: "center", marginLeft:20, marginRight:20, alignItems:"center"
    },
    txt3:{
        color:"#919493", fontSize:12
    }

})