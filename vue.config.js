module.exports = {
    devServer: {
        open: true,
        // disableHostCheck: false,
        host: "localhost",
        port: 8081,
        https: false,

        proxy: {
            '/api': {
                target: 'http://192.168.0.154:18002', // 接口的域名
                // secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },

    }
}