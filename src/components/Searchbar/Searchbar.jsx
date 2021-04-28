import styles from "./Searchbar.module.css";
import { Component } from "react";

class Searchbar extends Component {
  state = {
    inputValue: "",
  };

  handleInput = (e) => {
    this.setState({ inputValue: e.currentTarget.value });
  };

  render() {
    const { onSubmit } = this.props;
    return (
      <header className={styles.Searchbar}>
        <form
          className={styles.SearchForm}
          onSubmit={(e) => onSubmit(e, this.state.inputValue)}
        >
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            onInput={this.handleInput}
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
