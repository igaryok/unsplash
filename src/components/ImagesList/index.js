import { connect } from 'react-redux';

import { ImageList } from './ImageList';
import { loadPhotos } from '../../store/actions';
import { 
  selectListPhotos, 
  selectIsLoading, 
  selectErrorLoading,
  selectShowFullImage,
  selectCurrentPage } from '../../store/selector';


const mapStateToProps = state => ({
  listPhotos: selectListPhotos(state),
  isLoading: selectIsLoading(state),
  error: selectErrorLoading(state),
  selectShowFullImage: selectShowFullImage(state),
  currentPage: selectCurrentPage(state),
});

const mapDispatchToProps = {
  loadPhotos,
};

const Enhanced = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageList);

export { Enhanced as ImageList };
