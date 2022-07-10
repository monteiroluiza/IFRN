"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contato_1 = require("./contato");
let malu = new contato_1.Contato('Malu', 'rainhadaprogramacao@gmail.com', 83998178378);
malu.obter();
malu.nome = 'Thomas';
console.log(malu.nome);
