
function escribir(){
    document.write("<p>There are emotional and behavioral consequences of stress that can make it difficult to perform your daily routine. </p>")
};



window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
})






const menuPhone = document.querySelector(".menu-phone");
const menu1 = document.querySelector(".menu1");


menuPhone.addEventListener("click" , ()=> {

    menu1.classList.toggle("activado");

})