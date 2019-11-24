import React, { useState }  from 'react';
import { 
  Modal, 
  View, 
  Image, 
  StyleSheet, 
  Button, 
  ActivityIndicator,
  Text } from 'react-native';

export const FullImage = ({setShowFullImage, fullImageUrl}) =>  {
  const [onLoad, changeOnLoad] = useState(false);
  const [errorLoad, changeErrorLoad] = useState(false);
  const { 
    img, 
    containerIndicator, 
    horizontal, 
    mainContainer,
    textError } = styles;

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
            {onLoad && !errorLoad && (
              <View style={[containerIndicator, horizontal]}>
                <ActivityIndicator size="large" color="#0000ff" />
              </View>
            )}
           
            {errorLoad  
              ? <Text style={textError}>Sorry, somthing was wrong!</Text>
              : <Image 
                  style={img}
                  source={{ uri: fullImageUrl }}
                  onLoadStart={() => changeOnLoad(true)}
                  onLoadEnd={() => changeOnLoad(false)}
                  onError={() => changeErrorLoad(true)}
                />
              }
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
  textError: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  }
}); 
