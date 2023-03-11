window.onload = init;
function init(){
    var botao = document.getElementById("botaoAdicionar");
    botao.onclick = cliqueBotao;
}


function cliqueBotao (){
    var textoInput =  document.getElementById("textoNomeMusica");
    var nomeMusica =  textoInput.value ;
    if (nomeMusica == ""){
        alert("Digite algum nome")
    }
    else{
        var li = document.createElement("li");
        var ul = document.getElementById("listaDeMusica");
        ul.appendChild(li);
        li.innerHTML = nomeMusica;
        alert("Adicionando " + nomeMusica);
    }
    
}
