export class Contato{
    private _nome: string;
    private _email: string;
    private _telefone: number;

    constructor(nm: string, mail: string, fone: number){
        this._nome = nm;
        this._email = mail;
        this._telefone = fone;
    }

    obter(): void{
       console.log(`Estas são as informações requeridas:
            Nome: ${this._nome},
            Email: ${this._email},
            Telefone: ${this._telefone}.`) 
    }

    get nome(){
        return this._nome;
    }
    get email(){
        return this._email;
    }
    get telefone(){
        return this._telefone;
    }
    set nome(n:string){
        this._nome = n;
    }
    set email(e:string){
        this._email = e;
    }
    set telefone(t:number){
        this._telefone = t;
    }
}
