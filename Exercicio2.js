const valorCompra = 100
const numeroDeParcelas = 8

let formaPagamento = "CREDITO"
let valorFinal
let valorFinalParcelas
let valorParcelasJuros

if (formaPagamento === "A VISTA") {
    valorFinal = valorCompra - (valorCompra * 0.10)
    console.log(`Como a forma de pagamento é à vista o valor do produto será de ${valorFinal}`)
} else if (formaPagamento === "CREDITO" && numeroDeParcelas <= 6) {
    valorFinal = valorCompra / numeroDeParcelas
    console.log(`Como a forma de pagamento é no crédito podemos parcelar sua compra em até 6x sem juros com parcelas de ${Math.round(valorFinal)}`)
} else if (formaPagamento === "CREDITO" && numeroDeParcelas >= 7) {
    valorFinalParcelas = valorCompra * (1 + 1)^ numeroDeParcelas
    valorParcelasJuros = valorFinalParcelas / numeroDeParcelas
    console.log(`Como a quantidade de parcelas é maior que 6 terá uma taxa de juros de 1% ficando um total de ${valorFinalParcelas} Reais com parcelas de ${valorParcelasJuros} Reais`)
}