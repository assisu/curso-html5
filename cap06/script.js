window.onload = function(){
    var url ="https://curso-html5.vercel.app/cap06/sales.json";
    var requisicao = new XMLHttpRequest();
    requisicao.open("GET", url);
    requisicao.onload = function(){
        if(requisicao.status ==200){
            atulizaVendas(requisicao.responseText);
        }
    };
    requisicao.send(null)
}
function atulizaVendas (responseText){
    var vendasDiv = document.getElementById("vendas");
    var vendas = JSON.parse(responseText);
    for(var i=0; i< vendas.length; i++){
        var venda = vendas[i];
        var div = document.createElement("div");
        div.setAttribute("class", "vendaItem");
        div.innerHTML = venda.name + " vendeu " + venda.sales + " chicletes";
        vendasDiv.appendChild(div);
    }
}