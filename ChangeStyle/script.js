// Change police
const police = document.querySelector("#plSel") ;

police.addEventListener("input",function (){
    const body = document.querySelector("#text");
    const selPolice =  document.querySelector("#plSel") ;
    body.style["fontFamily"]=selPolice.value;
})

//Change Size
const size = document.querySelector("#size") ;

size.addEventListener("input",function (){
    const body = document.querySelector("#text") ;
    const sizeEcriture = document.querySelector("#size") ;
    body.style["fontSize"]=sizeEcriture.value+"pt";
})

//Change Color
const color = document.querySelector("#color") ;

color.addEventListener("input",function (){
    const body = document.querySelector("#text");
    const color =  document.querySelector("#color") ;
    body.style["color"]=color.value;
})

