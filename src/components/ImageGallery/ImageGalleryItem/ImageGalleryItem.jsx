import React from 'react';
import PropTypes from 'prop-types';

import s from './image-gallary-item.module.scss';

const ImageGalleryItem = ({ imgURL, user, onOpenModal }) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img className={s.ImageGalleryItemImage}
           src={imgURL} alt={user} onClick={onOpenModal} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  imgURL: PropTypes.string.isRequired,
  user: PropTypes.string,
  onOpenModal: PropTypes.func,
};

export default ImageGalleryItem;
