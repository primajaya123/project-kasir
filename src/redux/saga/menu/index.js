import {
    put,
    call,
    takeLatest
} from "redux-saga/effects";
import { getMenus, addMenu, deleteMenus, editMenu } from "./menu.api";
import { MENUS, GET_MENUS, MENU_NOTIFY, ADD_MENU, DELETE_MENU, EDIT_DATA_MENU } from "../../types";

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

function* EditMenu(action) {
    try {
        const { response, error } = yield call(editMenu, action.payload)
        if (response) {
            location.reload()
            const { _response, _error } = yield call(getMenus)
            console.log(_response)
            if (_response) {
                yield put({ type: MENU_NOTIFY, payload: { ..._response } })
            } else {
                yield put({ type: MENU_NOTIFY, payload: { ..._error.response.data } })
            }
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
    yield takeLatest(EDIT_DATA_MENU, EditMenu)
}