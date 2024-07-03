formulario = document.querySelector('form');
formulario.addEventListener('submit',function(e) {
e.preventDefault();

var consumo = document.querySelector('#consumo').value;
var pessoas = document.querySelector('#pessoas');
//var couver =
//var taxa = 
var gorjeta = document.querySelector('#gorjeta').value;
var divisão = 0;
var final = Document.querySelector('h2');


if (consumo || pessoas || gorjeta == " " ) {
    alert("Preencha os campos obrigatórios primeiro")
}

var taxa_T = consumo / 10;

consumo = taxa_T + consumo;

var couver_T = pessoas * 10;

var divisao = consumo / pessoas;

var total = divisao + couver_T + gorjeta;

final.innerHTML = total

})