import * as React from 'react';
import {NavigationContainer} from 'react-navigation';
import {createNativeStackNavigator} from 'react-navigation-stack';
import ArtworkDetail from './src/screens/ArtworkDetailScreen';
import ArtworksScreen from './src/screens/ArtworksScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Artworks" components={ArtworksScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
