import React from "react";
import { MDBTooltip } from "mdb-react-ui-kit";

const ToolTip = () => {
  return (
    <>
      <MDBTooltip wrapperProps={{ color: "secondary" }} title="Hi I am Tooltip" placement="right">
        Tooltip
      </MDBTooltip>
    </>
  );
};

export default ToolTip;
