import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
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

  const renderList = () => {
    return artList.data.map(item => {
      return <ArtworkDetail key={item.id} artwork={item} />;
    });
  };
  return <ScrollView>{loaded && renderList()}</ScrollView>;
};

export default ArtworksList;
