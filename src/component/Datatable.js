import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

const data = [
  {
    id: 1,
    firstName: "Priyansh",
    lastName: "Kumar",
    email: "priyansh@gmail.com",
  },
  {
    id: 2,
    firstName: "Hemant",
    lastName: "Kumar",
    email: "Hemant@gmail.com",
  },
  {
    id: 3,
    firstName: "Raj",
    lastName: "Kumar",
    email: "raj@gmail.com",
  },
];

const Datatable = () => {
  return (
    <MDBTable>
      <MDBTableHead dark>
        <tr>
          <th scope="col">No.</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {data.map((item, index) => {
          return (
            <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
            </tr>
          );
        })}
      </MDBTableBody>
    </MDBTable>
  );
};

export default Datatable;
