import { useState } from 'react';
import TextOptions from '../TextOptions/TextOptions';
import { DessertOption, DessertsContainer } from './style';
import { menu } from '../../data/menu';
import Dessert from '../Dessert/Dessert';

export default function Desserts() {
    const [dessertsMenu, setDessertsMenu] = useState(menu.desserts);

    return (
        <DessertsContainer>
            <TextOptions text='Escolha sua sobremesa' />
            <DessertOption>
                {dessertsMenu.length > 0 && (
                    dessertsMenu.map((dessert, i) =>
                        <Dessert dessert={dessert} key={i} />
                    )
                )}
            </DessertOption>
        </DessertsContainer>
    );
}