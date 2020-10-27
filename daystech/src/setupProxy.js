
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    // ["/api/*", "/auth/google"],
    ["/api", "/auth/google"],
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true, 
      pathRewrite: {'^/console/api' : ''}
    })
  );
};

