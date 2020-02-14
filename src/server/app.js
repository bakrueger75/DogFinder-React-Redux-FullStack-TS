"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./routes");
const express = require("express");
const config = require("config");
const createApp = () => {
    const basePath = config.get('basePath'), app = express();
    app.use(basePath, routes_1.default);
    return app;
};
exports.app = createApp();
//# sourceMappingURL=app.js.map