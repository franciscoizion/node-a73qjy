const saldoContas = [100,200,40,1.9,300,1000,9];

const total = saldoContas.reduce ((acumulador, valor) => acumulador + valor);

console.log(total);