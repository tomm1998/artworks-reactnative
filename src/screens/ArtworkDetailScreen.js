import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const ArtworkDetailScreen = ({route}) => {
  const artwork = route.params.artwork;
  return (
    <View style={styles.viewStyle}>
      <Image
        source={{
          uri: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`,
        }}
        style={styles.imageStyle}
      />
      <Text style={styles.textStyle}>{artwork.title}</Text>
      <Text>{artwork.artist_display}</Text>
      <Text>{artwork.medium_display}</Text>
      <Text>{artwork.category_titles}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
  },
  viewStyle: {
    margin: 5,
    borderColor: '#FEF9EF',
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#17C3B2',
  },
  imageStyle: {
    width: 300,
    height: 300,
  },
});
export default ArtworkDetailScreen;
