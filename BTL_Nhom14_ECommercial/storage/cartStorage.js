import AsyncStorage from '@react-native-async-storage/async-storage';


export const getCart = async () => {
  try {
    const cart = await AsyncStorage.getItem('cart');
    return cart ? JSON.parse(cart) : []; 
  } catch (error) {
    console.error('Error getting cart: ', error);
    return [];
  }
};

// Lưu giỏ hàng vào AsyncStorage
export const saveCart = async (cart) => {
  try {
    await AsyncStorage.setItem('cart', JSON.stringify(cart)); 
  } catch (error) {
    console.error('Error saving cart: ', error);
  }
};

export const addToCart = async (product, setCart) => {
  try {
    let cart = await getCart();  
    const productIndex = cart.findIndex(item => item._id === product._id);  
    if (productIndex !== -1) {
      cart[productIndex].quantity += 1;  
    } else {
      cart.push({
        ...product,
        quantity: 1  
      });
    }

    await saveCart(cart); 
    setCart(cart);  
  } catch (error) {
    console.error('Error adding to cart: ', error);
  }
};


export const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear(); 
    console.log('Tất cả dữ liệu đã được xóa');
  } catch (error) {
    console.error('Lỗi khi xóa tất cả dữ liệu: ', error);
  }
};


  
