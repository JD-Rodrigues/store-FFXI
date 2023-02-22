"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const queries_1 = require("../model/queries");
const express = require('express');
exports.router = express.Router();
exports.router.get('/costumers/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const costumerToCheck = req.params.id;
    const costumersInDb = yield (0, queries_1.read)('costumers');
    const foundCostumer = costumersInDb.filter(costumer => costumer.gid === costumerToCheck);
    console.log(foundCostumer);
    res.json(foundCostumer.length > 0 ? true : false);
}));
exports.router.post('/costumers', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Epaaa");
    yield (0, queries_1.create)('costumers', req.body.user);
    res.json('Cliente cadastrado!');
}));
exports.router.get('/cart', (req, res) => {
    res.send('Obter cart');
});
exports.router.put('/cart', (req, res) => {
    res.send('Atualizar cart');
});
//# sourceMappingURL=routes.js.map