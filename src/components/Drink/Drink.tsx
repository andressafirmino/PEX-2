import { DescriptionDrink, DrinkContainer, ImageDrink, NameDrink, PriceDrink } from "./style";
import type { DrinksType } from "../../protocols";

export default function Drink({ drink }: DrinksType) {
    return (
        <DrinkContainer>
            < ImageDrink src={drink.image} />
            <NameDrink><p>{drink.name}</p></NameDrink>
            <DescriptionDrink><p>{drink.description}</p></DescriptionDrink>
            <PriceDrink><p>{drink.price}</p></PriceDrink>
        </DrinkContainer>
    );
}