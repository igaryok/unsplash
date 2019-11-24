import React from 'react';
import { 
  Text, 
  View, 
  StyleSheet } from 'react-native';

export const ErrorLoad = ({ loadPhotos, currentPage }) => {
  const { mainBlock, warningText, linkingText } = styles

  return (
    <View style={mainBlock}>
      <Text
        style={warningText}
      >
        Sorry, somthing wrong
      </Text>
      <Text
        style={linkingText}
        onPress={() => loadPhotos(currentPage)}
      >
        Touch, to try again
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBlock: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  warningText: {
    color: 'red',
  },
  linkingText: {
    color: 'blue',
    fontWeight: 'bold',
    marginTop: 10,
  }
});