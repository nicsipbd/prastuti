import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
const CustomModal = (props) => {
  const { show, handleClose, heading, body } = props;
  if (heading === "Success" && !show) {
    window.location.reload(true);
  }
  return (
    <Modal
      show={show}
      backdrop="static"
      // keyboard={false}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>{heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </Modal.Body>
      <Modal.Footer>
        <Button id="close" variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
