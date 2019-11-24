import React, { useState }  from 'react';
import { 
  Modal, 
  View, 
  Image, 
  StyleSheet, 
  Button, 
  ActivityIndicator } from 'react-native';

export const FullImage = ({setShowFullImage, fullImageUrl}) =>  {
  const [onLoad, changeOnLoad] = useState(false);
  const { 
    img, 
    containerIndicator, 
    horizontal, 
    mainContainer } = styles;

  return (
    <View >
      <Modal
        animationType="slide"
        transparent={false}
        >
        <View style={mainContainer}>
          <View>
            <Button
              onPress={()=> setShowFullImage({bool: false, imgUrl: ''})}
              title='CLOSE PHOTO'
              color='grey'
            />
            {onLoad && (
              <View style={[containerIndicator, horizontal]}>
                <ActivityIndicator size="large" color="#0000ff" />
              </View>
            )}
            <Image 
              style={img}
              source={{ uri: fullImageUrl }}
              onLoadStart={() => changeOnLoad(true)}
              onLoadEnd={() => changeOnLoad(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
  },
  img: {
    width: '100%', 
    aspectRatio: 1, 
  },
  containerIndicator: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 100
  },
}); 
