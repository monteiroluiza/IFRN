"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControleRemoto = void 0;
class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
    }
    get Volume() {
        return this.tv._volume;
    }
    get Canal() {
        return this.tv._canal;
    }
    set Canal(channel) {
        this.tv._canal = channel;
    }
    set Volume(vol) {
        this.tv._volume = vol;
    }
    AumentarVolume() {
        if (this.Volume <= this.tv.VOLUME_MAXIMO) {
            return this.tv._volume++;
        }
        else {
            return this.tv._volume = 100;
        }
    }
    DiminuirVolume() {
        if (this.Volume <= this.tv.VOLUME_MAXIMO) {
            return this.tv._volume--;
        }
        else {
            return this.tv._volume = 0;
        }
    }
    AumentarCanal() {
        if (this.Canal <= this.tv.CANAL_MAXIMO) {
            return this.tv._canal++;
        }
        else {
            return this.tv._canal = 800;
        }
    }
    DiminuirCanal() {
        if (this.Canal <= this.tv.CANAL_MAXIMO) {
            return this.tv._canal--;
        }
        else {
            return this.tv._canal = 0;
        }
    }
}
exports.ControleRemoto = ControleRemoto;