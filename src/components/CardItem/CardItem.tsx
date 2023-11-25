import { Card, Carousel, Col } from "react-bootstrap";
import classesCardItem from "./cardItem.module.css";
import { ColorList } from "../ColorList/ColorList";
import { SizeList } from "../SizeList/SizeList";
import { AllSizes } from "../../helpers/AllSizes";
import "./CardItem.css";
import { useNavigate } from "react-router-dom";
import { PRODUCT_ROUTE } from "../../routes/consts";

export const CardItem = ({ card }: any) => {
  const sizes = AllSizes(card.sizes);
  const navigate = useNavigate();

  return (
    <Col lg={4} sm={6} className={classesCardItem.col}>
      <Card
        className={classesCardItem.card}
        onClick={() => navigate(`${PRODUCT_ROUTE}${card.modelId}`)}
      >
        <Card.Header className={classesCardItem.header}>
          <Carousel indicators={false} interval={null}>
            <Carousel.Item className={classesCardItem.item}>
              <div className={classesCardItem.carousel_image}>
                <img
                  className={classesCardItem.img}
                  src={card?.imgs[0]}
                  alt="Youtan Poluo"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className={classesCardItem.carousel_image}>
                <img
                  className={classesCardItem.img}
                  src={card?.imgs[1]}
                  alt="Youtan Poluo"
                />
              </div>
            </Carousel.Item>
          </Carousel>
        </Card.Header>
        <Card.Body className={classesCardItem.body}>
          <Card.Title className={classesCardItem.title}>
            {card?.name}
          </Card.Title>
          <Card.Text className={classesCardItem.price}>
            {card?.price} &#8381;
          </Card.Text>
          <div className={classesCardItem.card_info}>
            <ColorList colors={card.colors} />
            <SizeList sizes={sizes} />
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
