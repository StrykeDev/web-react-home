import React, { Component } from "react";
import Modal from "./Modal";

class Popup extends Component {
  constructor(props) {
    super(props);

    if (Popup.instance) {
      return Popup.instance;
    } else {
      Popup.instance = this;
    }

    this.state = {
      showModal: false,
      modal: {
        title: "",
        body: "",
        buttons: [],
        size: ""
      }
    };
  }

  showModal = (
    title,
    body,
    buttons = [
      { text: "Ok", variant: "primary", onClick: () => console.log("OK") }
    ],
    size = "lg"
  ) => {
    this.setState({
      showModal: true,
      modal: {
        title,
        body,
        buttons,
        size
      }
    });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <>
        <Modal
          show={this.state.showModal}
          title={this.state.modal.title}
          body={this.state.modal.body}
          buttons={this.state.modal.buttons}
          size={this.state.modal.size}
          onClose={this.closeModal}
        />
      </>
    );
  }
}

export default Popup;
