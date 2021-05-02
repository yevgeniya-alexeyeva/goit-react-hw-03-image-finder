import { useRef } from "react";
import styles from "./Searchbar.module.css";
import PropTypes from "prop-types";

const Searchbar = (props) => {
  const { onSubmit } = props;
  const ref = useRef(null);
  return (
    <header className={styles.Searchbar}>
      <form
        className={styles.SearchForm}
        onSubmit={(e) => onSubmit(e, ref.current.value)}
      >
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          ref={ref}
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
