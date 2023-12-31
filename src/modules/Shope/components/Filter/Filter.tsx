import { useAppDispatch } from "../../../../app/hooks";
import { setTypeId } from "../../store/slice/allCardsSlice";
import classes from "./filter.module.css";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

export const Filter = ({ types }: any) => {
  const dispatch = useAppDispatch();
  const handler = (e: any) => {
    dispatch(setTypeId(e));
  };
  return (
    <div className={classes.filter_container}>
      <div className={classes.filter_title}>Фильтр:</div>
      <ToggleButtonGroup
        className={classes.filter_buttons}
        type="checkbox"
        name="options"
      >
        {types && types.map((item: any, indx: number) => (
          <ToggleButton
            key={item.id}
            onClick={() => handler(item?.id)}
            className={classes.btn}
            id={item.id}
            value={indx}
          >
            {item.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
};
