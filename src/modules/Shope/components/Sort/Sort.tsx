import { useAppDispatch } from "../../../../app/hooks";
import { setBySort } from "../../store/slice/allCardsSlice";
import classes from "./sort.module.css";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

export const Sort = () => {
  const dispatch = useAppDispatch();
  return (
    <div className={classes.sort_container}>
      <div className={classes.sort_title}>Сортировать:</div>
      <div className={classes.sort_btns}>
        <ToggleButtonGroup
          className={classes.filter_btns}
          type="radio"
          name="sort"
          defaultValue={1}
        >
          <ToggleButton
            onClick={() => dispatch(setBySort("default"))}
            className={classes.btn}
            id={"tbg-radio-1"}
            value={1}
          >
            По умолчанию
          </ToggleButton>
          <ToggleButton
            onClick={() => dispatch(setBySort("by-new-data"))}
            className={classes.btn}
            id={"tbg-radio-2"}
            value={2}
          >
            По новизне
          </ToggleButton>
          <ToggleButton
            onClick={() => dispatch(setBySort("by-rise-price"))}
            className={classes.btn}
            id={"tbg-radio-3"}
            value={3}
          >
            По возрастанию цены
          </ToggleButton>
          <ToggleButton
            onClick={() => dispatch(setBySort("by-drop-price"))}
            className={classes.btn}
            id={"tbg-radio-4"}
            value={4}
          >
            По убыванию цены
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
};
