import {
    put,
    call,
    takeLatest
} from "redux-saga/effects";
import { getMenus, addMenu, deleteMenus } from "./menu.api";
import { MENUS, GET_MENUS, MENU_NOTIFY, ADD_MENU, DELETE_MENU } from "../../types";

function* GetMenu(action) {
    try {
        const { response, error } = yield call(getMenus)
        if (response) {
            yield put({ type: MENUS, payload: { ...response } })
        }
        yield put({ type: MENUS, payload: { ...error.response.data } })
    } catch (error) { }
}

function* AddMenu(action) {
    try {
        const { response, error } = yield call(addMenu, action.payload)
        if (response) {
            yield put({ type: MENU_NOTIFY, payload: { ...response } })
        }
        console.log(error.response.data)
        yield put({ type: MENU_NOTIFY, payload: { ...error.response.data } })
    } catch (error) { }
}

function* DeleteMenu(action) {
    try {
        const { response, error } = yield call(deleteMenus, action.payload)
        if (response) {
            yield put({ type: MENU_NOTIFY, payload: { ...response } })
        }
        yield put({ type: MENU_NOTIFY, payload: { ...error.response.data } })
    } catch (error) { }
}

export function* menuSaga() {
    yield takeLatest(GET_MENUS, GetMenu)
    yield takeLatest(ADD_MENU, AddMenu)
    yield takeLatest(DELETE_MENU, DeleteMenu)
}