const PROXY_CONFIG = [
    {
        context: [
            '/api',
        ],
        target: "https://ppid.magetan.go.id/",
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/": ""
        }
    }
];
module.exports = PROXY_CONFIG;
