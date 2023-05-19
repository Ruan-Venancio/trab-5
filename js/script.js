function click_Menu(){
    var itens = document.querySelectorAll('.itens');
    var hambuguer = document.getElementById("hamburger");
    console.log(hambuguer);

    for (i = 0; i < itens.length; ++i){
        if (itens[i].style.display == "block"){
            hambuguer.style.marginTop = "auto";
            itens[i].style.display = "none";
        }
        else{
            hambuguer.style.marginTop = "0";
            itens[i].style.display = "block";
        }
        
    }
}