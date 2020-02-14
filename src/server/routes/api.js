"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dogImage_1 = require("../api/dogImage");
const breedList_1 = require("../api/breedList");
const allBreeds_1 = require("../api/allBreeds");
const dogDetails_1 = require("../api/dogDetails");
const dogSearch_1 = require("../api/dogSearch");
const router = express_1.Router();
dogImage_1.default(router);
breedList_1.default(router);
allBreeds_1.default(router);
dogDetails_1.default(router);
dogSearch_1.default(router);
exports.default = router;
//# sourceMappingURL=api.js.map