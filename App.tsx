import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import * as Haptics from 'expo-haptics'
import { Image } from 'expo-image';
import { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Game from './screens/Game';

const Stack = createNativeStackNavigator()

export default function App() {  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        {
          headerShown: false,
        }
      }>
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen name='game' component={Game} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F60BF',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 300
  },
  title: {
    fontSize: 32,
    fontWeight: 800,
    color: 'white'
  },
  containerTop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 57

  },
  button: {
    marginBottom: 70,
    backgroundColor: '#BE3778',
    paddingLeft: 99,
    paddingRight: 99,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 20,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  }
});
