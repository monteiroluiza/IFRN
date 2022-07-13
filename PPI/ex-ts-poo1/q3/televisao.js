"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Televisao = void 0;
class Televisao {
    constructor() {
        this.VOLUME_MAXIMO = 100;
        this.CANAL_MAXIMO = 800;
        this._volume = 0;
        this._canal = 0;
    }
    get Volume() {
        return this._volume;
    }
    get Canal() {
        return this._canal;
    }
}
exports.Televisao = Televisao;
