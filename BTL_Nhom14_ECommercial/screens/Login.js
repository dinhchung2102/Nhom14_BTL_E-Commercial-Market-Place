import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert  } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

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
        <LinearGradient
         colors={['white','#09D1C7', 'white']}
         style={{flex:1, padding: 20, marginTop: 40}}>
            <View style={{justifyContent:"center", alignItems:"center", marginTop: 200}}>
                <Text style={{fontSize:50, fontWeight:"700"}}>LOGIN</Text>
            </View>
        <View style={{ marginBottom: 15}}>
            <Text style={{ marginBottom: 5, fontSize:18 , fontWeight:'bold'}}>Username: </Text>
            <TextInput
            value={username}
            onChangeText={(text) => setUsername(text)}
            placeholder="Enter your username"
            style={{ 
                borderWidth: 1, 
                borderColor: '#ccc', 
                borderRadius: 10, 
                padding: 8,
                fontSize: 20,
                backgroundColor:'white'
            }}
            />
        </View>

        <View style={{ marginBottom: 15 }}>
            <Text style={{ marginBottom: 5, fontWeight:'bold', fontSize:18 }}>Password: </Text>
            <View style={{ position: 'relative' }}>
            <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder="Enter your password"
                secureTextEntry={!showPassword}
                style={{ 
                    borderWidth: 1, 
                    borderColor: '#ccc', 
                    borderRadius: 10, 
                    padding: 8,
                    fontSize: 20,
                    backgroundColor:'white'
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
            backgroundColor: '#213A58',
            padding: 10,
            borderRadius: 5,
            alignItems: 'center',
            marginTop: 25
            }}
        >
            <Text style={{ color: 'white' , fontSize: 18, fontWeight:'bold'}}>Login</Text>
        </Pressable>
        <View style={{marginTop:20, flexDirection:"row", justifyContent:'space-between'}}>
            <Text style={{fontSize: 18, fontStyle:'italic'}}>Forgot your password?</Text>
            <Pressable onPress={()=> navigation.navigate('Register')}>
            <Text style={{ color:"blue", fontSize: 18, fontStyle:'italic'}}>Register</Text>
            </Pressable>
        </View>
        </LinearGradient>
  );
}

export default Login;
