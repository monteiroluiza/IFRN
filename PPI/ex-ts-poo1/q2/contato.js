"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contato = void 0;
class Contato {
    constructor(nm, mail, fone) {
        this._nome = nm;
        this._email = mail;
        this._telefone = fone;
    }
    obter() {
        console.log(`Estas são as informações requeridas:
            Nome: ${this._nome},
            Email: ${this._email},
            Telefone: ${this._telefone}.`);
    }
    get nome() {
        return this._nome;
    }
    get email() {
        return this._email;
    }
    get telefone() {
        return this._telefone;
    }
    set nome(n) {
        this._nome = n;
    }
    set email(e) {
        this._email = e;
    }
    set telefone(t) {
        this._telefone = t;
    }
}
exports.Contato = Contato;
