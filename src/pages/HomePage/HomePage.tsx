// <reference types="node" />

import Desserts from "../../components/Desserts/Desserts";
import Drinks from "../../components/Drinks/Drinks";
import Snacks from "../../components/Snacks/Snacks";
import { HomeContainer } from "./style";

export default function HomePage() {

    return (
        <HomeContainer>
            <Snacks />
            <Drinks />
            <Desserts />
        </HomeContainer>
    );
}