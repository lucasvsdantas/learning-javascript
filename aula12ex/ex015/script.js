var data = new Date();
var ano = data.getFullYear();
var botao = document.getElementById("botao");
var txt = document.getElementById("texto");
var img = document.getElementById("imagem");

botao.addEventListener("click", verificar)
function verificar(){
    var nasc = document.getElementById("idade");
    var m = document.getElementById("im");
    var f = document.getElementById("if");
    var a = Number(nasc.value);
    var idade = ano - a
    
    if(m.checked == true){
        if(idade >= 0 && idade <= 3){
            img.style.backgroundImage = "url('imagem/bebe-m.jpg')";
            img.style.display = "block";
            txt.innerHTML = `Você é um homem de ${idade} anos`;
        }else if(idade > 3 && idade < 13){
            img.style.backgroundImage = "url('imagem/crianca-m.jpg')";
            img.style.display = "block";
            txt.innerHTML = `Você é um homem de ${idade} anos`;
        }else if(idade >= 13 && idade < 18){
            img.style.backgroundImage = "url('imagem/ado-m.jpg')";
            img.style.display = "block";
            txt.innerHTML = `Você é um homem de ${idade} anos`;
        }else if(idade >= 18 && idade < 65){
            img.style.backgroundImage = "url('imagem/adulto-m.jpg')";
            img.style.display = "block";
            txt.innerHTML = `Você é um homem de ${idade} anos`;
        }else if(idade >= 65){
            img.style.backgroundImage = "url('imagem/idoso-m.jpg')";
            img.style.display = "block";
            txt.innerHTML = `Você é um homem de ${idade} anos`;
        }
        else{
            txt.innerHTML = `ERRO! Idade negativa`;
            img.style.display = "none";
        }
    }else if(f.checked == true){
        if(idade >= 0 && idade <= 3){
            img.style.backgroundImage = "url('imagem/bebe-f.jpg')";
            img.style.display = "block";
            txt.innerHTML = `Você é uma mulher de ${idade} anos`;
        }else if(idade > 3 && idade < 13){
            img.style.backgroundImage = "url('imagem/crianca-f.jpg')";
            img.style.display = "block";
            txt.innerHTML = `Você é uma mulher de ${idade} anos`;
        }else if(idade >= 13 && idade < 18){
            img.style.backgroundImage = "url('imagem/ado-f.jpg')";
            img.style.display = "block";
            txt.innerHTML = `Você é uma mulher de ${idade} anos`;
        }else if(idade >= 18 && idade < 65){
            img.style.backgroundImage = "url('imagem/adulto-f.jpg')";
            img.style.display = "block";
            txt.innerHTML = `Você é uma mulher de ${idade} anos`;
        }else if(idade >= 65){
            img.style.backgroundImage = "url('imagem/idoso-f.jpg')";
            img.style.display = "block";
            txt.innerHTML = `Você é uma mulher de ${idade} anos`;
        }
        else{
            txt.innerHTML = `ERRO! Idade negativa`;
            img.style.display = "none";
        }
    }else{
        txt.innerHTML = `ERRO! Gênero não escolhido`;
        img.style.display = "none";
    }
}