import { createContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { MenuItemType, MenuType } from '../protocols';
import { menuData } from '../data/menu';

interface ItemsContextProps {
    menu: MenuType;
    setMenu: React.Dispatch<React.SetStateAction<MenuType>>;
    selectedItems: MenuItemType[];
    setSelectedItems: React.Dispatch<React.SetStateAction<MenuItemType[]>>;
    selected: boolean;
    setSelected: React.Dispatch<React.SetStateAction<boolean>>;
    total: number;
    setTotal: React.Dispatch<React.SetStateAction<number>>;
}

export const ItemsContext = createContext<ItemsContextProps>({
    menu: { desserts: [], drinks: [], snacks: [] },
    setMenu: () => { },
    selectedItems: [],
    setSelectedItems: () => { },
    selected: false,
    setSelected: () => { },
    total: 0,
    setTotal: () => { },
});

interface ItemsProviderProps {
    children: ReactNode;
}

export default function ItemsProvider({ children }: ItemsProviderProps) {
    const [menu, setMenu] = useState<MenuType>({ desserts: [], drinks: [], snacks: [] });
    const [selectedItems, setSelectedItems] = useState<MenuItemType[]>([]);
    const [selected, setSelected] = useState<boolean>(false);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        setMenu(menuData);
    }, []);

    return (
        <ItemsContext.Provider
            value={{
                menu,
                setMenu,
                selectedItems,
                setSelectedItems,
                selected,
                setSelected,
                total,
                setTotal,
            }}
        >
            {children}
        </ItemsContext.Provider>
    );
}