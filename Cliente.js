export class Cliente {
    #nome;
    #cpf;

    get cpf(){
        return this.#cpf
    }

    get nome(){
        return this.#nome
    }

    constructor(nome, cpf){
        this.#nome = nome;
        this.#cpf = cpf;
    }
}
