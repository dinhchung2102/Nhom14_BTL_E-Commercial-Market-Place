import React, { useState, useEffect } from 'react';
import { View, Pressable, TextInput , Text, Modal, StyleSheet} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useRecoilState } from 'recoil';
import { querySearchState } from '../atoms/ProductAtom';


const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useRecoilState(querySearchState);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);



  return (
    <View style={{ flexDirection: 'row', alignItems:'center' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E4E4E4', flex: 1, borderRadius: 10, marginRight: 10, height: 40 }}>
        <FontAwesome
          name="search"
          size={18}
          color={"#09D1C7"}
          style={{ marginLeft: 5, marginRight: 5 }}
        />
        <TextInput
          placeholder="Search here"
          style={{ flex: 1, fontSize: 15, height: 40,  borderRadius: 10 , alignItems:"center"}}
          value={searchQuery}
          onChangeText={setSearchQuery}
          returnKeyType="search" 
          onSubmitEditing={()=>{navigation.navigate("Search_Products")}}
        />
      </View>
      <Pressable style={{ justifyContent: 'center' }} onPress={()=>{navigation.navigate("Filter")}}>
        <FontAwesome name="filter" size={40} color={'#09D1C7'} />
      </Pressable>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    marginTop: 100,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    fontSize: 18,
  },
});

