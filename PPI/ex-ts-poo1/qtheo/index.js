"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contato_1 = require("./contato");
let ctt = new contato_1.contato();
ctt.obter();
ctt.Nome = 'sexo';
console.log(ctt.Nome);
