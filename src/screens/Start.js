import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export const StartScreen = ({ navigation }) => {
  const { mainBlock, titleApp } = styles;
  return (
    <View style={ mainBlock }>
      <Text style={ titleApp }>Unsplash demo</Text>
      <Button
          title="Go to App"
          onPress={() => navigation.navigate('MainScreen')}
        />
    </View>
);
};

const styles = StyleSheet.create({
  mainBlock: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  titleApp: {
    fontSize: 30,
    color: 'green',
    fontWeight: 'bold',
  },
});
