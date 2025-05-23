import { CheckIcon, DescriptionSnack, ImageSnack, NameSnack, PriceSnack, SnackContainer } from "./style";
import type { SnacksType } from "../../protocols";

export default function Snack({ snack }: SnacksType) {
    
    return (
        <SnackContainer className="selected">
            < ImageSnack src={snack.image} />
            <NameSnack><p>{snack.name}</p></NameSnack>
            <DescriptionSnack><p>{snack.description}</p></DescriptionSnack>
            <PriceSnack>
                <p>{snack.price}</p>
                <CheckIcon></CheckIcon>
            </PriceSnack>
        </SnackContainer>
    );
}