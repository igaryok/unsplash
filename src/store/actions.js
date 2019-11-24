const BASE_URL = 'https://api.unsplash.com/photos/';
const CLIENT_ID = 'cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';

export const ACTIONS_TYPES = {
  SAVE_PHOTOS: 'SAVE_PHOTOS',
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
  SET_LOAD_ERROR: 'SET_LOAD_ERROR',
  CHANGE_SHOW_FULL_IMAGE: 'CHANGE_SHOW_FULL_IMAGE', 
  CHANGE_CURRENT_PAGE: 'CHANGE_CURRENT_PAGE',
};

const savePhotos = data => ({
  type: ACTIONS_TYPES.SAVE_PHOTOS,
  payload: data,
});

const startLoading = () => ({
  type: ACTIONS_TYPES.START_LOADING,
});

const stopLoading = () => ({
  type: ACTIONS_TYPES.STOP_LOADING,
});

const setLoadingError = error => ({
  type: ACTIONS_TYPES.SET_LOAD_ERROR,
  payload: error,
});

const changeShowFullImage = data => ({
  type: ACTIONS_TYPES.CHANGE_SHOW_FULL_IMAGE,
  payload: data,
}); 

const changeCurrentPage = numberPage => ({
  type: ACTIONS_TYPES.CHANGE_CURRENT_PAGE,
  payload: numberPage,
});

const setCurrentPage = number => (dispatch) => {
  if (number < 1) {
    number = 1;
  }

  dispatch(changeCurrentPage(number));
}

export const setShowFullImage = data => (dispatch) => {
  dispatch(changeShowFullImage(data));
}

export const loadPhotos = (page) => (dispatch) => {
  dispatch(setCurrentPage(page));
  dispatch(startLoading());
  fetch(`${BASE_URL}?client_id=${CLIENT_ID}&page=${page}`)
    .then(response => response.json())
    .then(data => dispatch(savePhotos(data)))
    .catch(error => dispatch(setLoadingError(error)))
    .finally(() => {dispatch(stopLoading())});   
}
