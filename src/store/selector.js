import { createSelector } from 'reselect';

const rootSelector = state => state;

export const selectListPhotos = createSelector(
  rootSelector,
  ({ photosList }) => {
    if (!photosList) {
      return null;
    }
    return photosList;
  }
);

export const selectErrorLoading = createSelector(
  rootSelector,
  ({ error }) => error
);

export const selectIsLoading = createSelector(
  rootSelector,
  ({ isLoading }) => isLoading
);

export const selectShowFullImage = createSelector(
  rootSelector,
  ({ showFullImage }) => showFullImage
);  

export const selectFullImageUrl = createSelector(
  rootSelector,
  ({currentFullImageUrl }) => currentFullImageUrl 
);

export const selectCurrentPage = createSelector(
  rootSelector,
  ({ currentPhotoPage }) => currentPhotoPage
);
