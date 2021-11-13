import React from 'react';
import {MDBBtn, MDBIcon} from "mdb-react-ui-kit";

const ButtonMDB = () => {
    return (
        <div>
            <MDBBtn>Primary</MDBBtn>
            <MDBBtn color="secondary" className="mx-2">Secondary</MDBBtn>
            <MDBBtn color="success" className="mx-2">Success</MDBBtn>
            <MDBBtn outline className="mx-2">Outline</MDBBtn>
            <MDBBtn rounded color="danger" className="mx-2">Rounded</MDBBtn>
            <MDBBtn rounded outline color="secondary" className="mx-2">Rounded Outline</MDBBtn>
            <br />
            <br />
            <MDBBtn floating size="lg" tag="a">
               <MDBIcon fab icon="facebook-f" />
            </MDBBtn>
            <MDBBtn className="m-1" style={{backgroundColor: "#55acee"}} href="#">
               <MDBIcon fab icon="twitter" />
            </MDBBtn>
            <MDBBtn style={{marginBottom: "5px", backgroundColor: "#55acee"}} href="#">
               <MDBIcon fab icon="twitter" /> Twitter
            </MDBBtn>
        </div>
    )
}

export default ButtonMDB
