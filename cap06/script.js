window.onload = function(){
    
}
function atulizaVendas (vendas){
    var vendasDiv = document.getElementById("vendas");
    for(var i=0; i< vendas.length; i++){
        var venda = vendas[i];
        var div = document.createElement("div");
        div.setAttribute("class", "vendaItem");
        div.innerHTML = venda.name + " vendeu  " + venda.sales + " chicletes";
        vendasDiv.appendChild(div);
    }
}