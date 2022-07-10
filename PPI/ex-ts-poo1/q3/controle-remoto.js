"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControleRemoto = void 0;
class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
    }
    aumentarVolume(newvolume = 0) {
        if (newvolume + this.tv.volume <= this.tv.VOLUME_MAXIMO) {
            this.tv.volume += newvolume;
        }
        return this.tv.volume;
    }
    diminuirVolume(newvolume = 0) {
        this.tv.volume -= newvolume;
        if (this.tv.volume < 0) {
            this.tv.volume = 0;
        }
        return this.tv.volume;
    }
    consultarVolume() {
        return console.log(`O volume está em: ${this.tv.volume}.`);
    }
    aumentarCanal(newchannel = 0) {
        if (newchannel + this.tv.canal <= this.tv.CANAL_MAXIMO) {
            this.tv.canal += newchannel;
        }
        return this.tv.canal;
    }
    diminuirCanal(newchannel = 0) {
        this.tv.canal -= newchannel;
        if (this.tv.canal < 0) {
            this.tv.canal = 0;
        }
        return this.tv.canal;
    }
    trocarCanal(newchannel = 0) {
        if (newchannel <= this.tv.CANAL_MAXIMO) {
            this.tv.canal = newchannel;
        }
        return this.tv.canal;
    }
    consultarCanal() {
        return console.log(`O canal está em: ${this.tv.canal}.`);
    }
}
exports.ControleRemoto = ControleRemoto;
