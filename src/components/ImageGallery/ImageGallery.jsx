import { Component } from "react";
import GalleryItem from "../GalleryItem";
import fetchImagesWithQuery from "../../api/api";
import styles from "./ImageGallery.module.css";

class ImageGallery extends Component {
  state = {
    images: [],
  };
  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query)
      fetchImagesWithQuery(this.props.query).then((response) =>
        this.setState({ images: response.data.hits })
      );
  }
  render() {
    const { images } = this.state;
    return (
      <ul className={styles.ImageGallery}>
        {images.map((image) => {
          return (
            <GalleryItem
              key={image.id}
              imgUrl={image.webformatURL}
              name={`${this.props.query} image`}
              largeImgUrl={image.largeImageURL}
            />
          );
        })}
      </ul>
    );
  }
}

export default ImageGallery;
