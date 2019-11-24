import React, { PureComponent } from 'react';
import { 
  FlatList, 
  View, 
  StyleSheet, 
  ActivityIndicator, 
  Button } from 'react-native';

import { ImageItem } from '../ImageItem';
import { FullImage } from '../FullImage';


export class ImageList extends PureComponent {
  componentDidMount(){
    const { loadPhotos } = this.props; 

    loadPhotos(1);
  };

  componentDidUpdate(prevProps){
    const { listPhotos } = this.props;

    if (prevProps.currentPage !== this.props.currentPage) {
      listPhotos && this.flatListRef.scrollToIndex({animated: true, index: 0});
    }
  }
  
  render() {
    const { 
      listPhotos, 
      selectShowFullImage, 
      error, 
      isLoading, 
      loadPhotos, 
      currentPage } = this.props;
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
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
});

