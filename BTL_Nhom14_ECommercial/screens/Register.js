import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Hoặc react-icons nếu không dùng Expo


function Register({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = () => {
    if (!username || !password || !confirmPassword) {
      Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ thông tin.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Lỗi', 'Password và Confirm Password không giống nhau.');
      return;
    }
    Alert.alert('Đăng ký thành công')
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://images.pexels.com/photos/907485/pexels-photo-907485.jpeg?auto=compress&cs=tinysrgb&w=600' }}
      style={{ flex: 1, padding: 20, justifyContent: 'center' }}
      resizeMode="cover"
    >
      <View style={{  borderRadius: 10, padding: 20 }}>

       <View style={{alignItems:"center"}}>
          <Text style={{fontSize:45, marginBottom:10, fontWeight:"700", color:"green"}}>Register</Text>
          <Text style={{fontSize:15, marginBottom:10, fontWeight:"500",}}>Please fill in the information below</Text>
       </View>
        <View style={{ marginBottom: 15 }}>
          <Text style={{fontSize:20, marginBottom:10, fontWeight:"700", color:"blue"}}>Username</Text>
          <TextInput
            value={username}
            onChangeText={setUsername}
            placeholder="Enter your username"
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 4,
              padding: 10,
              backgroundColor: 'white',
            }}
          />
        </View>

        
        <View style={{ marginBottom: 15 }}>
          <Text style={{fontSize:20, marginBottom:10, fontWeight:"700", color:"blue"}}>Password</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              secureTextEntry={!showPassword}
              style={{
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 4,
                padding: 10,
                flex: 1,
                backgroundColor: 'white',
              }}
            />
            <Pressable onPress={() => setShowPassword(!showPassword)} style={{ marginLeft: 10 }}>
              <MaterialIcons name={showPassword ? 'visibility-off' : 'visibility'} size={24} />
            </Pressable>
          </View>
        </View>

        
        <View style={{ marginBottom: 15 }}>
          <Text style={{fontSize:20, marginBottom:10, fontWeight:"700", color:"blue"}}>Confirm Password</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm your password"
              secureTextEntry={!showConfirmPassword}
              style={{
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 4,
                padding: 10,
                flex: 1,
                backgroundColor: 'white',
              }}
            />
            <Pressable onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={{ marginLeft: 10 }}>
              <MaterialIcons name={showConfirmPassword ? 'visibility-off' : 'visibility'} size={24} />
            </Pressable>
          </View>
        </View>

        
        <Pressable
          onPress={handleSubmit}
          style={{
            backgroundColor: 'orange',
            padding: 15,
            borderRadius: 5,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'red', fontWeight: 'bold', fontSize:20 }}>Register</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

export default Register;
