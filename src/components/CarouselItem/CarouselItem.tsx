import React from "react";
import { Carousel } from "react-bootstrap";
import classes from "./carouselItem.module.css";
import into from "../../assets/img/image.png";

interface ICarouselItemProps {
  img: string;
}

export const CarouselItem = ({ img }: ICarouselItemProps) => {
  // if (!img) {
  //   return (
  //     <Carousel.Item className={classes.item}>
  //       <div className={classes.carousel_image}>
  //         <img className={classes.img} src={into} alt="Youtan Poluo" />
  //       </div>
  //     </Carousel.Item>
  //   );
  // }
  return (
    <Carousel.Item >
      <div style={{width: '100%', height: 50, background: 'red'}}>
        {/* <img className={classes.img} src={img} alt="Youtan Poluo" /> */}
      </div>
    </Carousel.Item>
  );
};
