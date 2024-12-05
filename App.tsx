import {StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Game from './screens/Game';

const Stack = createNativeStackNavigator()

export default function App() {  
  return (
    <NavigationContainer>
      <Stack.Navigator id={undefined} screenOptions={
        {
          headerShown: false,
          animation: 'none'
        }
      }>
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen name='game' component={Game} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
