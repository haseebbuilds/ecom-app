import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

const CartScreen = ({ cart, updateCartQuantity, navigateToHome, navigateToProducts }) => {
  const calculateSubtotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const discount = 4;
  const delivery = 2;
  const subtotal = calculateSubtotal();
  const total = subtotal - discount + delivery;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Cart</Text>
        <View style={styles.headerButtons}>
          <Text style={[styles.headerButton, styles.headerButtonFirst]} onPress={navigateToHome}>Home</Text>
          <Text style={styles.headerButton} onPress={navigateToProducts}>Products</Text>
        </View>
      </View>
      
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        {cart.length === 0 ? (
          <View style={styles.emptyCart}>
            <Text style={styles.emptyCartText}>Your cart is empty</Text>
            <Text style={styles.emptyCartSubtext}>Add some products to get started</Text>
          </View>
        ) : (
          <>
            {cart.map((item, index) => (
              <View key={index} style={styles.cartItem}>
                <View style={styles.itemImageContainer}>
                  <View style={styles.itemImagePlaceholder}>
                    <View style={styles.imagePattern}>
                      <Text style={styles.imagePatternText}>
                        {item.category === 'Mobiles' ? '📱' : item.category === 'Accessories' ? '🎧' : '💻'}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.itemDetails}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemBrand}>Electronics</Text>
                  <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
                </View>
                <View style={styles.itemActions}>
                  <View style={styles.quantityContainer}>
                    <View style={styles.quantityButton}>
                      <Text 
                        style={styles.quantityButtonText} 
                        onPress={() => updateCartQuantity(item.id, -1)}
                      >
                        -
                      </Text>
                    </View>
                    <Text style={styles.quantityText}>{String(item.quantity || 1).padStart(2, '0')}</Text>
                    <View style={styles.quantityButton}>
                      <Text 
                        style={styles.quantityButtonText} 
                        onPress={() => updateCartQuantity(item.id, 1)}
                      >
                        +
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
            
            <View style={styles.orderSummary}>
              <Text style={styles.summaryTitle}>Order Summary</Text>
              
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Items</Text>
                <Text style={styles.summaryValue}>{cart.reduce((sum, item) => sum + (item.quantity || 1), 0)}</Text>
              </View>
              
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Subtotal</Text>
                <Text style={styles.summaryValue}>${subtotal.toFixed(2)}</Text>
              </View>
              
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Discount</Text>
                <Text style={styles.summaryValue}>${discount.toFixed(2)}</Text>
              </View>
              
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Delivery Charges</Text>
                <Text style={styles.summaryValue}>${delivery.toFixed(2)}</Text>
              </View>
              
              <View style={[styles.summaryRow, styles.totalRow]}>
                <Text style={styles.totalLabel}>Total</Text>
                <Text style={styles.totalAmount}>${total.toFixed(2)}</Text>
              </View>
            </View>
            
            <View style={styles.checkoutButtonContainer}>
              <Text style={styles.checkoutButton} onPress={() => {}}>
                Check Out
              </Text>
            </View>
          </>
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
  headerButtons: {
    flexDirection: 'row',
  },
  headerButton: {
    fontSize: 16,
    color: '#6A4CE1',
    fontWeight: '600',
    marginLeft: 15,
  },
  headerButtonFirst: {
    marginLeft: 0,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 100,
  },
  emptyCart: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 100,
  },
  emptyCartText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
  },
  emptyCartSubtext: {
    fontSize: 16,
    color: '#666666',
  },
  cartItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemImageContainer: {
    marginRight: 12,
  },
  itemImagePlaceholder: {
    width: 80,
    height: 80,
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
    fontSize: 32,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  itemBrand: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 6,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6A4CE1',
  },
  itemActions: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#6A4CE1',
    marginHorizontal: 8,
  },
  quantityButtonText: {
    fontSize: 18,
    color: '#6A4CE1',
    fontWeight: '600',
  },
  quantityText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    minWidth: 30,
    textAlign: 'center',
  },
  orderSummary: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginTop: 8,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  summaryTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  summaryLabel: {
    fontSize: 16,
    color: '#666666',
    fontWeight: '400',
  },
  summaryValue: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
  },
  totalRow: {
    marginTop: 8,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  totalLabel: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
  },
  totalAmount: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
  },
  checkoutButtonContainer: {
    marginTop: 10,
  },
  checkoutButton: {
    backgroundColor: '#6A4CE1',
    color: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    shadowColor: '#6A4CE1',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default CartScreen;
