import { Component } from "react";
import GalleryItem from "../GalleryItem";
import Button from "../Button";
import Loader from "react-loader-spinner";
import fetchImagesWithQuery from "../../api/api";
import styles from "./ImageGallery.module.css";
import PropTypes from "prop-types";

class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    isLoading: false,
  };

  static propTypes = {
    query: PropTypes.string.isRequired,
    onImgClick: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { query } = this.props;

    if (prevProps.query !== query) {
      this.setState(() => ({ images: [], page: 1 }), this.showImages);
    }
  }

  showImages = () => {
    const { page } = this.state;
    const { query } = this.props;

    this.setState({ isLoading: true });

    fetchImagesWithQuery(query, page)
      .then((response) => {
        if (response.data.hits.length === 0)
          alert("No result for this request. Try again");

        this.setState((prevState) => ({
          images: [...prevState.images, ...response.data.hits],
          page: prevState.page + 1,
        }));
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      })
      .catch((error) => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { images, isLoading } = this.state;
    const { onImgClick } = this.props;

    return (
      <>
        <ul className={styles.ImageGallery}>
          {images.map((image) => {
            const { query } = this.props;
            return (
              <GalleryItem
                key={image.id}
                imgUrl={image.webformatURL}
                name={`${query} image`}
                onImgClick={() => onImgClick(image.largeImageURL, query)}
              />
            );
          })}
        </ul>
        {isLoading ? (
          <Loader
            type="ThreeDots"
            color="#3f51b5"
            height={100}
            width={100}
            timeout={3000}
          />
        ) : (
          images.length > 0 && <Button onClick={this.showImages} />
        )}
      </>
    );
  }
}

export default ImageGallery;
