const valorCompra = 100
const numeroDeParcelas = 6

let formaPagamento = "CREDITO"
let valorFinal

if (formaPagamento === "A VISTA") {
    valorFinal = valorCompra - (valorCompra * 0.10)
    console.log(`Como a forma de pagamento é à vista o valor do produto será de ${valorFinal}`)
} else if (formaPagamento === "CREDITO") {
    valorFinal = valorCompra / numeroDeParcelas
    console.log(`Como a forma de pagamento é no crédito podemos parcelar sua compra em até 6x sem juros com parcelas de ${Math.round(valorFinal)}`)
}