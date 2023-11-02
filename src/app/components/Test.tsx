import { Doctor } from "../types/types.ts";
import { useNavigate } from "react-router-dom";

export const Test = (props: Doctor) => {
  const navigate = useNavigate();

  return (
    <>
      <a>{props.firstname}</a>
      <a>{props.lastname}</a>
      <img src={props?.image} alt={"brak zdjecia"} height={"100px"} />
      <a>{props.title}</a>
      <a>{props.specialization}</a>
      <button onClick={() => navigate("/rezerwacja", { state: props })}>
        Zarezerwuj
      </button>
    </>
  );
};
