import "./App.css";
import { Component } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Modal from "./components/Modal";

class App extends Component {
  state = {
    query: "",
    modalIsOpen: false,
    largeImgUrl: "",
    largeImgName: "",
  };

  getQuery = (e, query) => {
    e.preventDefault();
    this.setState({ query: query.trim().split(" ").join("+") });
    e.currentTarget.reset();
  };

  toggleModal = () => {
    this.setState(({ modalIsOpen }) => ({
      modalIsOpen: !modalIsOpen,
    }));
  };
  showBigImage = (url, name) => {
    this.toggleModal();

    this.setState({
      largeImgUrl: url,
      largeImgName: name,
    });
  };

  render() {
    const { query, modalIsOpen, largeImgUrl, largeImgName } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.getQuery} />
        <ImageGallery query={query} onImgClick={this.showBigImage} />
        {modalIsOpen && (
          <Modal
            url={largeImgUrl}
            name={largeImgName}
            onClose={this.toggleModal}
          />
        )}
      </div>
    );
  }
}

export default App;
