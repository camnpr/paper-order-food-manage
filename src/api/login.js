import request from './request'
export const login = (params) => {
    return request({
        url: '/login',
        method: 'POST',
        params: params,
        headers: {
            'Content-Type': 'application/json'
        }
    })

}