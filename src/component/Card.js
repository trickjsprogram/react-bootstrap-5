import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import data from "../data";

const Card = () => {
  return (
    <div>
      <div className="row">
        {data.map((item) => (
          <div className="col-md-4">
            <MDBCard style={{ maxWidth: "22rem" }}>
              <MDBCardImage src={item.image} position="top" alt={item.title} />
              <MDBCardBody>
                <MDBCardTitle>{item.title}</MDBCardTitle>
                <MDBCardText>{item.description}</MDBCardText>
                <MDBBtn>Button</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
