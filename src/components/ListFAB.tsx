import {Animated, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface Props {
  onPress: () => void;
  style: any;
}

const ListFAB = ({onPress, style}: Props) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={{color: 'white', fontSize: 30, textAlign: 'center'}}>🍏</Text>
  </TouchableOpacity>
);

const styles = {
  item: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6a0080',
    borderColor: 'gray',
    borderWidth: 1,
  },
};

export default ListFAB;
