import React, {useEffect, useState} from 'react';
import {FlatList, View, Text} from 'react-native';
import ArtworkDetail from './ArtworkDetail';

//create component

const ArtworksList = () => {
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
        renderItem={({item}) => {
          return <ArtworkDetail key={item.id} artwork={item} />;
        }}
        keyExtractor={artwork => {
          artwork.title;
        }}
      />
    )
  );
};
export default ArtworksList;
