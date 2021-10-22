/*
 * @Author: your name
 * @Date: 2021-09-04 22:32:19
 * @LastEditTime: 2021-10-13 11:33:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \traning\src\mockJs\getData.js
 */
import axios from './request';
//登录接口
export const getLogin = () => axios.post('/login')
export const getList = () => axios.get('/list')