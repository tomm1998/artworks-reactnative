import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Button from './Button';

const ArtworkDetail = props => {
  return (
    <View style={styles.viewStyling}>
      <Image
        source={{
          uri: `https://www.artic.edu/iiif/2/${props.artwork.image_id}/full/843,/0/default.jpg`,
        }}
        style={styles.imageStyling}
      />
      <Text style={styles.textStyling}>{props.artwork.title}</Text>
      <Text>{props.artwork.artist_display}</Text>
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
    borderColor: '#FEF9EF',
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#17C3B2',
  },
  imageStyling: {
    width: 300,
    height: 300,
  },
});
export default ArtworkDetail;
