import React, {useEffect, useState} from 'react';
import {
  FlatList,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Button from './Button';
import {useNavigation} from '@react-navigation/native';

//create component

const ArtworksList = () => {
  const navigation = useNavigation();
  const [artList, setArtList] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadAsyncArt = async () => {
      try {
        const response = await fetch(
          `https://api.artic.edu/api/v1/artworks?page=${page}`,
        );
        const json = await response.json();

        setArtList(json);
      } finally {
        setLoaded(true);
      }
    };
    loadAsyncArt();
  }, [page]);

  return (
    loaded && (
      <View style={styles.container}>
        <FlatList
          data={artList.data}
          renderItem={({item}) => {
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
                <Button
                  onPress={() => navigation.navigate('Detail', {artwork: item})}
                  title="Detail"
                />
              </View>
            );
          }}
          keyExtractor={item => {
            return item.id;
          }}
        />
        <View style={styles.viewPageStyle}>
          {page > 1 && (
            <Button title="Prev Page" onPress={() => setPage(page - 1)} />
          )}
          <Text style={styles.numPageStyle}>{page}</Text>
          {page < artList.pagination.total_pages && (
            <Button title="Next Page" onPress={() => setPage(page + 1)} />
          )}
        </View>
      </View>
    )
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    borderRadius: 1,
  },
  viewPageStyle: {
    margin: 10,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  numPageStyle: {
    color: 'white',
    fontSize: 20,
    margin: 10,
  },
});
export default ArtworksList;
