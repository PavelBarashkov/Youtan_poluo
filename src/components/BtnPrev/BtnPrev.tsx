import { useNavigate } from "react-router-dom";
import classes from "./btnPrev.module.css";
import { IoIosArrowRoundBack } from "react-icons/io";

export const BtnPrev = () => {
  const navigate = useNavigate();
  return (
    <button
      className={classes.btn}
      onClick={() => {
        navigate(-1);
      }}
    >
      <div className={classes.container}>
        <IoIosArrowRoundBack size={"25px"} />
        <span>Назад</span>
      </div>
    </button>
  );
};
