var cores = document.querySelectorAll('input[name="cor"]');
cores.forEach(cor => cor.addEventListener('change', () => MudaCor(cor.value)));

function MudaCor(cor){
    header = document.querySelector('header');
    footer = document.querySelector('footer');
    header.style.backgroundColor = cor;
    footer.style.backgroundColor = cor;
}

formulario = document.querySelector('form');
formulario.addEventListener('submit',function(e) {
e.preventDefault();
var quantia = document.querySelector('#quantia').value;
var de = document.querySelector('#de');
var para = document.querySelector('#para');
var final = document.querySelector('h1');

if(de.value=='r'){

    if(para.value=='e'){
        var valor = quantia*0.17;
    }else if(para.value=='d'){
        var valor = quantia*0.18;
    }

}

if(de.value=='e'){

    if(para.value=='r'){
        var valor = quantia*5.82;
    }else if(para.value=='d'){
        var valor = quantia*1.07;
    }

}

if(de.value=='d'){

    if(para.value=='r'){
        var valor = quantia*5.43;
    }else if(para.value=='e'){
        var valor = quantia*0.93;
    }

}

final.innerHTML=valor

})