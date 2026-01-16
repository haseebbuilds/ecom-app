import React, { useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import AboutUsScreen from './screens/AboutUsScreen';

export default function App() {
  // Screen navigation state
  const [currentScreen, setCurrentScreen] = useState('login');
  
  // Cart state - now with quantities
  const [cart, setCart] = useState([]);
  
  // Search query state
  const [searchQuery, setSearchQuery] = useState('');

  // Navigation functions
  const navigateToHome = () => {
    setCurrentScreen('home');
    setSearchQuery('');
  };
  
  const navigateToProducts = (query = '') => {
    setSearchQuery(query);
    setCurrentScreen('products');
  };
  
  const navigateToCart = () => setCurrentScreen('cart');
  const navigateToAbout = () => setCurrentScreen('about');

  // Login handler
  const handleLogin = () => {
    setCurrentScreen('home');
  };

  // Add to cart handler - now handles quantities
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Update quantity in cart
  const updateCartQuantity = (productId, change) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === productId) {
          const newQuantity = item.quantity + change;
          if (newQuantity <= 0) {
            return null; // Remove item if quantity is 0 or less
          }
          return { ...item, quantity: newQuantity };
        }
        return item;
      }).filter(item => item !== null);
    });
  };

  // Calculate total cart items count
  const getCartCount = () => {
    return cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  };

  // Render current screen based on state
  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <LoginScreen onLogin={handleLogin} />;
      case 'home':
        return (
          <HomeScreen
            navigateToProducts={navigateToProducts}
            navigateToCart={navigateToCart}
            navigateToAbout={navigateToAbout}
            cartCount={getCartCount()}
          />
        );
      case 'products':
        return (
          <ProductScreen
            addToCart={addToCart}
            navigateToHome={navigateToHome}
            navigateToCart={navigateToCart}
            cartCount={getCartCount()}
            searchQuery={searchQuery}
          />
        );
      case 'cart':
        return (
          <CartScreen
            cart={cart}
            updateCartQuantity={updateCartQuantity}
            navigateToHome={navigateToHome}
            navigateToProducts={navigateToProducts}
          />
        );
      case 'about':
        return <AboutUsScreen navigateToHome={navigateToHome} />;
      default:
        return <LoginScreen onLogin={handleLogin} />;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      {renderScreen()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
