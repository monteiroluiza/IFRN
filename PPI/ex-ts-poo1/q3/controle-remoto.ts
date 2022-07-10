import { Televisao } from "./televisao";

export class ControleRemoto{
    tv:Televisao

    constructor(tv:Televisao){
        this.tv = tv
    }

    aumentarVolume(newvolume=0): number{
        if(newvolume+this.tv.volume <= this.tv.VOLUME_MAXIMO){
            this.tv.volume += newvolume;
        }
        return this.tv.volume;
    }

    diminuirVolume(newvolume=0): number{
        this.tv.volume -= newvolume
        if (this.tv.volume < 0){
            this.tv.volume = 0
        }
        return this.tv.volume;
    }

    consultarVolume(): void{
        return console.log(`O volume está em: ${this.tv.volume}.`)
    }

    aumentarCanal(newchannel=0): number{
        if(newchannel+this.tv.canal <= this.tv.CANAL_MAXIMO){
            this.tv.canal += newchannel;
        }
        return this.tv.canal;
    }

    diminuirCanal(newchannel=0): number{
        this.tv.canal -= newchannel
        if (this.tv.canal < 0){
            this.tv.canal = 0
        }
        return this.tv.canal
    }

    trocarCanal(newchannel=0): number{
        if(newchannel <= this.tv.CANAL_MAXIMO){
            this.tv.canal = newchannel;
        }
        return this.tv.canal;
    }

    consultarCanal(): void{
        return console.log(`O canal está em: ${this.tv.canal}.`)
    }
}
