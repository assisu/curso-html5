function salvar(item){
    var arrayListaDeMusica = getStorearray("listaDeMusica");
    arrayListaDeMusica.push(item);
    localStorage.setItem("listaDeMusica", JSON.stringify(arrayListaDeMusica));
}

function carregar(){
    var arrayListaDeMusica = buscaMusicaSalva();
    var ul = document.getElementById("listaDeMusica");
    if(playl)
}