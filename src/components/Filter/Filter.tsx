import classes from "./filter.module.css";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

export const Filter = ({ types }: any) => {
  return (
    <div className={classes.filter_container}>
      <div className={classes.filter_title}>Фильтр:</div>
      <ToggleButtonGroup
        className={classes.filter_btns}
        type="radio"
        name="options"
      >
        {types.map((item: any, indx: number) => (
          <ToggleButton className={classes.btn} id={item.id} value={indx}>
            {item.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
};
