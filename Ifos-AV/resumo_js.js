
 /*  e.preventDefault(); - Não faz o comportamento default, como reiniciar d pag do btn
Math.floor(Math.random() * 3) - para gerar um número aleatório de 0 até 2
1. Math.random(): Gera um número decimal aleatório entre 0 (inclusivo) e 1
(exclusivo).
2. Math.random() * 3: Multiplica esse número por 3, resultando em um número
decimal entre 0 (inclusivo) e 3 (exclusivo).
3. Math.floor(...): Arredonda para baixo para obter um número inteiro.
O resultado final será sempre um dos seguintes inteiros: 0, 1 ou 2.

JSON.stringify -
localStorage - armazena em pares as coisas, no armazenamento do pc
// Armazenar um valor
localStorage.setItem('user', 'Alice');
// Recuperar o valor
const user = localStorage.getItem('user');
console.log(user); // Alice
// Atualizar o valor
localStorage.setItem('user', 'Bob');
const updatedUser = localStorage.getItem('user');
console.log(updatedUser); // Bob
// Remover o valor
localStorage.removeItem('user');
const removedUser = localStorage.getItem('user');
console.log(removedUser); // null
// Limpar todo o localStorage
localStorage.setItem('item1', 'value1');
localStorage.setItem('item2', 'value2');
console.log(localStorage.length); // 2
localStorage.clear();
console.log(localStorage.length); // 0
div = document.createElement("div"); - Cria uma div que pode ser adicionada
espaco.appendChild(div); - Adicionar a div criada
div.classList="escondida"; -
forEach - serve para modificações em massa
Da para usar ela para adicionar click em vários btn

A expressão palavra_adivinhar.push("*"); esta adicionando o caractere asterisco
(*) a um array chamado palavra_adivinhar. Aqui está um exemplo de como isso
poderia ser usado em JavaScript:
for(x=0; x<sorteada.length;x++){
espaco = document.querySelector(".espaço");
div = document.createElement("div");
div.classList="escondida";
div.id=x;
espaco.appendChild(div);
palavra_adivinhar.push("*");
}
Article- O Elemento HTML Article (<article>) representa uma composição
independente em um documento, página, aplicação, ou site, ou que é destinado a ser
distribuido de forma independente ou reutilizável, por exemplo, em sindicação. */