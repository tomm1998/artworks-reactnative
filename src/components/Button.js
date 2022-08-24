import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    margin: 10,
    borderColor: '#FEF9EF',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFCB77',
  },
  textStyle: {
    paddingVertical: 2,
    paddingHorizontal: 20,
    fontSize: 20,
    color: '#227C9D',
  },
});
export default Button;
