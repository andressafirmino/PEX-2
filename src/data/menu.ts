import { dessertImages } from "./dessertImages";
import { drinkImages } from "./drinkImages";
import { snackImages } from "./snackImages";
import type { MenuType } from "../protocols";

export const menu: MenuType = {
    desserts: [
        {
            name: "Beijinho",
            image: dessertImages.beijinho,
            price: "R$ 1,50",
            description: "Doce de coco com leite condensado, coberto com açúcar cristal."
        },
        {
            name: "Brigadeiro",
            image: dessertImages.brigadeiro,
            price: "R$ 1,50",
            description: "Tradicional doce de chocolate brasileiro com granulado."
        }
    ],
    drinks: [
        {
            name: "Água com gás",
            image: drinkImages.aguaComGas,
            price: "R$ 2,00",
            description: "Água mineral gaseificada para refrescar."
        },
        {
            name: "Água sem gás",
            image: drinkImages.aguaSemGas,
            price: "R$ 2,00",
            description: "Água mineral natural sem gás."
        },
        {
            name: "Coca-Cola Lata",
            image: drinkImages.cocaCola,
            price: "R$ 4,50",
            description: "Refrigerante Coca-Cola em lata de 350ml."
        },
        {
            name: "Guaraná",
            image: drinkImages.guarana,
            price: "R$ 4,00",
            description: "Refrigerante de guaraná brasileiro bem gelado."
        }
    ],
    snacks: [
        {
            name: "Bolinho de aipim com carne moída",
            image: snackImages.bolinhoAipim,
            price: "R$ 5,00",
            description: "Massa de aipim frita recheada com carne moída temperada."
        },
        {
            name: "Empadinha de frango",
            image: snackImages.empadinha,
            price: "R$ 4,50",
            description: "Empadinha com recheio cremoso de frango desfiado."
        },
        {
            name: "Enroladinho de salsicha",
            image: snackImages.enroladinho,
            price: "R$ 3,50",
            description: "Massa assada recheada com salsicha suculenta."
        },
        {
            name: "Hambúrguer de forno",
            image: snackImages.hamburguer,
            price: "R$ 6,00",
            description: "Pão recheado com hambúrguer e queijo, assado no forno."
        },
        {
            name: "Joelho de queijo com presunto",
            image: snackImages.joelho,
            price: "R$ 5,00",
            description: "Lanche assado com recheio de presunto e queijo."
        },
        {
            name: "Pão com ovo",
            image: snackImages.paoComOvo,
            price: "R$ 3,00",
            description: "Pão francês recheado com ovo frito na chapa."
        }
    ]
};
