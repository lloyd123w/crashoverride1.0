import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

const Dashboard = ({ navigation }) => {
  const handleLogout = () => {
    navigation.navigate('landingpage');
  };

  // Sample data for items
  const items = [
    { name: 'BURBERRY TRENCH COAT - 2XL BEIGE POLYESTER BLEND', image: require('../assets/item1.jpg'), price: '₱10,500.00', description: 'Vintage beige Burberry trench coat, fits xx-large.' },
    { name: 'BURBERRY TRENCH COAT - 2XL KHAKI POLYESTER BLEND', image: require('../assets/item2.jpg'), price: '₱9,900.00', description: 'Vintage khaki Burberry trench coat, fits xx-large.' },
    { name: 'CARL EDWARDS CFS NASCAR JACKET - LARGE BLACK COTTON', image: require('../assets/item3.jpg'), price: '₱9,900.00', description: 'Vintage Carl Edwards black Cfs jacket, fits large.' },
    { name: 'BILL ELLIOTT 9 COMPETITORS VIEW NASCAR JACKET - 2XL RED COTTON', image: require('../assets/item4.jpg'), price: '₱8,600.00', description: 'Vintage Bill Elliott 9 red Competitors View jacket, fits xx-large.' },

    { name: 'ULTRA LIGHT DOWN QUILTED VEST', image: require('../assets/item 5.jpg'), price: '£34.90', description: 'Warm premium down. Incredibly lightweight. Warm premium down with a fill power of 750*.*Measured by the IDFB method Specially constructed without down packing for an ultra light weight.' },
    { name: 'FLEECE ZIPPED JACKET', image: require('../assets/item 6.jpg'), price: '£29.90', description: 'Lightweight yet cozy. Dense, springy fleece.' },
    { name: 'Image: 1/9 FLEECE ZIPPED JACKET', image: require('../assets/item 7.jpg'), price: '£29.90', description: 'Lightweight yet cozy. Dense, springy fleece,  Made with cozy, high-density fleece.' },
    { name: 'IUV PROTECTION POCKETABLE PARKA', image: require('../assets/item 8.jpg'), price: '£34.90', description: 'UV protection feature with UPF40+ sun protection,Pocketable design.' },
    { name: 'CORDUROY OVERSIZED WORK SHIRT', image: require('../assets/item 9.jpg'), price: '£14.90', description: 'Relaxed fit for easy layering. The soft, comfortable feel of 100% cotton.' },
    { name: 'COTTON LINEN OVERSHIRT', image: require('../assets/item 10.jpg'), price: '£19.90', description: 'A lightweight layer in a versatile relaxed cut.' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('../assets/logo_transparent.png')} style={styles.logo} />
       
      </View>
      <View style={styles.menuContainer}>
        {items.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.menuItem} 
            onPress={() => navigation.navigate(item.name)}
          >
            <Image source={item.image} style={styles.menuItemImage} />
            <Text style={styles.menuItemText}>{item.name}</Text>
            <Text style={styles.menuItemPrice}>{item.price}</Text>
            <Text style={styles.menuItemDescription}>{item.description}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.logoutButton}>Log out</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#335A02',
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  menuItem: {
    width: '48%', // Adjust the width as per your preference
    backgroundColor: '#E6E6E6',
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    paddingVertical: 20,
  },
  menuItemImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  menuItemText: {
    color: '#335A02',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  menuItemPrice: {
    color: '#335A02',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  menuItemDescription: {
    color: '#335A02',
    fontSize: 14,
    textAlign: 'center',
  },
  logoutButton: {
    backgroundColor: '#335A02',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
    alignSelf: 'center',
    color: '#FFFFFF',
  },
  additionalInfoContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#E6E6E6',
    borderRadius: 10,
  },
  additionalInfoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#335A02',
  },
  additionalInfoText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#335A02',
  },
});

export default Dashboard;
