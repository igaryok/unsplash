import { connect } from 'react-redux';

import { ImageItem } from './ImageItem';
import { setShowFullImage } from '../../store/actions';

const mapDispatchToProps = {
  setShowFullImage: data => setShowFullImage(data),
};

const Enhanced = connect(
  null,
  mapDispatchToProps
)(ImageItem);

export { Enhanced as ImageItem };