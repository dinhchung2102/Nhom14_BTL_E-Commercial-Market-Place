import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
} from 'react-native';

const Checkout_Cart = ({navigation}) => {
  const testData = [
    {
      id: '1',
      name: 'Laptop Pro',
      price: 50,
      quantity: 1,
      image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
      selected: false,
    },
    {
      id: '2',
      name: 'T-Shirt',
      price: 70,
      quantity: 1,
      image: 'https://images.pexels.com/photos/2112651/pexels-photo-2112651.jpeg?auto=compress&cs=tinysrgb&w=600',
      selected: false,
    },
    {
      id: '3',
      name: 'Shoes',
      price: 120,
      quantity: 1,
      image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
      selected: false,
    },
  ];

  const [cartItems, setCartItems] = useState(testData);
  const [deliveryMethod, setDeliveryMethod] = useState('1');
  const [message, setMessage] = useState(''); // Lưu thông báo

  const toggleSelect = (id) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, selected: !item.selected } : item
    );
    setCartItems(updatedItems);
  };

  const updateQuantity = (id, type) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        const newQuantity = type === 'increase' ? item.quantity + 1 : item.quantity - 1;
        return { ...item, quantity: Math.max(1, newQuantity) }; // Không cho số lượng < 1
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const calculateTotal = () => {
    return cartItems
      .filter((item) => item.selected)
      .reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const deliveryOptions = [
    { id: '1', label: 'Fast delivery (24h)', price: 30 },
    { id: '2', label: 'Normal delivery (3-5 days)', price: 15 },
    { id: '3', label: 'Economy delivery (7-10 days)', price: 5 },
  ];

  const calculateTotalWithDelivery = () => {
    const deliveryCost =
      deliveryOptions.find((option) => option.id === deliveryMethod)?.price || 0;
    return calculateTotal() + deliveryCost;
  };

  const handleCheckout = () => {
    const selectedItems = cartItems.filter((item) => item.selected);

    if (selectedItems.length === 0) {
      setMessage('Please select at least one product to proceed.');
    } else {
      navigation.navigate('Checkout_Payment_Method');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Pressable onPress={() => toggleSelect(item.id)} style={styles.checkbox}>
        <View style={item.selected ? styles.checked : styles.unchecked} />
      </Pressable>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>$ {item.price.toLocaleString()} </Text>
        <View style={styles.quantityContainer}>
          <Pressable
            onPress={() => updateQuantity(item.id, 'decrease')}
            style={styles.quantityButton}
          >
            <Text style={styles.quantityText}>-</Text>
          </Pressable>
          <Text style={styles.quantityValue}>{item.quantity}</Text>
          <Pressable
            onPress={() => updateQuantity(item.id, 'increase')}
            style={styles.quantityButton}
          >
            <Text style={styles.quantityText}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {cartItems.length === 0 ? (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartText}>Your shopping cart is empty</Text>
        </View>
      ) : (
        <>
          <Text style={styles.list}>List of products in your shopping cart</Text>
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            style={styles.cartList}
          />
          <View style={styles.deliveryContainer}>
            <Text style={styles.deliveryTitle}>Choose delivery method:</Text>
            {deliveryOptions.map((option) => (
              <Pressable
                key={option.id}
                style={styles.radioOption}
                onPress={() => setDeliveryMethod(option.id)}
              >
                <View
                  style={[
                    styles.radioCircle,
                    deliveryMethod === option.id && styles.radioSelected,
                  ]}
                />
                <Text style={styles.radioLabel}>
                  {option.label} - ${option.price}
                </Text>
              </Pressable>
            ))}
          </View>
          <View style={styles.footer}>
            <Text style={styles.totalText}>
              Total: ${calculateTotalWithDelivery().toLocaleString()}
            </Text>
            <Pressable style={styles.checkoutButton} onPress={handleCheckout}>
              <Text style={styles.checkoutButtonText}>Pay Now</Text>
            </Pressable>
          </View>
          {message ? <Text style={styles.message}>{message}</Text> : null}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  cartList: {
    flex: 1, marginTop:30
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
  },
  checkbox: {
    marginRight: 10,
  },
  unchecked: {
    width: 20,
    height: 20,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  checked: {
    width: 20,
    height: 20,
    borderRadius: 2,
    backgroundColor: '#4CAF50',
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  productDetails: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: 'green',
    marginBottom: 5, fontWeight:"700"
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityValue: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#FF5722',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  checkoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontSize: 18,
    color: '#888',
  },
  list:{
    marginTop:60,
    fontSize:17,
    margin:10,
    fontWeight:"700",
    color:"darkorange"
  },
  deliveryContainer: {
  padding: 30,
  backgroundColor: '#fff',
  marginBottom: 10,
},
deliveryTitle: {
  fontSize: 16,
  fontWeight: 'bold',
  marginBottom: 10,
},
radioOption: {
  flexDirection: 'row',
  alignItems: 'center',
  marginVertical: 5,
},
radioCircle: {
  width: 20,
  height: 20,
  borderRadius: 10,
  borderWidth: 2,
  borderColor: '#ccc',
  marginRight: 10,
},
radioSelected: {
  backgroundColor: '#4CAF50',
  borderColor: '#4CAF50',
},
radioLabel: {
  fontSize: 14,
},
message: {
    textAlign: 'center',
    fontSize: 16,
    color: 'red',
    marginTop: 10,
  },

});

export default Checkout_Cart;
