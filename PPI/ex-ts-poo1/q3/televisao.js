"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Televisao = void 0;
class Televisao {
    constructor() {
        this.VOLUME_MAXIMO = 100;
        this.CANAL_MAXIMO = 800;
        this.volume = 0;
        this.canal = 0;
    }
    get _volume() {
        return this.volume;
    }
    get _canal() {
        return this.canal;
    }
}
exports.Televisao = Televisao;
