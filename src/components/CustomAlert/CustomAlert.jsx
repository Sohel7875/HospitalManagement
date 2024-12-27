import React from "react";
import { Modal, Button } from "react-bootstrap";
import { FaExclamationTriangle } from "react-icons/fa"; 
import styles from './CustomAlert.module.css';

const CustomAlert = ({ show, message, onClose }) => {
  return (
    <Modal show={show} onHide={onClose} centered className={styles.customAlertModal}>
      <Modal.Header closeButton className={styles.modalHeader}>
        <div className={styles.modalIcon}>
          <FaExclamationTriangle size={40} />
        </div>
        <Modal.Title className={styles.modalTitle}>Validation Error</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        <p>{message}</p>
      </Modal.Body>
      <Modal.Footer className={styles.modalFooter}>
        <Button variant="primary" onClick={onClose} className={styles.modalButton}>
          Okay
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomAlert;
