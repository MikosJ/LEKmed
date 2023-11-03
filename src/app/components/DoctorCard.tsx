import {Doctor} from "../types/types.ts";
import {useNavigate} from "react-router-dom";
import {Card} from "./styled/Card/Card.ts";
import {BigText, Button, Description, Image, Profile, SmallText, TitleContainer} from "./styled/Card/CardStyles.ts";

export const DoctorCard = (props: Doctor) => {
    const navigate = useNavigate();

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
            <Description>
                {props.description}
            </Description>
            <Button onClick={() => navigate("/rezerwacja", {state: props})}>
                Zarezerwuj
            </Button>
        </Card>
    );
};
