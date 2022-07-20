import {Contato} from "./contato";

let malu: Contato = new Contato('Malu', 'rainhadaprogramacao@gmail.com', 83998178378);

malu.obter();

malu.nome = 'Thomas';
console.log(malu.nome)