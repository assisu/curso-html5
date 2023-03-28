window.onload = buscaMinhaLocalizacao;

function buscaMinhaLocalizacao(){
    if(navigator.geolocation){
        var botaoVisao = document.getElementById("visao");
        botaoVisao.onclick = visaoLocalizacao;
        var botaoLimparVisao = document.getElementById("limparVisao");
        botaoLimparVisao.onclick = limparVisao;
    }else{
        alert("Ops, localização não suportada");
    }
}
var visaoId =null;
function visaoLocalizacao(){
    visaoId = navigator.geolocation.watchPosition(exibeLocalizacao, exibeErro, {timeout:500000});
}
function limparVisao(){
    if(visaoId){
        navigator.geolocation.clearWatch(visaoId);
        visaoId =null;
    }
}

function exibeLocalizacao(position){
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var div = document.getElementById("localizacao");
    div.innerHTML = "Latidude:" + latitude + " e " + "longitude:"+ longitude;
    div.innerHTML += "(com " + position.coords.accuracy + " metros de precisação)"; 

    var km = computeDistance(position.coords, ourCoords);
    var distancia = document.getElementById("distancia");
    distancia.innerHTML = "Você está" + km + " km de distancia de HQ";

    if(mapa == null){   
        verMapa(position.coords);
    }
    
}
function exibeErro(error){
    var tiposErros = {
        0:"Erro inderterminado",
        1:"Permissão negada",
        2:"Posição não encontrada",
        3:"Tempo de requisição acabou"
    };
    var mensagemErro = tiposErros[error.code];
    if (error.code == 0 || error.code == 2){
        mensagemErro = mensagemErro + " " + error.message;
    }
    var div = document.getElementById("localizacao");
    div.innerHTML = mensagemErro;
}

function computeDistance(startCoords, destCoords) {
    var startLatRads = degreesToRadians(startCoords.latitude);
    var startLongRads = degreesToRadians(startCoords.longitude);
    var destLatRads = degreesToRadians(destCoords.latitude);
    var destLongRads = degreesToRadians(destCoords.longitude);
    var Radius = 6371; // radius of the Earth in km
    var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) +
    Math.cos(startLatRads) * Math.cos(destLatRads) *
    Math.cos(startLongRads - destLongRads)) * Radius;
    return distance;
    }

function degreesToRadians(degrees) {
    var radians = (degrees * Math.PI)/180;
    return radians;
}
var ourCoords = {
    latitude: 47.624851,
    longitude:
    -122.52099
};


var mapa;

function verMapa(coords) {
    var googleLateLong =  new google.maps.LatLng(coords.latitude,coords.longitude);
    var mapaOpcoes = {
        zoom: 10,
        center: googleLateLong,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    var mapaDiv = document.getElementById("mapa");
    mapa = new google.maps.Map(mapaDiv, mapaOpcoes);
    var titulo = "Minha Localização";
    var conteudo = "Você está aqui:" + coords.latitude + "," + coords.longitude;

    adiconaMarcador(mapa, googleLateLong, titulo, conteudo);
}

function adiconaMarcador (mapa, latlong, titulo, conteudo){
    var marcadorOpcoes = {
        position: latlong,
        map: mapa,
        title: titulo,
        clickable: true
    };
    var marcador = new google.maps.Marker(marcadorOpcoes);
    var informacoesJanelaOpcoes = {
        content: conteudo,
        position: latlong
    };
    var infoJanela = new google.maps.InfoWindow(informacoesJanelaOpcoes);
    google.maps.event.addListener(marcador, "click", function(){
            infoJanela.open(mapa);
        }
    )
}

function atualizaVendas(responseText){
    var sa
}