import React, {useEffect, useState} from 'react';
import {
  FlatList,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

//create component

const ArtworksList = () => {
  const navigation = useNavigation();
  const [artList, setArtList] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadAsyncArt = async () => {
      try {
        const response = await fetch('https://api.artic.edu/api/v1/artworks');
        const json = await response.json();

        setArtList(json);
      } finally {
        setLoaded(true);
      }
    };
    loadAsyncArt();
  }, []);

  return (
    loaded && (
      <FlatList
        data={artList.data}
        renderItem={({item, index}) => {
          return (
            <View style={styles.viewStyle}>
              <Image
                source={{
                  uri: `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`,
                }}
                style={styles.imageStyle}
              />
              <Text style={styles.textStyle}>{item.title}</Text>
              <Text>{item.artist_display}</Text>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate('Detail', {artwork: item})}>
                <Text style={styles.textButtonStyle}>Detail</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={artwork => {
          artwork.title;
        }}
      />
    )
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
  buttonStyle: {
    flex: 1,
    margin: 10,
    borderColor: '#FEF9EF',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFCB77',
  },
  textButtonStyle: {
    paddingVertical: 2,
    paddingHorizontal: 20,
    fontSize: 20,
    color: '#227C9D',
  },
});
export default ArtworksList;
