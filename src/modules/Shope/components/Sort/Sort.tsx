import { useAppDispatch } from "../../../../app/hooks";
import { risePrice } from "../../store/slice/allCardsSlice";
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
          <ToggleButton className={classes.btn} id={"tbg-radio-1"} value={1}>
            По умолчанию
          </ToggleButton>
          <ToggleButton className={classes.btn} id={"tbg-radio-2"} value={2}>
            По новизне
          </ToggleButton>
          <ToggleButton onClick={() => dispatch(risePrice())} className={classes.btn} id={"tbg-radio-3"} value={3}>
            По возрастанию цены
          </ToggleButton>
          <ToggleButton className={classes.btn} id={"tbg-radio-4"} value={4}>
            По убыванию цены
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
};
