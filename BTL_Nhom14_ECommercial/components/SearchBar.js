import React, { useState, useEffect } from 'react';
import { View, Pressable, TextInput , Text} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

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
        />
      </View>
      <Pressable style={{ justifyContent: 'center' }}>
        <FontAwesome name="list-ul" size={27} color={'grey'} />
      </Pressable>
    </View>
  );
};

export default SearchBar;
