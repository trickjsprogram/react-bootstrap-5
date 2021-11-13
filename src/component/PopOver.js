import React from "react";
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader } from "mdb-react-ui-kit";

const PopOver = () => {
  return (
    <>
      <MDBPopover size="lg" color="danger" btnChildren="PopOver" dismiss>
        <MDBPopoverHeader>Popover Title</MDBPopoverHeader>
        <MDBPopoverBody>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </MDBPopoverBody>
      </MDBPopover>
    </>
  );
};

export default PopOver;
