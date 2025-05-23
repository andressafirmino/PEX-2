import { DescriptionDessert, DessertContainer, ImageDessert, NameDessert, PriceDessert } from "./style";
import type { DessertsType } from "../../protocols";

export default function Dessert({ dessert }: DessertsType) {
    return (
        <DessertContainer>
            < ImageDessert src={dessert.image} />
            <NameDessert><p>{dessert.name}</p></NameDessert>
            <DescriptionDessert><p>{dessert.description}</p></DescriptionDessert>
            <PriceDessert><p>{dessert.price}</p></PriceDessert>
        </DessertContainer>
    );
}