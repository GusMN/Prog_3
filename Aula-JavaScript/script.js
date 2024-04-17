/*function helloworld(){
    alert("ala o cara pegôo vírus KKKKKKKKKK!!!")
}

let botao = document.querySelector("button");

botao.addEventListener("click", helloworld)

*/

let botao = document.querySelector("button");

botao.addEventListener("click",function(e){
    
    let valor = document.querySelector('.valor').value;
    anoAtual = new Date().getFullYear();
    if ( (anoAtual - valor)>= 18) {
        document.querySelector('h1').innerHTML = "E a carteira assinada???🤔";
        document.querySelector('h1').style.color = "green";
    }
    else{
        document.querySelector('h1').innerHTML = "Vai jogar Roblox!";
        document.querySelector('h1').style.color = "red";
    }
    
})