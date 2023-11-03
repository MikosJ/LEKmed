import { Doctor } from "../types/types.ts";
import { useNavigate } from "react-router-dom";
import {Card} from "./styled/Card/Card.ts";

export const Test = (props: Doctor) => {
  const navigate = useNavigate();

  return (
    <Card>
      <a>{props.firstname}</a>
      <a>{props.lastname}</a>
      <img src={props?.image} alt={"brak zdjecia"} height={"100px"} />
      <a>{props.title}</a>
      <a>{props.specialization}</a>
      <button onClick={() => navigate("/rezerwacja", { state: props })}>
        Zarezerwuj
      </button>
    </Card>
  );
};
