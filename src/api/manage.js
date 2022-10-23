import request from './request.js'
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~文章相关接口~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//获取文章的接口
export const getArticle = (num) => {
    return request({
      url: '/article/showArticlesByPage',
      method: 'get',
      params:num
    })
  }
// 添加文章的接口
export const addArticle = (params) => {
  return request({
    url: '/article/addArticle',
    method: 'post',
    data: params,
  })
}
//删除文章的接口
export const cancelArticle = (num) => {
  return request({
    url: '/article/deleteArticle',
    method: 'delete',
    params:num
  })
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~文章相关接口结束~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~租户管理相关接口~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
//获取文章的接口
export const getTenantPerson = (num) => {
  return request({
    url: '/tenant/queryByPage',
    method: 'post',
    params:num
  })
}                         