import { connect } from 'react-redux';

import { FooterButtons } from './FooterButtons';
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
)(FooterButtons);

export { Enhanced as FooterButtons };
