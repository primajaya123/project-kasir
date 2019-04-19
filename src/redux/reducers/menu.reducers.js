import {
    MENUS, MENU_NOTIFY, EDIT_DATA
} from "../types";

const initialState = {
    menus: [],
    message: '',
    DataMenu: {}
}

const menuReducers = (state = initialState, action) => {
    switch (action.type) {
        case MENUS:
            return {
                ...state,
                ...action.payload
            }
        case MENU_NOTIFY:
            return {
                ...state,
                ...action.payload
            }
        case EDIT_DATA:
            return {
                ...state,
                DataMenu: action.payload
            }
        default:
            return state
    }
}

export default menuReducers