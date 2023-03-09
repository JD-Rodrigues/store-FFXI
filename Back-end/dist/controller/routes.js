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
    const foundCostumer = costumersInDb.length > 0 ? costumersInDb.filter(costumer => costumer.gid === costumerToCheck) : [];
    // console.log(foundCostumer) 
    res.json(foundCostumer);
}));
exports.router.post('/costumers', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Epaaa");
    yield (0, queries_1.create)('costumers', req.body.user);
    res.json('Cliente cadastrado!');
}));
exports.router.get('/cart/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const gid = req.params.userId;
    const user = yield (0, queries_1.read)('costumers', { gid: gid });
    res.json(user[0].cart);
}));
exports.router.put('/cart/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const gid = req.params.userId;
    yield (0, queries_1.update)('costumers', { gid: gid }, { cart: req.body.cart });
    res.send('O cart foi atualizado!');
}));
exports.router.delete('/costumers/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const gid = req.params.userId;
    yield (0, queries_1.remove)('costumers', { gid: gid });
    res.send('O usuário foi deletado!');
}));
//# sourceMappingURL=routes.js.map