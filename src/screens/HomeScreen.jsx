import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { SellMeContext } from '../context/SellMeContext';

const HomeScreen = ({ navigation }) => {
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Application</Text>
      <Text style={styles.status}>Status: בחר נעל</Text>
      <Text style={styles.progress}>1/3</Text>
      <Button title="בחירת נעל" onPress={() => navigation.navigate('Shoes')} />
      <Button title="בחירת מכנסיים" onPress={() => navigation.navigate('Pants')} />
      <Button title="בחירת חולצה" onPress={() => navigation.navigate('Shirts')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  status: {
    fontSize: 16,
    marginBottom: 5,
  },
  progress: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default HomeScreen;
