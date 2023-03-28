window.onload = function(){
    var url ="https://curso-html5.vercel.app/cap06/sales.json";
    var requisicao = new XMLHttpRequest();
    requisicao.open("GET", url);
    requisicao.onload = function(){
        if(requisicao.status ==200){
            alert(requisicao.responseText);
        }
    };
    requisicao.send(null)
}
function atulizaVendas (responseText){
    var vendasDiv = document.getElementById("vendas");
    vendasDiv.innerHTML = responseText;
}