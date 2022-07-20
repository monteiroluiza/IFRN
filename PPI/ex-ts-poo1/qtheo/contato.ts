export class contato{
    private _nome: string
    private _email:string
    private _telefone:string

    constructor(){
        this._nome = 'n'
        this._email = 'e'
        this._telefone = 'fone'
    }

    obter(){
        console.log(`Informações ---> 
        Nome: ${this._nome}, Email: ${this._email}, Telefone: ${this._telefone}`)
    }
        get Nome(){
            return this._nome
        }
        get Email(){
            return this._email
        }
        get Telefone(){
            return this._telefone
        }

        set Nome(nm:string){
            this._nome = nm
        }
        set Email(mail:string){
            this._email = mail
        }
        set Telefone(fone:string){
            this._telefone = fone
        }

    }