import React from "react";
import { Button, Modal } from "react-bootstrap";

const MessageBox = props => {
  const title = props.title ? props.title : "";
  const body = props.body ? props.body : "";
  const buttons = props.buttons ? props.buttons : [];
  const size = props.size ? props.size : "lg";

  const handleClose = () => {};
  return (
    <Modal size={size} show onHide={handleClose} centered>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{body}</p>
      </Modal.Body>
      <Modal.Footer>
        {buttons.map(button => (
          <Button variant={button.variant} onClick={button.action}>
            {button.text}
          </Button>
        ))}
      </Modal.Footer>
    </Modal>
  );
};

export default MessageBox;
