import React from 'react';
import {StyleSheet, View} from 'react-native';
import ArtworksList from '../components/ArtworkList';

const ArtworksScreen = () => {
  return (
    <View style={styles.container}>
      <ArtworksList />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#227C9D',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ArtworksScreen;
