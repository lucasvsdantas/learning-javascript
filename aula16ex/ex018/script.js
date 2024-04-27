let nums = [];

function adic(a, b){
    a.appendChild(b);
}

function somar(a){
    let resultado = 0;
    for(let i = 0; i < a.length; i++){
        resultado+=a[i];
    }
    return resultado;
}

function fazerMedia(a){
    let resultado = somar(a);
    return resultado/a.length;
}

function adicionar(){
    let divi = document.getElementById("iresultado");
    let caixa = document.getElementById("outadnum");
    let elemento = document.getElementById("inum");
    let numero = Number(elemento.value);

    divi.innerHTML = "";
    main.style.height = `${300-divi.offsetHeight}px`

    if(numero < 1 || numero > 100 || nums.includes(numero) == true){
        alert("Numero inválido ou já existente na tabela");
        return;
    }
    caixa.innerHTML = "";
    nums.push(numero);

    for(let i = 0; i < nums.length; i++){
        let item = document.createElement('option');
        item.text = `Valor ${nums[i]} adicionado`;
        item.value = `caixa${i}`;
        adic(caixa, item);
    }
}

function result(){
    let divi = document.getElementById("iresultado");
    let soma = somar(nums);
    let media = fazerMedia(nums);

    divi.innerHTML = "";

    let txt1 = document.createElement("p");
    let txt2 = document.createElement("p");
    let txt3 = document.createElement("p");
    let txt4 = document.createElement("p");
    let txt5 = document.createElement("p");

    nums.sort(function(a,b){return a - b});

    txt1.innerText = `Ao todo, temos ${nums.length} números cadastrados.`;
    txt2.innerText = `O maior valor informado foi ${nums[nums.length - 1]}.`;
    txt3.innerText = `O menor valor informado foi ${nums[0]}.`;
    txt4.innerText = `Somando todos os valores, temos ${soma}.`;
    txt5.innerText = `A média dos valores digitados é ${media}.`;

    txt1.value = "txt1";
    txt2.value = "txt2";
    txt3.value = "txt3";
    txt4.value = "txt4";
    txt5.value = "txt5";

    adic(divi, txt1);
    adic(divi, txt2);
    adic(divi, txt3);
    adic(divi, txt4);
    adic(divi, txt5);

    main.style.height = `${300+divi.offsetHeight}px`
}