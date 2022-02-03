const createProxyMiddleware = require("http-proxy-middleware");

// If running local dev server, change target below to match server addr.

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target:  "http://localhost:8080", //"https://orakelqueueservice.herokuapp.com"
      changeOrigin: true,
    })
  );
};
