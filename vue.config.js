module.exports = {
    devServer: {
        port: 8080, // 端口号
        host: "localhost",
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
    },
    pages: {
        sliderDesktop: 'src/modules/sliderDesktop/main.ts',
        headerDesktop: 'src/modules/headerDesktop/main.ts',
        footerDesktop: 'src/modules/footerDesktop/main.ts'
    },
    productionSourceMap: false,
    outputDir: 'dist',
    filenameHashing: false
};