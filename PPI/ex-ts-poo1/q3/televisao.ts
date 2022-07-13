export class Televisao{
    _volume: number;
    readonly VOLUME_MAXIMO = 100;
    _canal: number;
    readonly CANAL_MAXIMO = 800;

    constructor(){
        this._volume = 0;
        this._canal = 0;
    }
}
