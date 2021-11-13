import React, { useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";

const Tab = () => {
  const [active, setActive] = useState("tab1");

  const handleActiveTab = (value) => {
    if (value === active) {
      return;
    }
    setActive(value);
  };
  return (
    <>
      <MDBTabs justify className="mb-3">
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleActiveTab("tab1")}
            active={active === "tab1"}
          >
            Tab 1
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleActiveTab("tab2")}
            active={active === "tab2"}
          >
            Tab 2
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleActiveTab("tab3")}
            active={active === "tab3"}
          >
            Tab 3
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      <MDBTabsContent>
        <MDBTabsPane show={active === "tab1"}>
          Tab 1 content goes here
        </MDBTabsPane>
        <MDBTabsPane show={active === "tab2"}>
          Tab 2 content goes here
        </MDBTabsPane>
        <MDBTabsPane show={active === "tab3"}>
          Tab 3 content goes here
        </MDBTabsPane>
      </MDBTabsContent>
    </>
  );
};

export default Tab;
