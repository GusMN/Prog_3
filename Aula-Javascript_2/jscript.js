const form = document.querySelector("form");

form.addEventListener("submit",function(e){

    e.preventDefault();

    const dadosForm = new FormData(form);
    let valor = dadosForm.get("numero")
    //let valor = document.querySelector('.valor').value;

    if(parseInt(valor )%2==0) {
        document.querySelector('h1').innerHTML = "É par";
        document.querySelector('h1').style.color = "green";
    }
    else{
        document.querySelector('h1').innerHTML = "É impar!";
        document.querySelector('h1').style.color = "red";
    }
    
})