import React, { useState } from "react";
import { MDBValidation, MDBInput, MDBBtn, MDBCheckbox } from "mdb-react-ui-kit";

const FormValidation = () => {
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    state: "",
    zip: "",
  });
  const { firstName, lastName, username, city, state, zip } = formValue;

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <MDBValidation
      className="row g-3"
      noValidate
      style={{ marginTop: "100px" }}
    >
      <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        <MDBInput
          value={firstName}
          name="firstName"
          onChange={onChangeInput}
          required
          label="First Name"
          validation="Please provide a first name"
          invalid
        />
        <br />
        <MDBInput
          value={lastName}
          name="lastName"
          onChange={onChangeInput}
          required
          label="Last Name"
          validation="Please provide a last name"
          invalid
        />
        <br />
        <div className="input-group has-validation">
          <span className="input-group-text">@</span>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            required
          />
          <div className="invalid-feedback">Please choose unique username</div>
        </div>
        <br />
        <MDBInput
          value={city}
          name="city"
          onChange={onChangeInput}
          required
          label="City"
          validation="Please provide a valid city"
          invalid
        />
        <br />
        <MDBInput
          value={zip}
          name="zip"
          onChange={onChangeInput}
          required
          label="Zip"
          validation="Please provide a valid zip"
          invalid
        />
        <br />
        <MDBInput
          value={state}
          name="state"
          onChange={onChangeInput}
          required
          label="State"
          validation="Please provide a valid state"
          invalid
        />
        <br />
        <MDBCheckbox
          label="Agree to terms and conditions"
          validation="You must agree before submitting"
          invalid
          required
        />
        <br />
        <MDBBtn type="submit" color="primary">
          Submit
        </MDBBtn>
      </div>
    </MDBValidation>
  );
};

export default FormValidation;
