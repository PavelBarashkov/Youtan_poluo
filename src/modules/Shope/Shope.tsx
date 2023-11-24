import { Col, Container, Row, Spinner } from "react-bootstrap";
import { ListCard } from "../../components/ListCard/ListCard";
import { FilterAndSort } from "./components/FilterAndSort/FilterAndSort";
import { CustomContainer } from "./components/CustomContainer/CustomContainer";
import { useAppDispatch } from "../../app/hooks";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { fetchCard, setPage } from "./store/slice/allCardsSlice";
import { useObserver } from "../../hooks/useObserver";

export const Shope = () => {
  const dispatch = useAppDispatch();
  const lastElement = useRef<HTMLDivElement>(null);
  const { cards, typeId, bySort, page, loading, error, totalPages } =
    useSelector((state: any) => state.allCards);

  useObserver(lastElement, page < totalPages, loading, () => {
    dispatch(setPage());
  });

  useEffect(() => {
    const params = {
      bySort,
      page,
      typeId,
    };
    dispatch(fetchCard(params));
  }, [page, typeId, bySort, dispatch]);

  return (
    <Container>
      <CustomContainer>
        <Row className="g-4">
          <Col lg={3} xl={2}>
            <FilterAndSort />
          </Col>
          <>
            {!loading && error && <div>{error}</div>}
            <Col lg={9} xl={10}>
              <ListCard cards={cards} />
            </Col>
            <div ref={lastElement} style={{ height: 20 }} />

            {loading && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 50,
                }}
              >
                <Spinner />
              </div>
            )}
          </>
        </Row>
      </CustomContainer>
    </Container>
  );
};
