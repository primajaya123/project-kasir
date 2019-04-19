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

export const editMenu = async (payload) => {
    console.log(payload.imageUrl)
    if (payload.imageUrl !== '') {
        return await axios({
            url: `/menu/makanan?id=${payload.id}&img=true`,
            method: 'put',
            data: formData({
                nama: payload.nama,
                harga: payload.harga,
                stok: payload.stok,
                tipe: payload.tipe,
                imageUrl: payload.imageUrl
            })
        })
            .then(response => ({ response: { ...response.data } }))
            .catch(error => ({ error }))
    } else {
        return await axios({
            url: '/menu/makanan?id=' + payload.id + '&img=false',
            method: 'put',
            data: {
                nama: payload.nama,
                harga: payload.harga,
                stok: payload.stok,
                tipe: payload.tipe
            }
        })
            .then(response => ({ response: { ...response.data } }))
            .catch(error => ({ error }))
    }
}