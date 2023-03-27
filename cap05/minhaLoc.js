window.onload = buscaMinhaLocalizacao;

function buscaMinhaLocalizacao(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(exibeLocalizacao, exibeErro);
    }else{
        alert("Ops, localização não suportada")
    }

}
function exibeLocalizacao(position){
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var div = document.getElementById("localizacao");
    div.innerHTML = "Latidude:" + latitude + " e " + "longitude:"+ longitude;

    var km = computeDistance(position.coords, ourCoords);
    var distancia = document.getElementById("distancia");
    distancia.innerHTML = "Você está" + km + " km de distancia de HQ";
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
