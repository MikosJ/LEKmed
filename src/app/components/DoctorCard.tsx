import { Doctor } from "../types/types.ts";
import { useNavigate } from "react-router-dom";
import {
  AvailableDates,
  BigText,
  BookContainer,
  Button,
  Card,
  Description,
  Image,
  Profile,
  SmallText,
  TitleContainer,
} from "./styled/Card/CardStyles.ts";

export const DoctorCard = (props: Doctor) => {
  const navigate = useNavigate();

  const now = new Date();
  const sevenDaysLater = new Date();
  sevenDaysLater.setDate(now.getDate() + 7);

  const free =
    props.availableTimes.filter((availableTime) => {
      const date = new Date(availableTime.date);
      return date >= now && date <= sevenDaysLater;
    }).length > 0;

  return (
    <Card>
      <Profile>
        <Image src={props.image}></Image>
        <TitleContainer>
          <BigText>{props.firstname}</BigText>
          <BigText>{props.lastname}</BigText>
          <SmallText>{props.title}</SmallText>
          <SmallText>{props.specialization}</SmallText>
        </TitleContainer>
      </Profile>
      <Description>{props.description}</Description>
      <BookContainer>
        <Button onClick={() => navigate("/rezerwacja", { state: props })}>
          Zarezerwuj wizyte
        </Button>
        <AvailableDates $isFree={free}>
          {free
            ? "Wolne terminy w tym tygodniu"
            : "Brak wolnych terminów w tym tygodniu"}
        </AvailableDates>
      </BookContainer>
    </Card>
  );
};
