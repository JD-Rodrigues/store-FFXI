"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express = require('express');
const cors = require('cors');
const { router } = require('./routes');
require('dotenv').config();
exports.app = express();
exports.app.use(cors({ origin: '*' }));
exports.app.use(express.json());
exports.app.use(router);
const port = process.env.PORT;
exports.app.listen(port, () => console.info('Server ON in port' + port));
//# sourceMappingURL=server.js.map