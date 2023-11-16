import { Col, Container, Row } from "react-bootstrap";
import { ListCard } from "../../components/ListCard/ListCard";
import { FilterAndSort } from "./components/FilterAndSort/FilterAndSort";
import { CustomContainer } from "./components/CustomContainer/CustomContainer";
import { useAppDispatch } from "../../app/hooks";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCard } from "./store/slice/allCardsSlice";

export const Shope = () => {
  const dispatch = useAppDispatch();
  const { cards, typeId, page, loading, error } = useSelector(
    (state: any) => state.allCards
  );
  const params = {
    typeId,
    page,
  };
  useEffect(() => {
    dispatch(fetchCard(params));
  }, [typeId]);

  return (
    <Container>
      <CustomContainer>
        <Row className="g-4">
          <Col lg={3} xl={2}>
            <FilterAndSort />
          </Col>
          <>
            {loading ? (
              <div>Загрузка</div>
            ) : (
              <>
                {error ? (
                  <div>{error}</div>
                ) : (
                  <>
                    <Col lg={9} xl={10}>
                      <ListCard cards={cards} />
                    </Col>
                  </>
                )}
              </>
            )}
          </>
        </Row>
      </CustomContainer>
    </Container>
  );
};
