import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  TouchableOpacity } from 'react-native';

export const ImageItem = ({ 
  name, 
  username, 
  imageThumbUrl, 
  imageFullUrl, 
  setShowFullImage }) => {
  
  const { 
    mainContainer, 
    img, 
    textBlock, 
    textHeader, 
    textBody } = styles;
  
  return (
    <View style={mainContainer}>
      <TouchableOpacity 
        onPress={()=> setShowFullImage({ bool: true, imgUrl: imageFullUrl })}
      >
        <Image
          style={img}
          source={{ uri: imageThumbUrl }}
        />
      </TouchableOpacity>
      <View style={textBlock}>
        <Text style={textHeader}>
          Titles: 
        </Text>
        
          <Text 
            style={textBody} 
            numberOfLines={8}
          >
            {name}
          </Text>
        
        <Text style={textHeader}>
          Author:
        </Text>
        <Text style={textBody}> 
          {username}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  img: {
    width: 200, 
    aspectRatio: 1,
  },
  textBlock: {
    width: 200,
    paddingHorizontal: 10,
  },
  textHeader: {
    fontWeight: 'bold',
  },
  textBody: {
    flexDirection:'row',
    flexWrap: 'wrap',
    marginLeft: 5,
  },
});
