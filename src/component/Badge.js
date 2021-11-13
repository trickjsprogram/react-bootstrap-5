import React from "react";
import { MDBBadge, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

const Badge = () => {
  return (
    <div>
      <h4>
        Hello React
        <MDBBadge className="m-2">MDB</MDBBadge>
      </h4>
      <MDBBtn>
        Notification
        <MDBBadge className="ms-2" color="danger">
          4
        </MDBBadge>
      </MDBBtn>
      <br />
      <br />
      <a href="" className="mx-3">
        <MDBIcon fas icon="envelope" size="lg" />
        <MDBBadge notification pill color="danger">
          12
        </MDBBadge>
      </a>
    </div>
  );
};

export default Badge;
