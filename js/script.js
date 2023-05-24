function click_Menu(){
    var itens = document.querySelectorAll('.itens');
    var hambuguer = document.getElementById("hamburger");
    console.log(hambuguer);

    for (i = 0; i < itens.length; ++i){
        if (itens[i].style.display == "flex"){
            hambuguer.style.marginTop = "auto";
            itens[i].style.display = "none";
        }
        else{
            hambuguer.style.marginTop = "0";
            itens[i].style.display = "flex";
        }
        
    }
}

function transition_imgs(){
    let time = 2000
    var images = document.querySelectorAll("#slide img")
    console.log(images)

}

transition_imgs()