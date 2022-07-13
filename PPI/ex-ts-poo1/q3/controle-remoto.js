"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControleRemoto = void 0;
class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
    }
    AumentarVolume(newvolume) {
        if (newvolume + this.tv._volume <= this.tv.VOLUME_MAXIMO) {
            this.tv._volume += newvolume;
        }
        return this.tv._volume;
    }
    DiminuirVolume(newvolume) {
        this.tv._volume = this.tv._volume - newvolume;
        if (this.tv._volume < 0) {
            this.tv._volume = 0;
        }
        return this.tv._volume;
    }
    get Volume() {
        return this.tv._volume;
    }
    AumentarCanal(newchannel) {
        if (newchannel + this.tv._canal <= this.tv.CANAL_MAXIMO) {
            this.tv._canal += newchannel;
        }
        return this.tv._canal;
    }
    DiminuirCanal(newchannel) {
        this.tv._canal = this.tv._canal - newchannel;
        if (this.tv._canal < 0) {
            this.tv._canal = 0;
        }
        return this.tv._canal;
    }
    TrocarCanal(newchannel) {
        if (newchannel <= this.tv.CANAL_MAXIMO) {
            this.tv._canal = newchannel;
        }
        return this.tv._canal;
    }
    get Canal() {
        return this.tv._canal;
    }
}
exports.ControleRemoto = ControleRemoto;


console.log(AumentarCanal(2));