import Vue from 'vue'
import axios from 'axios';
// import { Notification } from 'element-ui';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

axios.defaults.baseURL = '/api';
// 添加请求拦截器
axios.interceptors.request.use(
    (config) => {
        // 在发送请求之前做些什么
        return config;
    },
    (error) => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);
// 添加响应拦截器
axios.interceptors.response.use(
    response => {
        const { data = {} } = response;
        console.log(response)
        const { hasError, data: resData, error } = data;
        if (hasError) {
            console.log(resData);
            return { hasError, error }
        }
        // 对响应数据做点什么
        // console.log(`interceptors`, response)
        return data;
    },
    (error = { name: 'Error', message: '' }) => {
        // const { name, message } = error;
        // 对响应错误做点什么
        // console.log(JSON.stringify(error, null, 4))
        // Notification.error({
        //     title: name,
        //     message: message
        // })
        return Promise.reject(error);
    }
);