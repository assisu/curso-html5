function salvar(item){
    var arrayListaDeMusica = getStorearray("listaDeMusica");
    arrayListaDeMusica.push(item);
    localStorage.setItem("listaDeMusica", JSON.stringify(arrayListaDeMusica));
}

function carregar(){
    var arrayListaDeMusica = buscaMusicaSalva();
    var ul = document.getElementById("listaDeMusica");
    if(arrayListaDeMusica != null) {
        for(var i; i < arrayListaDeMusica.length; i++){
            var li = document.createElement("li");
            li.innerHTML = arrayListaDeMusica[i];
            ul.appendChild(li);
        }
    }
}

function pegarMusicaSalva(){
    return getStorearray("listaDeMusica");
}

function pegarLista(chave){
    var arrayListaDeMusica = localStorage.getItem(chave);
    if (arrayListaDeMusica == null || arrayListaDeMusica ==""){
        arrayListaDeMusica = new Array();
    }
    else {
        arrayListaDeMusica = JSON.parse(arrayListaDeMusica);
    }
    return arrayListaDeMusica;
}