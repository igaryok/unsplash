import React, { PureComponent } from 'react';
import { 
  FlatList, 
  View, 
  StyleSheet, 
  ActivityIndicator } from 'react-native';

import { ImageItem } from '../ImageItem';
import { FullImage } from '../FullImage';
import { FooterButtons } from '../FooterButtons';
import { ErrorLoad } from '../ErrorLoad';


export class ImageList extends PureComponent {
  componentDidMount(){
    const { loadPhotos } = this.props; 

    loadPhotos(1);
  };

  componentDidUpdate(prevProps){

    if (prevProps.currentPage !== this.props.currentPage) {
      this.flatListRef.scrollToIndex({animated: true, index: 0});
    }
  }
  
  render() {
    const { 
      listPhotos, 
      selectShowFullImage, 
      error, 
      isLoading} = this.props;
    const { 
      mainBlock, 
      container, 
      horizontal } = styles;
    
    return(
      <View style={ mainBlock }>
        {isLoading && (
          <View style={[container, horizontal]}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
        {!error
          ? <>
              <FlatList 
                data={listPhotos}
                ref={(ref) => { this.flatListRef = ref; }}
                keyExtractor={item => item.id}
                renderItem={
                  ({ item }) => (
                    <ImageItem 
                      name={item.description||item.alt_description} 
                      username={item.user.username} 
                      imageThumbUrl={item.urls.thumb} 
                      imageFullUrl={item.urls.full} 
                    />
                  )
                }
              />
              <FooterButtons />
            </>
          : <ErrorLoad />
        }

        {selectShowFullImage && <FullImage />}
      </View>
    );
  };
}

const styles = StyleSheet.create({
  mainBlock: {
    paddingHorizontal: 10, 
    paddingTop: 20,
    paddingBottom: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 100
  },
});
