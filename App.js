import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from './src/pages/HomePage';
import PerfilPage from './src/pages/PerfilPage';

export default function App() {
  const Stack = createNativeStackNavigator();


  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomePage} />
        <Stack.Screen name='Perfil' component={PerfilPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}