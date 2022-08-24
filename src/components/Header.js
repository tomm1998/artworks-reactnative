import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//create component

export default function Header(props) {
  return (
    <View style={styles.viewStyling}>
      <Text style={styles.textStyling}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyling: {
    fontSize: 30,
  },
  viewStyling: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
    marginTop: 25,
    marginBottom: 5,
  },
});
