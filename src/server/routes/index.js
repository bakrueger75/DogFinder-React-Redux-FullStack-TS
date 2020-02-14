"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const html_1 = require("./html");
const router = express_1.Router();
//router.use('/api', apiRouter);
router.use('/', html_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map