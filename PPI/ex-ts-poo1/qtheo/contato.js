"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contato = void 0;
class contato {
    constructor() {
        this._nome = 'n';
        this._email = 'e';
        this._telefone = 'fone';
    }
    obter() {
        console.log(`Informações ---> 
        Nome: ${this._nome}, Email: ${this._email}, Telefone: ${this._telefone}`);
    }
    get Nome() {
        return this._nome;
    }
    get Email() {
        return this._email;
    }
    get Telefone() {
        return this._telefone;
    }
    set Nome(nm) {
        this._nome = nm;
    }
    set Email(mail) {
        this._email = mail;
    }
    set Telefone(fone) {
        this._telefone = fone;
    }
}
exports.contato = contato;
