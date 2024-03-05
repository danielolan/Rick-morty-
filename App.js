// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CharacterDetailsScreen from './screens/CharacterDetailsScreen'; // Asegúrate de crear este componente

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CharacterDetails" component={CharacterDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
