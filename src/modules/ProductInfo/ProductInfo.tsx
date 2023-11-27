import { Carousel, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { BtnPrev } from "../../components/BtnPrev/BtnPrev";
import { useEffect, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import axios from "axios";

export const ProductInfo = () => {
  const { id } = useParams();
  const [card, setCard] = useState<any>({});

  const fetch = async (id: number) => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/card/model/${id}`
    );
    return response;
  };
  const [cardFetch, loading, error] = useFetching(async (id) => {
    const response = await fetch(id);
    setCard(response.data);
  });

  useEffect(() => {
    cardFetch(id);
  }, []);
  return (
    <Container style={{marginTop: 59}}>
      <BtnPrev />
      <div>
        <Row>
          <Col>
            <Carousel indicators={false} interval={null}>
              <Carousel.Item>
                <div>
                  <img
                    src={card?.img && card.img[0]}
                    alt="Youtan Poluo"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div>
                  <img
                    src={card?.img && card.img[1]}
                    alt="Youtan Poluo"
                  />
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col>
            <div>{card?.name}</div>
            <div>{card.price}</div>
            <div>{card?.products && card?.products[0]?.sizeId}</div> // TODO добавить имена размеров
            <button>В карзину</button>
            <div>{card.description}</div>
            <div>{card?.compound}</div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
