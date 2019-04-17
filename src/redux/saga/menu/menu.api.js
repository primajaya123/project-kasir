import axios from 'axios'
import {
    formData
} from '../../../utils/helper'
export const getMenus = async () => {
    return await axios({
        url: '/menu/makanan',
        method: 'get'
    })
        .then(response => ({
            response: {
                ...response.data
            }
        }))
        .catch(error => ({
            error
        }))
}

export const addMenu = async (payload) => {
    return await axios({
        url: '/menu/makanan?type=' + payload.type,
        method: 'post',
        data: formData(payload.data)
    })
        .then(response => ({
            response: {
                ...response.data
            }
        }))
        .catch(error => ({
            error
        }))
}

export const deleteMenus = async (payload) => {
    return await axios({
        url: '/menu/makanan?id=' + payload.id,
        method: 'delete'
    })
        .then(response => ({ ...response.data }))
        .catch(error => ({ error }))
}