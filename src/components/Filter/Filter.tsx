import { BtnFilter } from '../../UI/BtnFilter/BtnFilter';
import classes from './filter.module.css';

export const Filter = ({types}: any) => {
  return (
    <div className={classes.filter_container}>
        <div className={classes.filter_title}>
            Фильтер
        </div>
        <div className={classes.filter_btns}>
            {types.map((item: any) => (
                <BtnFilter>{item?.name}</BtnFilter>
            ))}
        </div>
    </div>
  )
}
