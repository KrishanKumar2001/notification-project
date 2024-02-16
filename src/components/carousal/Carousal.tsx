import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import { useState, useEffect } from "react";

const Carousal = () => {
  const [index, setIndex] = useState<number>(0);
  const interval = 3500; 
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1)); 
    }, interval);
    return () => clearInterval(timer);
  }, []);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://app.fireflink.com/static/media/leftBannerfireflink.f2f2bbfa.png"
          alt="First slide"
          style={{ height: "100vh" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="	https://www.fireflink.com/static/media/fireassets.fb437e7174fd3fa0932c.jpg"
          alt="Second slide"
          style={{ height: "100vh" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.fireflink.com/static/media/home.09bde90b735a5bdbf0f6.jpg"
          alt="Third slide"
          style={{ height: "100vh" }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousal;
