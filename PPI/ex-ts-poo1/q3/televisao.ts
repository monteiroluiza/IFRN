export class Televisao{
    volume: number;
    readonly VOLUME_MAXIMO = 100;
    canal: number;
    readonly CANAL_MAXIMO = 800;

    constructor(){
        this.volume = 0;
        this.canal = 0;
    }

    get _volume(){
        return this.volume
    }

    get _canal(){
        return this.canal
    }
}
