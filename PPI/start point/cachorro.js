"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = exports.Raca = void 0;
var Raca;
(function (Raca) {
    Raca["SRD"] = "Sem ra\u00E7a definida";
    Raca["POODLE"] = "Poodle";
    Raca["PINSCHER"] = "Pinscher";
    Raca["PITBULL"] = "Pitbull";
    Raca["PASTORALE"] = "Pastor Alem\u00E3o";
    Raca["DOBERMAN"] = "Doberman";
})(Raca = exports.Raca || (exports.Raca = {}));
class Cachorro {
    constructor(nm, dn) {
        this.nome = nm;
        this.raca = Raca.SRD;
        this.distancia = 0;
        this.nascimento = dn;
    }
}
exports.Cachorro = Cachorro;
