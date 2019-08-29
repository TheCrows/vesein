module.exports = {
    devServer: {
        port: 8080, // 端口号
        host: "localhost",
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
    },
    pages: {
        pcSliderSection: 'src/modules/pcSliderSection/main.ts',
        pcHeader: 'src/modules/pcHeader/main.ts',
        pcFooter: 'src/modules/pcFooter/main.ts'
    },
    productionSourceMap: false,
    outputDir: 'dist',
    filenameHashing: false
};