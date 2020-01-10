import React from "react";
import { Button, Modal } from "react-bootstrap";

const MessageBox = props => {
  const handleClick = event => {
    props.onClose();
    event();
  };

  return (
    <Modal
      show={props.show}
      onHide={() => props.onClose()}
      size={props.size}
      centered
    >
      {props.title ? (
        <Modal.Header>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
      ) : (
        ""
      )}
      {props.body ? (
        <Modal.Body>
          <p>{props.body}</p>
        </Modal.Body>
      ) : (
        ""
      )}

      <Modal.Footer>
        {props.buttons.map((button, i) => (
          <Button
            key={i}
            variant={button.variant}
            onClick={() => handleClick(button.onClick)}
          >
            {button.text}
          </Button>
        ))}
      </Modal.Footer>
    </Modal>
  );
};

export default MessageBox;
