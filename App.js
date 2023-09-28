import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import HomeScreen from './src/screens/HomeScreen';
import ShoesScreen from './src/screens/ShoesScreen';
import PantsScreen from './src/screens/PantsScreen';
import ShirtsScreen from './src/screens/ShirtsScreen';
import SellMeContextProvider from './src/context/SellMeContext';
import SetsScreens from './src/screens/SetsScreens';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <SellMeContextProvider>
      <NavigationContainer>
        <Tab.Navigator barStyle={{ backgroundColor: '#fff' }} activeColor="#F39508">
          <Tab.Screen component={HomeScreen} name='Home' options={({ route }) => ({ tabBarLabel: "מסך בית", tabBarActiveTintColor: route.name === 'Home' ? '#F39508' : 'black', headerShown: false, tabBarIcon: () => (<MaterialCommunityIcons name="home" color="#000" size={26} />) })}></Tab.Screen>
          <Tab.Screen component={ShoesScreen} name='Shoes' options={({ route }) => ({ tabBarLabel: "נעליים", tabBarActiveTintColor: route.name === 'Shoes' ? '#F39508' : 'black', headerShown: false, tabBarIcon: () => (<MaterialCommunityIcons name="shoe-formal" color="#000" size={26} />) })}></Tab.Screen>
          <Tab.Screen component={PantsScreen} name='Pants' options={({ route }) => ({ tabBarLabel: "מכנסיים", tabBarActiveTintColor: route.name === 'Pants' ? '#F39508' : 'black', headerShown: false, tabBarIcon: () => (<MaterialCommunityIcons name="human-male" color="#000" size={26} />) })}></Tab.Screen>
          <Tab.Screen component={ShirtsScreen} name='Shirts' options={({ route }) => ({ tabBarLabel: "חולצות", tabBarActiveTintColor: route.name === 'Shirts' ? '#F39508' : 'black', headerShown: false, tabBarIcon: () => (<MaterialCommunityIcons name="tshirt-crew" color="#000" size={26} />) })}></Tab.Screen>
          <Tab.Screen component={SetsScreens} name='Sets' options={({ route }) => ({ tabBarLabel: "סטים", tabBarActiveTintColor: route.name === 'sets' ? '#F39508' : 'black', headerShown: false, tabBarIcon: () => (<MaterialCommunityIcons name="hanger" color="#000" size={26} />) })}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </SellMeContextProvider>
  );
};

export default App;
