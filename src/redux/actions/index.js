import { SIGN_IN, AUTH_SUCCESS, CHECK_AUTH, GET_MENUS, ADD_MENU } from "../types";

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