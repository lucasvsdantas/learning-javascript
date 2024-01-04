var agora = new Date();
var hora = agora.getHours();
var horario = document.getElementById("texto");
var img = document.getElementById("imagem");
hora = 20;
horario.innerHTML = `Agora são ${hora} horas`;

if(hora >= 6 && hora < 12){
    img.style.backgroundImage = "url('imagem/manhã.jpg')";
    document.body.style.backgroundColor = "#21fff4";
}else if(hora >= 6 && hora < 16){
    img.style.backgroundImage = "url('imagem/tarde.jpg')";
    document.body.style.backgroundColor = "#b0fffb";
}else if(hora >= 6 && hora < 18){
    img.style.backgroundImage = "url('imagem/entardecer.jpg')";
    document.body.style.backgroundColor = "#527ffa";
}else{
    img.style.backgroundImage = "url('imagem/noite.jpg')";
    document.body.style.backgroundColor = "#0003a1";
    document.getElementById("header").style.color = "white";
    document.getElementById("footer").style.color = "white";
}

