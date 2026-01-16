import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';

const ProductScreen = ({ addToCart, navigateToHome, navigateToCart, cartCount, searchQuery: initialSearchQuery = '' }) => {
  // Dummy products array
  const [allProducts] = useState([
    { id: 1, name: 'Smartphone Pro Max', price: 899.99, category: 'Mobiles' },
    { id: 2, name: 'Wireless Earbuds', price: 79.99, category: 'Accessories' },
    { id: 3, name: 'Laptop Ultra 15', price: 1299.99, category: 'Electronics' },
    { id: 4, name: 'Smart Watch Series 8', price: 349.99, category: 'Electronics' },
    { id: 5, name: 'Tablet Air 12', price: 599.99, category: 'Electronics' },
    { id: 6, name: 'Wireless Charger', price: 29.99, category: 'Accessories' },
    { id: 7, name: 'USB-C Cable Pack', price: 19.99, category: 'Accessories' },
    { id: 8, name: 'Phone Case Premium', price: 39.99, category: 'Accessories' },
  ]);

  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);

  // Filter products based on search
  const products = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Products</Text>
        <View style={styles.headerRight}>
          <View style={styles.cartBadgeContainer}>
            <Text style={styles.headerButton} onPress={navigateToCart}>Cart</Text>
            {cartCount > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{cartCount}</Text>
              </View>
            )}
          </View>
          <Text style={[styles.headerButton, styles.headerButtonFirst]} onPress={navigateToHome}>Home</Text>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search products..."
          placeholderTextColor="#999999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        {products.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No products found</Text>
            <Text style={styles.emptySubtext}>Try a different search term</Text>
          </View>
        ) : (
          <View style={styles.productGrid}>
            {products.map((product) => (
              <View key={product.id} style={styles.productCard}>
                <View style={styles.productImageContainer}>
                  <View style={styles.productImagePlaceholder}>
                    <View style={styles.imagePattern}>
                      <Text style={styles.imagePatternText}>
                        {product.category === 'Mobiles' ? '📱' : product.category === 'Accessories' ? '🎧' : '💻'}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.productInfo}>
                  <Text style={styles.productName}>{product.name}</Text>
                  <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
                </View>
                <View style={styles.addButtonContainer}>
                  <Text style={styles.addButton} onPress={() => handleAddToCart(product)}>
                    +
                  </Text>
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartBadgeContainer: {
    position: 'relative',
    marginRight: 15,
  },
  headerButton: {
    fontSize: 16,
    color: '#6A4CE1',
    fontWeight: '600',
  },
  headerButtonFirst: {
    marginLeft: 0,
  },
  badge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#FF4444',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  searchBar: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 12,
    paddingLeft: 16,
    fontSize: 16,
    color: '#000000',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 16,
    color: '#666666',
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    position: 'relative',
  },
  productImageContainer: {
    position: 'relative',
    marginBottom: 12,
  },
  productImagePlaceholder: {
    width: '100%',
    height: 140,
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    overflow: 'hidden',
  },
  imagePattern: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
  },
  imagePatternText: {
    fontSize: 48,
  },
  productInfo: {
    marginBottom: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 6,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6A4CE1',
  },
  addButtonContainer: {
    alignItems: 'flex-end',
  },
  addButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#6A4CE1',
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '300',
    textAlign: 'center',
    lineHeight: 36,
    shadowColor: '#6A4CE1',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
});

export default ProductScreen;
