import styles from "./GalleryItem.module.css";

const GalleryItem = (props) => {
  const { imgUrl, imgName, largeImgUrl } = props;
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={imgUrl}
        alt={imgName}
        data-src={largeImgUrl}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
};

export default GalleryItem;
