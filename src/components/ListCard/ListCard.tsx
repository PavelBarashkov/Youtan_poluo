import React from "react";
import { Row } from "react-bootstrap";
import { CardItem } from "../CardItem/CardItem";

export const ListCard = ({ cards }: any) => {
  return (
    <Row className="g-4 d-flex ">
      {cards.length > 0 ? (
        <>
          {cards.map((card: any) => (
            <CardItem key={card.id} card={card} />
          ))}
        </>
      ) : (
        <div>Пусто</div>
      )}
    </Row>
  );
};
