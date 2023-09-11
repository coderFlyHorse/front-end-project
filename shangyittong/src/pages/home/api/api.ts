import { get } from '@/request/request'

enum API {
    // 获取医院列表
    HOPSPITAL_URL = '/hosp/hospital/',
}

export const getHositalList = (page: number, limit: number) => {
    return get(`${API.HOPSPITAL_URL}${page}/${limit}`)

}