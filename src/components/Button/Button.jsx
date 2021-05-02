import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = (props) => {
  const { onClick } = props;
  return (
    <button type="button" className={styles.Button} onClick={onClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
