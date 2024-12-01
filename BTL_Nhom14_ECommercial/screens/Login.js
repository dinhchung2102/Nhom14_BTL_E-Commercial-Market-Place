import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, Alert, StyleSheet, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode'
import { useRecoilState } from 'recoil';
import { accountIdState } from '../atoms/UserAtom';

function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [, setAccountId] = useRecoilState(accountIdState)


 

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please enter both username and password');
      return;
    }

    try {
      const response = await fetch('http://192.168.100.70:5000/api/accounts/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();
      console.log(data);
      

      if (response.ok) {
        await AsyncStorage.setItem('token', data.token);
        navigation.navigate('Home_ProductListing');
        const decodedToken = jwtDecode(data.token);
        setAccountId(decodedToken.accountId)
        
        
        
      } else {
        Alert.alert('Error', data.message || 'Failed to log in');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  return (
    <LinearGradient colors={['white', '#09D1C7', 'white']} style={styles.gradient}>
      <StatusBar
          animated={true}
          backgroundColor="#ffffff"
          hidden={true}
        />
      <View style={styles.header}>
        <Text style={styles.title}>LOGIN</Text>
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username: </Text>
        <TextInput
          value={username}
          onChangeText={(text) => setUsername(text)}
          placeholder="Enter your username"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password: </Text>
        <View style={styles.passwordContainer}>
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Enter your password"
            secureTextEntry={!showPassword}
            style={styles.input}
          />
          <Pressable
            onPress={() => setShowPassword(!showPassword)}
            style={styles.passwordToggle}
          >
            <Text>{showPassword ? '🙈' : '👁️'}</Text>
          </Pressable>
        </View>
      </View>

      <Pressable onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </Pressable>

      <View style={styles.footer}>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
        <Pressable onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>Register</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    padding: 20,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
  },
  title: {
    fontSize: 50,
    fontWeight: "700",
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 8,
    fontSize: 20,
    backgroundColor: 'white',
  },
  passwordContainer: {
    position: 'relative',
  },
  passwordToggle: {
    position: 'absolute',
    right: 10,
    top: 8,
  },
  loginButton: {
    backgroundColor: '#213A58',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 25,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  forgotPassword: {
    fontSize: 18,
    fontStyle: 'italic',
  },
  registerText: {
    color: "blue",
    fontSize: 18,
    fontStyle: 'italic',
  },
});

export default Login;
