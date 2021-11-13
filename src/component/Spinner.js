import React from "react";
import { MDBSpinner, MDBBtn } from "mdb-react-ui-kit";

const Spinner = () => {
  return (
    <div>
      <MDBSpinner className="m-2" style={{ width: "3rem", height: "3rem" }}>
        <span className="visually-hidden">Loadin...</span>
      </MDBSpinner>
      <MDBSpinner
        grow
        className="m-2"
        style={{ width: "3rem", height: "3rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
      <br />
      <br />
      <MDBBtn disabled className="m-2">
        <MDBSpinner size="sm" role="status" tag="span" />
        <span className="visually-hidden">Loading...</span>
      </MDBBtn>
      <MDBBtn disabled style={{ marginBottom: "8px" }}>
        <MDBSpinner size="sm" role="status" tag="span" className="me-2" />
        Loading...
      </MDBBtn>
      <br />
      <br />
      <MDBBtn disabled className="m-2">
        <MDBSpinner grow size="sm" role="status" tag="span" />
        <span className="visually-hidden">Loading...</span>
      </MDBBtn>
      <MDBBtn disabled style={{ marginBottom: "8px" }}>
        <MDBSpinner grow size="sm" role="status" tag="span" className="me-2" />
        Loading...
      </MDBBtn>
    </div>
  );
};

export default Spinner;
