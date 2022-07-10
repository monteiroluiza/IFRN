export class Televisao{
    volume: number;
    readonly VOLUME_MAXIMO = 100;
    canal: number;
    readonly CANAL_MAXIMO = 800;

    constructor(){
        this.volume = 0;
        this.canal = 0;
    }

    aumentarVolume(newvolume=0): number{
        if(newvolume+this.volume <= this.VOLUME_MAXIMO){
            this.volume += newvolume;
        }
        return this.volume;
    }

    diminuirVolume(newvolume=0): number{
        this.volume -= newvolume
        if (this.volume < 0){
            this.volume = 0
        }
        return this.volume;
    }

    consultarVolume(): void{
        return console.log(`O volume está em: ${this.volume}.`)
    }

    aumentarCanal(newchannel=0): number{
        if(newchannel+this.canal <= this.CANAL_MAXIMO){
            this.canal += newchannel;
        }
        return this.canal;
    }

    diminuirCanal(newchannel=0): number{
        this.canal -= newchannel
        if (this.canal < 0){
            this.canal = 0
        }
        return this.canal
    }

    trocarCanal(newchannel=0): number{
        if(newchannel <= this.CANAL_MAXIMO){
            this.canal = newchannel;
        }
        return this.canal;
    }

    consultarCanal(): void{
        return console.log(`O canal está em: ${this.canal}.`)
    }
}

/*
let LG: Televisao = new Televisao();
console.log(LG.aumentarVolume(5));
console.log(LG.diminuirVolume(2));
console.log(LG.consultarVolume());
console.log(LG.aumentarCanal(5));
console.log(LG.diminuirCanal(3));
console.log(LG.trocarCanal(15));
console.log(LG.consultarCanal());
*/
