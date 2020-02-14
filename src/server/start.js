"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("config");
const express = require("express");
const routes_1 = require("./routes");
console.log('Starting Server');
const app = express();
app.listen(config.get('port'));
app.use(`/${config.get('basePath')}`, routes_1.default);
console.log(`Server ${config.get('basePath')} Running on port ${config.get('port')}`);
//# sourceMappingURL=start.js.map