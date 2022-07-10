export class Produto {
    nome: string;
    categoria: string;
    marca: string;
    descricao: string;
    preco: number;
    quantidade: number;

    constructor(nm: string, ctg: string, mc: string, dsc: string, pr=0, qtd=0){
        this.nome = nm;
        this.categoria = ctg;
        this.marca = mc;
        this.descricao = dsc;
        this.preco = pr;
        this.quantidade = qtd;
    }
}