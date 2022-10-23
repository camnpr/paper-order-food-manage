import request from './request'

// ·~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~访客相关的接口~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 获取访客的接口
export const getVisitor = (params) => {
  return request({
    url: '/visitor/show',
    method: 'post',
    data: params,
  })
}

// 删除访客的接口
export const deleteVisitorInfo = (id) => {
  console.log('id', id);
  return request({
    // 参数拼接到路径上
    url: `/visitor/delete?id=${id}`,
    method: 'delete',
  })
}

// 添加访客的接口
export const addVisitor = (params) => {
  return request({
    url: '/visitor/insert',
    method: 'POST',
    data: params,
  })
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~访客相关的接口end~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~车辆相关的接口~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 获取车辆的接口
export const getCar = (params) => {
  return request({
    url: '/car/show',
    method: 'post',
    data: params,
  })
}

// 添加车辆的接口
export const addCar = (params) => {
  return request({
    url: '/car/insert',
    method: 'put',
    data: params,
  })
}

// 删除车辆的接口
export const deleteCar = (id) => {
  console.log('id', id);
  return request({
    // 参数拼接到路径上
    url: `/car/delete/?id=${id}`,
    method: 'delete',
  })
}

