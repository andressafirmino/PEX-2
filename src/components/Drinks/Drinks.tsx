import { useState } from 'react';
import TextOptions from '../TextOptions/TextOptions';
import { DrinksContainer, DrinkOption } from './style';
import { menu } from '../../data/menu';
import Drink from '../Drink/Drink';

export default function Drinks() {
    const [drinkMenu, setDrinkMenu] = useState(menu.drinks);

    return (
        <DrinksContainer>
            <TextOptions text='Escolha sua bebida' />
            <DrinkOption>
                {drinkMenu.length > 0 && (
                    drinkMenu.map((drink, i) =>
                        <Drink drink={drink} key={i} />
                    )
                )}
            </DrinkOption>
        </DrinksContainer>
    );
}