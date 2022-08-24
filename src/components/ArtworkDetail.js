import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const ArtworkDetail = ({artwork}) => {
  return (
    <View style={styles.viewStyling}>
      <Image
        source={{
          uri: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`,
        }}
        style={styles.imageStyling}
      />
      <Text style={styles.textStyling}>{artwork.title}</Text>
      <Text>{artwork.artist_display}</Text>
      <Button title="Detail" />
    </View>
  );
};
const styles = StyleSheet.create({
  textStyling: {
    fontSize: 25,
  },
  viewStyling: {
    margin: 5,
    borderColor: 'black',
    borderWidth: 5,
    padding: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  imageStyling: {
    width: 300,
    height: 300,
  },
});
export default ArtworkDetail;
