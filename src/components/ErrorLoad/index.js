import { connect } from 'react-redux';

import { ErrorLoad } from './ErrorLoad';
import { loadPhotos } from '../../store/actions';
import { selectCurrentPage } from '../../store/selector';


const mapStateToProps = state => ({
  currentPage: selectCurrentPage(state),
});

const mapDispatchToProps = {
  loadPhotos,
};

const Enhanced = connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorLoad);

export { Enhanced as ErrorLoad };
