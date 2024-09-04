import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente = new Cliente("Vinicius", 12345678978)

const conta1 = new ContaCorrente(cliente, 1234);
const conta2 = new ContaCorrente(cliente, 1234);

conta1.depositar(0);

console.log(conta1);
conta1.depositar(10);
console.log(conta1.saldo);
console.log(conta1.cliente.nome);
console.log(conta1.cliente.cpf);

console.log(ContaCorrente.numeroDaConta);