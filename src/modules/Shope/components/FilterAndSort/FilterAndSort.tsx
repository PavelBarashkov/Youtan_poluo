import React, { useEffect, useState } from "react";
import { Filter } from "../../../../components/Filter/Filter";
import { Sort } from "../../../../components/Sort/Sort";
import classes from "./filterAndSort.module.css";
import { Accordion } from "react-bootstrap";
import { useAppDispatch } from "../../../../app/hooks";
import { getTypes } from "../../store/slice/TypesSlice";
import { useSelector } from "react-redux";

export const FilterAndSort = () => {
  // const types = [{id: 1, name: 'Рубашка'}, {id: 2, name: 'Палтье'}];
  const dispatch = useAppDispatch();
  const [sizeWindow, setSizeWindow] = useState<number>(window.innerWidth);
  const { types, loading, error } = useSelector((state: any) => state.types);

  useEffect(() => {
    const handleResize = () => {
      setSizeWindow(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    dispatch(getTypes());
  }, []);

  if (sizeWindow < 992) {
    return (
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Фильтры</Accordion.Header>
          <Accordion.Body>
            <aside className={classes.container}>
              {loading ? <div>Загрузка</div> : <Filter types={types} />}
              <Sort />
            </aside>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  }

  return (
    <aside className={classes.container}>
      {loading ? <div>Загрузка</div> : <Filter types={types} />}
      <Sort />
    </aside>
  );
};
