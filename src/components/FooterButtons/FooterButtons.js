import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export const FooterButtons = ({ loadPhotos, currentPage }) => (
  <View style={styles.fixToText}>
    <Button
      title="Previous 10 photos"
      disabled={currentPage === 1 ? true : false}
      onPress={() => loadPhotos(currentPage - 1)}
    />
    <Button
      title="Next 10 photos"
      onPress={() => loadPhotos(currentPage + 1)}
    />
  </View>
);

const styles = StyleSheet.create({
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
});
