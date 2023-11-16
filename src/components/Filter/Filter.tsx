import { useAppDispatch } from "../../app/hooks";
import { setTypeId } from "../../modules/Shope/store/slice/allCardsSlice";
import classes from "./filter.module.css";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

export const Filter = ({ types }: any) => {
    const dispatch = useAppDispatch();
    const hendlebtn = (e:any) => {
        dispatch(setTypeId(e))
        console.log()
    }
  return (
    <div className={classes.filter_container}>
      <div className={classes.filter_title}>Фильтр:</div>
      <ToggleButtonGroup
        className={classes.filter_btns}
        type="radio"
        name="options"
      >
        {types.map((item: any, indx: number) => (
          <ToggleButton onClick={() => hendlebtn(item?.id)} className={classes.btn} id={item.id} value={indx}>
            {item.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
};
