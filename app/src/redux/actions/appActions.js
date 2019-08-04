import { CREATE_USER_DISH } from '../constants';

export const createUserDishAction = (dish) => {
    return {
        type: CREATE_USER_DISH,
        payload: dish
    }
}