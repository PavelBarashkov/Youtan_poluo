import { Carousel, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { BtnPrev } from "../../components/BtnPrev/BtnPrev";
import { useEffect, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import axios from "axios";
import { Slide } from "./components/Slide/Slide";
import { CardInfo } from "./components/CardInfo/CardInfo";

export const ProductInfo = () => {
  const { id } = useParams();
  const [card, setCard] = useState<any>({});

  const fetch = async (id: number, cardId: number) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/card/model/${id}`, {cardId}
    );
    return response;
  };
  const [cardFetch, loading, error] = useFetching(async (id) => {
    const response = await fetch(id, 1);
    setCard(response.data);
  });

  useEffect(() => {
    cardFetch(id);
  }, [id]);
  return (
    <Container style={{ marginTop: 59 }}>
      <BtnPrev />
      <div>
        <Row className="g-4 d-flex justify-content-between">
          <Col md={4}>
            <Slide imgs={card.img} />
          </Col>
          <Col md={7}>
            <CardInfo card={card}/>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
