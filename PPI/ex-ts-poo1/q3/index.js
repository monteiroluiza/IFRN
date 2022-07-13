"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controle_remoto_1 = require("./controle-remoto");
const televisao_1 = require("./televisao");

let LG = new televisao_1.Televisao();
let Multilaser = new controle_remoto_1.ControleRemoto(LG);

Multilaser.AumentarVolume();
Multilaser.AumentarVolume();
Multilaser.DiminuirVolume();
console.log(Multilaser.Volume);
