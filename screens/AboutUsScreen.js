import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

const AboutUsScreen = ({ navigateToHome }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>About Us</Text>
        <Text style={styles.headerButton} onPress={navigateToHome}>Home</Text>
      </View>
      
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={styles.titleCard}>
          <Text style={styles.title}>Sarim Electronics</Text>
        </View>
        
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Who We Are</Text>
          <Text style={styles.text}>
            Sarim Electronics is a leading ecommerce platform specializing in high-quality 
            electronics, mobile devices, and accessories. We are committed to providing 
            our customers with the latest technology products at competitive prices.
          </Text>
        </View>
        
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Our Mission</Text>
          <Text style={styles.text}>
            Our mission is to make cutting-edge technology accessible to everyone. We strive 
            to offer a seamless shopping experience with excellent customer service, reliable 
            products, and fast delivery. We believe in building long-term relationships with 
            our customers through trust and transparency.
          </Text>
        </View>
        
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Why Choose Us</Text>
          <Text style={styles.text}>
            At Sarim Electronics, we carefully curate our product selection to ensure quality 
            and reliability. We work directly with trusted manufacturers and suppliers to bring 
            you authentic products with warranty protection. Our team is dedicated to helping 
            you find the perfect electronic devices that meet your needs and budget.
          </Text>
        </View>
        
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Our Commitment</Text>
          <Text style={styles.text}>
            We are committed to providing exceptional service, secure transactions, and 
            customer satisfaction. Your trust is our priority, and we continuously work to 
            improve our services and expand our product range to serve you better.
          </Text>
        </View>
        
        <View style={styles.contactCard}>
          <Text style={styles.contactTitle}>Contact Us</Text>
          <View style={styles.contactItem}>
            <Text style={styles.contactLabel}>Email:</Text>
            <Text style={styles.contactValue}>support@sarimelectronics.com</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactLabel}>Phone:</Text>
            <Text style={styles.contactValue}>+1 (555) 123-4567</Text>
          </View>
        </View>
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
  headerButton: {
    fontSize: 16,
    color: '#6A4CE1',
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  titleCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    letterSpacing: 0.5,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    color: '#333333',
    lineHeight: 24,
  },
  contactCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  contactTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 16,
  },
  contactItem: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  contactLabel: {
    fontSize: 16,
    color: '#666666',
    fontWeight: '600',
    width: 70,
  },
  contactValue: {
    fontSize: 16,
    color: '#6A4CE1',
    fontWeight: '500',
    flex: 1,
  },
});

export default AboutUsScreen;
