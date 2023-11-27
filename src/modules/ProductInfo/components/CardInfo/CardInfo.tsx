import React from "react";
import classes from "./cardInfo.module.css";
import { Dropdown } from "react-bootstrap";
import { AllSizes } from "../../../../helpers/AllSizes";
import { ColorItem } from "../../../../UI/ColourItem/ColourItem";
import { useNavigate } from "react-router-dom";
import { PRODUCT_ROUTE } from "../../../../routes/consts";

export const CardInfo = ({ card }: any) => {
  const navigate = useNavigate();

  const sizes = AllSizes(card.size);
  return (
    <div className={classes.container}>
      <div className={classes.name}>{card?.name}</div>
      <div className={classes.price}>{card.price} &#8381;</div>
      <Dropdown>
        <Dropdown.Toggle className={classes.sizes}>
          {card.size && card.size[0].name}
        </Dropdown.Toggle>

        <Dropdown.Menu className={classes.menu}>
          {card.size &&
            sizes.map((size: any) => (
              <Dropdown.Item
                onClick={() => console.log(size.id)}
                className={classes.menu_item}
              >
                {size.name}
              </Dropdown.Item>
            ))}
        </Dropdown.Menu>
      </Dropdown>
      <div className={classes.colors}>
        {card.colors &&
          card.colors.map((color: any) => (
            <ColorItem
            hanlerClick={() => navigate(`${PRODUCT_ROUTE}/${color.modelId}`)}
              color={color.color}
            />
          ))}
      </div>
      <div>{card?.products && card?.products[0]?.sizeId}</div>
      <button className={classes.btn}>В карзину</button>
      <div>{card.description}</div>
      <div className={classes.compound}>
        <span>Состав:</span> {card?.compound}
      </div>
    </div>
  );
};
