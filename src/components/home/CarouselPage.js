import React from "react";
import carr5 from "../../img/carousel/carr5.jpg";
import carr2 from "../../img/carousel/carr2.jpg";
import carr3 from "../../img/carousel/carr1.jpg";
import { Carousel } from "react-bootstrap";
import Typical from "react-typical";

const CarouselPage = () => {
  return (
    <Carousel interval={7500} style={{ position: "relative", zIndex: "0" }}>
      <Carousel.Item>
        <img
          style={{ maxHeight: "74vh" }}
          className="d-block w-100"
          src={carr5}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="carousel-caption">
            <h1>
              Welcome
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  " to the EMBS",
                  1500,
                  " ay faza",
                  1500,
                  " atiwni text xD",
                  1500,
                ]}
              />
            </h1>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ maxHeight: "74vh" }}
          className="d-block w-100"
          src={carr3}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ maxHeight: "74vh" }}
          className="d-block w-100"
          src={carr2}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselPage;