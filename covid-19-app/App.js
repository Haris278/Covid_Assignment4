import axios from 'axios';
import * as React from 'react';
import {
  ActivityIndicator,
  Button,
  View,
  Text,
  FlatList,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import World from './screens/WorldStatisticScreen';
import Country from './screens/CountryStatisticScreen';
import Favorite from './screens/FavoriteCountryScreen';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerStyle={{
        backgroundColor: 'white',
        width: 240,
      }}>
      <Drawer.Screen
        name="Country"
        component={Country}
        options={{
          drawerIcon: () => (
            <Ionicons
              name="navigate-outline"
              size={28}
              color="lightblue"></Ionicons>
          ),
          drawerLabel: 'Country Screen',
        }}
      />
      
      <Drawer.Screen
        name="World"
        component={World}
        options={{
          drawerIcon: () => (
            <Ionicons
              name="globe-outline"
              size={28}
              color="lightblue"></Ionicons>
          ),
          drawerLabel: 'World Screen',
        }}
      />
      

      <Drawer.Screen
        name="Favorite"
        component={Favorite}
        options={{
          drawerIcon: () => (
            <Ionicons name="star" size={28} color="lightblue"></Ionicons>
          ),
          drawerLabel: 'Favorite Screen',
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
