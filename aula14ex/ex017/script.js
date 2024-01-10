var botao = document.getElementById("botao");
var tabuada = document.getElementById("tabuada");

function calcular(){
    var tnum = document.getElementById("inum");
    var num = Number(tnum.value);
    tabuada.innerHTML = ""
    for(var i = 1; i<=10; i++){
        tabuada.innerHTML += `<p>${num} X ${i} = ${num*i}</p>`
    }
}