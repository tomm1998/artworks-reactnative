import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
      <Text style={styles.textButtonStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonStyle: {
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
export default Button;
