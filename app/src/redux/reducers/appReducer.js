import { CREATE_USER_DISH } from '../constants';
import { SAVE_DISHES_LIST } from '../constants';

const initialState = {
    dishes: [],
    userDish: null
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER_DISH:
            return {
                ...state,
                userDish: action.payload
            }
        case SAVE_DISHES_LIST:
            return {
                ...state,
                dishes: action.payload
            }

        default:
            return state;
    }
}