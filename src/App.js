import "./App.css";
import { Component } from "react";
import Searchbar from "./components/Searchbar";

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
      </div>
    );
  }
}

export default App;
