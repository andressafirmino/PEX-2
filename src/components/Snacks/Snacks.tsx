import { useState } from 'react';
import Snack from '../Snack/Snack';
import TextOptions from '../TextOptions/TextOptions';
import { SnackOption, SnacksContainer } from './style';
import { menu } from '../../data/menu';

export default function Snacks() {
    const [snackMenu, setSnackMenu] = useState(menu.snacks);

    return (
        <SnacksContainer>
            <TextOptions text='Escolha seu lanche' />
            <SnackOption>
                {snackMenu.length > 0 && (
                    snackMenu.map((snack, i) =>
                        <Snack snack={snack} key={i} />
                    )
                )}
            </SnackOption>
        </SnacksContainer>
    );
}