import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDaConta = 0;
    agencia;
    #cliente;
    #saldo = 0

    sacar(valor) {
        if (this.#saldo < valor) {
            return;
        }
        this.#saldo -= valor;

    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this.#saldo += valor;
    }

    set cliente(cliente) {
        if (cliente instanceof Cliente) {
            this.#cliente = cliente;
        }
    }

    get saldo() {
        return this.#saldo
    }

    get cliente() {
        return this.#cliente
    }

    constructor(cliente, agencia){
        this.#cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numeroDaConta += 1;
    }
}