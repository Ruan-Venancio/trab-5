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

    let time = 2000;
    var images = document.querySelectorAll("#slide img");
    var max = images.length-1;
    var count = 0;
    var crescente = 1

    function next_image(){

        if(crescente == 1){
            console.log(max - count)
            console.log(count)
            images[max - count].classList.add("opacity");
            count ++;
            if(count == 3){
                crescente = 0;
            }
        }
        else{
            images[max - count  + 1].classList.remove("opacity");
            count --;
            if(count == 0){
                crescente = 1;
            }
        }
    }
    
    function start(){
        setInterval(() => {
            next_image();
        }, time);
    }
    window.addEventListener("load", start);

}

transition_imgs();