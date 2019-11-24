import React from 'react';
import { Provider } from 'react-redux';

import { ImageList } from '../components/ImagesList';
import { store } from '../store';

export const MainScreen = () => (
  <Provider store={store}>
    <ImageList />
  </Provider>
);
