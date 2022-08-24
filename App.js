import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ArtworksScreen from './src/screens/ArtworksScreen';
import ArtworkDetailScreen from './src/screens/ArtworkDetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Artworks" component={ArtworksScreen} />
        <Stack.Screen name="Detail" component={ArtworkDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
