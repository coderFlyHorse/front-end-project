import axios from 'axios'

import { ElMessage } from 'element-plus'
import { promises } from 'readline';

const instnatce = axios.create({
    baseURL: '/api',
    timeout: 5000,

})

instnatce.interceptors.request.use((config) => {


    return config
}, (err) => {
    Promise.reject(err)
})
instnatce.interceptors.response.use((res) => {
    return res.data
}, (err) => {

    let status = err.response.status
    switch (status) {
        case 404:
            ElMessage.error(err.message)
            break;
        case 500 | 501 | 502 | 503 | 505 | 505:
            ElMessage.error('服务器内部错误~~')
            break;
        case 403:
            ElMessage.error('没有访问权限~~')
            break;
        case 401:
            ElMessage.error('请求参数错误~~')
            break;

        default:
            break;
    }

    return Promise.reject(err)
})

export const get = (url: string, params?: any) => {
    return new Promise((resolve, reject) => {
        instnatce.get(url, { params }).then(
            res => {
                resolve(res)
            },
            err => {
                reject(err)
            }
        )
    })
}




