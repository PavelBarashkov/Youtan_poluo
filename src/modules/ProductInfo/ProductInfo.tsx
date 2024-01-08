import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { BtnPrev } from "../../components/BtnPrev/BtnPrev";
import { useEffect } from "react";
import { Slide } from "./components/Slide/Slide";
import { CardInfo } from "./components/CardInfo/CardInfo";
import { useAppDispatch } from "../../app/hooks";
import { useSelector } from "react-redux";
import { getCardInfo } from "./slice/card";
import { CustomContainer } from "./components/CustomContainer/CustomContainer";
import { MySpinner } from "../../UI/MySpinner/MySpinner";

export const ProductInfo = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { card, selected, loading, error } = useSelector(
    (state: any) => state.cardInfo
  );
  const modelId = selected.color.modelId;

  useEffect(() => {
    dispatch(getCardInfo(Number(id)));
  }, []);

  return (
    <CustomContainer>
      <BtnPrev />
      {loading ? (
        <MySpinner />
      ) : (
        <>
          {error ? (
            <div>{error}</div>
          ) : (
            <div>
              <Row className="d-flex justify-content-between">
                <Col md={4}>
                  <Slide imgs={card.images} />
                </Col>
                <Col md={7}>
                  <CardInfo card={card} />
                </Col>
              </Row>
            </div>
          )}
        </>
      )}
    </CustomContainer>
  );
};
