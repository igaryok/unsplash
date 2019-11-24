import { ACTIONS_TYPES } from './actions';

const initialState = {
  photosList: null,
  isLoading: false,
  error: null,
  showFullImage: false,
  currentFullImageUrl: '',
  currentPhotoPage: 1,
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS_TYPES.SAVE_PHOTOS: {
      const { payload } = action;

      return ({
        ...state,
        error: null,
        photosList: payload
      });
    };
    case ACTIONS_TYPES.START_LOADING: {
     
      return ({
       ...state,
      isLoading: true,
      });
    };

    case ACTIONS_TYPES.STOP_LOADING: {
      return ({
        ...state,
        isLoading: false,
      });
    };

    case ACTIONS_TYPES.SET_LOAD_ERROR : {
      const { payload } = action;

      return ({
        ...state,
        error: payload,
        photosList: null,
        showFullImage: false,
        currentFullImageUrl: '',
      });
    };
    
    case ACTIONS_TYPES.CHANGE_SHOW_FULL_IMAGE: {
      const { payload } = action;

      return ({
        ...state,
        showFullImage: payload.bool,
        currentFullImageUrl: payload.imgUrl,
      });
    };

    case ACTIONS_TYPES.CHANGE_CURRENT_PAGE: {
      const { payload } = action;

      return ({
        ...state,
        currentPhotoPage: payload,
      });
    }

  default:
    return state;
  }
}
