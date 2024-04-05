import axios from 'axios'
import { userStore } from '@/utils/pinia'
var token = ''
const instance = axios.create({
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

instance.interceptors.request.use(
    config => {
        // 在请求发送之前做一些处理，比如添加token等操作
        if (window.localStorage.getItem("userInfo")) {
            const pinia = userStore();
            console.log(pinia.getUser.token);
            token = pinia.getUser.token
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    error => {
        // 对请求错误做些什么
        console.log(error);
        return Promise.reject(error);
    }
);

// 添加响应拦截器
instance.interceptors.response.use(
    // 成功响应时的处理
    function (response) {
        // 在这里对响应数据进行处理
        // 比如统一处理成功状态码，或者对数据进行转换等操作
        return response.data;
    },
    // 失败响应时的处理
    function (error) {
        console.log(error.response.status);
        if (error.response.status === 401) {
            alert('请先登录')
            localStorage.removeItem('userInfo')
            window.location.href = '/'
        }
        return Promise.reject(error);
    }
);

export default instance 
