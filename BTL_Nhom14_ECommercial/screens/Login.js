import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

function Login({navigation}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const isCorrect = true;

    const handlePress = () => {
        if (isCorrect) {// khi nhập username và password đúng
          // Điều hướng tới màn hình 'Home_ProductListing' khi isCorrect là true
          navigation.navigate('Home_ProductListing');
        } else {
          // Nếu isCorrect là false, bạn có thể thực hiện hành động khác
          console.log(' Username or Password is incorrect');
        }
      };
    

    return (
        <View style={{flex:1, padding: 20, marginTop: 50}}>
            <View style={{justifyContent:"center", alignItems:"center"}}>
                <Text style={{fontSize:50, fontWeight:"700"}}>LOGIN</Text>
            </View>
        <View style={{ marginBottom: 15}}>
            <Text style={{ marginBottom: 5 }}>Username</Text>
            <TextInput
            value={username}
            onChangeText={(text) => setUsername(text)}
            placeholder="Enter your username"
            style={{ 
                borderWidth: 1, 
                borderColor: '#ccc', 
                borderRadius: 4, 
                padding: 8 
            }}
            />
        </View>

        <View style={{ marginBottom: 15 }}>
            <Text style={{ marginBottom: 5 }}>Password</Text>
            <View style={{ position: 'relative' }}>
            <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder="Enter your password"
                secureTextEntry={!showPassword}
                style={{ 
                borderWidth: 1, 
                borderColor: '#ccc', 
                borderRadius: 4, 
                padding: 8 
                }}
            />
            <Pressable
                onPress={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: 10, top: 8 }}
            >
                <Text>{showPassword ? '🙈' : '👁️'}</Text>
            </Pressable>
            </View>
        </View>

        <Pressable
            onPress={handlePress}
            style={{
            backgroundColor: 'blue',
            padding: 10,
            borderRadius: 5,
            alignItems: 'center',
            }}
        >
            <Text style={{ color: 'white' }}>Login</Text>
        </Pressable>
        <View style={{marginTop:20}}>
            <Text>Forgot your password?</Text>
        </View>
        </View>
  );
}

export default Login;
