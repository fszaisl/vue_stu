import Vue from 'vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import { baseUrl } from '../utils/util';
import { notification } from 'ant-design-vue'

Vue.use(VueAxios, axios);
// import { from } from 'core-js/fn/array';
axios.defaults.baseURL = baseUrl;

let validatecodetoken = localStorage.getItem('validateCodeToken') || '';

// 添加请求拦截器
axios.interceptors.request.use(
    (config) => {
        // 添加 token
        config.headers = { validatecodetoken };
        // console.log(validatecodetoken)
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
        // 对响应数据做点什么
        const { data = {} } = response;
        // console.log(response);
        const { hasError, error } = data;
        if (hasError) {
            // console.log(resData);
            return { hasError, error }
        }
        return data;
    },
    error => {
        const { config, response } = error;
        notification.error({ message: response.statusText, description: `${config.url} ${response.statusText}` });
        return Promise.reject(error);
    }
);

export const updateToken = () => {
    validatecodetoken = localStorage.getItem('validateCodeToken') || '';
}