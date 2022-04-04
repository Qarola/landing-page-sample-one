import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import NavBar from "../NavBar/NavBar";
import image1 from "../../img/image11.jpg";
import image2 from "../../img/image22.jpg";
import image3 from "../../img/image33.jpg";

const Carousel = () => {
  return (
    <MDBCarousel showIndicators showControls fade className="shadow-3-strong">
      <MDBCarouselInner>
        <NavBar />
        <MDBCarouselItem className="active">
          <MDBCarouselElement className="resize1" src={image1} />
          <div
            className="mask"
            style={{
              background:
                "linear-gradient(45deg, rgba(29, 236, 197, 0.7), rgba(91, 14, 214, 0.7) 100%)",
            }}
          ></div>
          <MDBCarouselCaption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement className="resize2" src={image2} />
          <div
            className="mask"
            style={{
              backgroundColor: "rgba(251, 251, 251, 0.3)",
            }}
          ></div>
          <MDBCarouselCaption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement className="resize3" src={image3} />
          <div
            className="mask"
            style={{ backgroundColor: "rgba(178, 60, 253, 0.6)" }}
          ></div>
          <MDBCarouselCaption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
};
export default Carousel;
