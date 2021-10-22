/*
 * @Author: your name
 * @Date: 2021-09-04 22:35:38
 * @LastEditTime: 2021-09-04 23:28:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \traning\src\mock\mockServer.js
 */
import Mock from 'mockjs'

Mock.mock('http://localhost:8080/login','post', option=>{
  const { username, password } = JSON.parse(option.body)
  if (username === 'admin' && password === '12345') {
    return {
      status: 0,
      message: '登录成功',
      token:'miss721'
    }
  } else {
    return {
      status: 1,
      message:'账号或密码错误'
    }
  }
})
Mock.mock('http://localhost:8080/list', {
  code: 0, data: {
    'data|1000': [
      {  
        id: '@id',//随机id
        name: '@name',//随机名称
        nickName: '@last',//随机昵称
        phone: /^1[34578]\d{9}$/,//随机电话号码
        'age|11-99': 1,//年龄
        address: '@county(true)',//随机地址
        email: '@email',//随机邮箱
        isMale: '@boolean',//随机性别
        createTime: '@datetime',//创建时间
        avatar() {
          //用户头像
          return Mock.Random.image('100×100', Mock.Random.color(), '#757575', 'png', this.nickName)
        }
      }
    ]
  }
})