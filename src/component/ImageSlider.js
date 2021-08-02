import React from "react";
import {
  MDBCarouselElement,
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselItem,
  MDBCarouselInner,
} from "mdb-react-ui-kit";
import data from "../data";

const ImageSlider = () => {
  return (
    <MDBCarousel showControls showIndicators>
      <MDBCarouselInner>
        {data.map((item, index) => (
          <MDBCarouselItem itemId={index}>
            <MDBCarouselElement
              src={item.image}
              alt={item.title}
              style={{ height: "700px" }}
            />
            <MDBCarouselCaption>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        ))}
      </MDBCarouselInner>
    </MDBCarousel>
  );
};

export default ImageSlider;
