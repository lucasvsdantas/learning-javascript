function calcular(){
    var tabuada = document.getElementById("itabuada");
    var tnum = document.getElementById("inum");
    var num = Number(tnum.value);
    
    tabuada.innerHTML = "";

    for(var i = 1; i<=10; i++){
        let item = document.createElement('option');
        item.text = `${num} X ${i} = ${num*i}`;
        item.value = `tab${i}`
        tabuada.appendChild(item);
    }
}