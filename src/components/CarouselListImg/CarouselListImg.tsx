import { Carousel } from "react-bootstrap";
import { CarouselItem } from "../CarouselItem/CarouselItem";
import classes from "./сarouselListImg.module.css";
import into from "../../assets/img/into.png";

interface ICarouselListImgProps {
  images: string[];
}

export const CarouselListImg = ({ images }: ICarouselListImgProps) => {
  if (images.length === 0) {
    return (
      <Carousel indicators={false} interval={null} controls={false}>
        <Carousel.Item className={classes.item}>
          <div className={classes.carousel_image}>
            <img className={classes.img} src={into} alt="Youtan Poluo" />
          </div>
        </Carousel.Item>
      </Carousel>
    );
  }
  return (
    <Carousel indicators={false} interval={null}>
      {images &&
        images.map((img: string) => (
          <Carousel.Item className={classes.item}>
            <div className={classes.carousel_image}>
              <img className={classes.img} src={img} alt="Youtan Poluo" />
            </div>
          </Carousel.Item>
        ))}
    </Carousel>
  );
};
