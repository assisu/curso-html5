function Cachorro(nome, raca, peso){
    this.nome = nome;
    this.raca = raca;
    this.peso = peso;

    this.latir = function(){
        if(this.peso > 25){
            alert(this.nome + " disse Woof");
        }else{
            alert(this.nome + "disse Yip");
        }
    }
};

var toto = new Cachorro("Assis", "Leao", 30);
toto.latir();
