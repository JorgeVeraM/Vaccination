


// menu

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
}
)

var buttom = document.querySelector("#menu");
buttom.addEventListener('click',() =>{
    let menu = document.querySelector(".nav")
    let header = document.querySelector("header");
    menu.style.display = "block";
    header.style.background = "rgba(255, 255, 255, .25)";
})









var boton1 = document.querySelector("#dash");

boton1.addEventListener("click" , () => {
    
    var p_1 = document.querySelector("#p-1");

    if(p_1.style.display == "block"){

        document.querySelector("#viñeta").className = "fa-solid fa-angle-down";
        p_1.style.display = "none";
        p_1.style.transition = "0.5s";
        
    }

    else{
        p_1.style.transition = "1s";
        p_1.style.display = "block";
       
        document.querySelector("#viñeta").className = "fa-solid fa-chevron-up";
    }
    


})


var boton2 = document.querySelector("#dash2");

boton2.addEventListener("click" , () => {
    
    var p_2 = document.querySelector("#p-2");

    if(p_2.style.display == "block"){

        document.querySelector("#viñeta2").className = "fa-solid fa-angle-down";
        p_2.style.display = "none"
        
    }
    else{
 
        p_2.style.display = "block"
        document.querySelector("#viñeta2").className = "fa-solid fa-chevron-up";
    }
    


})

var boton3 = document.querySelector("#dash3");

boton3.addEventListener("click" , () => {
    
    var p_3 = document.querySelector("#p-3");

    if(p_3.style.display == "block"){

        document.querySelector("#viñeta3").className = "fa-solid fa-angle-down";
        p_3.style.display = "none"
        
    }
    else{
 
        p_3.style.display = "block"
        document.querySelector("#viñeta3").className = "fa-solid fa-chevron-up";
    }
    


})

var boton1 = document.querySelector("#dash4");

boton1.addEventListener("click" , () => {
    
    var p_4 = document.querySelector("#p-4");

    if(p_4.style.display == "block"){

        document.querySelector("#viñeta4").className = "fa-solid fa-angle-down";
        p_4.style.display = "none"
        
    }
    else{
 
        p_4.style.display = "block"
        document.querySelector("#viñeta4").className = "fa-solid fa-chevron-up";
    }
    


})


var boton1 = document.querySelector("#dash5");

boton1.addEventListener("click" , () => {
    
    var p_5 = document.querySelector("#p-5");

    if(p_5.style.display == "block"){

        document.querySelector("#viñeta5").className = "fa-solid fa-angle-down";
        p_5.style.display = "none"
        
    }
    else{
 
        p_5.style.display = "block"
        document.querySelector("#viñeta5").className = "fa-solid fa-chevron-up";
    }
    


})









