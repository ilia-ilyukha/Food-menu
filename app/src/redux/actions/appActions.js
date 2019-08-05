import { CREATE_USER_DISH } from '../constants';
import { SAVE_DISHES_LIST } from '../constants';

export const createUserDishAction = (dish) => {
    return {
        type: CREATE_USER_DISH,
        payload: dish
    }
}

export const saveDishesListAction = (list) => {
    return{
        type: SAVE_DISHES_LIST,
        payload: list
    }
}