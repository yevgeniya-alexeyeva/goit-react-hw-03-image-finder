import styles from "./GalleryItem.module.css";
import PropTypes from "prop-types";

const GalleryItem = (props) => {
  const { imgUrl, imgName, onImgClick } = props;
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={imgUrl}
        alt={imgName}
        className={styles.ImageGalleryItemImage}
        loading="lazy"
        onClick={onImgClick}
      />
    </li>
  );
};

GalleryItem.propTypes = {
  imgUrl: PropTypes.string,
  imgName: PropTypes.string,
  onImgClick: PropTypes.func,
};
export default GalleryItem;
