import { ControleRemoto } from "./controle-remoto";
import { Televisao } from "./televisao";

let LG: Televisao = new Televisao();
let Multilaser: ControleRemoto = new ControleRemoto(LG);

console.log(Multilaser.AumentarCanal);
console.log(Multilaser.AumentarVolume);
console.log(Multilaser.DiminuirCanal);
console.log(Multilaser.DiminuirVolume);
