let nums = [];

function adicionar(){
    let caixa = document.getElementById("outadnum");
    let elemento = document.getElementById("inum");
    let numero = Number(elemento.value);

    if(numero < 1 || numero > 100 || nums.includes(numero) == true){
        alert("Numero inválido ou já existente na tabela");
        return;
    }
    caixa.innerHTML = "";
    nums.push(numero);

    for(let i = 0; i < nums.length; i++){
        let item = document.createElement('option');
        item.text = `Valor ${nums[i]} adicionado`;
        item.value = `caixa${i}`
        caixa.appendChild(item);
    }
}