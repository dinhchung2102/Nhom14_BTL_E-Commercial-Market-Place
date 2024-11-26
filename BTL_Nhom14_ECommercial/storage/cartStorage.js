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

// Thêm sản phẩm vào giỏ hàng
export const addToCart = async (product) => {
    try {
      let cart = await getCart();  
      const productIndex = cart.findIndex(item => item._id === product._id); 
  
      if (productIndex !== -1) {
        cart[productIndex].quantity += 1;
      } else {
        cart.push({
          ...product,
          quantity: product.quantity || 1  
        });
      }
  
      await saveCart(cart); 
    } catch (error) {
      console.error('Error adding to cart: ', error);
    }
  };

  export const calculateTotal = async () => {
    try {
      const cart = await getCart();

      const total = cart.reduce((sum, item) => {
        if (item.quantity && item.price) {
          return sum + (item.quantity * item.price);  
        }
        return sum;
      }, 0); 
  
      return total;  
    } catch (error) {
      console.error('Error calculating total: ', error);
      return 0; 
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


  
