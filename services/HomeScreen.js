import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Willkommen!</Text>
      <Text style={styles.subtitle}>Du bist nicht allein. Diese App begleitet dich auf deinem Weg zur Heilung.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9fbff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004d80',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#0073e6',
    marginTop: 10,
  },
});

export default HomeScreen;
