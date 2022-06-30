 export enum Raca{
    SRD = 'Sem raça definida',
    POODLE = 'Poodle',
    PINSCHER = 'Pinscher',
    PITBULL = 'Pitbull',
    PASTORALE = 'Pastor Alemão',
    DOBERMAN = 'Doberman',
}

export class Cachorro {
    nome: string;
    raca: Raca;
    distancia: number;
    nascimento: Date;

    constructor(nm: string, dn: Date){
        this.nome = nm;
        this.raca = Raca.SRD;
        this.distancia = 0;
        this.nascimento = dn;
    }
}