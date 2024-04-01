// //axios基础的封装
// import axios from 'axios'

// const instance = axios.create({
//     baseURL: 'http://api.example.com',
//     timeout: 5000
// })

// //拦截器
// // axios请求拦截器
// // 请求拦截器
// instance.interceptors.request.use(
//     config => {
//       // 在请求发送之前做一些处理，比如添加token等操作
//       console.log('请求拦截器被触发');
//       return config;
//     },
//     error => {
//       // 对请求错误做些什么
//       return Promise.reject(error);
//     }
//   );

//   // 添加响应拦截器
// instance.interceptors.response.use(
//     // 成功响应时的处理
//     function (response) {
//       // 在这里对响应数据进行处理
//       // 比如统一处理成功状态码，或者对数据进行转换等操作
//       return response.data;
//     },
//     // 失败响应时的处理
//     function (error) {
//       // 在这里对错误进行处理
//       // 比如统一处理错误信息，展示错误提示等操作
//       return Promise.reject(error);
//     }
//   );
  
//   export default instance

// const axios = require('axios');

import axios from 'axios'

const instance  = axios.create({
    timeout:5000,
    headers:{
        'Content-Type': 'application/json'
    }
  });
  
  export default instance 
