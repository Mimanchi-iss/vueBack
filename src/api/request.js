/*
 * @Author: your name
 * @Date: 2021-09-04 22:32:12
 * @LastEditTime: 2021-10-13 11:33:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \traning\src\mockJs\requset.js
 */
import axios from 'axios'
const service = axios.create({
  baseURL: 'http://localhost:8080'
})
export default service