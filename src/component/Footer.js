import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter
      margi
      backgroundColor="light"
      className="text-center footer text-lg-left"
    >
      <MDBContainer className="p-4 pb-0">
        <form>
          <MDBRow>
            <MDBCol size="auto" className="mb-4 md-md-0">
              <p className="pt-2">
                <strong>Sign up for our newsletter</strong>
              </p>
            </MDBCol>
            <MDBCol md="5" size="12" className="mb-4 mb-md-0">
              <MDBInput type="text" label="Email Address" />
            </MDBCol>
            <MDBCol size="auto" className="mb-4 md-md-0">
              <MDBBtn>Subscribe</MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>
      <div
        style={{ backgroundColor: "rgba(0,0,0,0.2" }}
        className="text-center p-3"
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-dark" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
