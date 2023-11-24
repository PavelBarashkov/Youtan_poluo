import { Row } from "react-bootstrap";
import { CardItem } from "../CardItem/CardItem";

export const ListCard = ({ cards }: any) => {
  if (!cards.length) {
    return (
        <div>Пусто</div>
    )
  }
  return (
    <Row className="g-4 d-flex ">
      {cards.map((card: any) => (
        <CardItem key={card.modelId} card={card} />
      ))}
    </Row>
  );
};
