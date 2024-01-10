var cont = document.getElementById("resultado");
var botao = document.getElementById("button");
var main = document.getElementById("main");

cont.innerHTML = "<p>Preparando a contagem...</p>";

function contar(){
    var tini = document.getElementById("iinicio");
    var tfim = document.getElementById("ifim");
    var tpasso = document.getElementById("ipasso");

    var ini = Number(tini.value);
    var fim = Number(tfim.value);
    var passo = Number(tpasso.value);

    cont.innerHTML = "<p></p>";
    if(ini == undefined || fim == undefined || passo == undefined){
        cont.innerText = `Valor indefinido`;
    }else if(passo == 0){
        cont.innerText = `Valor passo não pode ser 0`;
    }else{
        for(ini; ini<=fim; ini+=passo){
            cont.innerHTML += `${ini} &#x1F449; `;
            main.style.height = `${200+cont.offsetHeight}px`
        }
        cont.innerHTML += `&#x1F3C1;`;
    }
}