import React, { useState } from "react";
import { MDBBtn, MDBCollapse } from "mdb-react-ui-kit";

const Collapse = () => {
  const [show, setshow] = useState(false);
  return (
    <>
      <MDBBtn onClick={() => setshow(!show)}>Collapse</MDBBtn>
      <MDBCollapse show={show}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries
      </MDBCollapse>
    </>
  );
};

export default Collapse;
