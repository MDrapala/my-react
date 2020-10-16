import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Video = () => (
  <div>
    <h1>Bandes Annonce</h1>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/gM3mf5Ar0xs/maxresdefault.jpg"
          alt="CRAWL"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/QtVB92cfriE/maxresdefault.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s2.dmcdn.net/v/RdptJ1TojHxQdULNC/x1080"
          alt="SONIC"
        />
      </Carousel.Item>
    </Carousel>
  </div>
);

export default Video;
