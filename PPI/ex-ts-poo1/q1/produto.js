"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(nm, ctg, mc, dsc, pr = 0, qtd = 0) {
        this.nome = nm;
        this.categoria = ctg;
        this.marca = mc;
        this.descricao = dsc;
        this.preco = pr;
        this.quantidade = qtd;
    }
}
exports.Produto = Produto;
