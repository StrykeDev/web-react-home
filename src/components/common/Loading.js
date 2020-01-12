import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = props => {
  return (
    <div className="d-flex align-items-center justify-content-center flex-fill">
      <Spinner animation="grow" className="m-2" />
      <Spinner animation="grow" className="m-2" />
      <Spinner animation="grow" className="m-2" />
    </div>
  );
};

export default Loading;
