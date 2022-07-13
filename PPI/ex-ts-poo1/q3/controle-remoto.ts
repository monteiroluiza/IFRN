import { Televisao } from "./televisao";

export class ControleRemoto{
    tv:Televisao

    constructor(tv:Televisao){
        this.tv = tv
    }

    AumentarVolume(newvolume): number{
        if(newvolume+this.tv._volume <= this.tv.VOLUME_MAXIMO){
            this.tv._volume += newvolume;
        }
        return this.tv._volume;
    }

    DiminuirVolume(newvolume): number{
        this.tv._volume = this.tv._volume - newvolume
        if (this.tv._volume < 0){
            this.tv._volume = 0
        }
        return this.tv._volume;
    }

    get Volume(){
        return this.tv._volume;
    }

    AumentarCanal(newchannel): number{
        if(newchannel+this.tv._canal <= this.tv.CANAL_MAXIMO){
            this.tv._canal += newchannel;
        }
        return this.tv._canal;
    }

    DiminuirCanal(newchannel): number{
        this.tv._canal = this.tv._canal - newchannel
        if (this.tv._canal < 0){
            this.tv._canal = 0
        }
        return this.tv._canal;
    }

    TrocarCanal(newchannel): number{
        if(newchannel <= this.tv.CANAL_MAXIMO){
            this.tv._canal = newchannel;
        }
        return this.tv._canal;
    }

    get Canal(){
        return this.tv._canal;
    }
}
