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
exports.create = exports.read = void 0;
const { client } = require('./connection.settings');
//No primeiro parâmetro, recebe o nome da collection onde buscará os dados.
// Se receber um objeto, com um par de chave e valor, no segundo parâmetro, retorna um documento filtrado pelo parâmetro recebido.
// Se não receber nenhum argumento no segundo parâmetro, retorna todos os documentos da collection.
const read = (coll, filter = {}) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = client.db('store');
        const collection = db.collection(coll);
        const data = collection.find(filter);
        const docs = [];
        yield data.forEach(doc => docs.push(doc));
        return docs;
    }
    finally {
        client.close();
    }
});
exports.read = read;
const create = (coll, query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collection = client.db('store').collection(coll);
        yield collection.insertOne(query);
    }
    finally {
        client.close();
    }
});
exports.create = create;
read('costumers').then(console.log)
//# sourceMappingURL=queries.js.map