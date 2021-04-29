import "./App.css";
import { Component } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";

class App extends Component {
  state = {
    query: "",
  };

  getQuery = (e, query) => {
    e.preventDefault();
    this.setState({ query: query });
    e.currentTarget.reset();
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.getQuery} />
        <ImageGallery query={this.state.query} />
      </div>
    );
  }
}

export default App;
