import { connect } from 'react-redux';

import { FullImage } from './FullImage';
import { setShowFullImage } from '../../store/actions';
import { selectFullImageUrl } from '../../store/selector';

const mapStateToProps = state => ({
  fullImageUrl: selectFullImageUrl(state),
});

const mapDispatchToProps = {
  setShowFullImage: (data) => setShowFullImage(data),
};

const Enhanced = connect(
  mapStateToProps,
  mapDispatchToProps
)(FullImage);

export { Enhanced as FullImage };
