import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const HomeScreen = ({ navigateToProducts, navigateToCart, navigateToAbout, cartCount }) => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const bannerScrollRef = useRef(null);

  const banners = [
    { title: 'Get Winter Discount', discount: '20% Off', subtitle: 'For Electronics' },
    { title: 'Summer Sale', discount: '30% Off', subtitle: 'On All Mobiles' },
    { title: 'Flash Sale', discount: '50% Off', subtitle: 'Limited Time Only' },
  ];

  // Auto-slide banner carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prev) => {
        const nextIndex = (prev + 1) % banners.length;
        if (bannerScrollRef.current) {
          bannerScrollRef.current.scrollTo({
            x: nextIndex * (SCREEN_WIDTH - 40),
            animated: true,
          });
        }
        return nextIndex;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigateToProducts(searchQuery);
    }
  };

  const handleBannerScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / (SCREEN_WIDTH - 40));
    setCurrentBannerIndex(index);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.greeting}>Hello!</Text>
            <Text style={styles.userName}>Welcome Back</Text>
          </View>
          <View style={styles.cartBadgeContainer}>
            <Text style={styles.cartIcon} onPress={navigateToCart}>Cart</Text>
            {cartCount > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{cartCount}</Text>
              </View>
            )}
          </View>
        </View>
      </View>
      
      <View style={styles.content}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search here"
            placeholderTextColor="#999999"
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={handleSearch}
            returnKeyType="search"
          />
        </View>
        
        <View style={styles.banner}>
          <ScrollView
            ref={bannerScrollRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={handleBannerScroll}
            style={styles.bannerScroll}
          >
            {banners.map((banner, index) => (
              <View key={index} style={[styles.bannerContent, { width: SCREEN_WIDTH - 40 }]}>
                <View style={styles.bannerTextContainer}>
                  <Text style={styles.bannerTitle}>{banner.title}</Text>
                  <Text style={styles.bannerDiscount}>{banner.discount}</Text>
                  <Text style={styles.bannerSubtitle}>{banner.subtitle}</Text>
                </View>
                <View style={styles.bannerImagePlaceholder} />
              </View>
            ))}
          </ScrollView>
          <View style={styles.pagination}>
            {banners.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.paginationDot,
                  index === currentBannerIndex && styles.paginationDotActive,
                ]}
              />
            ))}
          </View>
        </View>
        
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured</Text>
            <Text style={styles.seeAll} onPress={() => navigateToProducts('')}>See All</Text>
          </View>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            style={styles.horizontalScroll}
            contentContainerStyle={styles.horizontalScrollContent}
          >
            <View style={styles.categoryCard}>
              <View style={styles.categoryImagePlaceholder}>
                <View style={styles.imagePattern}>
                  <Text style={styles.imagePatternText}>📱</Text>
                </View>
              </View>
              <Text style={styles.categoryName}>Electronics</Text>
              <Text style={styles.categoryPrice}>From $99</Text>
            </View>
            
            <View style={styles.categoryCard}>
              <View style={styles.categoryImagePlaceholder}>
                <View style={styles.imagePattern}>
                  <Text style={styles.imagePatternText}>📲</Text>
                </View>
              </View>
              <Text style={styles.categoryName}>Mobiles</Text>
              <Text style={styles.categoryPrice}>From $199</Text>
            </View>
            
            <View style={styles.categoryCard}>
              <View style={styles.categoryImagePlaceholder}>
                <View style={styles.imagePattern}>
                  <Text style={styles.imagePatternText}>🎧</Text>
                </View>
              </View>
              <Text style={styles.categoryName}>Accessories</Text>
              <Text style={styles.categoryPrice}>From $29</Text>
            </View>
          </ScrollView>
        </View>
        
        <View style={styles.navigationSection}>
          <Text style={styles.navigationTitle}>Quick Links</Text>
          
          <View style={styles.navButton}>
            <Text style={styles.navButtonText} onPress={() => navigateToProducts('')}>View Products</Text>
          </View>
          
          <View style={styles.navButton}>
            <Text style={styles.navButtonText} onPress={navigateToCart}>View Cart</Text>
          </View>
          
          <View style={styles.navButton}>
            <Text style={styles.navButtonText} onPress={navigateToAbout}>About Us</Text>
          </View>
        </View>
      </View>
    </ScrollView>
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
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 16,
    color: '#666666',
    fontWeight: '400',
  },
  userName: {
    fontSize: 22,
    color: '#000000',
    fontWeight: '700',
    marginTop: 4,
  },
  cartBadgeContainer: {
    position: 'relative',
  },
  cartIcon: {
    fontSize: 16,
    color: '#6A4CE1',
    fontWeight: '600',
    padding: 8,
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
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
  content: {
    padding: 20,
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchBar: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    padding: 16,
    paddingLeft: 20,
    fontSize: 16,
    color: '#000000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  banner: {
    marginBottom: 30,
  },
  bannerScroll: {
    marginHorizontal: -20,
  },
  bannerContent: {
    backgroundColor: '#6A4CE1',
    borderRadius: 20,
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 12,
    shadowColor: '#6A4CE1',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  bannerTextContainer: {
    flex: 1,
  },
  bannerTitle: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '500',
    marginBottom: 8,
  },
  bannerDiscount: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  bannerSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '400',
  },
  bannerImagePlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    opacity: 0.2,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#CCCCCC',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: '#6A4CE1',
    width: 24,
  },
  section: {
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000000',
  },
  seeAll: {
    fontSize: 16,
    color: '#6A4CE1',
    fontWeight: '600',
  },
  horizontalScroll: {
    marginHorizontal: -20,
  },
  horizontalScrollContent: {
    paddingHorizontal: 20,
  },
  categoryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginRight: 16,
    width: 160,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryImagePlaceholder: {
    width: '100%',
    height: 120,
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
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
  categoryName: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
    marginBottom: 6,
  },
  categoryPrice: {
    fontSize: 14,
    color: '#6A4CE1',
    fontWeight: '600',
  },
  navigationSection: {
    marginTop: 10,
  },
  navigationTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 16,
  },
  navButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 18,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  navButtonText: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default HomeScreen;
