import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthProvider } from './src/context/AuthContext';
import HomeScreen from './src/screens/HomeScreen';
import ArticlesScreen from './src/screens/ArticlesScreen';
import JournalScreen from './src/screens/JournalScreen';
import ResourcesScreen from './src/screens/ResourcesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: '#e6f2ff' }, // Beruhigende Pastellfarben
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Articles" component={ArticlesScreen} />
          <Tab.Screen name="Journal" component={JournalScreen} />
          <Tab.Screen name="Resources" component={ResourcesScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
