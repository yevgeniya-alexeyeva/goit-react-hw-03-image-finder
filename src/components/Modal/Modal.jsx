import { Component } from "react";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  closeModal = (e) => {
    const { onClose } = this.props;
    if (e.code === "Escape") onClose();
  };

  componentDidMount() {
    window.addEventListener("keydown", this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeModal);
  }

  render() {
    const { url, name, onClose } = this.props;
    return createPortal(
      <div
        className={styles.Overlay}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div className={styles.Modal}>
          <img className={styles.Image} src={url} alt={name} />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
