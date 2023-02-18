"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const { MongoClient } = require('mongodb');
require('dotenv').config();
exports.client = new MongoClient(process.env.MONGODB_URI);
//# sourceMappingURL=connection.settings.js.map