import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';

import { ImageList } from './src/components/ImagesList';
import { store } from './src/store';

export default App = () => {
  
    return (
      <Provider store={store}>
        <ImageList />
      </Provider>
    );
  }
