import { CREATE_USER_DISH } from '../constants';

const initialState = {
    dishes: [
        {
            name: "Классический",
            ingredientsList: [
                [
                    { text: 'Пшеничная булка', active: true },
                    { text: 'Отбивная из говядины', active: true },
                    { text: 'Листья салата', active: true },
                    { text: 'Соус', active: true },
                    { text: 'Сыр', active: true }
                ]
            ],
            img: 'http://primebeef.ru/images/cms/thumbs/a5b0aeaa3fa7d6e58d75710c18673bd7ec6d5f6d/img_3911_500_306_5_100.jpg',
        },
        {
            name: "Цезарь",
            ingredientsList: [
                [
                    { text: 'Пшеничная булка', active: true },
                    { text: 'Отбивная из курицы', active: true },
                    { text: 'Соус "Цезарь"', active: true },
                    { text: 'Листья салата', active: true },
                    { text: 'Помидор', active: true }
                ]
            ],
            img: 'https://vkusno-raznosti.ru/wp-content/uploads/2017/06/gamburger-s-yaicom-1.jpg'
        },
        {
            name: "Бекон",
            ingredientsList: [
                [
                    { text: 'Пшеничная булка', active: true },
                    { text: 'Бекон', active: true },
                    { text: 'Отбивная из говядины', active: true },
                    { text: 'Листья салата', active: true },                    
                    { text: 'Помидор', active: true }
                ]
            ],
            img: 'https://cdnmyslo.ru/CityImage/19/89/198941b8-c916-48ac-8ea1-7ac62d098f36_1.jpg'
        },
       
    ],
    userDish: null
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER_DISH:
            return {
                ...state,
                userDish: action.payload
            }

        default:
            return state;
    }
}