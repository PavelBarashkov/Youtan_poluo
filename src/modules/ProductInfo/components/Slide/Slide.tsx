import { Carousel } from "react-bootstrap";
import "./style.css";
import { useState } from "react";
import classes from "./carousel.module.css";

export const Slide = ({ imgs }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <>
      <Carousel
        className={`custom-carousel`}
        indicators={false}
        interval={null}
        activeIndex={activeIndex}
        onSelect={handleIndicatorClick}
      >
        {imgs &&
          imgs.map((img: string) => (
            <Carousel.Item key={img}>
              <img className="d-block w-100" src={img} alt={`Youtan Poluo`}  style={{borderRadius: 8}}/>
            </Carousel.Item>
          ))}
      </Carousel>
      <div className={classes.indicators}>
        {imgs &&
          imgs.map((img: string, index: number) => (
            <div
              key={img}
              className={`${classes.indicators_item} ${
                index === activeIndex ? classes.active : ""
              }`}
            >
              <img
                className={classes.indicators_img}
                key={img}
                src={img}
                alt={`Indicator ${img}`}
                onClick={() => handleIndicatorClick(index)}
              />
            </div>
          ))}
      </div>
    </>
  );
};
