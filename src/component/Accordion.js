import React from "react";
import { MDBAccordionItem, MDBAccordion } from "mdb-react-ui-kit";

const data = [
  {
    title: "Accordion 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
  },
  {
    title: "Accordion 2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
  },
  {
    title: "Accordion 3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
  },
];

const Accordion = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <MDBAccordion
        style={{ margin: "auto", maxWidth: "800px", alignContent: "center" }}
      >
        {data.map((item) => (
          <MDBAccordionItem collapseId={item.title} headerTitle={item.title}>
            {item.description}
          </MDBAccordionItem>
        ))}
      </MDBAccordion>
    </div>
  );
};

export default Accordion;
