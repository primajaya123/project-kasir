import { SIGN_IN, AUTH_SUCCESS, CHECK_AUTH, GET_MENUS, ADD_MENU, DELETE_MENU, EDIT_DATA, EDIT_DATA_MENU } from "../types";

export const signIn = (payload) => {
    return {
        type: SIGN_IN,
        payload
    }
}

export const authSuccess = payload => {
    return {
        type: AUTH_SUCCESS,
        payload
    }
}

export const checkAuth = () => {
    return {
        type: CHECK_AUTH
    }
}

export const getAllMenu = () => {
    return {
        type: GET_MENUS
    }
}

export const addNewMenu = payload => {
    return {
        type: ADD_MENU,
        payload
    }
}

export const deleteMenu = payload => {
    return {
        type: DELETE_MENU,
        payload
    }
}

export const editMenu = payload => {
    return {
        type: EDIT_DATA_MENU,
        payload
    }
}

export const editData = payload => {
    return {
        type: EDIT_DATA,
        payload
    }
}