import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Hoặc react-icons nếu không dùng Expo

function Register({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex kiểm tra email hợp lệ
  
    // Kiểm tra các trường nhập vào
    if (!username || !password || !confirmPassword || !phoneNumber || !address || !email || !name) {
      Alert.alert('Error', 'Please enter complete information.');
      return;
    }
  
    // Kiểm tra định dạng email
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Invalid email.');
      return;
    }
  
    // Kiểm tra mật khẩu và mật khẩu xác nhận có trùng khớp không
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Password and Confirm Password are not the same.');
      return;
    }
  
    try {
      // Bước 1: Gọi API tạo người dùng
      const userResponse = await fetch('http://192.168.100.70:5000/api/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phoneNumber,
          address: address,
        }),
      });
  
      const userData = await userResponse.json();
      console.log(userData);
      
  
      if (!userResponse.ok) {
        Alert.alert('Error', userData.message || 'Failed to create user.');
        return;
      }
  
      // Lấy userId từ phản hồi trả về
      const userId = userData.user._id; // Giả sử API trả về ID của người dùng mới tạo
      console.log(userId);
      
  
      // Bước 2: Gọi API tạo tài khoản mới, không cần truyền role (sẽ được gán mặc định là 'user' ở backend)
      const accountResponse = await fetch('http://192.168.100.70:5000/api/accounts/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          user: userId, 
        }),
      });
  
      const accountData = await accountResponse.json();
  
      // Kiểm tra kết quả từ API tạo tài khoản
      if (accountResponse.ok) {
        Alert.alert('Success', 'Registration successful!');
        navigation.navigate('Login'); // Điều hướng đến trang đăng nhập sau khi đăng ký thành công
      } else {
        Alert.alert('Error', accountData.message || 'Failed to create account.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    }
  };
  
  return (
    <ImageBackground
      source={{
        uri: 'https://images.pexels.com/photos/907485/pexels-photo-907485.jpeg?auto=compress&cs=tinysrgb&w=600',
      }}
      style={{ flex: 1, padding: 20, justifyContent: 'center' }}
      resizeMode="cover"
    >
      <View style={{ borderRadius: 10, padding: 20, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 45, marginBottom: 10, fontWeight: '700', color: 'green' }}>Register</Text>
          <Text style={{ fontSize: 15, marginBottom: 10, fontWeight: '500' }}>
            Please fill in the information below
          </Text>
        </View>

        {/* Username */}
        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 20, marginBottom: 10, fontWeight: '700', color: 'blue' }}>Username <Text style={{color:"red"}}>*</Text></Text>
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

       

        {/* Password */}
        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 20, marginBottom: 10, fontWeight: '700', color: 'blue' }}>Password <Text style={{color:"red"}}>*</Text></Text>
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

        {/* Confirm Password */}
        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 20, marginBottom: 10, fontWeight: '700', color: 'blue' }}>
            Confirm Password <Text style={{color:"red"}}>*</Text>
          </Text>
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

        {/* Name */}
        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 20, marginBottom: 10, fontWeight: '700', color: 'blue' }}>Your name <Text style={{color:"red"}}>*</Text></Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 4,
              padding: 10,
              backgroundColor: 'white',
            }}
          />
        </View>

         {/* Email */}
         <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 20, marginBottom: 10, fontWeight: '700', color: 'blue' }}>Email <Text style={{color:"red"}}>*</Text></Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 4,
              padding: 10,
              backgroundColor: 'white',
            }}
          />
        </View>

        {/* Phone Number */}
        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 20, marginBottom: 10, fontWeight: '700', color: 'blue' }}>Phone Number <Text style={{color:"red"}}>*</Text></Text>
          <TextInput
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 4,
              padding: 10,
              backgroundColor: 'white',
            }}
          />
        </View>

        {/* Address */}
        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 20, marginBottom: 10, fontWeight: '700', color: 'blue' }}>Address <Text style={{color:"red"}}>*</Text></Text>
          <TextInput
            value={address}
            onChangeText={setAddress}
            placeholder="Enter your address"
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 4,
              padding: 10,
              backgroundColor: 'white',
            }}
          />
        </View>

        {/* Submit Button */}
        <Pressable
          onPress={handleSubmit}
          style={{
            backgroundColor: 'orange',
            padding: 15,
            borderRadius: 5,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 20 }}>Register</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

export default Register;